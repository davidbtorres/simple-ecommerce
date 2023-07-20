import Backdrop from './Backdrop'

type CartProps = {
  cartProducts: ProductItem[]
  onClose: () => void
  onRemoveProduct: (product: ProductItem) => void
}

type ProductCartCard = {
  product: ProductItem
  onRemoveProduct: (product: ProductItem) => void
}

function ProductCard({ product, onRemoveProduct }: ProductCartCard) {
  return (
    <div className="border p-4 mb-4">
      <img src={product.image} alt={product.title} className="w-32 h-32 mb-2" />
      <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
      <p className="text-gray-700 mb-1">Price: ${product.price}</p>
      <p className="text-gray-500 mb-2">{product.quantity}</p>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => onRemoveProduct(product)}
      >
        Remove
      </button>
    </div>
  )
}

function Cart({ cartProducts, onClose, onRemoveProduct }: CartProps) {
  return (
    <>
      <Backdrop onClose={onClose} />
      <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-4 z-50">
        <h1 className="text-2xl font-bold mb-2">Your Cart</h1>
        <div className="overflow-y-auto max-h-96">
          {cartProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRemoveProduct={onRemoveProduct}
            />
          ))}
        </div>
        <button
          className="bg-blue-500 text-white px-3 py-2 rounded mt-4"
          onClick={onClose}
        >
          Continue Browsing
        </button>
      </div>
    </>
  )
}

export default Cart
