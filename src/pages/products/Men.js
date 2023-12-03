import React from "react";
import { Navbar } from "react-bootstrap";
import Footer from "../../components/Common/Footer";
import ProductSection from "../../components/ProductSection/ProductSection";
import menImg1 from "../../assets/images/ProductImages/men/jacket1.PNG"
import menImg2 from "../../assets/images/ProductImages/men/jeans1.PNG"
import menImg3 from "../../assets/images/ProductImages/men/f1.PNG"
import menImg4 from "../../assets/images/ProductImages/men/boot1.PNG"
import menImg5 from "../../assets/images/ProductImages/men/cleanser1.PNG"
import menImg6 from "../../assets/images/ProductImages/men/handkerchief1.PNG"
import menImg7 from "../../assets/images/ProductImages/men/moisturizer1.PNG"
import menImg8 from "../../assets/images/ProductImages/men/pant1.PNG"
import menImg9 from "../../assets/images/ProductImages/men/pocket watch1.PNG"
import menImg10 from "../../assets/images/ProductImages/men/sandals1.PNG"
import menImg11 from "../../assets/images/ProductImages/men/shampoo.PNG"
import menImg12 from "../../assets/images/ProductImages/men/shalwar kameez1.PNG"
import menImg13 from "../../assets/images/ProductImages/men/shaving1.PNG"
import menImg14 from "../../assets/images/ProductImages/men/shower gel1.PNG"
import menImg15 from "../../assets/images/ProductImages/men/shirt1.PNG"
import menImg16 from "../../assets/images/ProductImages/men/shoe1.PNG"
import menImg17 from "../../assets/images/ProductImages/men/slippers1.PNG"
import menImg18 from "../../assets/images/ProductImages/men/sunglasses1.PNG"
import menImg19 from "../../assets/images/ProductImages/men/sunscreen1.PNG"
import menImg20 from "../../assets/images/ProductImages/men/smart watch1.PNG"
import menImg21 from "../../assets/images/ProductImages/men/wallets1.PNG"
import menImg22 from "../../assets/images/ProductImages/men/watch band1.PNG"
import menImg23 from "../../assets/images/ProductImages/men/wrist watch1.PNG"




const MenProducts = () => {
    const sectionTitle= ["Men's Collection"]
    const men = [
        {
            image: menImg1,
            category: "Men",
            title: "Jacket",
            price: 2300,
            rating: 3,
        },
        {
            image: menImg2,
            category: "Men",
            title: "Jeans",
            price: 1799.56,
            rating: 3,
        },
        {
            image: menImg3,
            category: "Men",
            title: "Perfume",
            price: 1700,
            rating: 3,
        },
        {
            image: menImg4,
            category: "Men",
            title: "Boots",
            price: 2000.75,
            rating: 4,
        },
        {
            image: menImg5,
            category: "Men",
            title: "Cleanser",
            price: 850,
            rating: 2,
        },
        {
            image: menImg6,
            category: "Men",
            title: "Handkerchief",
            price: 350,
            rating: 3,
        },
        {
            image: menImg7,
            category: "Men",
            title: "Moisturizer",
            price: 650.55,
            rating: 3,
        },
        {
            image: menImg8,
            category: "Men",
            title: "Pant",
            price: 1290,
            rating: 4,
        },
        {
            image: menImg9,
            category: "Men",
            title: "Pocket Watch",
            price: 2200,
            rating: 4,
        },
        {
            image: menImg10,
            category: "Men",
            title: "Sandals",
            price: 1345,
            rating: 3,
        },
        {
            image: menImg11,
            category: "Men",
            title: "Shampoo",
            price: 175,
            rating: 2,
        },
        {
            image: menImg12,
            category: "Men",
            title: "Shalwar Kameez",
            price: 2250,
            rating: 3,
        },
        {
            image: menImg13,
            category: "Men",
            title: "Shaving Set",
            price: 1730,
            rating: 4,
        },
        {
            image: menImg14,
            category: "Men",
            title: "Shower Gel",
            price: 400,
            rating: 2,
        },
        {
            image: menImg15,
            category: "Men",
            title: "T-Shirt",
            price: 1280,
            rating: 4,
        },
        {
            image: menImg16,
            category: "Men",
            title: "Shoes",
            price: 1060,
            rating: 3,
        },
        {
            image: menImg17,
            category: "Men",
            title: "Slippers",
            price: 845,
            rating: 3,
        },
        {
            image: menImg18,
            category: "Men",
            title: "Sunglasses",
            price: 400,
            rating: 4,
        },
        {
            image: menImg19,
            category: "Men",
            title: "SunScreen",
            price: 280,
            rating: 3,
        },
        {
            image: menImg20,
            category: "Men",
            title: "Smart Watch",
            price: 955,
            rating: 4,
        },
        {
            image: menImg21,
            category: "Men",
            title: "Wallet",
            price: 377,
            rating: 3,
        },
        {
            image: menImg22,
            category: "Men",
            title: "Watch Band",
            price: 350,
            rating: 3,
        },
        {
            image: menImg23,
            category: "Men",
            title: "Wrist Watch",
            price: 750,
            rating: 4,
        },
    ]

    return (
        <div>
            <Navbar />
            <ProductSection heading={sectionTitle} product={men} />
            <Footer />
        </div>
    )
}

export default MenProducts