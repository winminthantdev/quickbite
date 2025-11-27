import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import toast from 'react-hot-toast';
import { checkAuth } from '../../../services/authService';
import { useLocation } from 'react-router';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [form, setForm] = useState({
    fullname: "",
    cardNumber: "",
    expDate: "",
    cvc: "",
  });


  const location = useLocation();
  const [formCompleted, setFormCompleted] = useState(false)

  const orderDatas = location.state.orderData;
  const { totalAmount, shipping, tax, grandtotal } = orderDatas;
  const products = orderDatas.items;


  const cardList = [
    { type: "visa", src: assets.visa_card },
    { type: "mastercard", src: assets.master_card },
    { type: "mpu", src: assets.mpu_card },
  ];

  const detectCardType = (number) => {
    const trimmed = number.replace(/\s+/g, "");

    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(trimmed)) return "visa";
    if (/^5[1-5][0-9]{14}$/.test(trimmed)) return "mastercard";
    if (/^92[0-9]{0,}$/.test(trimmed)) return "mpu";
    return "";
  };


  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    setCardNumber(value);
    setCardType(detectCardType(value));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    const updated = { ...form, [name]: value };
    setForm(updated);

    const isCompleted =
      updated.fullname.trim() !== "" &&
      updated.cardNumber.trim() !== "" &&
      updated.expDate.trim() !== "" &&
      updated.cvc.trim() !== "";

    setFormCompleted(isCompleted);
  };

  const validatePayment = () => {
    const { fullname, cardNumber, expDate, cvc } = form;

    // Name
    if (fullname.trim().length < 3) return "Invalid cardholder name";

    // Card number (16 digits)
    const num = cardNumber.replace(/\D/g, "");
    if (num.length !== 16) return "Invalid card number";

    // Expiration (MM/YY)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expDate)) {
      return "Invalid expiration date";
    }

    // Expiration not passed
    const [mm, yy] = expDate.split("/").map(Number);
    const current = new Date();
    const exp = new Date(2000 + yy, mm - 1);

    if (exp < current) return "Card expired";

    // CVC (3 digits)
    if (!/^\d{3}$/.test(cvc)) return "Invalid CVC";

    return null; // all good
  };


  const handleOrder = async () => {
    if (!checkAuth()) {
      toast.error("Please login to order");
      navigate("/login");
      return;
    }

    const error = validatePayment();
    if (error) {
      toast.error(error);
      return;
    }
    toast.loading("Processing payment...");
    try {

      const pay = await simulatePayment();
      if (!pay.success) {
        toast.dismiss();
        toast.error("Payment failed!");
        return;
      }


      const res = await createOrder(orderDatas);

      toast.dismiss();

      if (res.success) {
        toast.success("Order placed successfully!");
        localStorage.removeItem("order");
        dispatch(clearCart());
        navigate("/my-account/orders");
      } else {
        toast.error(res.message);
      }

    } catch (err) {
      toast.dismiss();
      toast.error("Something went wrong. Try again!");
    }
  };


  return (
    <div className="container text-gray-500 mx-auto px-4 md:px-0 py-4 pt-28">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Payment Form */}
        <div>
          <h2 className="text-2xl text-black font-semibold mb-4">Payment</h2>
          <div className="bg-white shadow rounded p-6 space-y-4">
            {/* Credit Card Info */}
            <div>
              <h3 className="text-lg text-black font-medium border-b pb-2 mb-4">Credit Card Information</h3>

              <div className="mb-4">
                <label htmlFor="fullname" className="block font-medium mb-1">
                  Name on Card <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter your name on card"
                  onChange={handleInput}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="flex items-end gap-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="cardNumber" className="block font-medium mb-1">
                    Card Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    value={cardNumber}
                    onChange={(e) => {
                      handleCardNumberChange(e);
                      handleInput(e);
                    }}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="flex gap-2">
                  {cardList.map((card) => (
                    <img
                      key={card.type}
                      src={card.src}
                      alt={card.type}
                      className={`w-12 h-8 p-1 rounded object-contain border-2 transition ${cardType === card.type ? "border-primary" : "border-gray-300"
                        } transition-all`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="expDate" className="block font-medium mb-1">
                    Expiration Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="expDate"
                    id="expDate"
                    placeholder="MM/YY"
                    onChange={handleInput}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="cvc" className="block font-medium mb-1">
                    CVC <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    placeholder="123"
                    onChange={handleInput}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 mb-4">
                <input type="checkbox" name="saveCard" id="saveCard" className="mt-1" />
                <label htmlFor="saveCard" className='text-sm text-black'>
                  Save credit card information for the next time.
                </label>
              </div>

              {/* Billing Address */}
              <div>
                <p className="font-medium text-black mb-2">Billing Address</p>
                <div className="flex items-start gap-2">
                  <input type="checkbox" name="useUserAddress" id="useUserAddress" className="mt-1" />
                  <label htmlFor="useUserAddress">Use my saved address</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex justify-end">
          <div className="w-full bg-white shadow rounded p-6">
            <h2 className="text-2xl text-black font-semibold mb-4">Order Summary</h2>
            <div className="border-t border-gray-300 pt-4 space-y-2">
              <div className="flex justify-between">
                <h4>Cart</h4>
                <span>{products.reduce((totalItems, p) => totalItems + p.quantity, 0)} Items</span>
              </div>
              <div className="border-t border-gray-300 pt-8">
                {products.map((product) => (
                  <div className="flex justify-between">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                    <span>{product.price * product.quantity} MMK</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4 space-y-2 mt-4">
              <div className="flex justify-between">
                <h4>Subtotal</h4>
                <span>{totalAmount} MMK</span>
              </div>
              <div className="flex justify-between">
                <h4>Shipping</h4>
                <span>{shipping} MMK</span>
              </div>
              <div className="flex justify-between">
                <h4>Tax</h4>
                <span>{tax} MMK</span>
              </div>
              <div className="flex justify-between text-black font-semibold text-lg">
                <h4>Total</h4>
                <span>{grandtotal} MMK</span>
              </div>
            </div>

            <button className={`w-full py-3 mt-6 rounded-lg text-white font-medium transition ${formCompleted ? 'bg-primary/90 hover:bg-primary cursor-pointer' : 'bg-gray-300/90 cursor-not-allowed'} `} disabled={!formCompleted} onClick={handleOrder}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
