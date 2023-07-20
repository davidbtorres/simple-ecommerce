import { useLocation } from 'react-router-dom'
import CurrencyFormatUS from '../utilities/CurrencyFormat'

type ProductPageProps = {
  onAddToCart: (product: ProductItem) => void
}

export function Product({ onAddToCart }: ProductPageProps) {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const productData = queryParams.get('data')
  const product = productData
    ? JSON.parse(decodeURIComponent(productData))
    : null

  const handleAddToCart = () => {
    if (product) {
      onAddToCart(product)
    }
  }

  return (
    <div className="flex m-8">
      {product ? (
        <>
          <div className="w-3/4">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-bold">{product.title}</h1>
            <p>{product.description}</p>
            <p className="mt-3 mb-3 text-xl font-bold">
              <CurrencyFormatUS value={product.price} />
            </p>
            <button
              className="m-2 bg-white rounded-lg px-4 py-2 border border-slate-500 text-slate-900 hover:border-2 hover:shadow-lg active:bg-slate-400 active:text-white"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
