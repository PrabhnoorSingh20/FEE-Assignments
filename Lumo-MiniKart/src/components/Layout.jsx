import React from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ShoppingBag, Sun } from 'lucide-react'

export default function Layout() {
  const count = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0))
  return <div className="site-shell">
    <div className="announcement">A little more warmth, every day <span>✳</span> Free delivery on orders over ₹2,500</div>
    <header className="topbar">
      <Link className="brand" to="/"><span className="brand-mark"><Sun size={21} strokeWidth={1.8}/></span><span>lumo<small>LIGHT FOR LIVING</small></span></Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink><NavLink to="/products">Shop lights</NavLink><NavLink to="/about">Our story</NavLink>
      </nav>
      <Link className="cart-link" to="/cart" aria-label={`Cart with ${count} items`}><ShoppingBag size={19}/><span>Bag</span><b>{count}</b></Link>
    </header>
    <main><Outlet /></main>
    <footer className="footer"><Link className="footer-brand" to="/"><Sun size={18}/> lumo</Link><span>Thoughtful light for everyday corners.</span><span>Made for slower evenings · © 2026 Lumo</span></footer>
  </div>
}
