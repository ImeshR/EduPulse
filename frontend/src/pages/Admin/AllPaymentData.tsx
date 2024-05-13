import React from 'react';
import { useState } from 'react';


const dummyPaymentData = [
    {
        transactionId: '1234567890',
        studentName: 'John Doe',
        studentEmail: 'john@example.com',
        courseName: 'React Course',
        authorName: 'Jane Smith',
        authorEmail: 'jane@example.com',
        date: new Date('2024-05-10'),
      },
      {
        transactionId: '2345678901',
        studentName: 'Alice Johnson',
        studentEmail: 'alice@example.com',
        courseName: 'JavaScript Course',
        authorName: 'John Doe',
        authorEmail: 'john@example.com',
        date: new Date('2024-05-09'),
      },
      {
        transactionId: '3456789012',
        studentName: 'Bob Smith',
        studentEmail: 'bob@example.com',
        courseName: 'AWS Course',
        authorName: 'Husan Santo',
        authorEmail: 'husan@example.com',
        date: new Date('2024-05-08'),
      },
      {
        transactionId: '4567890123',
        studentName: 'Emma Brown',
        studentEmail: 'emma@example.com',
        courseName: 'HTML Course',
        authorName: 'Kamal Narayan',
        authorEmail: 'kamal@example.com',
        date: new Date('2024-05-07'),
      },
      {
        transactionId: '5678901234',
        studentName: 'Oliver Wilson',
        studentEmail: 'oliver@example.com',
        courseName: 'HTML/CSS/JS Course',
        authorName: 'Supun Devid',
        authorEmail: 'supun@example.com',
        date: new Date('2024-05-06'),
      },
      {
        transactionId: '6789012345',
        studentName: 'Sophia Taylor',
        studentEmail: 'sophia@example.com',
        courseName: 'PHP Course',
        authorName: 'Supun Nimal',
        authorEmail: 'supun@example.com',
        date: new Date('2024-05-11'),
      },
      {
        transactionId: '7890123456',
        studentName: 'William Clark',
        studentEmail: 'william@example.com',
        courseName: 'Java Course',
        authorName: 'Rocky Nhine',
        authorEmail: 'rocky@example.com',
        date: new Date('2024-05-13'),
      },
      {
        transactionId: '8901234567',
        studentName: 'Charlotte Martin',
        studentEmail: 'charlotte@example.com',
        courseName: 'C++ Course',
        authorName: 'Shanto Kumar',
        authorEmail: 'shanto@example.com',
        date: new Date('2024-05-12'),
      },
      {
        transactionId: '9012345678',
        studentName: 'Henry Lewis',
        studentEmail: 'henry@example.com',
        courseName: 'Docker Course',
        authorName: 'Shanto Kumar',
        authorEmail: 'shanto@example.com',
        date: new Date('2024-05-10'),
      },
      {
        transactionId: '0123456789',
        studentName: 'Amelia Hall',
        studentEmail: 'amelia@example.com',
        courseName: 'Python Course',
        authorName: 'Shanto Kumar',
        authorEmail: 'shanto@example.com',
        date: new Date('2024-05-13'),
      },
  
];

const AllPaymentData = () => {
    const [sortedPayments, setSortedPayments] = useState(dummyPaymentData);
  
    // Function to sort payment data by date
    const sortPaymentsByDate = (option) => {
      let sortedData = [...dummyPaymentData];
      switch (option) {
        case 'latest':
          sortedData.sort((a, b) => b.date - a.date);
          break;
        case 'oldest':
          sortedData.sort((a, b) => a.date - b.date);
          break;
        case 'today':
          sortedData = sortedData.filter((payment) => isToday(payment.date));
          break;
        case 'thisWeek':
          sortedData = sortedData.filter((payment) => isThisWeek(payment.date));
          break;
        default:
          break;
      }
      setSortedPayments(sortedData);
    };
  
    // Function to check if a date is today
    const isToday = (date) => {
      const today = new Date();
      return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    };
  
    // Function to check if a date is within the current week
    const isThisWeek = (date) => {
      const today = new Date();
      const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Get the first day of the week
      return date >= firstDayOfWeek;
    };
  
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Payment Data</h1>
        <div className="flex space-x-4 mb-4">
          <button onClick={() => sortPaymentsByDate('latest')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            Latest
          </button>
          <button onClick={() => sortPaymentsByDate('oldest')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            Oldest
          </button>
          <button onClick={() => sortPaymentsByDate('today')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            Today
          </button>
          <button onClick={() => sortPaymentsByDate('thisWeek')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            This Week
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author Email</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedPayments.map((payment) => (
                <tr key={payment.transactionId}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.transactionId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.studentName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.studentEmail}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.courseName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.authorName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.authorEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default AllPaymentData;