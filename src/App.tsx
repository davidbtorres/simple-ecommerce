import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import './index.css';
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import { Navbar } from "./components/Navbar";

function App() {

  return (
    <div className="bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/shop" element={<Shop />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/product" element={<Product />}> </Route>
      </Routes>
    </div>
  )
}

export default App
