import React, { useState } from 'react';
import phonebud from './phonebud.jpg';
import phonebud2 from './phonebud2.jpg';
import phonecase from './phonecase.jpg';
import phonecase2 from './phonecase2.jpg';
import phonecase3 from './phonecase3.jpg';
import phonecharger from './phonecharger.jpg';
import phonecharger2 from './phonecharger2.jpg';
import phonecharger3 from './phonecharger3.jpg';
import phonestand from './phonestand.jpg';
import phonestand2 from './phonestand2.jpg';

const Demo5 = () => {
  const products = [
    { id: 0, title: "Wireless Earbuds", price: "$100", desc: "Wireless Earbuds", image_url: phonebud },
    { id: 1, title: "Wired Earbuds", price: "$40", desc: "Wired Earbuds", image_url: phonebud2 },
    { id: 2, title: "IPhone Case", price: "$80", desc: "IPhone Case", image_url: phonecase },
    { id: 3, title: "Samsung Phone Case", price: "$50", desc: "Samsung Phone Case", image_url: phonecase2 },
    { id: 4, title: "IPhone Case", price: "$70", desc: "IPhone Case", image_url: phonecase3 },
    { id: 5, title: "Samsung Charger", price: "$30", desc: "Samsung Charger", image_url: phonecharger },
    { id: 6, title: "Apple Charger", price: "$35", desc: "Apple Charger", image_url: phonecharger2 },
    { id: 7, title: "Wireless Charger", price: "$45", desc: "Wireless Charger", image_url: phonecharger3 },
    { id: 8, title: "Phone Stand", price: "$15", desc: "Phone Stand", image_url: phonestand },
    { id: 9, title: "Phone Stand", price: "$20", desc: "Phone Stand", image_url: phonestand2 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Advanced JS - Demo 5: Product Grid with Shopping Cart</h1>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-12 col-md-4 p-2">
            <div className="border border-primary bg-warning h-100 text-center p-3">
              <h2>{p.title}</h2>
              <img src={p.image_url} alt={p.title} style={{ width: '150px', height: '150px' }} />
              <h4><strong>{p.price}</strong></h4>
              <p>{p.desc}</p>
              <button className="btn btn-info" onClick={() => addToCart(p)}>ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-4">Shopping Cart</h2>
      <div id="shopping-cart" className="border p-3">
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="d-flex justify-content-between align-items-center mb-2">
              <span>{item.title} : {item.price}</span>
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>REMOVE</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Demo5;