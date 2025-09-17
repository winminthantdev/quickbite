import React, { useState } from 'react';
import { assets } from '../assets/assets';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState(""); 

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

   const handleOrder = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/payment", {
        cardName,
        cardNumber,
        expiry,
        cvc,
        saveCard,
        cardType,
        orderSummary: {
          items: [{ name: "Item1", qty: 1, price: 40000 }],
          subtotal: 40000,
          shipping: 40000,
          tax: 40000,
          total: 120000,
        },
      });

      alert("✅ Order placed: " + res.data.message);
    } catch (error) {
      console.error(error);
      alert("❌ Payment failed!");
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
                <label htmlFor="cardName" className="block font-medium mb-1">
                  Name on Card <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cardName"
                  id="cardName"
                  placeholder="Enter your name on card"
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
                    onChange={handleCardNumberChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="flex gap-2">
                  {cardList.map((card) => (
                    <img
                      key={card.type}
                      src={card.src}
                      alt={card.type}
                      className={`w-12 h-8 p-1 rounded object-contain border-2 transition ${
                        cardType === card.type ? "border-primary" : "border-gray-300"
                      } transition-all`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="expiry" className="block font-medium mb-1">
                    Expiration Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    id="expiry"
                    placeholder="MM/YY"
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
          <div className="w-full max-w-md bg-white shadow rounded p-6">
            <h2 className="text-2xl text-black font-semibold mb-4">Order Summary</h2>
            <div className="border-t border-gray-300 pt-4 space-y-2">
              <div className="flex justify-between">
                <h4>Cat1</h4>
                <span>1x</span>
              </div>
              <div className="flex justify-between">
                <p>Item1</p>
                <span>40,000 MMK</span>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-4 space-y-2 mt-4">
              <div className="flex justify-between">
                <h4>Subtotal</h4>
                <span>40,000 MMK</span>
              </div>
              <div className="flex justify-between">
                <h4>Shipping</h4>
                <span>40,000 MMK</span>
              </div>
              <div className="flex justify-between">
                <h4>Tax</h4>
                <span>40,000 MMK</span>
              </div>
              <div className="flex justify-between text-black font-semibold text-lg">
                <h4>Total</h4>
                <span>40,000 MMK</span>
              </div>
            </div>
            <button className="w-full py-3 mt-6 cursor-pointer bg-primary/90 rounded-lg text-white font-medium hover:bg-primary transition" onClick={handleOrder}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
