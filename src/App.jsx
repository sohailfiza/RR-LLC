import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RectangularCard from './components/RectangularCard';

const cardsData = [
  {
    id: 1,
    title: "WixPro 72-inch Responsive Website Builder",
    highlights: "Access to premium design templates, an extensive library, widgets and apps, and detailed step-by-step guides.",
    rating: 9.9
  },
  {
    id: 2,
    title: "SiteCraft 68-lnch Ultimate Web Design Studio",
    highlights: "[What You Get]: Gain access to the SiteCraft design studio,featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: 9.5
  }
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      {cardsData.map(card => (
        <RectangularCard
          key={card.id}
          title={card.title}
          highlights={card.highlights}
          rating={card.rating}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;