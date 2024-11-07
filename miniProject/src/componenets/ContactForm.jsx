import { useForm, ValidationError } from '@formspree/react';
import React, { useState, useEffect } from 'react';
import ThankYouPage from './Thankyou';

function ContactFormm() {
  const [state, handleSubmit] = useForm("xovqewek");
  const [showForm, setShowForm] = useState(true);
  useEffect(() => {
    if (state.succeeded) {
      setShowForm(false);
      const timer = setTimeout(() => {
        setShowForm(true);
      }, 5000); // 3 seconds delay to show the form again
      return () => clearTimeout(timer); // Clear timer on unmount
    }
  }, [state.succeeded]);

  if (!showForm) {
      return <ThankYouPage />
      
    //   <p>Thanks for joining!</p>
    ;
  }
  return (
    <section className="bg-gray-200 py-7 px-6 w-full rounded-lg" id="contact">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl animate-zoomIn ">
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
              
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-105 bg-gray-50"
              placeholder="you@example.com"
            />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
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
             
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-105 bg-gray-50"
              placeholder="+91"
            />
            <ValidationError 
        prefix="Phone" 
        field="Phone"
        errors={state.errors}
      />
          </div>
      
    {/* Start message */}
    <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              
              rows="4"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-105 bg-gray-50"
              placeholder="Your message..."
            />
            <ValidationError 
        prefix="description" 
        field="description"
        errors={state.errors}
      />
          </div>

    {/* end message */}
     
      
      <button type="submit" className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
    </section>
  );
}
export default ContactFormm;