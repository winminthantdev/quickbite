import React, {useState, useEffect, useMemo, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, getCartItemsCount, totalPrice, updateCartItem } from '@/store/cartSlice';
import { assets } from '@/assets/assets';
import { useNavigate } from 'react-router';
import PopupModal from '@/components/ui/PopupModal';
import { checkAuth } from '@/services/authService';
import {createOrder, fetchAddresses} from '@/services/api';
import toast from 'react-hot-toast';
import Login from '@/components/ui/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashCan, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {useQuery} from "@tanstack/react-query";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // --- State ---
  const [showAddress, setShowAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentOption, setPaymentOption] = useState("COD");
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [orderData, setOrderData] = useState(null);

  // --- Redux Data ---
  const products = useSelector((state) => state.cart.items);
  const totalItems = useSelector(getCartItemsCount);
  const totalPrices = useSelector(totalPrice);

  // --- Constants & Calculations ---
  const SHIPPING_FEE = 3000;
  const TAX_RATE = 0.015;
  const taxAmount = useMemo(() => Math.round(totalPrices * TAX_RATE), [totalPrices]);
  const grandTotal = totalPrices + SHIPPING_FEE + taxAmount;


    const { data: addresses = [], isAddressLoading } = useQuery({
        queryKey: ["user", "addresses"],
        queryFn: async () => {
            const res = await fetchAddresses();
            return res.data || [];
        },
        enabled: !!localStorage.getItem('token'),
        staleTime: 1000 * 60 * 10,
    });

  useEffect(() => {
    setSelectedAddress(addresses[0]);
  }, []);

  // --- Handlers ---
  const handleUpdateQty = (id, currentQty, delta) => {
    const newQty = currentQty + delta;
    newQty > 0
        ? dispatch(updateCartItem({ id, quantity: newQty }))
        : dispatch(removeFromCart(id));
  };

  const handleOrder = async () => {
    if (!checkAuth()) {
      setShowLoginModal(true);
      return toast.error("Please login to continue");
    }

    if (products.length === 0) return toast.error("Your cart is empty");

      const orderPayload = {
          ordertype_id: 2,
          paymenttype_id: paymentOption === "COD" ? 2 : null,
          address_id: selectedAddress?.id,
          subtotal: products.reduce((acc, item) => acc + (item.price * item.quantity), 0),
          discount: 0,
          delivery_fee: SHIPPING_FEE,
          service_fee: taxAmount,
          total: grandTotal,
          items: products.map(item => ({
              menu_id: item.id,
              quantity: item.quantity,
              unit_price: item.final_price || item.price,
              discount: item.discount || 0,
          }))
      };

      try {
          const res = await createOrder(orderPayload);

          if (res.success) {
              if (paymentOption === "COD") {
                  setOrderData(res.order);
                  setShowModal(true);
                  dispatch(clearCart());
              } else {
                  navigate("/payment", { state: { orderId: res.order.id, total: grandTotal } });
              }
          }
      } catch (error) {
          toast.error("Order failed. Please try again.");
      }
  };

  // --- Early Return: Empty State ---
  if (products.length === 0) {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center pt-20">
          <div className="bg-gray-50 p-12 rounded-full mb-6 text-6xl">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
          <p className="text-gray-500 mt-2 mb-8 text-center px-6">Explore our menu and add some delicious items to your cart!</p>
          <button
              onClick={() => navigate("/products")}
              className="bg-primary text-white px-10 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all"
          >
            Browse Products
          </button>
        </div>
    );
  }

  return (
      <div className="container mx-auto px-4 lg:px-8 py-10 pt-32 min-h-screen">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Shopping Cart <span className="text-lg font-medium text-gray-400 ml-2">({totalItems})</span>
          </h1>
          <button
              onClick={() => navigate("/products")}
              className="text-primary font-bold text-sm hover:underline flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Item List */}
          <div className="flex-1">
            <div className="hidden md:grid grid-cols-5 pb-4 border-b border-gray-100 text-[11px] font-black text-gray-400 uppercase tracking-widest">
              <div className="col-span-3">Item Details</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>

            <div className="divide-y divide-gray-50">
              {products.map((item) => (
                  <CartItemRow
                      key={item.id}
                      item={item}
                      onUpdateQty={handleUpdateQty}
                      onRemove={() => dispatch(removeFromCart(item.id))}
                      onNavigate={() => navigate(`/products/${item.id}`)}
                  />
              ))}
            </div>
          </div>

          {/* Right: Sidebar */}
          <aside className="lg:w-96">
            <OrderSummaryCard
                totalPrices={totalPrices}
                shipping={SHIPPING_FEE}
                tax={taxAmount}
                grandTotal={grandTotal}
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
                addresses={addresses}
                paymentOption={paymentOption}
                setPaymentOption={setPaymentOption}
                onOrder={handleOrder}
                showAddress={showAddress}
                setShowAddress={setShowAddress}
            />
          </aside>
        </div>

        {showModal && <PopupModal onClose={() => setShowModal(false)} orderData={orderData} />}
        {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
      </div>
  );
};

