import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Leaf, PackageCheck, SunMedium } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
  const [notice, setNotice] = useState('')
  return <>
    <section className="hero container">
      <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> LIGHT THAT FEELS LIKE HOME</div><h1>Make room for<br/><em>a softer glow.</em></h1><p>Little lamps, warm corners, and the kind of light that makes you want to stay a little longer.</p><div className="hero-actions"><Link className="button button-dark" to="/products">Find your light <ArrowRight size={17}/></Link><Link className="quiet-link" to="/about">A bit about us <ArrowUpRight size={16}/></Link></div><div className="hero-note"><span className="note-icon"><SunMedium size={20}/></span><span><b>Made for real homes</b><small>Small details. A warmer everyday.</small></span></div></div>
      <div className="hero-art"><div className="hero-art-label">THE EVENING EDIT <span>01 / 04</span></div><img src="/products/sol-photo.jpg" alt="Kyoto pleated fabric table lamp with a wooden base in warm evening light"/><div className="hero-caption"><span>01 — KYOTO PLEAT</span><b>A little glow goes a long way.</b></div><span className="hero-sticker">good light<br/>good mood</span></div>
    </section>
    <section className="promise-strip"><div><SunMedium/><span>Warm, easy lighting</span></div><div><Leaf/><span>Thoughtful materials</span></div><div><PackageCheck/><span>Packed with care</span></div></section>
    <section className="container featured-section"><div className="section-heading"><div><div className="eyebrow">A FEW FAVOURITES</div><h2>Light up your little world.</h2><p>Meet the pieces people keep coming back to.</p></div><Link className="quiet-link" to="/products">See all lights <ArrowRight size={16}/></Link></div>
      <div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} onAdded={setNotice}/>)}</div>{notice && <div className="toast" role="status">✓ {notice}<button onClick={() => setNotice('')} aria-label="Dismiss notification">×</button></div>}
    </section>
    <section className="small-story"><div className="story-mark"><SunMedium size={34}/></div><div><div className="eyebrow">A NOTE FROM LUMO</div><h2>Good lighting changes<br/>the feeling of a room.</h2></div><p>We pick lights for the corners where life actually happens: your bedside, your work desk, the little shelf you love. Nothing too precious. Just a little more lovely.</p><Link to="/about" className="round-arrow" aria-label="Read our story"><ArrowUpRight/></Link></section>
  </>
}
