import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import Swal from 'sweetalert2';

export default function Payment() {
  const { id } = useParams<{ id: string }>();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Request to save transaction
      const paymentResponse = await fetch('http://localhost:9090/api/paymentMangement/saveTansaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          userId: user?.id,
          amount: 200, // You may need to dynamically set the amount based on your requirements
          courseId: id,
        }),
      });

      if (!paymentResponse.ok) {
        throw new Error('Failed to save transaction');
      }

      // Parse response data
      const paymentData = await paymentResponse.json();

      // Show success alert for payment
      Swal.fire('Success', 'Payment successful! Proceeding to enroll in the course...', 'success');

      // Request to enroll in the course
      const enrollResponse = await fetch('http://localhost:7070/api/courseManagement/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          courseId: id,
          userId: user?.id,
          transactionId: paymentData.data._id,
        }),
      });

      if (enrollResponse.ok) {
        // Show success alert for enrollment
        Swal.fire('Success', 'Course enrolled successfully!', 'success');
        //after 2 seconds navigate to my course page
        setTimeout(() => {
          navigate('/user-profile');
        }, 2000);
      } else {
        throw new Error('Failed to enroll in the course');
      }
    } catch (error) {
      console.error('Error handling payment:', error);
      Swal.fire('Error', 'An unexpected error occurred. Please try again later.', 'error');
    }
  };





  return (
    <div className="">
      <form className="flex py-16 justify-center max-w-3xl mx-auto" onSubmit={handlePayment}>
        <div className="flex-2 flex flex-col">
          <div className="border border-gray-300 p-4">
            <h1 className="font-bold text-lg">Billing Address</h1>
            <div className="flex flex-col mt-4">
              <label htmlFor="countryName" className="font-bold mb-2">
                Country:
              </label>
              <input
                type="text"
                id="countryName"
                className="px-3 py-2 border border-gray-300"
                placeholder="ex: INDIA"
              />
              <label htmlFor="stateName" className="font-bold mt-4 mb-2">
                State or Origin:
              </label>
              <input
                type="text"
                id="stateName"
                className="px-3 py-2 border border-gray-300"
                placeholder="ex: Karnataka"
              />
            </div>
          </div>
          <div className="border border-gray-300 p-4 mt-4">
            <h1 className="font-bold text-lg">Payment Method</h1>
            <div className="flex flex-col mt-4">
              <label htmlFor="cardName" className="font-bold mb-2">
                Name on Card:
              </label>
              <input
                type="text"
                id="cardName"
                className="px-3 py-2 border border-gray-300"
                placeholder="Name on Card"
              />
              <label htmlFor="cardNumber" className="font-bold mt-4 mb-2">
                Card Number:
              </label>
              <input
                type="number"
                id="cardNumber"
                className="px-3 py-2 border border-gray-300"
                placeholder="0000 0000 0000 0000"
              />
              <div className="flex">
                <div className="flex-1 flex flex-col pr-2">
                  <label htmlFor="securityCode" className="font-bold mb-2">
                    Security Code:
                  </label>
                  <input
                    type="number"
                    id="securityCode"
                    className="px-3 py-2 border border-gray-300"
                    placeholder="Security code"
                  />
                </div>
                <div className="flex-1 flex flex-col pl-2">
                  <label htmlFor="expireDate" className="font-bold mb-2">
                    Expiration Date:
                  </label>
                  <input
                    type="date"
                    id="expireDate"
                    className="px-3 py-2 border border-gray-300"
                    placeholder="Expire Date"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between p-4 border border-gray-300 mx-8 bg-blue-100">
          <div className="mb-4">
            <div>
              <p>Original price:</p>
              <p>After discount:</p>
            </div>
          </div>
          <div className="mb-4">
            <p>Total:</p>
          </div>
          <div>
            <p>By continuing, you agree to the terms of service.</p>
          </div>
          <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 mt-4" type="submit">
            Complete Checkout
          </button>
        </div>
      </form>
    </div>
  );
}
