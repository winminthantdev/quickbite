import React from 'react'

const PaymentPage = () => {
  return (
    <div className='container overflow-hidden mx-auto px-8 md:px-0 py-4 pt-28'>
      <div className="grid lg:grid-cols-2 px-24">
        <div className="">
          <h2>Payment</h2>
          <div className="bg-white shadow rounded">
            <div className="flex justify-between border-b">
                <h4>Credit Card Information</h4>
            </div>
            <div className="">
              <label htmlFor="nameoncard">Name on Card <span className='text-red-500'>*</span></label>
              <input type="text" name="nameoncard" id="nameoncard" placeholder='Enter your name on card' />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="min-w-60">
            <h2>Order Summary</h2>
            <div className="border-t border-gray-300">
              <div className="">
                <div className="flex justify-between">
                  <h4>Cat1</h4>
                  <span>1x</span>
                </div>
                <div className="flex justify-between">
                  <p>Item1</p>
                  <span>40000 MMK</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300">
              <div className="flex justify-between">
                  <h4>Subtotal</h4>
                  <span>40000 MMK</span>
              </div>
              <div className="flex justify-between">
                  <h4>Shipping</h4>
                  <span>40000 MMK</span>
              </div>
              <div className="flex justify-between">
                  <h4>Tax</h4>
                  <span>40000 MMK</span>
              </div>
              <div className="flex justify-between">
                  <h4>Total</h4>
                  <span>40000 MMK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
