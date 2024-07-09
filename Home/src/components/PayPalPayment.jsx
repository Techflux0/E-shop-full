import React, { useContext, useState, useEffect } from 'react';
import { FaPaypal, FaMobileAlt } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';
import couponCodes from './coupons.json'; // Assuming your JSON file is named 'coupons.json'

const PayPalPayment = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const [totalAmount, setTotalAmount] = useState(getTotalCartAmount());
  const [couponCode, setCouponCode] = useState('');
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [validCoupons, setValidCoupons] = useState([]);

  useEffect(() => {
    // Fetch coupon codes from JSON file when component mounts
    setValidCoupons(couponCodes);
  }, []);

  const handlePayPalPayment = () => {
    // Redirect to PayPal or handle PayPal payment logic here
    window.location.href = 'https://www.paypal.com';
  };

  const handleMpesaPayment = () => {
    // Redirect to M-PESA or handle M-PESA payment logic here
    window.location.href = 'https://www.safaricom.co.ke/mpesa';
  };

  const applyCoupon = () => {

    if (validCoupons.includes(couponCode.toUpperCase())) {
      const total = getTotalCartAmount();
      const discountAmount = total * 0.3; 
      setDiscountedAmount(discountAmount);
      setTotalAmount(total - discountAmount); 
    } else {
      setTotalAmount(getTotalCartAmount());
      setDiscountedAmount(0);
    }
  };

  return (
    <div className="min-h-[50vh] flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80 h-auto max-w-full text-center shadow-xl">
        <h1 className="text-2xl font-bold mb-6">Choose Payment Method</h1>
        <div className="text-lg mb-4">
          <label htmlFor="couponCode" className="text-blue-600 font-bold block mb-2">Enter Coupon Code:</label>
          <div className="relative rounded-md overflow-hidden">
            <input
              type="text"
              id="couponCode"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-full"
            />
            <button
              className="absolute top-0 right-0 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              onClick={applyCoupon}
            >
              Apply
            </button>
          </div>
        </div>
        <p className="text-lg mb-4">
          Total Amount: <span className="text-blue-600 font-bold">${totalAmount.toFixed(2)}</span>
          {/* {discountedAmount > 0 && (
            <span className="text-gray-500 ml-2">(Discount applied: ${discountedAmount.toFixed(2)})</span>
          )} */}
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={handlePayPalPayment}
            className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-blue-600 text-white text-base hover:bg-blue-700 transition"
          >
            <FaPaypal size={20} />
            Pay with PayPal
          </button>
          <button
            onClick={handleMpesaPayment}
            className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-green-600 text-white text-base hover:bg-green-700 transition"
          >
            <FaMobileAlt size={20} />
            Pay with M-PESA
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayPalPayment;
