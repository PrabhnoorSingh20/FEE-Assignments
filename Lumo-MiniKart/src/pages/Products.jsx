import React, { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All lights')
  const [notice, setNotice] = useState('')
  const categories = ['All lights', ...new Set(products.map((product) => product.category))]
  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'All lights' || product.category === category
    const matchesSearch = `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  }), [category, search])
  return <section className="container page-section">
    <div className="page-intro"><div className="eyebrow">THE LUMO SHELF</div><h1>Find your kind of light.</h1><p>From focused desk lights to sleepy-time glows, there is a little something for every corner.</p></div>
    <div className="shop-toolbar"><label className="search-box"><Search size={18}/><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try ‘moon’ or ‘desk’" aria-label="Search products"/></label><div className="filter-label"><SlidersHorizontal size={16}/> Filter by</div><div className="category-tabs" aria-label="Product categories">{categories.map((item) => <button key={item} className={category === item ? 'category-tab active' : 'category-tab'} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
    <div className="results-line">Showing <b>{visibleProducts.length}</b> of {products.length} lights <span>·</span> picked for everyday spaces</div>
    {visibleProducts.length ? <div className="product-grid shop-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAdded={setNotice}/>)}</div> : <div className="empty-results"><span>☼</span><h2>No lights found just yet.</h2><p>Try a different search or choose another category.</p><button className="button button-outline" onClick={() => { setSearch(''); setCategory('All lights') }}>Clear filters</button></div>}
    {notice && <div className="toast" role="status">✓ {notice}<button onClick={() => setNotice('')} aria-label="Dismiss notification">×</button></div>}
  </section>
}
