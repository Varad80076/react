import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram   } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    
    <article className="about active" data-page="about">
    <header>
      <h2 className="text-4xl font-bold mb-6 text-white text-start border-b-4 border-[#af862c]   w-[168px]">About me</h2>
    </header>
  
    <section className="about-text space-y-6">
      <p className="text-lg leading-relaxed text-white text-start">
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
        I enjoy turning complex problems into simple, beautiful and intuitive designs.
      </p>
  
      <p className="text-lg leading-relaxed text-white text-start">
        My job is to build your website so that it is functional and user-friendly but at the same time attractive.
        Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
        across your message and identity in the most creative way. I created web design for many famous brand companies.
      </p>
    </section>
  
    {/* <!-- Service Section --> */}
    <section className="service space-y-8">
      <h3 className="text-3xl font-semibold mt-5 text-white text-start">What I'm Doing</h3>
  
      <ul className=" service-list grid grid-cols-1 sm:grid-cols-2 lg:grid-3 gap-8">
        <li className="flex flex-row  service-item bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <div className="service-icon-box mb-4 m-3">
            <img src="/src/assets/svgs/icon-design (1).svg" alt="design icon" width="50" className="mx-auto" />
          </div>
          <div className="service-content-box">
            <h4 className="text-xl font-semibold text-start">Web design</h4>
            <p className="service-item-text text-sm text-gray-300 text-start">
              The most modern and high-quality design made at a professional level.
            </p>
          </div>
        </li>
  
        <li className=" flex flex-row service-item bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <div className="service-icon-box mb-4 m-3">
            <img src="/src/assets/svgs/icon-dev.svg" alt="Web development icon" width="40" className="mx-auto" />
          </div>
          <div className="service-content-box">
            <h4 className="text-xl font-semibold text-start">Web development</h4>
            <p className="service-item-text text-sm text-gray-300 text-start">
              High-quality development of sites at the professional level.
            </p>
          </div>
        </li>
  
        <li className="flex flex-row service-item bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <div className="service-icon-box mb-4 m-3">
            <img src="/src/assets/svgs/icon-app.svg" alt="mobile app icon" width="40" className="mx-auto" />
          </div>
          <div className="service-content-box">
            <h4 className="text-xl font-semibold text-start">Mobile apps</h4>
            <p className="service-item-text text-sm text-gray-300 text-start">
              Professional development of applications for iOS and Android.
            </p>
          </div>
        </li>
        <li className="flex flex-row service-item bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <div className="service-icon-box mb-4 m-3">
            <img src="/src/assets/svgs/user-experience .png" alt="mobile app icon" width="40" className="mx-auto" />
          </div>
          <div className="service-content-box">
            <h4 className="text-xl font-semibold text-start">Ui-Ux Desiging </h4>
            <p className="service-item-text text-sm text-gray-300 text-start">
              Professional development of applications for iOS and Android.
            </p>
          </div>
        </li>
      </ul>
    </section>
  
    {/* <!-- Modal Section --> */}
    <div className="modal-container hidden" data-modal-container>
      <div className="overlay bg-black opacity-50 absolute inset-0 z-40" data-overlay></div>
  
      <section className="testimonials-modal bg-white p-6 rounded-lg shadow-xl z-50 max-w-lg mx-auto relative">
        <button className="modal-close-btn absolute top-4 right-4 text-2xl" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>
  
        <div className="modal-img-wrapper mb-4">
          <figure className="modal-avatar-box flex justify-center">
            <img src="./assets/images/avatar-1.png" alt="Daniel Lewis" width="80" className="rounded-full" data-modal-img />
          </figure>
          <img src="./assets/images/icon-quote.svg" alt="quote icon" className="mx-auto" />
        </div>
  
        <div className="modal-content text-center">
          <h4 className="text-2xl font-semibold" data-modal-title>Daniel Lewis</h4>
          <time datetime="2021-06-14" className="text-sm text-gray-500 block">14 June, 2021</time>
  
          <div data-modal-text className="mt-4">
            <p className="text-gray-700 text-base leading-relaxed">
              Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
              lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, ullamcous
              cididt consectetur adipiscing elit, sed do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>
        </div>
      </section>
    </div>
  </article>
  
  
  );
}

export default About;
