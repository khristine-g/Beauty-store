import React, { useState, useEffect } from 'react';
import {useNavigate} from  "react-router-dom";
import Category from './Category';
import ProductList from './ProductList';
import Shop from './Shop';
import TrendingProducts from './TrendingProducts';
import ProductSections from './ProductSections';
import NewsletterModal from './NewsletterModal';
import About from './About';
import Marquee from './Marquee';
import Offer from './Offer';
import Footer from './Footer';
import '../Home.css';
import beautyImage1 from '../images/beauty3.jpg';
import beautyImage2 from '../images/beauty4.jpg';

const Home = ({ onSelectCategory }) => {
  const slides = [
    {
      image: beautyImage2,
      text: 'Discover Radiant Skin Today',
    },
    {
      image: beautyImage1,
      text: 'Stay Ahead with New Beauty Trends',
    },
    {
      backgroundColor: 'black', 
      text: 'Exclusive Skincare Products Just for You',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setModalOpen] = useState(true);
  const navigate= useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const closeModal = () => setModalOpen(false);
  const handleClick= () =>{

    navigate("/trending-products");
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
      <Marquee />
      <TrendingProducts />
      
      <Offer />
      <About />
      <ProductSections />
      
     
      <ProductList />
      <Shop />
     
      <Footer />
      {isModalOpen && <NewsletterModal onClose={closeModal} />}
    </>
  );
};
export default Home;