import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PRODUCTS from './Data';
import singleproduct from './singleproduct.css'
import { TiArrowLeftThick } from "react-icons/ti";
import Footer from './Footer';
import {FcAdvance} from 'react-icons/fc'

export default function SingleProduct() {

const {ProductId}=useParams();
// console.log(ProductId);

const single=PRODUCTS.find(values=>
  {
    return values.id=== parseInt(ProductId);
  })
// console.log(single);
const {id,name,price,image,details}=single;

  return (
    <div className='single-product'>

       <div className='product-total'></div>
         <div className='product-1'>
            <div className='product-name'  title='come and buy'>{name}</div>
            <div className='product-price'>{price}</div>
            <div className='product-img'><img src={image}></img></div>
            <span className="offer">Offer Closes Soooon..!</span>
            <span>Description</span>
            <div className='product-details'>{details}</div>
            <div ><Link to={`/order/${id}`}  className="orders-link"><FcAdvance/></Link></div>
            <Link to={`/Products`}><TiArrowLeftThick className='back-icon'/></Link>
          </div>
{/* <Footer/> */}
    </div>
  )
}
