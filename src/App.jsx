import { useState } from 'react'
import Header from './components/Header.jsx'
import ClothingCard from './components/ClothingCard.jsx'
import Cart from './components/Cart.jsx'
import { clothingItems } from './data/clothingItems.js'

export default function App() {
  // The cart is an array of clothing items. Cart state lives here at the top
  // so both the grid (adding) and the cart panel (removing) can use it.
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  function addToCart(item) {
    // Prevent renting the same item twice
    if (cartItems.some((cartItem) => cartItem.id === item.id)) return
    setCartItems([...cartItems, item])
  }

  function removeFromCart(id) {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div className="app">
      <Header cartCount={cartItems.length} onOpenCart={() => setIsCartOpen(true)} />

      <section className="hero">
        <p className="hero-eyebrow">Weekly clothing rental</p>
        <h1 className="hero-title">Wear it well. Send it back.</h1>
        <p className="hero-subtitle">
          Rent quality pieces by the week — delivered to your door, returned when
          you're done. No closet clutter, no commitment.
        </p>
      </section>

      <main className="grid">
        {clothingItems.map((item) => (
          <ClothingCard
            key={item.id}
            item={item}
            onAddToCart={addToCart}
            inCart={cartItems.some((cartItem) => cartItem.id === item.id)}
          />
        ))}
      </main>

      <Cart
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
      />

      <footer className="footer">Threadloop · rent well, return happy</footer>
    </div>
  )
}
