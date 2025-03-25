import React from 'react';
import Button from '../components/Button'
import Layout from './Layout';

const CorporateCatering = () => {
  return (
    <Layout>
        <div className='bg-primary w-full overflow-hidden flex flex-col items-center p-6'>
      {/* Title */}
      <h1 className='font-poppins font-semibold text-[40px] text-white mb-8 text-center'>
        Corporate Catering
      </h1>

      {/* Service Description */}
      <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
          Our Catering Services
        </h2>
        <p className='font-poppins font-normal text-[16px] text-gray-300 leading-7 mb-4'>
          Delight your team with fresh, high-quality meals tailored for meetings, events, and everyday office needs.
        </p>
        <ul className='list-disc list-inside font-poppins font-normal text-[16px] text-gray-300 leading-7'>
          <li>Customizable menus for dietary preferences</li>
          <li>On-time delivery for meetings and events</li>
          <li>Professional catering staff available</li>
          <li>Affordable packages for all budgets</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
          Why Choose Us?
        </h2>
        <ul className='list-disc list-inside font-poppins font-normal text-[16px] text-gray-300 leading-7'>
          <li>Fresh, high-quality ingredients</li>
          <li>Flexible catering options</li>
          <li>Experienced chefs and staff</li>
          <li>Hassle-free setup and cleanup</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6'>
        <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
          Ready to Order?
        </h2>
        <p className='font-poppins font-normal text-[16px] text-gray-300 leading-7 mb-4'>
          Contact us today to arrange your corporate catering.
        </p>
        <a href="/contact#clients">
          <button
            className='bg-blue-gradient text-primary font-poppins font-medium text-[18px] px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300'
          >
            Request a Quote
          </button>
        </a>
      </div>
    </div>
    </Layout>
  );
};

export default CorporateCatering;