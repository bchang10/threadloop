// A single clothing item card with a click target for the detail view and an Add to cart button.

export default function ClothingCard({ item, onAddToCart, inCart, onOpenDetails }) {
  return (
    <article
      className="card card-clickable"
      role="button"
      tabIndex={0}
      onClick={() => onOpenDetails(item)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpenDetails(item)
        }
      }}
    >
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
          onClick={(event) => {
            event.stopPropagation()
            onAddToCart(item)
          }}
          disabled={inCart}
        >
          {inCart ? 'In your cart' : 'Add to cart'}
        </button>
      </div>
    </article>
  )
}
