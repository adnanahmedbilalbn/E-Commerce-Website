// Home.js
import React from 'react';
import image1 from "../assets/images/banner-images/image1.webp"
import image2 from "../assets/images/banner-images/image2.webp"
import image3 from "../assets/images/banner-images/image3.webp"
import image4 from "../assets/images/banner-images/image4.png"
import HeroSection from "../components/HeroSection/HeroSection"
import CategoriesSection from "../components/CategoriesSection/Categories"
import SearchBar from '../components/SearchBar';
import createLinkedList from '../DSAFunctions/LinkedList'
import ProductSection from '../components/ProductSection/ProductSection';
import productImg1 from "../assets/images/ProductImages/electronics/electronic-4.jpg"
import productImg2 from "../assets/images/ProductImages/women/suit6.PNG"
import productImg3 from "../assets/images/ProductImages/men/shalwar kameez4.PNG"
import productImg4 from "../assets/images/ProductImages/sports/sports-28.jpg"
import productImg5 from "../assets/images/ProductImages/electronics/electronic-16.jpg"
import productImg6 from "../assets/images/ProductImages/women/sandal5.PNG"
import productImg7 from "../assets/images/ProductImages/electronics/electronic-10.jpg"
import productImg8 from "../assets/images/ProductImages/men/sunglasses3.PNG"
import productImg9 from "../assets/images/ProductImages/sports/sports-38.jpg"
import productImg10 from "../assets/images/ProductImages/electronics/electronic-31.jpg"
import productImg11 from "../assets/images/ProductImages/women/necklace5.PNG"
import productImg12 from "../assets/images/ProductImages/men/wrist watch4.PNG"

const myProducts = [
  {
    image: productImg1,
    category: "Electronics",
    title: "Mobile Phone",
    price: 40660,
    rating: 4,
  },
  {
    image: productImg2,
    category: "Women",
    title: "Stitched Suit",
    price: 1755.99,
    rating: 4,
  },
  {
    image: productImg3,
    category: "Men",
    title: "Shalwar Kameez",
    price: 2250,
    rating: 3,
  },
  {
    image: productImg4,
    category: 'Sports',
    title: 'Skates',
    price: 42000,
    rating: 4,
  },
  {
    image: productImg5,
    category: "Electronics",
    title: "Head phone",
    price: 30550,
    rating: 3,
  },
  {
    image: productImg6,
    category: "Women",
    title: "Sandal",
    price: 2755,
    rating: 3,
  },
  {
    image: productImg7,
    category: "Electronics",
    title: "Laptop",
    price: 84000,
    rating: 3,
  },
  {
    image: productImg8,
    category: "Men",
    title: "Sunglasses",
    price: 350,
    rating: 4,
  },
  {
    image: productImg9,
    category: 'Sports',
    title: 'Counter Skipping Rope',
    price: 750.46,
    rating: 3,
  },
  {
    image: productImg10,
    category: "Electronics",
    title: "Mini Refrigerator",
    price: 74500,
    rating: 4,
  },
  {
    image: productImg11,
    category: "Women",
    title: "Necklace",
    price: 440,
    rating: 4,
  },
  {
    image: productImg12,
    category: "Men",
    title: "Wrist Watch",
    price: 950,
    rating: 4,
  },
]

const Home = () => {
  const sectionTitle = ["Our Products"]

  const myLinkedList = createLinkedList();
myLinkedList.addToEnd('Item 1');
  myLinkedList.addToEnd('Item 2');
  myLinkedList.addToEnd('Item 3');
  myLinkedList.printList();
  myLinkedList.deleteItem('Item 2');
  myLinkedList.printList();

  const SliderImages = [image1, image2, image3, image4];

  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <ProductSection heading={sectionTitle} product={myProducts} />
    </div>
  );
};

export default Home;
