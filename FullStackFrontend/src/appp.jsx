import React, { useState } from 'react';
import axios from 'axios';
import List from './list';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const sendData = () => {
    axios.post('http://localhost:7000/api/create', formData)
      .then(res => {
        console.log("Response:", res.data);
        // Optionally clear inputs after submit
        setFormData({ name: '', email: '', password: '' });
      })
      .catch(err => console.log("Error:", err));
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-6">Crud App</h1>

      <div className="flex gap-4 items-center justify-center text-lg">
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Enter your name" 
          className="border px-3 py-2 rounded"
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Enter your email" 
          className="border px-3 py-2 rounded"
        />
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          placeholder="Enter your password" 
          className="border px-3 py-2 rounded"
        />
      </div>

      <div className="flex items-center justify-center">
        <button 
          onClick={sendData} 
          className="bg-red-500 text-white px-6 py-2 my-4 rounded hover:bg-red-600 transition">
          Submit
        </button>
      </div>

      <div className="flex items-center justify-center">
        <List />
      </div>
    </div>
  );
};

export default App;
