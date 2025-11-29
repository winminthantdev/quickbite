import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, clearCart, getCartItemsCount, totalPrice, updateCartItem, itemTotalPrice } from '@/store/cartSlice'
import { assets } from '@/assets/assets'
import { useNavigate } from 'react-router'
import PopupModal from '@/components/ui/PopupModal'
import { checkAuth } from '@/services/authService'
import { createOrder } from '@/services/api'
import toast from 'react-hot-toast'
import Login from '@/components/ui/Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const CartPage = () => {
  const [showAddress, setShowAddress] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState([])
  const [paymentOption, setPaymentOption] = useState("COD");
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [orderData, setOrderData] = useState(null)

  const products = useSelector((state) => state.cart.items);
  const totalItems = useSelector(getCartItemsCount);
  const totalPrices = useSelector(totalPrice);

  const dummyAddress = [
    {
      street: "No.123 Main Road",
      city: "Mandalay",
      state: "MDY",
      country: "Myanmar",
    },
    {
      street: "No.52 Front Street",
      city: "Yangon",
      state: "YGN",
      country: "Myanmar",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateItem = (id, qty) => {
    dispatch(updateCartItem({ _id: id, quantity: qty }))
  }

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  }

  useEffect(() => {
    setSelectedAddress(dummyAddress[0])
  }, [])

  const shipping =  3000;
  const tax = Math.round(totalPrices * 0.015);
  const grandtotal = totalPrices + shipping + tax;

  const handleOrder = async () => {

    if (checkAuth()) {

      if (products.length > 0) {

        const orderData = {
          items: products,
          address: selectedAddress,
          paymentMethod: paymentOption,
          shipping : shipping,
          tax : tax,
          grandtotal : grandtotal,
          totalAmount: totalPrices
        };

        if (paymentOption === "COD") {


          try {
            const res = await createOrder(orderData);
            console.log(res);
            if (res.success) {
              setOrderData(res.order);
              setShowModal(true);
              console.log("Saved Order:", res);
              localStorage.removeItem("order");
              dispatch(clearCart());
            } else {
              toast.error(res.message)
            }
          } catch (err) {
            toast.error("Something went wrong!");
          }

        } else {
          navigate("/my-account/payments", {state: {orderData}});
        }

      } else {
        toast.error("Your cart is empty!");
      }

    } else {
      toast.error("Please login to order");
      setShowLoginModal(true);
    }

  };

  return (
    <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 pt-20 mx-auto">
      <div className='flex-1 max-w-4xl'>
        <h1 className="text-3xl font-medium mb-6">
          Shopping Cart <span className="text-sm text-indigo-500">{totalItems} Items</span>
        </h1>

        {
          products.length === 0 && (
            <div className="w-full h-[50vh] flex justify-center items-center py-16 max-w-6xl px-6 pt-20 mx-auto">
              <div className="text-center">
                <h1 className='text-xl font-bold mb-5'>Your shopping cart is empty</h1>
                <button className="w-full cursor-pointer flex justify-center text-primary gap-2 font-medium" onClick={() => navigate("/products")}>
                  <img src={assets.arrow_right_icon_colored} alt="back-arrow" />
                  Start Shopping
                </button>
              </div>
            </div>
          )
        }

        {products.length > 0 && <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>}

        {products.map((product, index) => {
          const itemPrice = itemTotalPrice({ cart: { items: products } }, product._id);

          return (
            <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
              <div className="flex items-center md:gap-6 gap-3">
                <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                  <img className="max-w-full object-cover" src={product.image[0]} alt={product.name}
                    onClick={() => navigate(`/products/${product.category.toLowerCase()}/${product.subCategory.toLowerCase()}/${product._id}`, scrollTo(0, 0))}
                  />
                </div>
                <div>
                  <p className="hidden md:block font-semibold">{product.name}</p>
                  <div className="font-normal text-gray-500/70">
                    <p>Type: <span>{product.subCategory || "N/A"}</span></p>
                    <div className='flex items-center'>
                      <p>Qty:</p>
                      <div className="flex justify-center items-center gap-2 ms-2">
                        <FontAwesomeIcon icon={faPlus} className='text-xs' onClick={()=>handleUpdateItem(product._id, Number(product.quantity + 1))}/>
                        <span className='selectnone font-bold'>{product.quantity}</span>
                        <FontAwesomeIcon icon={faMinus} className='text-xs' onClick={()=>handleUpdateItem(product._id, Number(Math.max(0, product.quantity - 1)))}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center">${itemPrice}</p>
              <button className="cursor-pointer mx-auto" onClick={() => handleRemoveItem(product._id)}>
                <img src={assets.remove_icon} className='w-6 h-6 inline-block' alt="remove" />
              </button>
            </div>
          )
        })}

        {products.length > 0 && (
          <button className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium" onClick={() => navigate("/products")}>
            <img src={assets.arrow_right_icon_colored} alt="back-arrow" />
            Continue Shopping
          </button>
        )}
      </div>

      {products.length > 0 &&
        <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
          <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
          <hr className="border-gray-300 my-5" />

          <div className="mb-6">
            <p className="text-sm font-medium uppercase">Delivery Address</p>
            <div className="relative flex justify-between items-start mt-2">
              <p className="text-gray-500">
                {selectedAddress
                  ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                  : "No address found"
                }
              </p>
              <button onClick={() => setShowAddress(!showAddress)} className="text-indigo-500 hover:underline cursor-pointer">
                Change
              </button>
              {showAddress && (
                <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full z-10">
                  {dummyAddress.map((address, index) => (
                    <p key={index} onClick={() => { setSelectedAddress(address); setShowAddress(false) }} className="text-gray-500 p-2 hover:bg-gray-100 cursor-pointer">
                      {address.street}, {address.city}, {address.state}, {address.country}
                    </p>
                  ))}
                  <p onClick={() => navigate("/my-account/add-address")} className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10">
                    Add address
                  </p>
                </div>
              )}
            </div>
            <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

            <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none" onChange={e => setPaymentOption(e.target.value)}>
              <option value="COD">Cash On Delivery</option>
              <option value="Online">Online Payment</option>
            </select>
          </div>

          <hr className="border-gray-300" />

          <div className="text-gray-500 mt-4 space-y-2">
            <p className="flex justify-between">
              <span>Price</span><span>{totalPrices} MMK</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping Fee</span><span className="text-green-600">{shipping}</span>
            </p>
            <p className="flex justify-between">
              <span>Tax (2%)</span><span>{tax} MMK</span>
            </p>
            <p className="flex justify-between text-lg font-medium mt-3">
              <span>Total Amount:</span><span>{grandtotal} MMK</span>
            </p>
          </div>

          <button className="w-full py-3 mt-6 cursor-pointer bg-primary/90 rounded-lg text-white font-medium hover:bg-primary transition" onClick={handleOrder}>
            {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
          </button>

        </div>
      }
      {/* Show Modal when true */}
      {showModal && <PopupModal onClose={() => setShowModal(false)} orderData={orderData} />}
      {/* Show Modal when true */}
      {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
    </div>
  )
}

export default CartPage
