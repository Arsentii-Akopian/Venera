import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "../../axios";

const Home = () => {
    const [product,setProduct]= useState([])
    useEffect( ()=> {
        axios.get('/product')
            .then(({data})=> {
            setProduct(data )
            }).catch(err => alert(err))
    }, [])

    return (
         <div className='home'>
             <div className="container">
                 <div className='home__content'>
                     {
                         product.map((item)=> (
                             <div className='home__card'>
                                 <Link className='home__link' to={`/product/${item.id}`}>
                                     <img className='home__img' src={item.image} alt=""/>
                                     <h2>{item.title}</h2>
                                     <p>{item.description}</p>
                                     <span>{item.price} CZK</span>
                                 </Link>
                             </div>
                         )) }
                 </div>
             </div>
         </div>
    );
};

export default Home;