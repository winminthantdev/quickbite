import { Routes,Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import AllProducts from './pages/AllProducts.jsx'
import ProductCategory from './pages/ProductCategory.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Footer from './components/Footer.jsx'
import CartPage from './pages/CartPage.jsx'
import AddAddress from './pages/AddAddress.jsx'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Toaster position='top-center'/>
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<AllProducts />} />
            <Route path='/products/:category' element={<ProductCategory />} />
            <Route path='/products/:category/:subcategory' element={<ProductCategory />} />
            <Route path='/products/:category/:subcategory/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/add-address' element={<AddAddress />} />
          </Routes>
        </div>
      <Footer />
    </div>
  )
}

export default App
