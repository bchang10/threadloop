// Slide-out cart panel. Lists rented items, shows the weekly total,
// and has a Check out button (a stub for now — hook up payments here later).

export default function Cart({ isOpen, items, onClose, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.pricePerWeek, 0)

  return (
    <>
      {/* Dimmed backdrop — clicking it closes the cart */}
      {isOpen && <div className="cart-backdrop" onClick={onClose} />}

      <aside className={isOpen ? 'cart cart-open' : 'cart'} aria-hidden={!isOpen}>
        <div className="cart-header">
          <h2 className="cart-title">Your rental</h2>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">
            &times;
          </button>
        </div>

        {items.length === 0 ? (
          <p className="cart-empty">
            Your cart is empty. Add a piece from the collection to get started.
          </p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt="" className="cart-item-image" />
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">${item.pricePerWeek} / week</span>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Weekly total</span>
                <span>${total}</span>
              </div>
              <button
                className="cart-checkout"
                onClick={() => alert('Checkout coming soon — connect a payment provider here.')}
              >
                Check out
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
