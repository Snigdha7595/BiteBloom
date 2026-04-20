# 🌸 BiteBloom — Food Ordering Web App

BiteBloom is a modern, responsive food ordering web application built with **React** and **Vite**. It lets users browse a rich menu across multiple categories, add items to their cart, apply promo codes, and place orders — all with the help of a built-in AI-powered virtual food assistant.

---

## 🚀 Live Demo

> _Deploy link here (e.g. Vercel / Netlify)_

---

## ✨ Features

- 🍽️ **Browse Menu by Category** — Explore food across 8 categories: Salads, Rolls, Desserts, Sandwiches, Cakes, Pure Veg, Pasta, and Noodles
- ➕ **Add / Remove Items** — Intuitive cart controls directly on each food card
- 🛒 **Cart Page** — View selected items, quantities, subtotal, delivery fee, and total
- 🏷️ **Promo Code Support** — Enter promo codes at checkout
- 📦 **Order Placement** — Delivery information form with a payment summary
- 🔍 **Search Bar** — Search for food items from the navbar
- 🤖 **Virtual Assistant** — A floating chatbot that suggests menu items based on your mood or food preferences (e.g. type "spicy" or "vegetarian" to get recommendations)
- 🔐 **Login / Sign-in Popup** — UI for user authentication
- 📱 **App Download Section** — Links to App Store & Play Store for the mobile app
- 🌐 **Footer with Social Links** — Facebook, Twitter, and LinkedIn

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 7 | Build tool & dev server |
| React Router DOM v7 | Client-side routing |
| React Context API | Global cart state management |
| CSS Modules | Component-level styling |

---

## 📁 Project Structure

```
BiteBloom/
├── public/
│   └── header images
├── src/
│   ├── assets/          # Images, icons, food data (assets.js, menu.json)
│   ├── components/
│   │   ├── Navbar/          # Top navigation with search & cart
│   │   ├── Header/          # Hero banner
│   │   ├── ExploreMenu/     # Category filter
│   │   ├── FoodDisplay/     # Food item grid
│   │   ├── FoodItem/        # Individual food card
│   │   ├── LoginPopup/      # Sign-in modal
│   │   ├── AppDownload/     # Mobile app promo section
│   │   ├── Footer/          # Site footer
│   │   └── VirtualAssistant/ # AI chatbot for food suggestions
│   ├── context/
│   │   └── StoreContext.jsx  # Global cart state
│   ├── pages/
│   │   ├── Home/            # Landing page
│   │   ├── Cart/            # Cart review page
│   │   └── PlaceOrder/      # Checkout & delivery form
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Snigdha7595/BiteBloom.git

# Navigate into the project directory
cd BiteBloom

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🤖 Virtual Assistant

BiteBloom includes a floating chat assistant (🤖) that recommends menu items based on keywords you type — like `"spicy"`, `"vegetarian"`, `"creamy"`, or `"sweet"`. It matches your input against tagged menu data in `menu.json` and returns personalized suggestions instantly.

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, menu explorer, food grid |
| `/cart` | Cart | Items, quantities, totals, promo code |
| `/order` | Place Order | Delivery details + payment summary |
| `/app-download` | App Download | Mobile app download section |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Snigdha** — [@Snigdha7595](https://github.com/Snigdha7595)

> _Made with ❤️ and good food vibes_ 🌸
