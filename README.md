## React E-Shop

This project is an implementation created as part of a frontend development portfolio. It demonstrates practical usage of React, routing, and Firebase for building a simple e-commerce interface.

Users can:

- Browse products

- View product details

- Select product variants

- Add items to cart

- Update quantities

- View total price

The project focuses on component architecture, state management, and business logic handling.

## Purpose of Project

This project was built to practice and demonstrate:

- React component architecture

- Routing using React Router

- Fetching data from Firebase Firestore

- Managing shared application state

- Implementing business logic such as cart operations and stock validation

- Responsive UI design

## Stack Used

# Frontend

- React - React allows modular UI development and reusable components.

- React Router

- SCSS Modules

# Backend / Data

- Firebase Firestore

Firebase Firestore provides a simple cloud database for storing product data without needing a custom backend.

## Build Steps

- Clone the repository
- git clone https://github.com/yourusername/react-e-shop.git
- cd react-e-shop
- Install dependencies
  - npm install
- Run the development server
- npm run dev

The application will start at:

http://localhost:5173

## Design Goals

- Build a simple but realistic e-commerce interface

- Keep components reusable and modular

- Separate UI components from business logic

- Handle common edge cases like stock limits and empty cart

## Implementation Approach

The project uses a component-based architecture:

- App manages shared cart state

- Pages handle data fetching and layout

- Reusable components render UI

- Cart logic is separated into helper functions

This separation improves readability and makes the code easier to maintain.

## Features

- Product listing page

- Featured product carousel

- Product detail pages

- Variant selection (size)

- Quantity selection with stock limits

- Add to cart functionality

- Cart page with quantity updates

- Remove items from cart

- Cart total calculation

- Out-of-stock handling

- Responsive navigation with mobile menu

## Known Issues

- No checkout or payment system implemented

- Cart state is not persisted after page refresh

- Some mobile layout areas may require minor spacing improvements

- No user authentication

## Future Goals

Given more time, I would implement:

- User authentication

- Checkout flow

- Order history

- Cart persistence using localStorage

- Product search and filtering

- Product reviews

- Improved UI animations