// --- Sub-Components ---

const CartItemRow = ({ item, onUpdateQty, onRemove, onNavigate }) => (
    <div className="flex flex-col md:grid md:grid-cols-5 gap-6 py-8 group transition-all">
      <div className="col-span-3 flex items-center gap-5">
        <div
            onClick={onNavigate}
            className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden cursor-pointer border border-gray-100 shrink-0"
        >
          <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.images?.[0] || item.image?.[0]} alt={item.name} />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-gray-800 text-lg leading-tight">{item.name}</h3>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
            {item.category?.name || "General"}
          </p>
          <button onClick={onRemove} className="text-red-400 text-[11px] font-bold uppercase tracking-tighter hover:text-red-600 transition-colors flex items-center gap-1 mt-2">
            <FontAwesomeIcon icon={faTrashCan} /> Remove Item
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-xl border border-gray-100">
          <button onClick={() => onUpdateQty(item.id, item.quantity, -1)} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg text-gray-400 hover:text-gray-900 transition-all">
            <FontAwesomeIcon icon={faMinus} size="xs" />
          </button>
          <span className="font-bold text-gray-900 min-w-5 text-center">{item.quantity}</span>
          <button onClick={() => onUpdateQty(item.id, item.quantity, 1)} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg text-gray-400 hover:text-gray-900 transition-all">
            <FontAwesomeIcon icon={faPlus} size="xs" />
          </button>
        </div>
      </div>

      <div className="flex md:flex-col justify-between md:justify-center items-center md:items-end font-black text-gray-900 text-lg">
        <span className="md:hidden text-xs text-gray-400 font-bold uppercase">Subtotal</span>
        {(item.price * item.quantity).toLocaleString()} <span className="text-xs ml-1">MMK</span>
      </div>
    </div>
);

const OrderSummaryCard = ({
                            totalPrices, shipping, tax, grandTotal,
                            selectedAddress, setSelectedAddress, addresses,
                            paymentOption, setPaymentOption, onOrder,
                            showAddress, setShowAddress
                          }) => (
    <div className="bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-[2.5rem] p-8 sticky top-32">
      <h2 className="text-xl font-black text-gray-900 mb-8">Summary</h2>

      <div className="space-y-6 mb-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Shipping Address</label>
          <div className="relative">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 group">
              <p className="text-xs text-gray-600 font-medium truncate pr-4">
                {selectedAddress ? `${selectedAddress.street}, ${selectedAddress.city}` : "Select Address"}
              </p>
              <button onClick={() => setShowAddress(!showAddress)} className="text-primary text-xs font-black uppercase">Edit</button>
            </div>

            {showAddress && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden">
                  {addresses.map((addr, i) => (
                      <button
                          key={i}
                          className="w-full p-4 text-left text-xs text-gray-600 hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors"
                          onClick={() => { setSelectedAddress(addr); setShowAddress(false); }}
                      >
                        {addr.street}, {addr.city}
                      </button>
                  ))}
                </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Payment Method</label>
          <select
              className="w-full bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs font-bold text-gray-700 appearance-none outline-none focus:border-primary"
              value={paymentOption}
              onChange={e => setPaymentOption(e.target.value)}
          >
            <option value="COD">Cash on Delivery</option>
            <option value="Online">Online Banking</option>
          </select>
        </div>
      </div>

      <div className="space-y-4 py-8 border-y border-gray-50">
        <div className="flex justify-between text-xs font-bold text-gray-500">
          <span>Order Subtotal</span>
          <span>{totalPrices.toLocaleString()} MMK</span>
        </div>
        <div className="flex justify-between text-xs font-bold text-gray-500">
          <span>Estimated Delivery</span>
          <span className="text-green-600">+{shipping.toLocaleString()} MMK</span>
        </div>
        <div className="flex justify-between text-xs font-bold text-gray-500">
          <span>Taxes (1.5%)</span>
          <span>{tax.toLocaleString()} MMK</span>
        </div>
      </div>

      <div className="flex justify-between items-center py-8">
        <span className="text-sm font-black text-gray-900 uppercase">Grand Total</span>
        <span className="text-3xl font-black text-primary tracking-tighter">{grandTotal.toLocaleString()} <span className="text-xs">MMK</span></span>
      </div>

      <button
          onClick={onOrder}
          className="w-full py-5 bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all active:scale-95"
      >
        {paymentOption === "COD" ? "Place Your Order" : "Proceed to Payment"}
      </button>
    </div>
);

export default CartPage;