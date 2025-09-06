import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { dummyOrders } from '../assets/assets';
import { useNavigate } from 'react-router';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const navigate = useNavigate();

  const fetchMyOrders = async() =>{
    setMyOrders(dummyOrders);
  };

  useEffect(()=>{
    fetchMyOrders()
  },[])

  return (
    <div className='container mx-auto mt-20 pb-20'>
      <Title title="My Orders" />
      {myOrders.map((order, index)=>(
        <div key={index} className='border border-gray-300 rounded-lg mb-10 p-4 max-w-4xl'>
          <p className='flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col'>
            <span>OrderId : {order._id}</span>
            <span>OrderId : {order.paymentType}</span>
            <span>OrderId : {order.amount}</span>
          </p>
          {order.items.map((item, index)=>(
            <div key={index} className={`w-full max-w-4xl relative bg-white text-gray-500/70 ${order.items.length !== index + 1 && "border-b"} border-gray-300 flex flex-col md:flex-row md:items-center justify-between md:gap-16 p-4 py-5`}>

              <div className='flex items-center mb-4 md:mb-0'>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <img src={item.product.image[0]} alt="" className="w-16 h-16 cursor-pointer" onClick={() => navigate(`/products/${item.product.category.toLowerCase()}/${item.product.subCategory.toLowerCase()}/${item.product._id}`, scrollTo(0,0))} />
                </div>
                <div className='ml-4'>
                  <h2 className='text-xl font-medium text-gray-800'>{item.product.name}</h2>
                  <p>Category: {item.product.subCategory}</p>
                </div>
              </div>

              <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
                <p>Quantity: {item.quantity || "1"}</p>
                <p>Status: {order.status}</p>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>

              <p className="text-primary text-lg font-medium">
                Amount: {(item.product.price - (item.product.price * item.product.promotion?.discountPercent / 100)) * item.quantity} Ks
              </p>

            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MyOrders
