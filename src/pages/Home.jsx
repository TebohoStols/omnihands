import React from 'react';
import styles from '../style';
import { Hero, Stats, Business, ContactUs, Testimonials, Clients, CTA } from '../components';
import Layout from '../components/Layout'; // Import the Layout component

const Home = () => (
  <Layout>
    {/* Hero Section */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* Other Sections */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Testimonials />
        <Clients />
        <CTA />
        <ContactUs />
      </div>
    </div>
  </Layout>
);

export default Home;