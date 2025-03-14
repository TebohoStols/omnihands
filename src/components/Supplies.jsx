import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const Supplies = () => {
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
    setFeedbackMessage(`${cart[index].item.name} removed from cart!`);

    setTimeout(() => {
      setFeedbackMessage('');
    }, 2000);
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

  const suppliesData = [
    {
      category: 'Beverages',
      items: {
        Tea: [
          { name: 'Freshpak', image: 'https://i5-images.massmart.co.za/asr/ccbb832c-d436-4dec-971b-b9fbfd20658e.f4a85674de8769e9f3602320f1b49ab1.jpeg?odnHeight=636&odnWidth=694&odnBg=FFFFFF', description: 'A soothing herbal tea.' },
          { name: 'Five Roses', image: 'https://tse2.mm.bing.net/th?id=OIP.f8_h_cTKsePPEHYkeqwASQHaHa&pid=Api&P=0&h=220', description: 'Classic South African tea.' },
          { name: 'Joko', image: 'https://thesouthafricanshop.com.au/cdn/shop/products/6001089120843_720x.png?v=1556256506', description: 'Bold and flavorful tea.' },
        ],
        Coffee: [
          { name: 'Ricoffy', image: 'https://auberginefoods.com/cdn/shop/files/nescafe-ricoffy-mild_700x700.png?v=1735066470', description: 'Instant coffee with a rich taste.' },
          { name: 'Frisco', image: 'https://www.checkers.co.za/medias/10124567EA-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w4NTU1MnxpbWFnZS9wbmd8aW1hZ2VzL2g5Yi9oMmYvMTAwMjIxMTM4MzcwODYucG5nfGFiNzk3NzdiMzBiNGY0OTU3Zjg0NDc2MGE1YzQwOWZlMWMzOGExMGU1ZDk2YzBmNjBlODQ0ZDlhYWE0MDU2NmU', description: 'Aromatic and smooth coffee.' },
          { name: 'House of Coffees', image: 'https://www.checkers.co.za/medias/checkers300Wx300H-10604213EA.png?context=bWFzdGVyfGltYWdlc3w3NDA0MHxpbWFnZS9wbmd8aW1hZ2VzL2g5MS9oNjIvMTE1NTI2MzAyNzYxMjYucG5nfGYwMTQyZWVhMDYwOTA1MmNhMzM4YTg4NzMxYjA5NTkwNGM5NGIzYzc4MjNiYzBlNTM0NzcxM2JhNWFiYjY1MGE', description: 'Premium coffee blends.' },
        ],
        'Bottled Water': [
          { name: 'Valpré', image: 'https://i5-images.massmart.co.za/asr/af0a3d18-deee-43ca-9b18-35a4874877fd.c407af790c4e6af23d2f5ea07e5c5b9e.jpeg?odnHeight=636&odnWidth=694&odnBg=FFFFFF', description: 'Pure and refreshing natural spring water.' },
          { name: 'Bonaqua', image: 'https://i5-images.massmart.co.za/asr/2c8ab1a4-cce8-4160-a21c-fcf57b880e72.ac1cb104530608ec9241802ccb0f803b.jpeg?odnHeight=636&odnWidth=694&odnBg=FFFFFF', description: 'Still or sparkling, always refreshing.' },
          { name: 'aQuellé', image: 'https://i5-images.massmart.co.za/asr/b5f7ce20-504d-481e-8a0b-f78c3c84d671.c92eeae0dc2c6ba37c3f772a4731d0c0.jpeg?odnHeight=636&odnWidth=694&odnBg=FFFFFF', description: 'Naturally sourced mineral water.' },
        ],
        'Soft Drinks': [
          { name: 'Coca-Cola', image: 'https://i5-images.massmart.co.za/asr/37c5e9f7-2551-4339-ba62-8bfccac6bc35.f5d0c58e912f2705169d50771da8c547.jpeg?odnHeight=636&odnWidth=694&odnBg=FFFFFF', description: 'The classic refreshing cola.' },
          { name: 'Fanta', image: 'https://i5-images.massmart.co.za/asr/8441be24-38a0-4f68-a7c5-bea19db17626.09c538353256ba96c824ba661ed83bd7.jpeg?odnHeight=636&odnWidth=694&odnBg=FFFFFF', description: 'Fruity and fun orange soda.' },
          { name: 'Sprite', image: 'https://i5-images.massmart.co.za/asr/811427fd-9769-437d-88c0-f8e8c0675590.f2eb7dead12fd57a8fb73e38d0c8f6bd.jpeg?odnHeight=636&odnWidth=694&odnBg=FFFFFF', description: 'Crisp and clear lemon-lime soda.' },
        ],
      },
    },
    {
      category: 'Snacks',
      items: {
        Biscuits: [
          { name: 'Bakers', image: 'https://i5-images.massmart.co.za/asr/0df9c2b4-fd0c-4f4d-9d70-9462a064c898.eb2023717115fcaf07a75a53ef4f9756.jpeg?odnHeight=636&odnWidth=710&odnBg=FFFFFF', description: 'Crunchy and delicious biscuits.' },
          { name: 'Eat Sum More', image: 'https://i5-images.massmart.co.za/asr/50d26b34-0cd5-4c78-bafd-a1f07664a549.0382e74228f9517667d3731b2c1852f3.jpeg?odnHeight=636&odnWidth=694&odnBg=FFFFFF', description: 'Buttery and satisfying shortbread.' },
          { name: 'Romany Creams', image: 'https://i5-images.massmart.co.za/asr/6a08dea2-dc31-4234-a848-1933f01e0dda.efb5d37d0ed02a0fb6d5e95d97b33667.jpeg?odnHeight=636&odnWidth=694&odnBg=FFFFFF', description: 'Chocolate-coated coconut biscuits.' },
        ],
        Chips: [
          { name: 'Simba', image: 'https://i5-images.massmart.co.za/asr/fc9fcaf7-7c04-4988-8fb5-b5446e78c291.f0939616b58b401cd3796dc706e7ec9f.jpeg?odnHeight=255&odnWidth=278&odnBg=FFFFFF', description: 'Crunchy and flavorful potato chips.' },
          { name: 'Lays', image: 'https://www.checkers.co.za/medias/checkers300Wx300H-10718825EA.png?context=bWFzdGVyfGltYWdlc3wxMjc1MTh8aW1hZ2UvcG5nfGltYWdlcy9oZmMvaDA3LzExNDg1OTk2MTIyMTQyLnBuZ3w3MzA5YzJhNjIwODA2YTFlZjBhOWY3YTc3NGM3ZWFjNTZmMDMzODk3YjgwN2ExNjc1ZDFhMGEzYWE0NjUyNzE4', description: 'Classic and crispy potato chips.' },
          { name: 'Willards', image: 'https://i5-images.massmart.co.za/asr/2b7e2cf6-60a7-4c60-bb7c-e980caebb5f3.e6f0918b754b9f6e6525b333ba7722b2.jpeg?odnHeight=255&odnWidth=278&odnBg=FFFFFF', description: 'Thin and tasty potato chips.' },
        ],
        'Dried Meats': [
          { name: 'Safari Biltong', image: 'https://i5-images.massmart.co.za/asr/83c19734-8911-4722-b0fb-418a081d1ff3.41335992ffe13d99b2ec4201f5064b6d.jpeg?odnHeight=255&odnWidth=285&odnBg=FFFFFF', description: 'Traditional South African dried meat.' },
          { name: 'Protea Biltong', image: 'https://assets.woolworths.com.au/images/1005/720190.jpg?impolicy=wowsmkqiema&w=260&h=260', description: 'Chewy and savory meat snacks.' },
          { name: 'Free Range', image: 'https://assets.woolworthsstatic.co.za/Bulk-Original-Free-Range-Sliced-Beef-Biltong-400-g-6009195715458.jpg?V=gw7W&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDE5LTA2LTEyLzYwMDkxOTU3MTU0NThfaGVyby5qcGcifQ&w=310&q=85', description: 'Premium air-dried beef biltong.' },
        ],
      },
    },
    {
      category: 'Dairy Products',
      items: {
        Milk: [
          { name: 'Clover', image: 'https://www.evergreenspta.co.za/1295-home_default/clover-long-life-full-cream-milk-6x1l.jpg/img/no-image-new-new.jpg', description: 'Creamy and fresh dairy milk.' },
          { name: 'Parmalat', image: 'https://www.evergreenspta.co.za/1296-home_default/parmalat-everfresh-full-cream-milk-6x1l.jpg/img/no-image-new-new.jpg', description: 'Long-life UHT milk.' },
          { name: 'Fair Cape', image: 'https://www.faircape.com/wp-content/themes/Faircape_Pasture-theme/img/home/quality-bg.jpg', description: 'Locally sourced fresh milk.' },
        ],
        Yogurt: [
          { name: 'Danone', image: 'https://www.shoprite.co.za/medias/checkers300Wx300H-medias-10511935EA-en-shopriteGlobalProductCatalog-20241206092919.png?context=bWFzdGVyfGltYWdlc3w4MjQ4MnxpbWFnZS9wbmd8aW1hZ2VzL2g2MC9oMzMvMTE0NzI5MTAwNTc1MDIucG5nfDAxZGI0MzA5ZWYwMWRkY2EzY2Y2OTg3NjUzODU1MWYwMGNkOGUxY2E3ZGQzZjE1NGJiZWI4MTg1ZTk2NGE0MTY', description: 'Smooth and creamy yogurt.' },
          { name: 'Woolworths', image: 'https://assets.woolworths.com.au/images/1005/918070.jpg?impolicy=wowsmkqiema&w=260&h=260', description: 'High-quality fruit yogurt.' },
          { name: 'Parmalat', image: 'https://www.evergreenspta.co.za/3146-home_default/parmalat-plain-double-cream-yoghurt-1kg-.jpg/img/no-image-new-new.jpg', description: 'Rich and indulgent yogurt.' },
        ],
      },
    },
    {
      category: 'Breakfast Cereals',
      items: {
        'Corn Flakes': [
          { name: 'Kellogg\'s', image: 'https://media.takealot.com/covers_images/23dfd1c17fd548208edc5fa3be4a10ab/s-pdpxl.file', description: 'Crispy and golden corn flakes.' },
          { name: 'Bokomo', image: 'https://www.bokomo.co.za/media/fapfejjp/story-10.png?width=470&height=310&rnd=132894156026170000', description: 'Classic and wholesome corn flakes.' },
        ],
        Muesli: [
          { name: 'Bokomo', image: 'https://cdn.mafrservices.com/sys-master-root/h47/he9/51361822736414/1932_main.jpg?im=Resize=480', description: 'Nutritious and hearty muesli.' },
          { name: 'Jungle', image: 'https://www.shoprite.co.za/medias/checkers300Wx300H-medias-10177786EA-en-shopriteGlobalProductCatalog-20240828120951.png?context=bWFzdGVyfGltYWdlc3wxMzQ4MTl8aW1hZ2UvcG5nfGltYWdlcy9oNmMvaGMyLzExMTg2NzE2MTgwNTEwLnBuZ3w0NGNjZjI3NTY0ZjIzMTE0MjdhNTNjOTAwZjcwNWI0ZDdiNzhlMGQ3MDNkMzM0NTZlMzFlMDFkNGIyYjY5ODlj', description: 'Fruity and crunchy muesli.' },
        ],
      },
    },
    {
      category: 'Bread and Spreads',
      items: {
        Bread: [
          { name: 'Albany', image: 'https://www.shoprite.co.za/medias/10136301EA-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w1NjExOXxpbWFnZS9wbmd8aW1hZ2VzL2g3Yy9oZjQvMTA3NDM4MDE3NzQxMTAucG5nfDkxMzY0Yjg4ZDI2OTg5MmZjYzYxNzA3ZDczNjA4YmI4ZDU5ZTQ5YzQyM2U3ZmU4NWYwN2FhMzNkYzExMDA4MGE', description: 'Soft and fresh sliced bread.' },
          { name: 'Sasko', image: 'https://www.shoprite.co.za/medias/checkers300Wx300H-medias-10241927EA-en-shopriteGlobalProductCatalog-20250109031710.png?context=bWFzdGVyfGltYWdlc3w3MTA2OXxpbWFnZS9wbmd8aW1hZ2VzL2hjNy9oNjkvMTE1MTc1NDI2Mjk0MDYucG5nfDdhMGE3MjZjZWY3YjI3YTI4ZjA5ZDEwZWVjMDNlODQyM2RjMjRhZjRiNmY0NGYxNjEyN2MzYjlhZmZkMzJiYmI', description: 'Traditional South African bread.' },
          { name: 'Blue Ribbon', image: 'https://www.shoprite.co.za/medias/checkers300Wx300H-medias-10151065EA-en-shopriteGlobalProductCatalog-20250206100337.png?context=bWFzdGVyfGltYWdlc3w2NDc1N3xpbWFnZS9wbmd8aW1hZ2VzL2gwMC9oYWQvMTE1OTIxODAyMDM1NTAucG5nfDhjYmVkMzU0ZDRkMzM2YTBlZTQ4NjFkM2E0N2VlZWY1M2FkMzIyOTBjOGZmZmUxODcyNWM3MWIyZjVkMWNkNWY', description: 'Classic white and brown bread.' },
        ],
        'Butter/Margarine': [
          { name: 'Flora', image: 'https://www.shoprite.co.za/medias/10637201EAv2-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w2MTI0OXxpbWFnZS9wbmd8aW1hZ2VzL2hlYy9oYjMvOTIzMTc2MDYyMTU5OC5wbmd8ZTBiOGZiNWU3YzA1YjFlNGYwOTVhNTdjMzJkMzA0ZmM4ZTA5YWUwNDI5ZTVjN2Y5MTZkZjg1ZWVkYTdiNWE2ZA', description: 'Healthy and creamy margarine.' },
          { name: 'Rama', image: 'https://www.shoprite.co.za/medias/10637197EA-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w1OTY1N3xpbWFnZS9wbmd8aW1hZ2VzL2hiOC9oZjcvMTAxODg1MzEyMDQxMjYucG5nfDhlNmMwOWE4ZjYyYWZkZWIyZGQzMGMxNjcxMGU4NWQ4ZTY4NjUyOGUwZTMwN2EzZjM4YjQ2ZDg5NDU2NDBlNzU', description: 'Smooth and spreadable margarine.' },
          { name: 'Stork', image: 'https://www.shoprite.co.za/medias/10534992EA-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTc1MTB8aW1hZ2UvcG5nfGltYWdlcy9oOWYvaGUzLzEwMTA4ODkxODI0MTU4LnBuZ3w3ZDlkOWI4Y2IyMGZjY2YwMTU1MjE2OTIxNzYyYWIxNDI1MTI5ZGFjZjkxMjZiMTc4NTE3ZWY2YjY2MWQxYmJh', description: 'Versatile baking margarine.' },
        ],
        Chutney: [
          { name: 'Mrs. H.S. Ball\'s', image: 'https://www.shoprite.co.za/medias/checkers300Wx300H-10763056EA.png?context=bWFzdGVyfGltYWdlc3w0OTY2OXxpbWFnZS9wbmd8aW1hZ2VzL2gyMy9oMWQvMTE1NjgzOTIzNzIyNTQucG5nfDk0YTIwN2E5Zjc5MzM5MzljYmMxOTQxNjUwYWRjMmIxNzM5NTAzNWM3OGIzMTQ1NDY3Yzc5OGZjYTU4MTgwNjI', description: 'Sweet and tangy chutney.' },
          { name: 'Homegrown Hot Chutney', image: 'https://www.shoprite.co.za/medias/10807400EA-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w0MzA1NnxpbWFnZS9wbmd8aW1hZ2VzL2g1Yi9oYjQvMTAyNDgxNjgwNDY2MjIucG5nfDJiNzhlMmM1MTY2ODg4MWZjNGI1OGRmYzAzOWMzMzA3ZjM5MDA4MTY1OGE3NzEwMmIyM2IwMmJhZGQ2MTAwZmI', description: 'Traditional South African chutney.' },
        ],
      },
    },
    {
      category: 'Condiments',
      items: {
        'Tomato Sauce': [
          { name: 'All Gold', image: 'https://www.shoprite.co.za/medias/checkers300Wx300H-10767836EA.png?context=bWFzdGVyfGltYWdlc3w1ODAzMXxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oODQvMTE1NjExNTYwODM3NDIucG5nfDA0NDM4MTczMjkwYjExYWE1YzJlZGU3Yzg3ZTBlMDY3ZDA1NTA5ZmU5MzIxMzIyZmQ0YjFmNDYxMzQyZTU2MWI', description: 'Rich and flavorful tomato sauce.' },
          { name: 'Wellington\'s', image: 'https://www.shoprite.co.za/medias/checkers300Wx300H-medias-10392586EA-en-shopriteGlobalProductCatalog-20250205033527.png?context=bWFzdGVyfGltYWdlc3w1MDU3OXxpbWFnZS9wbmd8aW1hZ2VzL2gyZi9oMTQvMTE1OTA4MDU1NTMxODIucG5nfDMyMzViNzEwYTNmYThmODAxNzIzNjE0YTU5ZDdhNDRkODk3MTQwMmIzZDM0ZTU0ZWZiMmJhNjY4ZGE1ZTU4Nzc', description: 'Premium tomato ketchup.' },
        ],
        Mayonnaise: [
          { name: 'Crosse & Blackwell', image: 'https://www.shoprite.co.za/medias/10128012EA-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w3NDk5N3xpbWFnZS9wbmd8aW1hZ2VzL2hmMC9oY2QvOTc5Mzk1NDY3Njc2Ni5wbmd8OTc3MmU3OGE4MDgxYjZhNzU0ZDIwOTFjZWFjODhjNWFhM2Y5ZGNkOTk1NWQwNjBlNDY1M2Y0OThhNWM1ZTFiYQ', description: 'Creamy and tangy mayonnaise.' },
          { name: 'Nola', image: 'https://www.shoprite.co.za/medias/10161754EA-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w4NTAwOHxpbWFnZS9wbmd8aW1hZ2VzL2g0Ny9oNWMvOTcxMTA3MTM2MzEwMi5wbmd8M2M4NjAwNGRiMWJmZDczMDk4NzdjOGIyMmVkZDlkMjVkYTFlYTBlMDU2NTlmNWZjZjUxOTBhMzFkZDM5NjAwMg', description: 'Classic mayonnaise for all occasions.' },
        ],
      },
    },
    {
      category: 'Sweeteners',
      items: {
        Sugar: [
          { name: 'Huletts', image: 'https://www.shoprite.co.za/medias/10193367EA-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3wxMjA1NTh8aW1hZ2UvcG5nfGltYWdlcy9oYWQvaDU5Lzk5NjQ5NDg3NTAzNjYucG5nfGQyZjQ3NGU1YzkxNDFmZjAzZWZhZTc3ZTJkMmI1ZmMzMzk1NWI3N2RhZDBjMGUxZjliZmMyNTUzMGZmMjIzN2Y', description: 'Pure and refined white sugar.' },
          { name: 'Selati', image: 'https://www.shoprite.co.za/medias/10378143EA-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w5NzM4OXxpbWFnZS9wbmd8aW1hZ2VzL2g2ZS9oMDcvODk4NzExNjI0MDkyNi5wbmd8Yzg4ODkxNTViNGFlYTg0MWRkZTUzNDI2YjMyOTdhYmQ5YmMxYTc3YWRjYTkxYTdjM2RlZWYzZTYxNGY4MDYzYw', description: 'Premium cane sugar.' },
        ],
        'Artificial Sweeteners': [
          { name: 'Canderel', image: 'https://www.shoprite.co.za/medias/10714446EA-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w2MDg3N3xpbWFnZS9wbmd8aW1hZ2VzL2hlOS9oYWQvOTU1MTM0MDk5NDU5MC5wbmd8NDBmYTk0NjRhYzk3YWZiZjc2ZTJhMGJmYmZmMzBhZjQ2YTAwNzM1Yzg2ODRlZTk3OWQ4MGI4ODdmYzU4MTQ3MQ', description: 'Low-calorie sweetener.' },
          { name: 'Equal', image: 'https://www.shoprite.co.za/medias/10127679EA-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDg3NzV8aW1hZ2UvcG5nfGltYWdlcy9oYzIvaDY5LzEwMDA2MDIyNTIwODYyLnBuZ3xkODU1YmVhZGNkNmU0YWU4YTUwODMyNjViMWNhYjgxZGE5ZjEzNGZiODczN2VjZTIzZTZkMzYxY2M4YWIwNTFl', description: 'Zero-calorie sweetener.' },
        ],
      },
    },
    {
      category: 'Cleaning Supplies',
      items: {
        'Dishwashing Liquid': [
          { name: 'Sunlight', image: 'https://assets.woolworthsstatic.co.za/Sunlight-Original-Dishwashing-Liquid-750-ml-6001087358743.jpg?V=g3Wx&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIyLTA1LTExLzYwMDEwODczNTg3NDNfaGVyby5qcGcifQ&w=310&q=85', description: 'Tough on grease, gentle on hands.' },
          { name: 'Finish', image: 'https://assets.woolworthsstatic.co.za/Finish-Powerball-Rinse-and-Shine-Aid-400-ml-5011417552957.jpg?V=8qI5&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTExLTIxLzUwMTE0MTc1NTI5NTdfaGVyby5qcGcifQ&w=310&q=85', description: 'Effective and affordable dish soap.' },
        ],
        'Surface Cleaners': [
          { name: 'Handy Andy', image: 'https://assets.woolworthsstatic.co.za/Handy-Andy-Lemon-Multi-Purpose-Cleaning-Cream-750-ml-6001087006057.jpg?V=Pe5g&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIyLTA1LTEwLzYwMDEwODcwMDYwNTdfaGVyby5qcGcifQ&w=310&q=85', description: 'Multi-purpose surface cleaner.' },
          { name: 'Mr. Min', image: 'https://assets.woolworthsstatic.co.za/Mr-Min-Pot-Pourri-Multi-Surface-Cleaner-400-ml-6001106120672.jpg?V=CHuJ&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDI0LTA4LTA1LzYwMDExMDYxMjA2NzJfaGVyby5qcGcifQ&q=85', description: 'Powerful cleaning for all surfaces.' },
        ],
      },
    },
    {
      category: 'Paper Products',
      items: {
        'Paper Towels': [
          { name: 'Twinsaver', image: 'https://www.shoprite.co.za/medias/10143493EA-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTk0OTZ8aW1hZ2UvcG5nfGltYWdlcy9oZWEvaDJkLzEwNDA2NTUyMjQwMTU4LnBuZ3w4ODdiODdkNjA2ZGJmZDI4Yjg4OTRmZTZhMzVlMTc5ZjNmNTFjN2ZjMjYwYWJiMjRmOTAxMWZiNzRjMDA5MTlh', description: 'Absorbent and durable paper towels.' },
          { name: 'Woolworths', image: 'https://assets.woolworthsstatic.co.za/Super-Absorbent-2-Ply-Printed-Roller-Towel-2-pk-6009171558123.jpg?V=F9y0&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIxLTEwLTExLzYwMDkxNzE1NTgxMjNfaGVyby5qcGcifQ&w=310&q=85', description: 'Soft and strong paper towels.' },
        ],
        'Toilet Paper': [
          { name: 'Baby Soft', image: 'https://www.shoprite.co.za/medias/checkers300Wx300H-medias-10344469EA-en-shopriteGlobalProductCatalog-20241203084029.png?context=bWFzdGVyfGltYWdlc3wxMDgzNDl8aW1hZ2UvcG5nfGltYWdlcy9oYjAvaGY5LzExNDYwODU2MTE5MzI2LnBuZ3w1OWRiOWM1YTlkM2JhMzk5MmM0ZTRjY2Q2MjE5ZWRlNmM1ODA4ZWRiMmNiZjJmY2Y4ZTJkNGE0YjRkYzMzZGFh', description: 'Gentle and reliable toilet paper.' },
          { name: 'Twinsaver', image: 'https://www.shoprite.co.za/medias/10540791EA-20190726-Media-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w5NzI0MnxpbWFnZS9wbmd8aW1hZ2VzL2hkNC9oZDYvODg1OTk1ODA4MzYxNC5wbmd8ZmU0ZTMwMjg2ZjhjODgyYzc1YmZmMTZhZWMxNWVkNmE4YTE2NDMzYzYxYjI2MWJmNWI2MDgwNDU0OWM2N2E1OQ', description: 'Eco-friendly toilet paper.' },
        ],
      },
    },
    {
      category: 'Disposable Utensils',
      items: {
        Cups: [
          { name: 'Vienna Glass', image: 'https://assets.woolworthsstatic.co.za/Vienna-Glass-Mug-CLEAR-505365590.jpg?V=p%24p4&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIyLTAzLTMwLzUwNTM2NTU5MF9DTEVBUl9oZXJvLmpwZyJ9&w=310&q=85', description: 'Durable and disposable cups.' },
          { name: 'Tapas Mug', image: 'https://assets.woolworthsstatic.co.za/Tapas-Mug-MATTE-BLACK-504489224-hero.jpg?V=OKBq&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDE5LTA3LTEyLzUwNDQ4OTIyNF9NQVRURUJMQUNLX2hlcm8uanBnIn0&w=310&q=85', description: 'Classic disposable cups for any occasion.' },
        ],
        Plates: [
          { name: 'Essential', image: 'https://assets.woolworthsstatic.co.za/Essential-Dinner-Plates-4-Pack-WHITE-506444892.jpg?V=oQuF&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTA1LTA1LzUwNjQ0NDg5Ml9XSElURV9oZXJvLmpwZyJ9&w=310&q=85', description: 'Sturdy disposable plates.' },
          { name: 'Braai Paper Plates', image: 'https://assets.woolworthsstatic.co.za/Plain-Paper-Plates-50-pk-20075071.jpg?V=611O&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIxLTA0LTA5LzIwMDc1MDcxX2hlcm8uanBnIn0&w=310&q=85', description: 'Eco-friendly disposable plates.' },
        ],
      },
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Sticky Cart Summary */}
        <div className="cart-counter sticky top-0 bg-gray-900 p-4 shadow-lg z-40 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Office Pantry & Supplies</h1>
          <button
            onClick={toggleCart}
            className="bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-md px-4 py-2 hover:opacity-90 transition-opacity"
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
          {suppliesData.map((section, index) => (
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
                          className="mt-2 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-md px-4 py-2 hover:opacity-90 transition-opacity disabled:opacity-50"
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
                      className="mt-2 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-md px-4 py-2 hover:opacity-90 transition-opacity"
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

export default Supplies;