// Top bar: brand name on the left, cart button (with item count) on the right.

export default function Header({ cartCount, onOpenCart }) {
  return (
    <header className="header">
      <span className="header-logo">Threadloop</span>

      <button className="header-cart" onClick={onOpenCart}>
        Cart
        {cartCount > 0 && <span className="header-cart-count">{cartCount}</span>}
      </button>
    </header>
  )
}
