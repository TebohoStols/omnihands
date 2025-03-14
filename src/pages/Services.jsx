import React from 'react';
import { pen, tea, wine, book, bin } from '../assets'; // Import icons
import Layout from '../components/Layout';

const Services = () => {
  const features = [
    {
      id: 'feature-1',
      icon: pen,
      title: 'Essential Stationery',
      content:
        'Keep your office stocked with high-quality stationery, from pens to printers—everything you need to stay productive.',
      details: [
        'Wide range of stationery products',
        'Regular delivery schedules',
        'Customizable orders based on your needs',
        'Competitive pricing for bulk orders',
      ],
    },
    {
      id: 'feature-2',
      icon: tea,
      title: 'Office Pantry & Supplies',
      content:
        'Fuel your team with everyday essentials, from coffee and snacks to cleaning supplies—seamless restocking, hassle-free.',
      details: [
        'Curated selection of pantry items',
        'Automated restocking based on usage',
        'Eco-friendly and sustainable options',
        '24/7 support for urgent needs',
      ],
    },
    {
      id: 'feature-3',
      icon: wine,
      title: 'Corporate Catering',
      content:
        'Delight your team with fresh, high-quality meals tailored for meetings, events, and everyday office needs.',
      details: [
        'Customizable menus for dietary preferences',
        'On-time delivery for meetings and events',
        'Professional catering staff available',
        'Affordable packages for all budgets',
      ],
    },
    {
      id: 'feature-4',
      icon: book,
      title: 'Corporate Bookings',
      content:
        'Simplify corporate travel and logistics with our comprehensive booking services. From accommodations and flights to transportation and car rentals, we ensure seamless arrangements tailored to your business needs.',
      details: [
        'Accommodation bookings for business trips',
        'Flight arrangements with flexible options',
        'Transportation and car rental services',
        'Customized solutions for corporate events',
      ],
    },
    {
      id: 'feature-5',
      icon: bin,
      title: 'Office Cleaning Services',
      content:
        'Maintain a spotless, professional workspace with reliable cleaning solutions designed for modern offices.',
      details: [
        'Daily, weekly, or on-demand cleaning',
        'Eco-friendly cleaning products',
        'Trained and professional cleaning staff',
        'Customizable cleaning schedules',
      ],
    },
  ];

  return (
    <Layout>
      <div className='bg-primary w-full overflow-hidden flex flex-col items-center p-6'>
      <h1 className='font-poppins font-semibold text-[40px] text-white mb-8 text-center'>
        Our Services
      </h1>

      {features.map((feature) => (
        <div
          key={feature.id}
          className='bg-black-gradient rounded-lg shadow-lg p-6 max-w-[800px] w-full mb-8'
        >
          <div className='flex items-center mb-4'>
            <img
              src={feature.icon}
              alt={feature.title}
              className='w-[40px] h-[40px] mr-4'
            />
            <h2 className='font-poppins font-semibold text-[24px] text-white'>
              {feature.title}
            </h2>
          </div>
          <p className='font-poppins font-normal text-[16px] text-gray-300 leading-7 mb-4'>
            {feature.content}
          </p>
          <ul className='list-disc list-inside font-poppins font-normal text-[16px] text-gray-300 leading-7'>
            {feature.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default Services;