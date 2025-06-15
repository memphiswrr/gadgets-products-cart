# Gadgets Products Cart 🛒

![Gadgets Products Cart](https://img.shields.io/badge/Gadgets%20Products%20Cart-v1.0-blue.svg)  
[![View Releases](https://img.shields.io/badge/View%20Releases-Click%20Here-orange.svg)](https://github.com/memphiswrr/gadgets-products-cart/releases)

Welcome to the **Gadgets Products Cart** repository! This project offers a fully functional mock e-commerce product API powered by **json-server**. It features a clean, responsive React frontend built using **Vite**. The application simulates real-world REST API behavior, supporting full CRUD operations. This makes it ideal for prototyping, testing frontend integration, and learning full-stack workflows.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Mock E-commerce API**: Simulates a real-world e-commerce environment.
- **CRUD Operations**: Create, Read, Update, and Delete products.
- **Responsive Design**: Works well on both desktop and mobile devices.
- **React Hooks**: Utilizes React's built-in hooks for state management.
- **Context API**: Manages global state effectively.
- **Animations**: Smooth transitions using Framer Motion.
- **Styled with Tailwind CSS**: Clean and modern UI.

## Technologies Used

This project uses a variety of technologies to create a seamless experience:

- **React**: Frontend library for building user interfaces.
- **Vite**: Build tool that offers a fast development environment.
- **json-server**: Provides a full fake REST API with zero coding.
- **Node.js**: JavaScript runtime for building server-side applications.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **React Router DOM**: For routing in React applications.
- **React Hot Toast**: For notifications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: For animations and transitions.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/memphiswrr/gadgets-products-cart.git
   cd gadgets-products-cart
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the mock API**:
   In a separate terminal, run:
   ```bash
   json-server --watch db.json
   ```

4. **Run the React application**:
   In another terminal, run:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Project Structure

Here's an overview of the project structure:

```
gadgets-products-cart/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   └── App.jsx
├── db.json
├── package.json
└── vite.config.js
```

- **public/**: Contains the static files, including the main HTML file.
- **src/**: Contains all source code, including components, context, hooks, and styles.
- **db.json**: The mock database used by json-server.
- **package.json**: Lists project dependencies and scripts.
- **vite.config.js**: Configuration file for Vite.

## Usage

The application allows users to:

- **View Products**: Browse through the list of available products.
- **Add to Cart**: Select products to add to the shopping cart.
- **Remove from Cart**: Easily remove items from the cart.
- **Checkout**: Simulate a checkout process.

### API Endpoints

The following API endpoints are available:

- **GET /products**: Retrieve a list of products.
- **GET /products/:id**: Retrieve a single product by ID.
- **POST /products**: Add a new product.
- **PUT /products/:id**: Update an existing product.
- **DELETE /products/:id**: Remove a product.

You can test these endpoints using tools like Postman or directly from the frontend of the application.

## Contributing

We welcome contributions to this project! If you would like to contribute, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Make your changes** and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

For more details, you can check the [Releases](https://github.com/memphiswrr/gadgets-products-cart/releases) section. 

Thank you for checking out the Gadgets Products Cart! We hope you find it useful for your projects and learning journey.