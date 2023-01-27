import Cart from './components/cart/Cart'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Products from './components/product/Products'
import { Provider } from 'react-redux'
import store from './features/store'

function App() {

  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path="*" element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Provider>
  )
}

export default App
