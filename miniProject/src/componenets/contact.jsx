import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gray-200 py-12 px-6 w-full" id="contact">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-105 bg-gray-50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-105 bg-gray-50"
              placeholder="+91"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-105 bg-gray-50"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
