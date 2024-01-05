// Home.js
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import image1 from "../assets/images/banner-images/image1.webp"
import image2 from "../assets/images/banner-images/image2.webp"
import image3 from "../assets/images/banner-images/image3.webp"
import image4 from "../assets/images/banner-images/image4.png"
import HeroSection from "../components/HeroSection/HeroSection"
import CategoriesSection from "../components/CategoriesSection/Categories"
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
import { useDispatch } from 'react-redux';
import { setMenData } from '../redux/actions/menActions';
import menData from '../api/Men';
import wonenData from '../api/Women';
import electronic from '../api/Electronics';
import sports from '../api/Sports';
import { setWomenData } from '../redux/actions/womenActions';
import { setSportsData } from '../redux/actions/sportsAction';
import { setElectronicData } from '../redux/actions/electronicsAction';
import createStack from '../DSAFunctions/Stack';
import FeaturedProducts from '../components/Card/FeatureCard';

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


// components/YourComponent.js

const Home = () => {

  const newProduct = useSelector((state) => state?.newProduct);
  console.log(newProduct,"asdamsdaksda")

  // // const stack =  stack();
  // const stack = createStack()
  
  // stack.push(1);
  // stack.push(2);
  // stack.push(3);
  
  // console.log("Top of the stack:", stack.peek()); // Output: 3
  // stack.pop();
  // console.log("After pop, top of the stack:", stack.peek()); // Output: 2
  // console.log("Is the stack empty?", stack.isEmpty()); // Output: false
  // stack.print();

  const dispatch = useDispatch();

  // Dispatch action to set men data in Redux store
  useEffect(() => {
    dispatch(setMenData(menData));
    dispatch(setWomenData(wonenData));
    dispatch(setSportsData(sports));
    dispatch(setElectronicData(electronic));

    console.log("Dispatched")
  }, [dispatch]);

  const sectionTitle = ["Our Products"]

  const SliderImages = [image1, image2, image3, image4];

  return (
    <div>
      <img src={newProduct} />
      <FeaturedProducts product={newProduct}/>
      <HeroSection />
      <CategoriesSection />
      <ProductSection heading={sectionTitle} product={myProducts} />
    </div>
  );
};

export default Home;
