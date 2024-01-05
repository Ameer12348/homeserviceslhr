import React, { useEffect } from 'react'
import './Topnav.scss'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import gsap from 'gsap';


const Topnav = () => {
  useEffect(()=>{
    gsap.to('.gsap-fader',{
      opacity: 1,
      translate:'0% 0%',
      duration:0.4,
      stagger:0.1
    })
  },[])
  return (
    <div className='container-fluid p-0' style={{backgroundColor:'#1d2634'}}>
      <div className='d-flex justify-content-xl-between justify-content-center justify-content-md-start container p-0 align-items-center'>
        <ul className='m-0 d-flex align-items-center d-none d-xl-flex'>
          <li className='list-unstyled py-2 px-3 m-0 '><a className='text-decoration-none gsap-fader text-light' style={{fontSize:'16px'}} href="/"><FaFacebook /></a></li>
          <li className='list-unstyled py-2 px-3 '><a className='text-decoration-none gsap-fader text-light' style={{fontSize:'16px'}} href="/"><FaGoogle/></a></li>
          <li className='list-unstyled py-2 px-3 '><a className='text-decoration-none gsap-fader text-light' style={{fontSize:'16px'}} href="/"><RiTwitterXFill/></a></li>
          <li className='list-unstyled py-2 px-3 '><a className='text-decoration-none gsap-fader text-light' style={{fontSize:'16px'}} href="/"><FaYoutube/></a></li>
        </ul>
        <ul className='d-flex m-0 align-items-center flex-wrap'>
          <li className='list-unstyled py-1  py-sm-2 px-1 px-sm-3  top-nav-lists m-0'                        ><a className='text-decoration-none gsap-fader ' style={{fontSize:'14px',color:'rgba(256,256,256,0.6)'}} href="/">FAQs</a></li>
          <li className='list-unstyled py-1  py-sm-2 px-1 px-sm-3  top-nav-lists' style={{border:'none'}}><a className='text-decoration-none gsap-fader ' style={{fontSize:'14px',color:'rgba(256,256,256,0.6)'}} href="tel:+923254430008">+92325-4430008</a></li>
          <li className='list-unstyled py-1  py-sm-2 px-1 px-sm-3  top-nav-lists'                        ><a className='text-decoration-none gsap-fader ' style={{fontSize:'14px',color:'rgba(256,256,256,0.6)'}} href="/">Information</a></li>
        </ul> 
      </div>
    </div>
  )
}

export default Topnav