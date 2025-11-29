// import { Routes,Route, Navigate } from 'react-router'
// import './App.css'
// import Navbar from './components/Navbar.jsx'
// import Home from './pages/Home.jsx'
// import AllProducts from './pages/AllProducts.jsx'
// import ProductCategory from './pages/ProductCategory.jsx'
// import ProductDetails from './pages/ProductDetails.jsx'
// import Footer from './components/Footer.jsx'
// import CartPage from './pages/CartPage.jsx'
// import AddAddress from './pages/AddAddress.jsx'
// import { Toaster } from 'react-hot-toast'
// import MyOrders from './pages/MyOrders.jsx'
// import PaymentPage from './pages/PaymentPage.jsx'
// import { checkAuth } from './services/api.js'

// function App() {

//   const PrivateRoute = ({ element }) => {
//     return checkAuth() ? element : <Navigate to="/" />;
//   };
//   return (
//     <div className='flex flex-col min-h-screen'>
//       <Navbar />
//       <Toaster position='top-center'/>
//         <div className="flex-grow">
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/products' element={<AllProducts />} />
//             <Route path='/products/:category' element={<ProductCategory />} />
//             <Route path='/products/:category/:subcategory' element={<ProductCategory />} />
//             <Route path='/products/:category/:subcategory/:id' element={<ProductDetails />} />
//             <Route path='/cart' element={<CartPage />} />

//             <Route path="/my-account/add-address" element={<PrivateRoute element={<AddAddress />} />} />
//             <Route path="/my-account/orders" element={<PrivateRoute element={<MyOrders />} />} />
//             <Route path="/my-account/payments" element={<PrivateRoute element={<PaymentPage />} />} />

//           </Routes>
//         </div>
//       <Footer />
//     </div>
//   )
// }

// export default App

