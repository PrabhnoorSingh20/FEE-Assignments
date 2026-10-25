import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../app/cartSlice'
import { formatPrice } from '../data/products'

export default function Cart() {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  return <section className="container page-section cart-page">
    <Link className="back-link" to="/products"><ArrowLeft size={16}/> Back to the shelf</Link>
    <div className="page-intro cart-intro"><div className="eyebrow">YOUR LITTLE COLLECTION</div><h1>Your bag<span className="heading-count">({totalItems})</span></h1><p>Good choices. Let’s make sure you’ve got everything.</p></div>
    {!items.length ? <div className="empty-cart"><div className="empty-cart-icon"><ShoppingBag size={30}/></div><h2>Your bag is taking a little nap.</h2><p>There’s nothing in here yet. Find a light that feels like you.</p><Link to="/products" className="button button-dark">Browse the lights <span>↗</span></Link></div> : <div className="cart-layout"><div className="cart-items"><div className="cart-table-head"><span>PRODUCT</span><span>QUANTITY</span><span>TOTAL</span></div>{items.map((item) => <article className="cart-row" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-product"><span>{item.category}</span><h3>{item.name}</h3><p>{formatPrice(item.price)} each</p><button className="remove-link" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={14}/> Remove</button></div><div className="quantity-control"><button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label={`Decrease ${item.name} quantity`}><Minus size={14}/></button><span>{item.quantity}</span><button onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase ${item.name} quantity`}><Plus size={14}/></button></div><strong className="line-total">{formatPrice(item.price * item.quantity)}</strong></article>)}<button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear bag</button></div>
      <aside className="order-summary"><div className="eyebrow">THE TOTALS</div><h2>Order summary</h2><div className="summary-line"><span>Subtotal ({totalItems} items)</span><b>{formatPrice(subtotal)}</b></div><div className="summary-line"><span>Delivery</span><b>{subtotal >= 2500 ? 'Free' : formatPrice(99)}</b></div><p className="delivery-note">{subtotal >= 2500 ? 'Lovely — delivery is on us.' : `Add ${formatPrice(2500 - subtotal)} more for free delivery.`}</p><div className="summary-total"><span>Total</span><b>{formatPrice(subtotal + (subtotal >= 2500 ? 0 : 99))}</b></div><button className="button button-dark checkout-button" onClick={() => navigate('/checkout')}>Continue to checkout <span>↗</span></button><p className="secure-note">A demo checkout for this student project.</p></aside></div>}
  </section>
}
