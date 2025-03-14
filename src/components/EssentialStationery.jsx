import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const EssentialStationery = () => {
  const [cart, setCart] = useState([]); // Cart will store { item, quantity }
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const addToCart = (item) => {
    setIsLoading(true);
    setFeedbackMessage('');

    setTimeout(() => {
      // Check if the item already exists in the cart
      const existingItemIndex = cart.findIndex((cartItem) => cartItem.item.name === item.name);

      if (existingItemIndex !== -1) {
        // If the item exists, increment its quantity
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += 1;
        setCart(updatedCart);
      } else {
        // If the item doesn't exist, add it with a quantity of 1
        setCart([...cart, { item, quantity: 1 }]);
      }

      setIsLoading(false);
      setFeedbackMessage(`${item.name} added to cart!`);

      setTimeout(() => {
        setFeedbackMessage('');
      }, 2000);
    }, 1000);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCreateQuote = () => {
    // Prepare the cart data to pass to the Contact Us page
    const cartSummary = cart.map((cartItem) => ({
      name: cartItem.item.name,
      quantity: cartItem.quantity,
    }));
  
    // Show a confirmation message
    alert('Your cart data has been captured and will be pre-filled in the message box.');
  
    // Redirect to the ContactUs page with cart data
    navigate('/contact', { state: { cartSummary } });
  };

  const stationeryData = [
    {
      category: 'Writing Instruments',
      items: {
        Pens: [
          { name: 'Bic Cristal Ballpoint Pen', image: 'https://tse2.mm.bing.net/th?id=OIP.YD7EJ3adLtQJHoT5NzJ8lgHaHa&pid=Api&P=0&h=220', description: 'Affordable and reliable ballpoint pen.' },
          { name: 'Staedtler Triplus Fineliner', image: 'https://tse3.mm.bing.net/th?id=OIP.9jtJacv2bv2TqrRPMbw5aAHaGk&pid=Api&P=0&h=220', description: 'Vibrant and precise fineliner pens.' },
          { name: 'Parker Jotter Ballpoint Pen', image: 'https://tse2.mm.bing.net/th?id=OIP.91E_3_OYmZ4-Kj8yv9hiBgHaHa&pid=Api&P=0&h=220', description: 'Classic and stylish ballpoint pen.' },
        ],
        Pencils: [
          { name: 'Faber-Castell 9000 Graphite Pencil', image: 'https://tse1.mm.bing.net/th?id=OIP.SwzB_fd6ewYhqwlf69zcDgHaF8&pid=Api&P=0&h=220', description: 'High-quality graphite pencils for writing and drawing.' },
          { name: 'Staedtler Noris Mechanical Pencil', image: 'https://tse1.mm.bing.net/th?id=OIP.gOz9lbEKs5JWjsmkPdW_hQHaHa&pid=Api&P=0&h=220', description: 'Durable mechanical pencil with ergonomic design.' },
        ],
        Markers: [
          { name: 'Edding 3000 Permanent Marker', image: 'https://tse3.mm.bing.net/th?id=OIP.h4DTY_tluKvST__MCo5vRQHaHa&pid=Api&P=0&h=220', description: 'Permanent marker for labeling and writing.' },
          { name: 'Sharpie Fine Point Marker', image: 'https://tse2.mm.bing.net/th?id=OIP.hm8bkFgu7T7S4fyNgvQseQHaHa&pid=Api&P=0&h=220', description: 'Fine-tip marker for precise writing.' },
        ],
      },
    },
    {
      category: 'Paper Products',
      items: {
        Notebooks: [
          { name: 'Esselte Flip File Notebook', image: 'https://tse2.mm.bing.net/th?id=OIP.7iF-anSc4_oWlOMgFpgSBAAAAA&pid=Api&P=0&h=220', description: 'Durable flip file notebook for office use.' },
          { name: 'Elan A4 Spiral Notebook', image: 'https://tse1.mm.bing.net/th?id=OIP.hbwOxvy6scFXNHkKfPEgRgHaHa&pid=Api&P=0&h=220', description: 'Affordable spiral-bound notebook.' },
        ],
        'Sticky Notes': [
          { name: 'Post-it Super Sticky Notes', image: 'https://tse3.mm.bing.net/th?id=OIP.hPemqBMjcQA2GDbRALtVtAHaHa&pid=Api&P=0&h=220', description: 'Strong adhesive sticky notes for reminders.' },
          { name: '3M Sticky Notes', image: 'https://tse3.mm.bing.net/th?id=OIP.vrcE8GiQt1OykF-SgAq_mAHaEi&pid=Api&P=0&h=220', description: 'Colorful and reliable sticky notes.' },
        ],
        'A4 Paper': [
          { name: 'Sappi Ultra A4 Paper', image: 'https://tse2.mm.bing.net/th?id=OIP.xp3yTIrBsFLc68u-IWVmhAHaHa&pid=Api&P=0&h=220', description: 'High-quality A4 paper for printing and copying.' },
          { name: 'Chamex A4 Paper', image: 'https://tse1.mm.bing.net/th?id=OIP.61Kqb_78Zlxr6b9j2WrwkwAAAA&pid=Api&P=0&h=220', description: 'Smooth and bright A4 paper.' },
        ],
      },
    },
    {
      category: 'Desk Accessories',
      items: {
        'Desk Organizers': [
          { name: 'Esselte Desk Tidy', image: 'https://tse4.mm.bing.net/th?id=OIP.8SUGJ_8QJZco93nnTnWc9QHaHa&pid=Api&P=0&h=220', description: 'Compact desk organizer for pens and stationery.' },
          { name: 'Elan Mesh Desk Organizer', image: 'https://tse1.mm.bing.net/th?id=OIP.4QNnd7k-uLyQ6db9xFFATwHaHa&pid=Api&P=0&h=220', description: 'Stylish mesh organizer for office supplies.' },
        ],
        'Staplers and Hole Punches': [
          { name: 'Rapesco Heavy-Duty Stapler', image: 'https://tse1.mm.bing.net/th?id=OIP.A4O9V6ddA3aStkDyTTQsfgHaHa&pid=Api&P=0&h=220', description: 'Durable stapler for everyday office use.' },
          { name: 'Fellowes Hole Punch', image: 'https://tse2.mm.bing.net/th?id=OIP.kRsIBz9kL-Z1pAgVVOG8kgHaHa&pid=Api&P=0&h=220', description: '2-hole punch for A4 documents.' },
        ],
        'Tape and Adhesives': [
          { name: 'Sellotape Dispenser', image: 'https://tse1.mm.bing.net/th?id=OIP.c3NQJnn3FI_zZK3CXLK5cQHaHj&pid=Api&P=0&h=220', description: 'Clear tape dispenser for office use.' },
          { name: 'Pritt Glue Stick', image: 'https://tse1.mm.bing.net/th?id=OIP.7nSbstKf0G_3mCzomBNWqQHaHa&pid=Api&P=0&h=220', description: 'Non-toxic glue stick for paper and crafts.' },
        ],
      },
    },
    {
      category: 'Printing and Scanning',
      items: {
        Printers: [
          { name: 'HP LaserJet Pro MFP', image: 'https://tse1.mm.bing.net/th?id=OIP.J2RyPEpOfiIY9LJbytSgWgHaHa&pid=Api&P=0&h=220', description: 'Efficient laser printer for office use.' },
          { name: 'Canon PIXMA Inkjet Printer', image: 'https://tse3.mm.bing.net/th?id=OIP.qVCIVjc5CG_5MfqNgcVwiAHaHa&pid=Api&P=0&h=220', description: 'Affordable inkjet printer for small offices.' },
        ],
        'Ink and Toner': [
          { name: 'HP 305XL Ink Cartridge', image: 'https://tse3.mm.bing.net/th?id=OIP.UycSZevpJicH1Ur6DawTjAHaHa&pid=Api&P=0&h=220', description: 'High-yield ink cartridge for HP printers.' },
          { name: 'Canon 045 Toner Cartridge', image: 'https://tse4.mm.bing.net/th?id=OIP.qAfVyKaUxL_82cR-GhncqQHaHW&pid=Api&P=0&h=220', description: 'Genuine toner for Canon laser printers.' },
        ],
        Scanners: [
          { name: 'Epson Perfection V39 Scanner', image: 'https://tse4.mm.bing.net/th?id=OIP.bI77T2acZDLEVyfaNiRbMAHaEN&pid=Api&P=0&h=220', description: 'Compact and easy-to-use photo scanner.' },
          { name: 'Fujitsu ScanSnap iX1500', image: 'https://tse4.mm.bing.net/th?id=OIP.lPSgC--L-yXvaTpfNeXYcwHaFj&pid=Api&P=0&h=220', description: 'High-speed document scanner.' },
        ],
      },
    },
    {
      category: 'Filing and Storage',
      items: {
        Folders: [
          { name: 'Esselte Lever Arch File', image: 'https://tse4.mm.bing.net/th?id=OIP.Og8kv4RdcvjbzrRd8-VpBAHaEq&pid=Api&P=0&h=220', description: 'Durable lever arch file for document storage.' },
          { name: 'Elan Ring Binder', image: 'https://tse4.mm.bing.net/th?id=OIP.fJ98Gv05s8bMV-33kxXEdAHaLm&pid=Api&P=0&h=220', description: 'Affordable ring binder for office use.' },
        ],
        'Document Boxes': [
          { name: 'Bantex Storage Box', image: 'https://tse2.mm.bing.net/th?id=OIP.8l6gxXmd3RZ2VZDHC4slwAHaHa&pid=Api&P=0&h=220', description: 'Sturdy storage box for A4 documents.' },
          { name: 'Plastic File Box', image: 'https://tse2.mm.bing.net/th?id=OIP.WkRso7V7Y7qQkZcDiMOgxgHaHa&pid=Api&P=0&h=220', description: 'Compact and portable file box.' },
        ],
        'File Dividers': [
          { name: 'Esselte Index Dividers', image: 'https://tse3.mm.bing.net/th?id=OIP.wvQey1nI16Z9tzuqv0dX1QHaF3&pid=Api&P=0&h=220', description: 'Durable index dividers for organizing files.' },
          { name: 'Elan A4 Tab Dividers', image: 'https://tse3.mm.bing.net/th?id=OIP.PTwPvx7WcQYNUD-EkoJRLQHaHa&pid=Api&P=0&h=220', description: 'Affordable tab dividers for ring binders.' },
        ],
      },
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Sticky Cart Summary */}
        <div className="cart-counter sticky top-0 bg-gray-900 p-4 shadow-lg z-40 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Essential Stationery</h1>
          <button
            onClick={toggleCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
          >
            <span className="mr-2">Cart</span>
            <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">
              {cart.length}
            </span>
          </button>
        </div>

        {/* Feedback Message */}
        {feedbackMessage && (
          <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
            {feedbackMessage}
          </div>
        )}

        {/* Main Content */}
        <div className="pt-20 p-6">
          {stationeryData.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{section.category}</h2>
              {Object.entries(section.items).map(([subCategory, items], subIndex) => (
                <div key={subIndex} className="mb-4">
                  <h3 className="text-lg font-medium mb-2">{subCategory}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border border-gray-700 p-4 rounded-lg shadow-sm bg-gray-800">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-32 object-contain rounded-md mb-2"
                        />
                        <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                        <p className="text-sm text-gray-300">{item.description}</p>
                        <button
                          onClick={() => addToCart(item)}
                          disabled={isLoading}
                          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 flex items-center justify-center"
                        >
                          {isLoading ? (
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          ) : (
                            'Add to Cart'
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Cart Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-96 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          } z-30`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Cart</h2>
              <button
                onClick={toggleCart}
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-gray-300">Your cart is empty.</p>
            ) : (
              <div className="flex-1 overflow-y-auto">
                {cart.map((cartItem, index) => (
                  <div key={index} className="border border-gray-700 p-4 rounded-lg shadow-sm bg-gray-700 mb-4">
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-full h-24 object-contain rounded-md mb-2"
                    />
                    <h4 className="text-lg font-semibold text-white">{cartItem.item.name}</h4>
                    <p className="text-sm text-gray-300">Quantity: {cartItem.quantity}</p>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            {/* Add "Create Quote" button */}
            {cart.length > 0 && (
              <button
                onClick={handleCreateQuote}
                className="mt-4 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-md px-4 py-2 hover:opacity-90 transition-opacity"
              >
                Create Quote
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EssentialStationery;