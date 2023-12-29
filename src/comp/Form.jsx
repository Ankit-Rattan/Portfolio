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
      await axios.post('http://localhost:3001/submit', values); // Use the correct endpoint
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
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Message" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
