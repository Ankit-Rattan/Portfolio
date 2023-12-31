import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/submit', values);
      alert('Form submitted successfully!');
    } catch (err) {
      console.error(err);
      alert('Error submitting form. Please try again.');
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-900 p-[5rem] flex items-center justify-center">
      <form
        className="p-8 rounded  max-w-md w-full shadow-lg hover:shadow-sky-400 duration-1000"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 text-purple-200 font-bold">Contact Me</h2>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
