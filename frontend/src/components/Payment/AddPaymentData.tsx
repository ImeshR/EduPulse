import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { Button, FormControl, FormLabel } from '@chakra-ui/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const publishableKey = 'pk_test_51PEpR3P8dDb7QY7tKrBzy4J2YxgLPMx8sa4GPNpGeuuI3ESshjyW1qXZAx3VHioialpcMMZuTE1kHTL4f5gAuYuf00MRP8Okqi';
const stripePromise = loadStripe(publishableKey);

const AddPaymentDataForm = ({ userId, authToken, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      try {
        const response = await axios.post(
          'http://localhost:9090/api/paymentMangement/save-card',
          {
            token: token.id,
            userId,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        console.log(response.data);
        setLoading(false);
        onClose();
      } catch (error) {
        console.error(error);
        setError('Failed to save card');
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Card Details</FormLabel>
        <CardElement />
      </FormControl>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Button
        mt={4}
        colorScheme="blue"
        isLoading={loading}
        type="submit"
        disabled={!stripe}
      >
        Save Card
      </Button>
    </form>
  );
};

const AddPaymentData = ({ userId, authToken, onClose }) => {
  return (
    <Elements stripe={stripePromise}>
      <AddPaymentDataForm userId={userId} authToken={authToken} onClose={onClose} />
    </Elements>
  );
};

export default AddPaymentData;
