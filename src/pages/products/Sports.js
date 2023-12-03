import React from "react";
import { Navbar } from "react-bootstrap";
import Footer from "../../components/Common/Footer";
import sportsImg1 from "../../assets/images/ProductImages/sports/sports-1.jpg"
import sportsImg2 from "../../assets/images/ProductImages/sports/sports-4.jpg"
import sportsImg3 from "../../assets/images/ProductImages/sports/sports-8.jpg"
import sportsImg4 from "../../assets/images/ProductImages/sports/sports-10.jpg"
import sportsImg5 from "../../assets/images/ProductImages/sports/sports-14.jpg"
import sportsImg6 from "../../assets/images/ProductImages/sports/sports-15.jpg"
import sportsImg7 from "../../assets/images/ProductImages/sports/sports-26.jpg"
import sportsImg8 from "../../assets/images/ProductImages/sports/sports-29.jpg"
import sportsImg9 from "../../assets/images/ProductImages/sports/sports-34.jpg"
import sportsImg10 from "../../assets/images/ProductImages/sports/sports-35.jpg"
import sportsImg11 from "../../assets/images/ProductImages/sports/sports-5.jpg"
import sportsImg12 from "../../assets/images/ProductImages/sports/sports-36.jpg"
import sportsImg13 from "../../assets/images/ProductImages/sports/sports-9.jpg"
import sportsImg14 from "../../assets/images/ProductImages/sports/sports-7.jpg"
import sportsImg15 from "../../assets/images/ProductImages/sports/sports-3.jpg"
import sportsImg16 from "../../assets/images/ProductImages/sports/sports-20.jpg"
import sportsImg17 from "../../assets/images/ProductImages/sports/sports-33.jpg"
import sportsImg18 from "../../assets/images/ProductImages/sports/sports-24.jpg"
import sportsImg19 from "../../assets/images/ProductImages/sports/sports-23.jpg"
import sportsImg20 from "../../assets/images/ProductImages/sports/sports-19.jpg"
import sportsImg21 from "../../assets/images/ProductImages/sports/sports-17.jpg"
import sportsImg22 from "../../assets/images/ProductImages/sports/sports-22.jpg"
import sportsImg23 from "../../assets/images/ProductImages/sports/sports-13.jpg"
import sportsImg24 from "../../assets/images/ProductImages/sports/sports-2.jpg"


import ProductSection from "../../components/ProductSection/ProductSection";

const SportsProducts = () => {
  const sectionTitle = ["Sport's Collection"]
  const sports = [
    {
      image: sportsImg1,
      category: 'Sports',
      title: 'FootBall',
      price: 1299.99,
      rating: 4,
    },
    {
      image: sportsImg2,
      category: 'Sports',
      title: 'Crcket Bat',
      price: 1450,
      rating: 4,
    },
    {
      image: sportsImg3,
      category: 'Sports',
      title: 'Badminton',
      price: 1500.45,
      rating: 4,
    },
    {
      image: sportsImg4,
      category: 'Sports',
      title: 'Dart',
      price: 1050,
      rating: 3,
    },
    {
      image: sportsImg5,
      category: 'Sports',
      title: 'Carrom Board',
      price: 2789,
      rating: 4,
    },
    {
      image: sportsImg6,
      category: 'Sports',
      title: 'Dart',
      price: 1399.52,
      rating: 4,
    },
    {
      image: sportsImg7,
      category: 'Sports',
      title: 'Skates',
      price: 34000,
      rating: 4,
    },
    {
      image: sportsImg8,
      category: 'Sports',
      title: 'Ludo Board',
      price: 1800.99,
      rating: 4,
    },
    {
      image: sportsImg9,
      category: 'Sports',
      title: 'Chess Board',
      price: 25999,
      rating: 4,
    },
    {
      image: sportsImg10,
      category: 'Sports',
      title: 'Table Tennis',
      price: 40599,
      rating: 3,
    },
    {
      image: sportsImg11,
      category: 'Sports',
      title: 'Cricket Set',
      price: 32455,
      rating: 4,
    },

    {
      image: sportsImg12,
      category: 'Sports',
      title: 'Skipping Rope',
      price: 850.46,
      rating: 3,
    },
    {
      image: sportsImg13,
      category: 'Sports',
      title: 'Badminton',
      price: 2555,
      rating: 4,
    },
    {
      image: sportsImg14,
      category: 'Sports',
      title: 'Cricket Bat, Ball & wicket',
      price: 32555,
      rating: 4,
    },
    {
      image: sportsImg15,
      category: 'Sports',
      title: 'Basket Ball',
      price: 1250,
      rating: 4,
    },
    {
      image: sportsImg16,
      category: 'Sports',
      title: 'Ice Skates',
      price: 71269.75,
      rating: 4,
    },
    {
      image: sportsImg17,
      category: 'Sports',
      title: 'Chess Board',
      price: 31299.99,
      rating: 3,
    },
    {
      image: sportsImg18,
      category: 'Sports',
      title: 'Stkates',
      price: 41295,
      rating: 4,
    },
    {
      image: sportsImg19,
      category: 'Sports',
      title: 'Basket of Basket Ball',
      price: 34256.99,
      rating: 4,
    },
    {
      image: sportsImg20,
      category: 'Sports',
      title: 'Ice Hockey Complete Set',
      price: 451270,
      rating: 4,
    },
    {
      image: sportsImg21,
      category: 'Sports',
      title: 'Dart Board with auto Count Score',
      price: 21256.44,
      rating: 4,
    },
    {
      image: sportsImg22,
      category: 'Sports',
      title: "Basket Ball's Basket",
      price: 4299.99,
      rating: 3,
    },
    {
      image: sportsImg23,
      category: 'Sports',
      title: "Carrom Board",
      price: 5299.20,
      rating: 3,
    },
    {
      image: sportsImg24,
      category: 'Sports',
      title: "Football",
      price: 14299.99,
      rating: 4,
    },
  ]
  return (
    <div>
      <Navbar />
      <ProductSection heading={sectionTitle} product={sports} />
      <Footer />
    </div>
  )
}

export default SportsProducts

