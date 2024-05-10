import PaymentTransaction from "../models/paymentTransaction.js";

//save payment transaction
const savePaymentTransaction = async (transaction) => {
  try {
    const paymentTransaction = new PaymentTransaction(transaction);
    const response = await paymentTransaction.save();
    return {
      message: "Payment transaction saved successfully",
      data: response,
    };
  } catch (error) {
    return {
      message: "Failed to save payment transaction",
    };
  }
};

//get all payment transactions
const getAllPaymentTransactions = async () => {
  try {
    const paymentTransactions = await PaymentTransaction.find();
    return paymentTransactions;
  } catch (error) {
    return {
      message: "Failed to get all payment transactions",
    };
  }
};

//find payment transaction by id
const findPaymentTransactionById = async (id) => {
  const userId = id;
  try {
    const paymentTransaction = await PaymentTransaction.find({ userId });
    return paymentTransaction;
  } catch (error) {
    return {
      message: "Failed to get payment transaction",
    };
  }
};

// //update payment transaction by id
const updatePaymentTransaction = async (id, transaction) => {
  try {
    const response = await Payment.findByIdAndUpdate(id, transaction, {
      new: true,
    });
    return response;
  } catch (error) {
    return {
      message: "Failed to update payment transaction",
    };
  }
};



export {
  savePaymentTransaction,
  getAllPaymentTransactions,
  findPaymentTransactionById,
  updatePaymentTransaction,
};
