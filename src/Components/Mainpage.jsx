import React, { useEffect, useState } from 'react'
import './Styling/Mainpage.css'
import { BiLogoFacebook,BiLogoTwitter } from "react-icons/bi";
import { AiOutlineInstagram} from "react-icons/ai";
import {GrLinkedinOption} from "react-icons/gr"

import Fresh from '../Assets/Fresh.png'
import Look from '../Assets/Look.png'
import y2022 from '../Assets/y2022.png'
import group from '../Assets/Group 15.png'
import group1 from '../Assets/Group 151.png'
import lory  from '../Assets/Layer 156.png'
import menu  from '../Assets/menu.png'
import cross  from '../Assets/cross.png'
import seemore from '../Assets/seemore.png'
import axios from 'axios';


const Mainpage = ({setSelected}) => {
 const [products,setProducts] = useState([])
 const [isOpen, setIsOpen] = useState(false);
 useEffect(()=>{
  const call =async()=>{
    const res = await axios.get('https://fakestoreapi.com/products/categories')
    setProducts(res.data)
  }
  call()
 },[])

  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products', id: 'product', child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ]
    },
    { name: 'Contact Us', id: 'contact' },
  ];
  return (
    <div className='main-container'>
      <div className="head">
        <div className='item item1'><img  id='lory'src={lory}></img><div className='free'>Free Delivery </div><div className='ver'>|</div> <div className='return'>Return Policy</div></div>
        <div className='head-2 item'>
          <div>Login</div>
          <div className='follow'>
            <div id='follow-us'>Follow US</div>
            <BiLogoFacebook className='icon' />
            <GrLinkedinOption className='icon' />
            <BiLogoTwitter className='icon' />
            <AiOutlineInstagram className='icon' />
            
          </div>
        </div>
      </div>
      <div className='main-head-1'>
        <div className='shopkart'>ShopKart</div> 
        <div>{isOpen ?<img src={cross} onClick={()=>setIsOpen(prev=>!prev)} className='menu' ></img>:<img onClick={()=>setIsOpen(prev=>!prev)}  className='menu'src={menu}></img>}</div>
        <div className='head-1-sub1'>
          <div className='bold'>WISHLIST(0)</div>
          <div className='bold'>BAG(0)</div>
        </div>
      </div>
      <ul  className={`nav-bar ${isOpen ? 'active' : ''}`}>
        { 
          navbar.map(x => {
            return (
              <li className='bold items' id={x.id}><a 
              >{x.name}</a>
                {x.child && products.map((y,i) => <li  key={i} value={y} onClick={()=>{setSelected(y);setIsOpen(false)}} className='submenu pro'>{y}</li>)}
              </li>
            )
          })
        }
      </ul>
      <div className='section-foot'>
        <div className='logo'><img src={group}></img></div>
        <div className='logo1'><img src={group1}></img></div>
        <div className='fresh'><img src={Fresh}></img></div>
        <div className='Year'><img src={y2022}></img></div>
        <div className='Look'><img src={Look}></img></div>
        <img className='seemore' src={seemore}></img>
      </div>

    </div>
  )
}

export default Mainpage