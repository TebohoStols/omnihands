import React from 'react';
import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <div className='bg-primary w-full overflow-hidden flex flex-col items-center p-6'>
      {/* Mission Section */}
      <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
          Mission
        </h2>
        <p className='font-poppins font-normal text-[16px] text-gray-300 leading-7'>
          Our mission is to be the most customer-centric business, providing our
          clients with unparalleled access to office services. OmniHand's is to
          be the number one source of convenience to our clients and the greatest
          enabler for our clients to focus on their core business functions while
          we take care of the non-core business functions.
        </p>
      </div>

      {/* Vision Section */}
      <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
          Vision
        </h2>
        <p className='font-poppins font-normal text-[16px] text-gray-300 leading-7'>
          The vision of OmniHand’s office services is to be a client-centric
          business where our clients can find access to their office needs at an
          affordable service price.
        </p>
      </div>

      {/* Our Values Section */}
      <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6 mb-8'>
        <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
          Our Values
        </h2>
        <ul className='list-disc list-inside font-poppins font-normal text-[16px] text-gray-300 leading-7'>
          <li>Integrity</li>
          <li>Accessibility</li>
          <li>Trust</li>
          <li>Commitment to clients</li>
          <li>Collaboration</li>
          <li>Transparency</li>
          <li>Convenience to our clients</li>
        </ul>
      </div>

      {/* What We Do Section */}
      <div className='max-w-[800px] w-full bg-black-gradient rounded-lg shadow-lg p-6'>
        <h2 className='font-poppins font-semibold text-[32px] text-white mb-4'>
          WHAT WE DO
        </h2>
        <p className='font-poppins font-normal text-[16px] text-gray-300 leading-7 mb-6'>
          WE OFFER THE BELOW RANGE OF SERVICES:
        </p>
        <ul className='list-disc list-inside font-poppins font-normal text-[16px] text-gray-300 leading-7'>
          <li>Corporate bookings (Accommodation, flights, transport, car rentals, etc.)</li>
          <li>Event Management (Year-end functions, team buildings, outside office rentals)</li>
          <li>Corporate Cleaning</li>
          <li>Office cleaning and hygiene</li>
          <li>Supply of cleaning services</li>
          <li>Stationery supplies</li>
          <li>Shredding services</li>
          <li>Office refreshments</li>
        </ul>
      </div>
    </div>
    </Layout>
  );

export default About;

