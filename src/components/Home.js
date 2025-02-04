import React, { useState, useEffect } from 'react';
import {useNavigate} from  "react-router-dom";

import Category from './Category';
import ProductList from './ProductList';
import Shop from './Shop';
import TrendingProducts from './TrendingProducts';
import ProductSections from './ProductSections';

import Sales from './Sales';
import Reviews from './Reviews';
import About from './About';
import Marquee from './Marquee';
import Offer from './Offer';
import Footer from './Footer';
import '../Home.css';
// import beautyImage1 from '../images/beauty3.jpg';
// import beautyImage2 from '../images/beauty4.jpg';

const Home = ({ onSelectCategory }) => {
  const slides = [
    {
      image: "https://cdn.shopify.com/s/files/1/0519/2243/6249/files/anti_aging_cream.jpg?v=1635925263",
      text: 'Discover Radiant Skin Today',
    },
    {
      image: "https://www.byrdie.com/thmb/FVJiG9Hod8ZOZ04uqcWctIGoY80=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skincaredermtips-c9fbd02742ea47b9aaa6bf852d54292e.png",
      text: 'Stay Ahead with New Beauty Trends',
    },
    {
      backgroundColor: 'black', 
      text: 'Exclusive Skincare Products Just for You',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
 
  const navigate= useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const handleClick= () =>{

    navigate("/all-products");
  }

  return (
    <>
      <div className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={slide.backgroundColor ? { backgroundColor: slide.backgroundColor } : {}}
          >
            {slide.image && <img src={slide.image} alt={slide.text} />}
            <div className={`hero-content ${index === currentSlide ? 'animate' : ''}`}>
              <h1>{slide.text}</h1>
              <button className="cta-btn" onClick={handleClick} >EXPLORE NOW<span className="arrow-icon">→</span></button>
            </div>
          </div>
        ))}
      </div>
    
      <Category onSelectCategory={onSelectCategory} />
     
      <TrendingProducts />

      <Marquee />
      
      <Offer />
      <ProductSections />
      <Sales />

      
      <Reviews />
      <Shop />
      <About />
      
      
      
     
      <ProductList />
      
     
      <Footer />
     
    </>
  );
};
export default Home;