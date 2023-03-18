import PRODUCTS from './Data';
import product from './product.css'
import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdMore } from "react-icons/io";
import Header from './Header';
import Footer from './Footer';

const Products = () => {

  let UserSearchPValue='';
  function ProductsSearch()
  {
     UserSearchPValue=document.getElementById("productvalue").value;
    console.log(UserSearchPValue);
  }

  return (
    
    <div className='products'>
          
                         <input type="text" id="productvalue" placeholder='Enter products'></input>
                         <button onClick={ProductsSearch}>Search</button>

              {PRODUCTS.map((product,index)=>
                {console.log(UserSearchPValue);

                  if(product.name==UserSearchPValue)
                  {
                    return( <h1>{product.name}</h1>)
                  }
                else
                 {
              return(
                <div className='items' key={product.id}>
                  <ul>
                <div className='items-name'> {product.name}</div><br></br>
                <div className='items-price'> {product.price}</div>
                <img src={product.image} className='list'></img> 
               
                <Link to={`/${product.id}`}><IoMdMore className='more-icon'/></Link>

                </ul>
                </div>
                
              )
             }
                
                  })}
   
 
    </div>
  )
}

export default Products;

{/* <main> */}
    {/* <div className='pg-header'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-7'>
            <h1>Products</h1>
          </div>
          <div className="col-lg-5">
            <nav>
              <ol className='breadcrumb justify-content-end'>
                <li className='"breadCrumb-item'>
                  <Link to='/'>Home</Link>
                </li>
                <li  className="breadCrumb-item active">Products</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className='container content'>
      <div className='row products-row'>
      {PRODUCTS.map((product)=>
      {
        return(
          <div className='col-lg-4' key={product.id}>
            <div className='card'>
              <div className='img-wrap'>
                <img src={product.image}></img>

              </div>
            </div>
          </div>
        )
      })}
      </div>
    </div> */}
    
    {/* </main> */}