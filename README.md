# Rewind — Vintage & Secondhand Shop

A multi-page e-commerce frontend for a curated vintage and secondhand store, built with vanilla HTML, CSS, and JavaScript. Product data is fetched from the [DummyJSON API](https://dummyjson.com/).

---

## Pages

| File | Description |
|---|---|
| `index.html` | Landing page with hero slideshow and about section |
| `about.html` | Brand story and approach |
| `productlist.html` | Product grid filtered by category |
| `product.html` | Single product detail page |
| `form.html` | Newsletter signup form |

---

## Project Structure

```
/
├── index.html
├── about.html
├── productlist.html
├── product.html
├── form.html
│
├── css/
│   ├── variables.css       # Design tokens (colors, fonts, sizes)
│   ├── general.css         # Global elements (header, footer, typography)
│   ├── layout.css          # Grid and structural layout
│   ├── index.css           # Index-page specific styles
│   ├── productlist.css     # Product grid styles
│   ├── product.css         # Single product styles
│   └── form.css            # Signup form styles
│
├── js/
│   ├── index.js            # Fetches and renders hero categories
│   ├── productlist.js      # Fetches and renders product grid by category
│   ├── product.js          # Fetches and renders a single product by ID
│   └── randopastels.js     # (Unused) Standalone pastel hover effect
│
├── img/                    # Hero images and logo
└── fonts/                  # Inter SemiBold and Regular (.woff)
```

---

## Features

- **Dynamic product listing** — fetches up to 10 products per category from DummyJSON
- **Category routing** — URL query parameter `?category=` controls which products are shown and which hero image is displayed
- **Subcategory navigation** — women's and men's pages show internal category links
- **Random pastel hover effect** — product cards randomly receive a green, yellow, or purple pastel background on hover
- **Hero crossfade slideshow** — index and about pages cycle through hero images using CSS animations
- **Responsive layout** — two-column product grid and adjusted hero on screens under 770px

---

## API

Product data comes from [DummyJSON](https://dummyjson.com/):

```
GET https://dummyjson.com/products/category/{category}?limit=10
GET https://dummyjson.com/products/{id}
GET https://dummyjson.com/products/categories
```

Categories used: `furniture`, `mens-shirts`, `mens-shoes`, `mens-watches`, `womens-dresses`, `womens-shoes`, `womens-watches`

---

## Design Tokens

All visual decisions are controlled through CSS custom properties in `variables.css`:

```css
--green-pastel, --yellow-pastel, --purple-pastel   /* hover colors */
--h1-size through --p-size                         /* type scale */
--h1-font / --p-font                               /* Inter SemiBold / Regular */
--header-border                                    /* 2px solid black */
--cards-corner                                     /* 1px border-radius */
```

---

## Getting Started

No build step required. Open any HTML file directly in a browser, or serve locally:

```bash
npx serve .
# or
python -m http.server
```

> **Note:** The project fetches live data from DummyJSON, so an internet connection is required.
