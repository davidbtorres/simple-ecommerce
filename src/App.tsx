import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import './index.css';
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/store" element={<Store />}> </Route>
        <Route path="/about" element={<About />}> </Route>
      </Routes>
    </>
  )
}

export default App
