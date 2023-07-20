import { Link } from 'react-router-dom'

type NavbarProps = {
  onCartButtonClick: () => void
  cartCount: number
}

export function Navbar({ onCartButtonClick, cartCount }: NavbarProps) {
  return (
    <nav className="bg-white p-4 sticky shadow">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-slate-800 font-bold text-lg">SHELF</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-slate-800 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-slate-800 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-slate-800 hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <div className="text-slate-800">
                <button onClick={onCartButtonClick}>Cart({cartCount})</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
