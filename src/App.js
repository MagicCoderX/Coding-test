import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <Link to="/login" className="text-indigo-600 hover:underline">
          Go to Login Page
        </Link>
      </div>
    </div>
  );
};

export default App;
