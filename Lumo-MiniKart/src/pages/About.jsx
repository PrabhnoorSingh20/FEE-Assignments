import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Leaf, SunMedium } from 'lucide-react'

export default function About() {
  return <section className="container page-section about-page"><div className="about-hero"><div><div className="eyebrow">A SMALL NOTE ABOUT US</div><h1>We think good light<br/>makes room for <em>good things.</em></h1><p>Lumo started with a simple thought: the right light can make an ordinary Tuesday feel a little more like home.</p><Link className="button button-dark" to="/products">Meet the collection <ArrowRight size={17}/></Link></div><img src="/products/sol-photo.jpg" alt="Warm pleated cream lampshade on a wooden base, styled on a bedside table"/></div>
    <div className="about-values"><article><span><SunMedium/></span><h2>Comfort comes first.</h2><p>We look for warm, useful light that makes a room feel welcoming instead of showroom-perfect.</p></article><article><span><Leaf/></span><h2>Keep it considered.</h2><p>Simple shapes, honest materials, and products that make sense in real homes and small spaces.</p></article><article><span><Heart/></span><h2>Little things matter.</h2><p>A bedside glow, a focused desk lamp, a quiet corner. Everyday details deserve a little thought.</p></article></div>
    <div className="about-note"><span>✳</span><p>Lumo is a student-built demo store made to explore product browsing, routing, and cart state with React and Redux Toolkit. Product prices and checkout are for demonstration only.</p></div>
  </section>
}
