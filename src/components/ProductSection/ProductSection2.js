import React from "react";
import { menarray } from "../../pages/products/Men";
import { womenarray } from "../../pages/products/Women";
import { electronicsarray } from "../../pages/products/electronics";
import { sportsarray } from "../../pages/products/Sports";
import ProductCard from '../Card/ProductCard';

const MiniProducts = () => {
    const limitedObject1 = menarray.slice(0, 3);
    const limitedObject2 = womenarray.slice(0, 3);
    const limitedObject3 = electronicsarray.slice(0, 3);
    const limitedObject4 = sportsarray.slice(0, 3);
      
    return (
        <div>
            <div className='container my-4'>
                <h3 className='text-start'>Women</h3>
            </div>
            <div className='container my-4'>
                <div className='row'>
                    {limitedObject1.map((product, index) => (
                        <div key={index} className='col-4'>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='container my-4'>
                <h3 className='text-start'>Women</h3>
            </div>
            <div className='container my-4'>
                <div className='row'>
                    {limitedObject2.map((product, index) => (
                        <div key={index} className='col-4'>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='container my-4'>
                <h3 className='text-start'>Electronics</h3>
            </div>
            <div className='container my-4'>
                <div className='row'>
                    {limitedObject3.map((product, index) => (
                        <div key={index} className='col-4'>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='container my-4'>
                <h3 className='text-start'>Sports</h3>
            </div>
            <div className='container my-4'>
                <div className='row'>
                    {limitedObject4.map((product, index) => (
                        <div key={index} className='col-4'>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MiniProducts