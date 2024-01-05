import './Footer.scss'
import React, { useEffect } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)


const Footer = () => {
    useEffect(()=>{
        gsap.to('.footer-container li',{
            opacity:'1',
            translate:'0% 0%',
            duration:0.6,
            stagger:0.01,
            scrollTrigger:{
                trigger:'.footer-container',
                scroller:'body',
                start:'top 90%'
            }
        })
    },[])

  return (
    <div className='container-fluid p-0 m-0 footer-container'>
        <div className="container">
            <div className="row row-cols-xl-3 gx-5 row-cols-1 py-5 position-relative">
                <div className="col">
                    <h4 style={{fontSize:'20px',color:'white',paddingBottom:'30px',borderBottom:'2px solid #fbd232'}}> Contact </h4>
                    <ul className='p-xl-0 ps-4'>
                        <li className='m-0 list-unstyled py-1 ' style={{fontSize:'14px',color:'#adb0b6'}}><i className="fa-solid fa-location-dot d-inline-block me-3" ></i> Office no 3A, 91 G, Block G DHA Phase 1,DHA,Lahore, 54000.</li>
                        <li className='list-unstyled     py-1'     style={{fontSize:'14px',color:'#adb0b6'}}><i className="fa-solid fa-phone d-inline-block me-3" ></i>  +92327-8867717</li>
                        <li className='list-unstyled     py-1'     style={{fontSize:'14px',color:'#adb0b6'}}><i className="fa-solid fa-envelope d-inline-block me-3" ></i>  info@homeserviceslhr.com</li>
                        <li className='list-unstyled     py-1'     style={{fontSize:'14px',color:'#adb0b6'}}><i className="fa-regular fa-clock d-inline-block me-3" ></i> Mon - Sun: 9:00 - 18:00</li>
                    </ul>
                </div>
                <div className="col">
                    <h4 style={{fontSize:'20px',color:'white',paddingBottom:'30px',borderBottom:'2px solid #fbd232'}}> Our Services </h4>
                    <ul className="row row-cols-sm-2 row-cols-1 p-xl-0 ps-4">
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Bathroom</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Bedroom</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Builder</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Burglar Alarm Systems</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Careers</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Carpenter</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Ceilings Renovation</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Cleaning</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Dining Room</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  FAQS</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Finishing</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Fire Rated Doors</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Fridge Fitting</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Kitchen</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Landscape</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  LCD Repairing</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Living Room</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Mason</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Member Ship Packages</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Moving and Packing</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Nursery</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Pricing</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Public Address Systems</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Renovation</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}><span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span>  Glass & Window Installation</li>
                    </ul>
                </div>
                <div className="col">
                    <h4 style={{fontSize:'20px',color:'white',paddingBottom:'30px',borderBottom:'2px solid #fbd232'}}> Home Services </h4>
                    <ul className="row row-cols-sm-2 row-cols-1 p-xl-0 ps-4">
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Home</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Bathroom</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Our Services</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> A/C Technician</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Builder</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Electrical</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Fridge Fitting</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Generator Maintenance</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Geyser Repairing</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Interior Design</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Juicer Machine Repairing</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> LCD Repairing</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Painting</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Solar Panels Installation</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> UPS Repairing</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Moving and Packing</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Pick And Drop</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> UPS Repairing</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Washing Machine</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Constructors</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Plumber</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Gallery</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Bed Lift</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Car Elevators</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Cargo Lift</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Elevators and Lifts</li>
                        <li className="col list-unstyled text-nowrap py-1" style={{color:'#adb0b6',fontSize:'14px'}}> <span style={{fontSize:'10px',marginRight:'5px'}}><i className="fa-solid fa-greater-than"></i></span> Passenger Lift</li>
                        
                    </ul>
                </div>

                <div className='d-flex justify-content-end footer-navigation d-none d-xl-flex p-0' >
                <button className='border-0 ' ><FaFacebook /></button>
                <button className='border-0 ' ><FaGoogle/></button>
                <button className='border-0 ' ><RiTwitterXFill/></button>
                <button className='border-0 ' ><FaYoutube/></button>
                
                </div>
            </div>
        </div>
        <div className='py-xl-5 py-4 px-4' style={{backgroundColor:'#1d2637'}}>
        <p className=' text-center m-0' style={{fontSize:'14px',color:'#adb0b6'}}>Made with <FaHeart /> By: First Idea Web Development.</p>
        </div>

    </div>
  )
}

export default Footer
