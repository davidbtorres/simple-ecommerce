import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import './index.css';
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/shop" element={<Shop />}> </Route>
        <Route path="/about" element={<About />}> </Route>
      </Routes>
    </>
  )
}

export default App
