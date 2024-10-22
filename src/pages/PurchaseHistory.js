import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const PurchaseHistory = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const token = localStorage.getItem('token');
        
        const response = await axios.get('http://localhost:5000/api/purchase-history', {
          headers: { Authorization: `Bearer ${token}` },
        });
          setPurchases(response.data);
      } catch (err) {
        toast.error('Failed to fetch purchase history.');
      }
    };

    fetchPurchases();
  }, []);

  const handleDownload = async (pdfLink) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(pdfLink, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success('Downloaded successfully!')
    } catch (err) {
      toast.error('Failed to download the PDF report.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Purchase History</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        {purchases.length === 0 ? (
          <p>No purchases found.</p>
        ) : (
          purchases.map((purchase) => (
            <div key={purchase.id} className="mb-4 p-4 border-b">
              <p>Product: {purchase.title}</p>
              <p>Purchased on: {new Date(purchase.purchase_date).toLocaleDateString()}</p>
              <button
                onClick={() => handleDownload(purchase.pdfLink)}
                className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Download Report
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PurchaseHistory;
