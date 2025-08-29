import { Routes,Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import AllProducts from './pages/AllProducts.jsx'
import Cart from './pages/Cart.jsx'
import ProductCategory from './pages/ProductCategory.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

function App() {

  return (
    <div className='app'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/products/:category/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  )
}

export default App
