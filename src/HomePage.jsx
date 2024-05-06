import React from 'react';
import HeaderImage from './HeaderImage';
import FeaturedClubs from './FeaturedClubs';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import InputField from './InputField';
import Icon from './IconComponent';
import Card from './Card'; // Updated import
import './HomePage.css';
import Card2 from './Card2';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header-content">
        <HeaderImage />
        <header className="header">
          <h1>Explore local cannabis products and clubs</h1>
          <div className="search-bar">
            <InputField placeholder="Enter your location to find nearby clubs" />
            <button type="button">🔍</button>
          </div>
        </header>
      </div>

      {/* Section for cards above Featured Clubs */}
      <section className="card-container"> {/* Updated class name to match CSS */}
        {/* Render Card components */}
        <Card Icon={Icon}>Content for card 1</Card>
        <Card Icon={Icon}>Content for card 2</Card>
        <Card Icon={Icon}>Content for card 3</Card>
        {/* Add more Card components as needed */}
      </section>

      {/* Featured Clubs section */}
      <FeaturedClubs />
      <div className="card2-container">
      <Card2 Icon={Icon}>Content for card 4</Card2>
      <Card2 Icon={Icon}>Content for card 4</Card2>
      <Card2 Icon={Icon}>Content for card 4</Card2>
      <Card2 Icon={Icon}>Content for card 4</Card2>
      <Card2 Icon={Icon}>Content for card 4</Card2>
      <Card2 Icon={Icon}>Content for card 4</Card2>
      <Card2 Icon={Icon}>Content for card 4</Card2>
      <Card2 Icon={Icon}>Content for card 4</Card2>
      
     
      </div>

      <HowItWorks />
      
      <Footer />
    </div>
    
  );
};

export default HomePage;
