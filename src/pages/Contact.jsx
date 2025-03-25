import React from 'react';
import ContactUs from '../components/ContactUs';
import styles, { layout } from '../style';
import { contact_details } from '../constants';
import Layout from '../components/Layout';

const Contact = () => (

  <Layout>
    <div id="clients" className={`bg-primary w-full overflow-hidden flex flex-wrap justify-center items-center p-4`}>
    {/* Contact details displayed side by side */}
    {contact_details.map((contact) => (
      <div
        key={contact.id}
        className='flex flex-col items-center m-4 min-w-[200px]' // Adjusted for better spacing and alignment
      >
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white text-center'>
          {contact.title}
        </h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase mt-2 text-center'>
          {contact.value}
        </p>
      </div>
    ))}

    {/* ContactUs component */}
    <div className='w-full flex justify-center mt-8'>
      <ContactUs />
    </div>

    <div className='mt-8 text-center'>
      <p className={`${styles.paragraph} text-white`}>
        We're here to help! Reach out to us anytime.
      </p>
    </div>
  </div>
  </Layout>
);

export default Contact;

