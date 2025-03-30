import React from 'react';
import ItemCard from './components/ItemCard';
import './App.css';
import Footer from './components/Footer';

const sampleProducts = [
  {
    name: 'Noise-Cancelling Headphones',
    description: 'Immerse yourself in music with crystal-clear sound and active noise cancellation.',
    price: 129.99,
    image: 'https://m.media-amazon.com/images/I/615iJ+aVx6L.jpg'
  },
  {
    name: '4K Action Camera',
    description: 'Capture every adventure in ultra-high definition with this waterproof action cam.',
    price: 199.99,
    image: 'https://m.media-amazon.com/images/I/61tvzsvI7uL.jpg'
  },
  {
    name: 'Smart LED Light Bulbs (4-Pack)',
    description: 'Voice-controlled, color-changing bulbs to set the mood in any room.',
    price: 39.99,
    image: 'https://m.media-amazon.com/images/I/51MEdFdrYOL.jpg'
  },
  {
    name: 'Portable Power Bank',
    description: 'Charge your devices anywhere with this compact 20,000mAh battery.',
    price: 49.99,
    image: 'https://m.media-amazon.com/images/I/51zbwQ65j6L.jpg'
  },
  {
    name: 'Ergonomic Office Chair',
    description: 'Stay comfortable and supported during long hours of work or gaming.',
    price: 219.99,
    image: 'https://hbada.com/cdn/shop/files/P501--AI_2.jpg?v=1739952619'
  },
  {
    name: 'Fitness Tracker Band',
    description: 'Track steps, heart rate, sleep, and more with this sleek fitness band.',
    price: 59.99,
    image: 'https://m.media-amazon.com/images/I/51OmV-JVLIL._AC_UY580_.jpg'
  },
  {
    name: 'Wireless Charging Pad',
    description: 'Fast-charge your smartphone without the hassle of cables.',
    price: 29.99,
    image: 'https://m.media-amazon.com/images/I/61oIAKY9s1L.jpg'
  },
  {
    name: 'Laptop Stand with Cooling Fan',
    description: 'Keep your laptop cool and improve posture with this adjustable stand.',
    price: 34.99,
    image: 'https://m.media-amazon.com/images/I/71MgERwRTcS.jpg'
  },
  {
    name: 'Home Security Camera',
    description: 'Monitor your home from anywhere with this smart HD security camera.',
    price: 89.99,
    image: 'https://m.media-amazon.com/images/I/61IsgsyFC8L.jpg'
  },
  {
    name: 'Mini Projector',
    description: 'Turn any wall into a movie screen with this pocket-sized projector.',
    price: 149.99,
    image: 'https://c1.neweggimages.com/productimage/nb640/B7VES2407220ITL6285.jpg'
  },
  {
    name: 'Electric Milk Frother',
    description: 'Create café-style lattes and cappuccinos at home in seconds.',
    price: 24.99,
    image: 'https://m.media-amazon.com/images/I/61tKzuNgHWL.jpg'
  },
  {
    name: 'Bluetooth Keyboard & Mouse Combo',
    description: 'Quiet, sleek, and wireless—perfect for productivity on the go.',
    price: 44.99,
    image: 'https://m.media-amazon.com/images/I/8122FILeNnL.jpg'
  }
];


function App() {
  return (
    <>
      <div className="info">
        <a href="https://www.linkedin.com/in/john-hagens-55b15212a/" target="_blank" rel="noopener noreferrer">
          <img
            src="/logo512.png"
            alt="Logo"
            className="logo"
          />
        </a>

        <h1>Spring Sale Deal Catalog</h1>
        <div className="container-info">
          {sampleProducts.map((product, index) => (
            <ItemCard key={index} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;