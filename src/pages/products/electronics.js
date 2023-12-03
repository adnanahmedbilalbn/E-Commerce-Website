import React from "react";
import Navbar from "../../components/Common/Navbar"
import Footer from "../../components/Common/Footer"
import ProductSection from "../../components/ProductSection/ProductSection";
import electronicImg1 from "../../assets/images/ProductImages/electronics/electronic-25.jpg"
import electronicImg2 from "../../assets/images/ProductImages/electronics/electronic-26.jpg"
import electronicImg3 from "../../assets/images/ProductImages/electronics/electronic-6.jpg"
import electronicImg4 from "../../assets/images/ProductImages/electronics/electronic-29.jpg"
import electronicImg5 from "../../assets/images/ProductImages/electronics/electronic-30.jpg"
import electronicImg6 from "../../assets/images/ProductImages/electronics/electronic-22.jpg"
import electronicImg7 from "../../assets/images/ProductImages/electronics/electronic-5.jpg"
import electronicImg8 from "../../assets/images/ProductImages/electronics/electronic-8.jpg"
import electronicImg9 from "../../assets/images/ProductImages/electronics/electronic-13.jpg"
import electronicImg10 from "../../assets/images/ProductImages/electronics/electronic-17.jpg"
import electronicImg11 from "../../assets/images/ProductImages/electronics/electronic-23.jpg"
import electronicImg12 from "../../assets/images/ProductImages/electronics/electronic-3.jpg"
import electronicImg13 from "../../assets/images/ProductImages/electronics/electronic-15.jpg"
import electronicImg14 from "../../assets/images/ProductImages/electronics/electronic-21.jpg"
import electronicImg15 from "../../assets/images/ProductImages/electronics/electronic-18.jpg"
import electronicImg16 from "../../assets/images/ProductImages/electronics/portable(electronic-27).jpg"
import electronicImg17 from "../../assets/images/ProductImages/electronics/electronic-12.jpg"
import electronicImg18 from "../../assets/images/ProductImages/electronics/electronic-20.jpg"
import electronicImg19 from "../../assets/images/ProductImages/electronics/electronic-13.jpg"
import electronicImg20 from "../../assets/images/ProductImages/electronics/electronic-25.jpg"
import electronicImg21 from "../../assets/images/ProductImages/electronics/electronic-5.jpg"
import electronicImg22 from "../../assets/images/ProductImages/electronics/split(electronic-28).jpg"
import electronicImg23 from "../../assets/images/ProductImages/electronics/electronic-31.jpg"



const ElectronicProduct = () => {
    const sectionTitle = ["Electonic's Collection"]
    const electronic = [
        {
            image: electronicImg1,
            category: 'Electronics',
            title: 'Samsung 32 inch LED',
            price: 12999.99,
            rating: 4,
        },
        {
            image: electronicImg2,
            category: 'Electronics',
            title: 'Window Air Conditioner',
            price: 42599.99,
            rating: 4,
        },
        {
            image: electronicImg3,
            category: 'Electronics',
            title: 'Mobile Phone',
            price: 62099.99,
            rating: 4,
        },
        {
            image: electronicImg4,
            category: 'Electronics',
            title: 'Quartz Electric Heater',
            price: 34299.99,
            rating: 4,
        },
        {
            image: electronicImg5,
            category: 'Electronics',
            title: 'iPad mini',
            price: 1299.99,
            rating: 4,
        },

        {
            image: electronicImg6,
            category: "Electronics",
            title: "Food Factory",
            price: 24500,
            rating: 3,
        },
        {
            image: electronicImg7,
            category: "Electronics",
            title: "Mobile Phone",
            price: 64055,
            rating: 3,
        },
        {
            image: electronicImg8,
            category: "Electronics",
            title: "Laptop",
            price: 74000,
            rating: 4,
        },
        {
            image: electronicImg9,
            category: "Electronics",
            title: "Head Phone",
            price: 2450,
            rating: 3,
        },
        {
            image: electronicImg10,
            category: "Electronics",
            title: "Glassware Door Refrigerator",
            price: 44700,
            rating: 3,
        },
        {
            image: electronicImg11,
            category: "Electronics",
            title: "Food Factory",
            price: 24000,
            rating: 3,
        },
        {
            image: electronicImg12,
            category: "Electronics",
            title: "Mobile Phone",
            price: 54050,
            rating: 3,
        },
        {
            image: electronicImg13,
            category: "Electronics",
            title: "Head Phone with pair of earpods",
            price: 1508,
            rating: 4,
        },
        {
            image: electronicImg14,
            category: "Electronics",
            title: "Sm Size Refrigerator",
            price: 24700,
            rating: 3,
        },
        {
            image: electronicImg15,
            category: "Electronics",
            title: "Glassware Double Door Refrigerator",
            price: 55478,
            rating: 4,
        },
        {
            image: electronicImg16,
            category: "Electronics",
            title: "Portable Air Conditioner",
            price: 44800,
            rating: 3,
        },
        {
            image: electronicImg17,
            category: "Electronics",
            title: "Head Phone",
            price: 3450.56,
            rating: 4,
        },
        {
            image: electronicImg18,
            category: "Electronics",
            title: "Mini Refrigerator",
            price: 20000,
            rating: 3,
        },
        {
            image: electronicImg19,
            category: "Electronics",
            title: "Head phone",
            price: 2448.95,
            rating: 3,
        },
        {
            image: electronicImg20,
            category: "Electronics",
            title: "LED",
            price: 64000,
            rating: 3,
        },
        {
            image: electronicImg21,
            category: "Electronics",
            title: "Mobile Phone",
            price: 40000,
            rating: 4,
        },
        {
            image: electronicImg22,
            category: "Electronics",
            title: "Split Air Conditioner",
            price: 84555,
            rating: 4,
        },
        {
            image: electronicImg23,
            category: "Electronics",
            title: "iPad",
            price: 24500,
            rating: 3,
        },
    ]

    return (
        <div>
            {/* <Navbar /> */}
            <ProductSection heading={sectionTitle} product={electronic} />
            <Footer />
        </div>
    )
}
export default ElectronicProduct
