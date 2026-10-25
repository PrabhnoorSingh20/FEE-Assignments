import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../app/cartSlice'
import { formatPrice } from '../data/products'

export default function Checkout() {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [placed, setPlaced] = useState(false)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const finalTotal = total + (total >= 2500 || total === 0 ? 0 : 99)
  const placeOrder = (event) => { event.preventDefault(); dispatch(clearCart()); setPlaced(true) }
  if (placed) return <section className="container page-section checkout-page"><div className="success-panel"><CheckCircle2 size={48}/><div className="eyebrow">ORDER CONFIRMED</div><h1>Your little glow is on its way.</h1><p>This is a demo order — no payment has been taken.</p><Link to="/products" className="button button-dark">Back to shopping</Link></div></section>
  if (!items.length) return <section className="container page-section checkout-page"><div className="empty-cart"><h2>Your bag is empty.</h2><p>Add a light before checking out.</p><Link to="/products" className="button button-dark">Browse the lights</Link></div></section>
  return <section className="container page-section checkout-page"><Link to="/cart" className="back-link">← Back to your bag</Link><div className="page-intro"><div className="eyebrow">ALMOST THERE</div><h1>Checkout</h1><p>Just a few details for this demo order.</p></div><div className="checkout-layout"><form className="checkout-form" onSubmit={placeOrder}><h2>Delivery details</h2><label>Full name<input required placeholder="Your name"/></label><label>Email address<input type="email" required placeholder="you@example.com"/></label><label>Delivery address<textarea required rows="3" placeholder="House number, street, city"/></label><label>PIN code<input required inputMode="numeric" pattern="[0-9]{6}" placeholder="6-digit PIN code"/></label><button className="button button-dark checkout-button" type="submit">Place demo order <span>↗</span></button><p className="secure-note">No real payment is collected in this demo.</p></form><aside className="order-summary"><div className="eyebrow">IN YOUR BAG</div><h2>Order summary</h2>{items.map((item) => <div className="checkout-item" key={item.id}><img src={item.image} alt=""/><div><b>{item.name}</b><span>Qty {item.quantity}</span></div><strong>{formatPrice(item.price * item.quantity)}</strong></div>)}<div className="summary-line"><span>Delivery</span><b>{total >= 2500 ? 'Free' : formatPrice(99)}</b></div><div className="summary-total"><span>Total</span><b>{formatPrice(finalTotal)}</b></div></aside></div></section>
}
