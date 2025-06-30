import React from 'react';
import { Download, Eye } from 'lucide-react';

const invoiceData = [
  {
    id: 'INV-001',
    customer: 'Uzma Razzaq',
    amount: '₨12,000',
    status: 'Paid',
    date: '2025-06-01',
  },
  {
    id: 'INV-002',
    customer: 'Ali Khan',
    amount: '₨8,500',
    status: 'Pending',
    date: '2025-06-10',
  },
  {
    id: 'INV-003',
    customer: 'Sara Ahmed',
    amount: '₨6,750',
    status: 'Overdue',
    date: '2025-05-25',
  },
];

const statusStyles = {
  Paid: 'text-green-600 bg-green-100',
  Pending: 'text-yellow-600 bg-yellow-100',
  Overdue: 'text-red-600 bg-red-100',
};

const Invoices = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Invoices</h1>

      <div className="bg-white shadow-md rounded-xl overflow-hidden border">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Invoice #</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {invoiceData.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-800">{invoice.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{invoice.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{invoice.amount}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      statusStyles[invoice.status]
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{invoice.date}</td>
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-800">
                    <Download className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
