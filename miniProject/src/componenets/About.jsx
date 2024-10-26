import React from 'react'

function About() {
  return (
    <section className="bg-gray-100 py-12 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <h2 className="text-5xl font-bold text-center mb-8 animate-fadeIn">
          About Us
        </h2>
        <p className="text-xl text-gray-700 text-center leading-relaxed mb-12 animate-slideUp">
          We are a dynamic and innovative company, focused on delivering exceptional 
          products and services that transform industries. Our expertise and dedication 
          to our mission have earned us a reputation as a leader in the field.
        </p>

        {/* Mission, Vision, Values */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 animate-zoomIn">
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To create value and make a difference by providing exceptional services 
              and products that exceed expectations and push the boundaries of innovation.
            </p>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
              Learn More
            </button>
          </div>

          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in our industry, renowned for innovation, customer
              satisfaction, and operational excellence, while shaping the future of technology.
            </p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
              Our Story
            </button>
          </div>

          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Integrity, Innovation, Customer Focus, and Teamwork are at the core of everything we do, 
              driving us to constantly improve and exceed our own expectations.
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Our Values
            </button>
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideUp">
          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-3">Our Team</h3>
            <p className="text-gray-600">
              Our talented team of professionals is driven by passion and a commitment 
              to excellence. With years of experience in their respective fields, they are 
              dedicated to achieving the best outcomes for our clients.
            </p>
            <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition">
              Meet the Team
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-3">Our History</h3>
            <p className="text-gray-600">
              Established over a decade ago, we have continuously evolved and adapted to 
              changing market trends, ensuring that we remain at the forefront of our industry.
            </p>
            <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition">
              Our Journey
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-3">Our Achievements</h3>
            <p className="text-gray-600">
              We have earned numerous awards and recognitions for our innovative solutions 
              and outstanding customer service. Our achievements are a testament to our 
              relentless pursuit of excellence.
            </p>
            <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
              View Achievements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
