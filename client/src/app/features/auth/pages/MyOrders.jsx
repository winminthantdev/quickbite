import React, { useEffect, useState } from 'react'
import Title from '@/components/ui/Title'
import { useNavigate } from 'react-router';
import { fetchProductsById, fetchUserOrders } from '@/services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { assets } from '@/assets/assets';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMyOrders = async () => {
      setLoading(true);
      try {
        const userOrders = await fetchUserOrders();
        setMyOrders(userOrders);
        setLoading(false); 
      } catch (err) {
        setLoading(false);
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyOrders();
  }, []);

  return (
    <div className='container mx-auto mt-20 pb-20'>
      <Title title="My Orders" />
      {loading ? (
        <p><FontAwesomeIcon spin icon={faSpinner} /> Getting orders...</p>
      ) : (
        
          myOrders.length > 0 ? 
          (myOrders.map((order, index) => (
          <div key={index} className='border border-gray-300 rounded-lg mb-10 p-4 max-w-4xl'>
            <p className='flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col'>
              <span>OrderId: {order.orderId || order._id}</span>
              <span>Payment: {order.paymentMethod}</span>
              <span>Total: {order.totalAmount} Ks</span>
            </p>

            {order.items.map((item, idx) => (
              <div 
                key={idx} 
                className={`w-full max-w-4xl relative bg-white text-gray-500/70 
                  ${order.items.length !== idx + 1 && "border-b"} 
                  border-gray-300 flex flex-col md:flex-row md:items-center justify-between md:gap-16 p-4 py-5`}
              >
                <div className='flex items-center mb-4 md:mb-0'>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    {item && item.image?.length > 0 ? (
                      <img
                        src={item.image[0]}
                        alt={item.name}
                        className="w-16 h-16 cursor-pointer"
                        onClick={() => {
                          navigate(
                            `/products/${item.category.toLowerCase()}/${item.subCategory.toLowerCase()}/${item._id}`
                          );
                          window.scrollTo(0, 0);
                        }}
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-sm">
                        No Img
                      </div>
                    )}
                  </div>
                  <div className='ml-4'>
                    <h2 className='text-xl font-medium text-gray-800'>{item?.name || "Unknown Product"}</h2>
                    <p>Category: {item?.subCategory || "N/A"}</p>
                  </div>
                </div>

                <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
                  <p>Quantity: {item.quantity || 1}</p>
                  <p>Status: {order.status}</p>
                  <p>Date: {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A"}</p>
                </div>

                <p className="text-primary text-lg font-medium">
                  Amount:{" "}
                  {item
                    ? ((item.price - (item.price * (item.promotion?.discountPercent || 0) / 100)) * item.quantity).toLocaleString()
                    : item.price * item.quantity
                  }{" "}
                  Ks
                </p>
              </div>
            ))}
          </div>
          ))):
          (
            <div className="w-full h-[50vh] flex justify-center items-center py-16 max-w-6xl px-6 pt-20 mx-auto">
              <div className="text-center">
                <h1 className='text-xl font-bold mb-5'>Your don't have any order</h1>
                <button className="w-full cursor-pointer flex justify-center text-primary gap-2 font-medium" onClick={() => navigate("/products")}>
                  <img src={assets.arrow_right_icon_colored} alt="back-arrow" />
                  Start Shopping
                </button>
            </div>
          </div>
          )

      )}
    </div>
  )
}

export default MyOrders
