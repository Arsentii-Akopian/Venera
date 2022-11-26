import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import instance from "../../axios";

const Product = () => {
    const params = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        instance.get(`/product/${params.id}`)
            .then(({data}) => {
                setProduct(data)
            })
    }, [])


    return (
        <div className='product'>
            <div className='container'>
                <div className='product__crumbs'>
                    <Link className='product__crumbs-link' to='/'>Home</Link> - <p
                    className='product__crumbs-product'>Product</p>
                </div>
                <div className="product__content">
                    <div className="product__content-left">
                        <img className='product__content-img' src={product.image} alt={product.title}/>
                    </div>
                    <div className="product__content-right">
                        <h2 className='product__content-title'>{product.title}</h2>
                        <p className='product__content-description'>{product.description}</p>
                        <p className='product__content-price'>{product.price} <span
                            className='product__content-currency'>CZK</span></p>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Product;