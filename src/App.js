
import {Routes,Route, useParams,Redirect} from 'react-router-dom'
import Contact from './Components/Contact';
import About from './Components/About';
import Post from './Components/Post'
import Home from './Components/Home';
import Header from './Components/Header';
import app from './Components/app.css'
import Products from './Components/Products';
import SingleProduct from './Components/SingleProduct';
import Footer from './Components/Footer';
import {Orders} from './Components/Orders';
import {LoginPage} from './Components/LoginPage';
import { useState } from 'react';


function App() {
  const[render,SetRender]=useState(false);
  
function renderHeader(id)
{

      SetRender(!id);
      console.log(render);
    

}

  return (
    <div className="App">
{render && <Header/>}
      {render && <Routes>
    
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/:ProductId' element={<SingleProduct/>}></Route>
        <Route path='/Post' element={<Post/>}> </Route>
        <Route path='/order/:id' element={<Orders/>}></Route>
        <Route path='/header' element={<Header/>}></Route>
       
      </Routes>}
      <Routes>
      {/* <Route path='*' element={<LoginPage/>} ></Route> */}
      <Route path='/' element={<LoginPage execut={renderHeader}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
