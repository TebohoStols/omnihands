import React from 'react';
import Layout from './Layout';

const CorporateBookings = () => {
  return (
    <Layout>
        <div className='bg-primary w-full overflow-hidden flex flex-col items-center p-6'>
      {/* Title */}
      <h1 className='font-poppins font-semibold text-[40px] text-white mb-8 text-center'>
        Corporate Bookings
      </h1>

      {/* Service Description */}
      <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
          Our Booking Services
        </h2>
        <p className='font-poppins font-normal text-[16px] text-gray-300 leading-7 mb-4'>
          Simplify corporate travel and logistics with our comprehensive booking services. From accommodations and flights to transportation and car rentals, we ensure seamless arrangements tailored to your business needs.
        </p>
        <ul className='list-disc list-inside font-poppins font-normal text-[16px] text-gray-300 leading-7'>
          <li>Accommodation bookings for business trips</li>
          <li>Flight arrangements with flexible options</li>
          <li>Transportation and car rental services</li>
          <li>Customized solutions for corporate events</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
          Why Choose Us?
        </h2>
        <ul className='list-disc list-inside font-poppins font-normal text-[16px] text-gray-300 leading-7'>
          <li>24/7 support for urgent bookings</li>
          <li>Competitive pricing for corporate clients</li>
          <li>Tailored solutions for your business needs</li>
          <li>Seamless booking experience</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6'>
        <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
          Ready to Book?
        </h2>
        <p className='font-poppins font-normal text-[16px] text-gray-300 leading-7 mb-4'>
          Contact us today to arrange your corporate bookings.
        </p>
        <a href="/contact#clients">
          <button
            className='bg-blue-gradient text-primary font-poppins font-medium text-[18px] px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300'
          >
            Book Now
          </button>
        </a>
      </div>
    </div>
    </Layout>
  );
};

export default CorporateBookings;