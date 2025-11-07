import React, { useState, useEffect } from 'react';
import phone1 from './phone1.jpg';
import phone2 from './phone2.jpg';
import phone3 from './phone3.jpg';

const Demo4 = () => {
  const phones = [
    { id: 0, title: "Apple iPhone", price: "$800", desc: "Apple iPhone", image_url: phone1 },
    { id: 1, title: "Samsung Phone", price: "$600", desc: "Samsung Phone", image_url: phone2 },
    { id: 2, title: "Nokia Phone", price: "$540", desc: "Nokia Phone", image_url: phone3 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoIndex, setAutoIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(false);

  useEffect(() => {
    let interval;
    if (isAuto) {
      interval = setInterval(() => {
        setAutoIndex((prev) => (prev + 1) % phones.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAuto, phones.length]);

  const nextPhone = () => setCurrentIndex((prev) => (prev + 1) % phones.length);
  const prevPhone = () => setCurrentIndex((prev) => (prev - 1 + phones.length) % phones.length);

  return (
    <div>
      <h1>Advanced JS - Demo 4: Phone Carousel with Auto Slideshow</h1>

      {/* Manual Carousel */}
      <div className="border border-primary bg-warning text-center p-3 my-4">
        <h2>{phones[currentIndex].title}</h2>
        <img src={phones[currentIndex].image_url} alt={phones[currentIndex].title} style={{ width: '150px' }} />
        <h4><strong>{phones[currentIndex].price}</strong></h4>
        <p>{phones[currentIndex].desc}</p>
        <div className="mt-3">
          <button className="btn btn-dark me-2" onClick={prevPhone}>Previous</button>
          <button className="btn btn-dark" onClick={nextPhone}>Next</button>
        </div>
        <p>{currentIndex + 1} / {phones.length}</p>
      </div>

      {/* Auto Slideshow */}
      <div className="text-center mt-4">
        <button className="btn btn-success" onClick={() => setIsAuto(true)}>Start Auto Slideshow</button>
      </div>

      <div className="border border-primary bg-warning text-center p-3 my-4">
        <h2>{phones[autoIndex].title}</h2>
        <img src={phones[autoIndex].image_url} alt={phones[autoIndex].title} style={{ width: '150px' }} />
        <h4><strong>{phones[autoIndex].price}</strong></h4>
        <p>{phones[autoIndex].desc}</p>
        <p>{autoIndex + 1} / {phones.length}</p>
      </div>
    </div>
  );
};

export default Demo4;