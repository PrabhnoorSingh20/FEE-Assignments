import React from 'react'
import { useDispatch } from 'react-redux'
import { Plus } from 'lucide-react'
import { addToCart } from '../app/cartSlice'
import { formatPrice } from '../data/products'

export default function ProductCard({ product, onAdded }) {
  const dispatch = useDispatch()
  const add = () => { dispatch(addToCart(product)); onAdded(`${product.name} added to your bag`) }
  return <article className="product-card">
    <div className="product-image-wrap">
      {product.tag && <span className="product-tag">{product.tag}</span>}
      <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
      <button className="quick-add" onClick={add} aria-label={`Add ${product.name} to cart`}><Plus size={19}/></button>
    </div>
    <div className="product-info"><div className="product-category">{product.category}</div><h3>{product.name}</h3><p>{product.description}</p><div className="product-bottom"><strong>{formatPrice(product.price)}</strong><button className="text-add" onClick={add}>Add to bag <span>↗</span></button></div></div>
  </article>
}
