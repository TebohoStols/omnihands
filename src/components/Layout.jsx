import React from 'react';
import { Navbar, Footer } from '../components'; // Import Navbar and Footer
import styles from '../style'; // Import styles if needed

const Layout = ({ children }) => {
  return (
    <div className={ ` bg-primary w-full overflow-hidden`}>
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Page Content */}
      <div className={`bg-primary `}>
        <div className={`${styles.boxWidth}`}>
          {children} {/* This will render the page content */}
        </div>
      </div>

      {/* Footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;