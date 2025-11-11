import React from 'react'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const PopupModal = ({onClose,orderData}) => {

  const navigate = useNavigate();

  return (
    <div className='w-full h-screen absolute top-0 left-0 bg-black/10 flex justify-center items-center z-999'>
      <div className="w-[300px] md:w-[350px] relative flex flex-col items-center space-y-4 bg-white rounded-xl shadow-lg p-6">
        <button type="button" className="absolute top-4 right-4 text-gray-500 hover:text-red-500 cursor-pointer transition" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
        <video src={assets.success_gif} alt="" className="w-24" autoPlay muted loop={false} />
        <div className="text-center">
            <h2 className='font-bold text-lg'>Payment Success!</h2>
            <p className='text-primary font-bold'>{orderData.totalAmount} MMK</p>
        </div>
        <div className="w-full flex flex-col space-y-2 text-sm md:text-md border-t border-gray-400/30 pt-4 mt-4">
            <div className="flex justify-between text-gray-500">
                <p>Order ID</p>
                <p>{orderData.orderId}</p>
            </div>
            <div className="flex justify-between text-gray-500">
                <p>Payment Method</p>
                <p>{orderData.paymentMethod}</p>
            </div>
            <div className="flex justify-between text-gray-500">
                <p>Address : </p>
                <p>{orderData.address.street}, {orderData.address.city}</p>
            </div>
            {orderData.paymentMethod !== "COD" ? 
            (<div className="flex justify-between text-gray-500">
                <p>Payment Time</p>
                <p>{orderData.paymentTime}</p>
            </div>) :
            (<></>)
            }
        </div>
        <div className="w-full my-4">
            <button type="button" className="w-full bg-primary rounded-lg text-white font-bold cursor-pointer py-2" onClick={()=>{navigate('/products'), onClose}}>New Order</button>
        </div>
      </div>
    </div>
  )
}

export default PopupModal
