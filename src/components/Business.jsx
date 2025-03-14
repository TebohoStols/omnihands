import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const FeatureCard = ({ icon, title, content, index }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle click event to navigate to /supplies
  const handleClick = () => {
    if (title === 'Essential Stationery') {
      navigate('/stationery'); // Navigate to the stationery page
    } else if (title === 'Office Pantry & Supplies') {
      navigate('/supplies'); // Navigate to the supplies page
    }else if (title === 'Corporate Bookings') {
      navigate('/corporate-bookings');
    } else if (title === 'Corporate Catering') {
      navigate('/corporate-catering');
    } else if (title === 'Office Cleaning Services') {
      navigate('/office-cleaning');
    }
  };

  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }} // Change cursor to pointer
    >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className="w-[90%] h-[90%] object-contain" />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle the office essentials.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Running a business comes with endless responsibilities—let us take some off your plate. 
          OmniHands provides seamless office support, ensuring your team has everything they need to work efficiently. 
          With reliability, innovation, and care at our core, we help you create a workspace that supports success.
        </p>

        <a
          href="/contact#clients"
          style={{
            display: 'inline-block', // Ensures the link behaves like a block element
            textDecoration: 'none', // Removes underline
            color: 'inherit', // Inherits text color
          }}
        >
          <Button styles="mt-10" /> {/* Your existing button component */}
        </a>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;