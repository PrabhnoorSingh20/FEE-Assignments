import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() { return <section className="container page-section not-found"><div className="eyebrow">404 · WRONG CORNER</div><h1>Looks like this page<br/><em>is switched off.</em></h1><p>We couldn’t find the page you were looking for.</p><Link to="/" className="button button-dark">Back home ↗</Link></section> }
