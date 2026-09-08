# K-SHOP

K-SHOP is a React-based clothing e-commerce frontend. It includes a home page, category pages for men's, women's, and kids' products, product detail pages, a shopping cart, and a login/signup screen.

The project currently uses local product data and image assets. It does not have a backend, database, real authentication, payment processing, or external product API.

## Technologies

 - React 19
 - Vite 7
 - React Router DOM 7
 - Tailwind CSS 4
 - JavaScript and JSX
 - ESLint
 - React Context API for cart state

 ## Requirements

 - Node.js 18 or newer
 - npm

 Check your installed versions:

 ```bash
 node --version
 npm --version
 ```

 ## Installation

 Open a terminal in the project directory and install the dependencies:

 ```bash
 cd E-commerce-App
 npm install
 ```

 On Windows PowerShell, use `npm.cmd` if PowerShell blocks the `npm` command:

 ```powershell
 npm.cmd install
 ```

 ## Run Locally

 Start the Vite development server:

 ```bash
 npm run dev
 ```

 On Windows PowerShell, use:

 ```powershell
 npm.cmd run dev
 ```

 Open the URL printed by Vite, normally:

 ```text
 http://localhost:5173/
 ```

 Vite provides hot module replacement, so source changes appear in the browser while the server is running.

 ## Available Commands

 ```bash
 npm run dev       # Start the development server
 npm run build     # Create a production build in dist/
 npm run preview   # Preview the production build locally
 npm run lint      # Run ESLint
 ```

 Use the `.cmd` form of these commands on Windows PowerShell when required, for example `npm.cmd run build`.

 ## Routes

 | Route | Description |
 | --- | --- |
 | `/` | Home page with hero banner, popular products, offers, and new collections |
 | `/mens` | Men's product category |
 | `/womens` | Women's product category |
 | `/kids` | Kids' product category |
 | `/product/:productId` | Product details for a product ID |
 | `/cart` | Shopping cart |
 | `/login` | Login/signup screen |

 ## Project Structure

 ```text
 src/
	 assets/Assets/       Product data and image assets
	 Navbar/              Site navigation and cart count
	 Hero/                Home page hero section
	 Popular/             Popular products section
	 Offers/              Promotional offer section
	 NewCollections/      New products section
	 NewLetter/           Newsletter subscription section
	 Items/               Reusable product card
	 Pages/               Routed pages and ShopContext
	 ProductDisplay/      Product detail display
	 CartItems/           Cart item list and controls
	 Footer/              Site footer
	 App.jsx              Application layout and routes
	 main.jsx             React entry point
	 index.css            Tailwind CSS entry point
 ```

 ## How It Works

 Product information is loaded from the JavaScript files in `src/assets/Assets/`. The `ShopContext` provider exposes the product list and cart operations to components throughout the application. Cart contents are held in React state, so they reset when the page is refreshed.

 Product cards link to `/product/:productId`, where the selected product is found by its numeric ID. Category pages filter the local product list by category.

 ## Production Build

 Create a production build with:

 ```bash
 npm run build
 ```

 To serve the generated build locally:

 ```bash
 npm run preview
 ```

 ## Current Limitations

 - Cart data is not persisted between page refreshes.
 - Login/signup is a frontend-only screen.
 - There is no backend or database.
 - There is no payment or order-processing workflow.
 - Product data must currently be edited in the local asset files.
