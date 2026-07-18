// A single clothing item card: image, name, rental price, and an Add to cart button.

export default function ClothingCard({ item, onAddToCart, inCart }) {
  return (
    <article className="card">
      <div className="card-image-wrap">
        <img src={item.image} alt={item.name} className="card-image" loading="lazy" />
      </div>

      <div className="card-body">
        <h3 className="card-name">{item.name}</h3>
        <p className="card-price">
          ${item.pricePerWeek}
          <span className="card-price-unit"> / week</span>
        </p>

        <button
          className={inCart ? 'card-button card-button-added' : 'card-button'}
          onClick={() => onAddToCart(item)}
          disabled={inCart}
        >
          {inCart ? 'In your cart' : 'Add to cart'}
        </button>
      </div>
    </article>
  )
}
