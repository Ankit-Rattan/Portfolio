import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // 🌀 Loading state

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // ⏳ Start loading

    // 1️⃣ Send to Ankit
    emailjs.send(
      'service_kwac1y9',
      'template_ta2dnc5',
      {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        reply_to: values.email,
      },
      'N7xdf98_4lCjq_a6k'
    )
    .then(() => {
      // 2️⃣ Auto-reply to user
      return emailjs.send(
        'service_kwac1y9',
        'template_d7d28qn',
        {
          to_name: values.name,
          to_email: values.email,
        },
        'N7xdf98_4lCjq_a6k'
      );
    })
    .then(() => {
      alert('Message sent to Ankit and confirmation sent to user!');
      setValues({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send message. Please try again.');
    })
    .finally(() => setLoading(false)); // ✅ Stop loading
  };

  return (
    <div className="bg-gray-900 p-[5rem] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded max-w-md w-full shadow-lg hover:shadow-sky-400 duration-1000"
      >
        <h2 className="text-2xl mb-4 text-purple-200 font-bold">Contact Me</h2>

        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
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
            value={values.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Sending...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;
