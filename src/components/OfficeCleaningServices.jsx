import React from 'react';
import Layout from './Layout'; // Import the Layout component

const OfficeCleaningServices = () => {
  return (
    <Layout> {/* Wrap the entire content with Layout */}
      <div className='bg-primary w-full overflow-hidden flex flex-col items-center p-6'>
        {/* Title */}
        <h1 className='font-poppins font-semibold text-[40px] text-white mb-8 text-center'>
          Office Cleaning Services
        </h1>

        {/* Service Description */}
        <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6 mb-8'>
          <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
            Our Cleaning Services
          </h2>
          <p className='font-poppins font-normal text-[16px] text-gray-300 leading-7 mb-4'>
            Maintain a spotless, professional workspace with reliable cleaning solutions designed for modern offices.
          </p>
          <ul className='list-disc list-inside font-poppins font-normal text-[16px] text-gray-300 leading-7'>
            <li>Daily, weekly, or on-demand cleaning</li>
            <li>Eco-friendly cleaning products</li>
            <li>Trained and professional cleaning staff</li>
            <li>Customizable cleaning schedules</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6 mb-8'>
          <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
            Why Choose Us?
          </h2>
          <ul className='list-disc list-inside font-poppins font-normal text-[16px] text-gray-300 leading-7'>
            <li>Affordable pricing with no hidden costs</li>
            <li>Flexible cleaning plans to fit your needs</li>
            <li>100% satisfaction guarantee</li>
            <li>Eco-friendly and sustainable practices</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6'>
          <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
            Ready to Get Started?
          </h2>
          <p className='font-poppins font-normal text-[16px] text-gray-300 leading-7 mb-4'>
            Contact us today to schedule your office cleaning service.
          </p>
          <button
            className='bg-blue-gradient text-primary font-poppins font-medium text-[18px] px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300'
            onClick={() => alert('Redirect to contact form or booking page')}
          >
            Schedule Cleaning
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default OfficeCleaningServices;