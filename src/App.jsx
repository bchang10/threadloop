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
  const [selectedItem, setSelectedItem] = useState(null)

  function addToCart(item) {
    // Prevent renting the same item twice
    if (cartItems.some((cartItem) => cartItem.id === item.id)) return
    setCartItems([...cartItems, item])
  }

  function removeFromCart(id) {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  function openDetails(item) {
    setSelectedItem(item)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function closeDetails() {
    setSelectedItem(null)
  }

  if (selectedItem) {
    const isInCart = cartItems.some((cartItem) => cartItem.id === selectedItem.id)

    return (
      <div className="app">
        <Header cartCount={cartItems.length} onOpenCart={() => setIsCartOpen(true)} />

        <main className="detail-page">
          <button className="detail-back" onClick={closeDetails}>
            ← Back to collection
          </button>

          <section className="detail-hero">
            <div className="detail-gallery">
              <img
                src={selectedItem.gallery[0]}
                alt={selectedItem.name}
                className="detail-main-image"
              />
              <div className="detail-gallery-strip">
                {selectedItem.gallery.slice(1).map((image) => (
                  <img key={image} src={image} alt="" className="detail-thumb" />
                ))}
              </div>
            </div>

            <div className="detail-copy">
              <p className="detail-eyebrow">Product detail</p>
              <h1 className="detail-title">{selectedItem.name}</h1>
              <p className="detail-price">
                ${selectedItem.pricePerWeek}
                <span className="detail-price-unit"> / week</span>
              </p>
              <p className="detail-description">{selectedItem.description}</p>

              <div className="detail-section">
                <h2>Highlights</h2>
                <ul className="detail-list">
                  {selectedItem.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h2>Fit and use</h2>
                <p>{selectedItem.details}</p>
              </div>

              <div className="detail-section">
                <h2>Care</h2>
                <p>{selectedItem.care}</p>
              </div>

              <div className="detail-actions">
                <button
                  className={isInCart ? 'card-button card-button-added' : 'card-button'}
                  onClick={() => addToCart(selectedItem)}
                  disabled={isInCart}
                >
                  {isInCart ? 'In your cart' : 'Add to cart'}
                </button>
              </div>
            </div>
          </section>
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
            onOpenDetails={openDetails}
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
