# Lumo — Light for Living

A mini e-commerce project built with React, React Router DOM, Redux Toolkit, and Vite. Lumo is a small ambient-lighting shop with a warm, understated design and original locally included SVG product artwork.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run:

   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite, usually `http://localhost:5173`.

To check a production build, run `npm run build`.

## Pages

- `/` — Home and featured products
- `/products` — Eight products, search, and category filters
- `/cart` — Quantity controls, remove item, clear bag, totals, and delivery calculation
- `/about` — Store story and project note
- `/checkout` — Demo checkout and order summary
- Unknown paths — Custom 404 page

## Redux Toolkit requirements

`src/app/cartSlice.js` contains `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, and `clearCart`. `src/app/store.js` uses `configureStore()` and persists the cart in `localStorage`. The app is wrapped with Redux `Provider` in `src/main.jsx`.

## Notes

- All product illustrations are original SVG files included in `public/products`, so they do not rely on third-party image URLs.
- Product prices and checkout are demo data. No payment is collected and no order is sent to a server.
- Google Fonts are used when an internet connection is available; system fonts provide a fallback.

## GitHub upload

Create an empty repository on GitHub, then run these commands in this project folder (replace the URL with your own repository URL):

```bash
git init
git add .
git commit -m "Build Lumo lighting store"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
