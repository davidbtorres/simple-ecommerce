import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import './index.css'
import { Shop } from './pages/Shop'
import { About } from './pages/About'
import { Product } from './pages/Product'
import { Navbar } from './components/Navbar'
import { useMemo, useState } from 'react'
import Cart from './components/Cart'

function App() {
  // state variables
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartProducts, setCartProducts] = useState<ProductItem[]>([])
  const cartCount = useMemo(() => {
    return cartProducts.reduce((count, product) => count + product.quantity, 0)
  }, [cartProducts])

  // cart handling
  const toggleCart = () => setIsCartOpen(!isCartOpen)

  const handleAddToCart = (newProduct: ProductItem) => {
    setCartProducts((prevProducts) =>
      prevProducts.some((p) => p.id === newProduct.id)
        ? // we have a product that is already in array (dup item) - return every other array item as normal but return dup item with incremented quantity
          prevProducts.map((p) =>
            p.id === newProduct.id ? { ...p, quantity: p.quantity + 1 } : p
          )
        : // if product is new, add to end of list with quantity of 1
          [...prevProducts, { ...newProduct, quantity: 1 }]
    )
  }

  const handleRemoveFromCart = (product: ProductItem) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((p) => p.id !== product.id)
    )
  }

  return (
    <div className="bg-gray-50">
      <Navbar onCartButtonClick={toggleCart} cartCount={cartCount} />
      {isCartOpen ? (
        <Cart
          cartProducts={cartProducts}
          onClose={toggleCart}
          onRemoveProduct={handleRemoveFromCart}
        />
      ) : null}
      <Routes>
        <Route path="/" element={<Home />}>
          {' '}
        </Route>
        <Route path="/shop" element={<Shop />}>
          {' '}
        </Route>
        <Route path="/about" element={<About />}>
          {' '}
        </Route>
        <Route
          path="/product"
          element={<Product onAddToCart={handleAddToCart} />}
        >
          {' '}
        </Route>
      </Routes>
    </div>
  )
}

export default App
