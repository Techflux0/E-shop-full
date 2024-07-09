# Online Eshop

Welcome to the **Online Eshop** project! This README provides an overview of how the eshop works, along with instructions on setting up and using the application.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

---

## Introduction

The **Online Eshop** is a web-based application that allows users to browse, search, and purchase products online. It provides a seamless shopping experience with an intuitive user interface and secure payment processing.

---

## Features

- **User Authentication**: Secure sign-up and login functionality.
- **Product Browsing**: Users can view a wide range of products categorized by type.
- **Search Functionality**: Easily search for products using keywords.
- **Shopping Cart**: Add products to the cart and manage the cart items.
- **Checkout Process**: Secure checkout with payment processing.
- **Order History**: View past orders and order details.
- **Admin Panel**: Manage products, categories, and orders.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Processing**: MPESA API, PAYPAL API

---

## Setup and Installation

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (running instance or MongoDB Atlas)
- Stripe account for payment processing

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/online-eshop.git
    cd online-eshop
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:
   
   Create a `.env` file in the root directory and add the following variables:

    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

4. **Run the application**:

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:5000`.

---

## Usage

1. **Register an account** or **log in** with existing credentials.
2. **Browse products** and use the **search bar** to find specific items.
3. **Add products to the cart** and **proceed to checkout**.
4. **Enter payment details** and **complete the purchase**.
5. **View order history** and **track orders** from the user dashboard.

---

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or feedback, please contact:

- **Your Name**
- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

---

Thank you for using the **Online Eshop**!

