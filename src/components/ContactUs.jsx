import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../style';

const ContactUs = () => {
  const [result, setResult] = useState('');
  const [message, setMessage] = useState(''); // State to manage the message content
  const location = useLocation();
  const cartSummary = location.state?.cartSummary || []; // Access cart data passed from EssentialStationery

  // Pre-fill the message with the cart summary when the component loads
  useEffect(() => {
    if (cartSummary.length > 0) {
      const cartMessage = cartSummary
        .map((item) => `${item.name} (Quantity: ${item.quantity})`)
        .join('\n');
      setMessage(`Cart Summary:\n${cartMessage}\n\n`); // Set the initial message
    }
  }, [cartSummary]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    // Append the current message (including any edits) to the form data
    formData.append('Message', message);

    formData.append('access_key', '90963a60-cecc-4f88-92ee-630bb8bc2d29');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('');
      alert('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      alert(data.message);
      setResult(data.message);
    }
  };

  return (
    <section id="clients" className={`text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-primary outline-secondary rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Send an email</h2>
      </div>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex">
          <div className={`${styles.paragraph} w-full md:w-1/2 text-left text-white mr-[15px] sm:mr-[10px] md:mr-[15px] lg:mr-[20px] pt-2`}>
            Your Name
            <input type="text" name="Name" placeholder="Your Name" className="text-primary w-full border outline-[#00F6FF] rounded py-3 px-4 mt-2" required />
          </div>

          <div className={`${styles.paragraph} w-full md:w-1/2 text-left text-white pt-2`}>
            Your Email
            <input type="email" name="Email" placeholder="Your Email" className="text-primary w-full border outline-[#00F6FF] rounded py-3 px-4 mt-2" required />
          </div>
        </div>

        <div className={`${styles.paragraph} y-6 text-left text-white pt-4`}>
          Message
          <textarea
            className="w-full border-none text-primary outline-[#00F6FF] rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Type your message here..."
            value={message} // Bind the textarea value to the message state
            onChange={(e) => setMessage(e.target.value)} // Update the message state as the user types
            required
          ></textarea>
        </div>

        <button className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-md ${styles}">
          {result ? result : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;