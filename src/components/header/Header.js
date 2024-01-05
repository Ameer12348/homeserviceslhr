import React, { useEffect, useRef } from 'react'
import './Header.scss'
import Glide from '@glidejs/glide'
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import Marquee from 'react-fast-marquee';
import gsap from 'gsap';




const Header = () => {
  const search = useRef()
  const searchBtn = useRef()
  const nav_links = useRef();
  let nav_links_toggle = 1
  useEffect(()=>{
    new Glide('.glide',{
      type:'slider',
      autoplay:5000,
      animationDuration:1000,
      perView:1,
      hoverpause:true
      

    }).mount()
    gsap.to('.gsap-fader-2',{
      opacity:'1',
      translate:'0% 0%',
      delay:1,
      duration:0.4,
      stagger:0.1
    })

  },[])
  let searchBtnToggle = 0
  return (
    <div className='container-fluid p-0 m-0'>
    {/* ---------------------------------------- main navigation bar --------------------------------------- */}

    {/* ----------------------------------------- logo and search section start -------------------------- */ }
        <div className="container ">
        <div className="row justify-content-between p-2 ">
            <div id="logo" className='col-3 d-flex align-items-center gsap-fader-2' style={{width:'160px'}}>
                <img className='img-fluid' src="https://renovation.thememove.com/data/images/logo.png" alt="" />
            </div>
            <div className='d-xl-none col-4 d-flex justify-content-end'>
              <button className='border-0 cursor-pointer  rounded ' style={{fontSize:'30px',backgroundColor:'white'}} onClick={()=>{
                if (nav_links_toggle === 1) {
                  nav_links.current.style = 'width:256px;visibility:visible'
                  nav_links_toggle = 0;
                }
                else{
                  nav_links.current.style = 'width:0px:visibility:hidden'
                  nav_links_toggle = 1;

                }
              }}>
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
            <div id='search' className='d-flex m-auto m-sm-0 col-xl-auto align-items-center justify-content-sm-end justify-content-center position-relative '>
              <input type="text" placeholder='Search...'  className='position-absolute input-search  visibility-hidden ' ref={search}    />
              <button className='search-btn pb-2 text-center text-light p-2 gsap-fader-2' ref={searchBtn} onClick={()=>{
                if (searchBtnToggle ===0) {
                  search.current.style = 'width:300px;visibility:visible';
                  searchBtn.current.innerHTML = '<i class="fa-solid fa-xmark"></i>'
                  searchBtnToggle = 1;
                  search.current.focus();
                } else {
                  search.current.style = 'width:0px;visibility:hidden;';
                  searchBtn.current.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>'
                  searchBtnToggle = 0;
                  
                }
              }} style={{clipPath:'polygon(20% 10%, 80% 10%, 100% 50%, 80% 90%, 20% 90%, 0 50%)',border:'none',backgroundColor:'#1d2634',width:'50px',height:"50px",fontSize:"20px"}}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
        </div>
        {/* ----------------------------------------- logo and search section end -------------------------- */ }

        {/* ----------------------------------------- main navigation links start ------------------------------ */}

        <div className='container-fluid main-nav-container p-0 m-0 '>
            <nav className='container p-0'>
                <ul className='d-xl-flex nav-links-ul m-0  p-xl-0  ' ref={nav_links}>
                <div className='d-xl-none d-flex justify-content-center'>
                    <button className='border-0 ' style={{backgroundColor:'white'}} onClick={()=>{
                      if (nav_links_toggle ===0) {
                        nav_links.current.style = 'width:0px:visibility:hidden'
                        nav_links_toggle = 1;
                      }
                    }}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <ul className='m-0 p-0 d-flex align-items-center justify-content-center d-flex d-xl-none'>
                      <li className='list-unstyled py-3 px-3 m-0'><a className='text-decoration-none text-dark' style={{fontSize:'16px'}} href="/"><FaFacebook /></a></li>
                      <li className='list-unstyled py-2 px-3 '><a className='text-decoration-none text-dark' style={{fontSize:'16px'}} href="/"><FaGoogle/></a></li>
                      <li className='list-unstyled py-2 px-3 '><a className='text-decoration-none text-dark' style={{fontSize:'16px'}} href="/"><RiTwitterXFill /></a></li>
                      <li className='list-unstyled py-2 px-3 '><a className='text-decoration-none text-dark' style={{fontSize:'16px'}} href="/"><FaYoutube/></a></li>
                </ul>
                  <li className='list-unstyled first-nav-li current'><a href='/' className='text-decoration-none text-xl-light text-nowrap gsap-fader-2'>HOME</a></li>
                  <li className='list-unstyled position-relative our-services-toggle' style={{cursor:'pointer'}}>
                    <a href='/' className='text-decoration-none about-us-toggle2 text-nowrap gsap-fader-2' onClick={(e)=>{e.preventDefault();}}>OUR SERVICES</a>
                    <ul className='row row-cols-xl-4  our-services-links' >
                        <li className='list-unstyled py-0 m-0'>
                            <ul className='p-0'>
                                <li className='list-unstyled p-xl-3 m-0'><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>A/C Technician</a></li>
                                <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Electrical</a></li>
                                <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Carpenter</a></li>
                                <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Solar Panels Installation</a></li>
                                <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Plumber</a></li>
                                <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Painting</a></li> 
                                <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>UPS Repairing</a></li> 
                                <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Washing Machine</a></li> 

                            </ul>
                        </li>
                        <li className='list-unstyled py-0 m-0'>
                            <ul className='p-0'>
                              <li className='list-unstyled p-xl-3 m-0'><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Ceilings Renovation</a></li> 
                              <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Glass & Window Installation</a></li> 
                              <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Cleaning</a></li> 
                              <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Mason</a></li> 
                              <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Builder</a></li> 
                              <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Interior Design</a></li> 
                              <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Juicer Machine Repairing</a></li> 
                              <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Geyser Repairing</a></li> 

                            </ul>
                        </li>
                        <li className='list-unstyled py-0 m-0'>
                          <ul className='p-0'>
                              <li className="list-unstyled p-xl-3 m-0"><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Elevators & Lifts</a></li>
                              <li className="list-unstyled p-xl-3 "><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Car Elevators</a></li>
                              <li className="list-unstyled p-xl-3 "><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Cargo Lift</a></li>
                              <li className="list-unstyled p-xl-3 "><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Bed Lift</a></li>
                              <li className="list-unstyled p-xl-3 "><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Passenger Lift</a></li>
                              <li className="list-unstyled p-xl-3 "><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Construction</a></li>
                              <li className="list-unstyled p-xl-3 "><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Pick & Drop</a></li>
                              <li className="list-unstyled p-xl-3 "><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>LCD Repairing</a></li>
                          </ul>
                        </li>
                        <li className='list-unstyled py-0 m-0'>
                          <ul className='p-0'>
                                  <li className='list-unstyled p-xl-3 m-0'><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Fridge Fitting</a></li>
                                  <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Moving & Packing</a></li>
                                  <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Landscape</a></li>
                                  <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Finishing</a></li>
                                  <li className='list-unstyled p-xl-3 '><a href="/"  className='text-decoration-none text-dark' style={{fontWeight:'400'}}>Renovation</a></li>

                          </ul>
                        </li>
                    </ul>
                  </li>
                  <li className='list-unstyled solar-panel-toggle' style={{cursor:'pointer'}}>
                    <a href='/' className='text-decoration-none text-nowrap gsap-fader-2'>SOLAR PANELS INSTALLATION</a>
                    <ul className='row row-cols-xl-1 solar-panel-links p-xl-0'>
                        <li className="list-unstyled p-xl-3 m-0"><a href="/" className="text-decoration-none text-dark" style={{fontWeight:'400'}}>1kW Solar System</a></li>
                        <li className="list-unstyled p-xl-3"><a href="/" className="text-decoration-none text-dark" style={{fontWeight:'400'}}>2kW Solar System</a></li>
                        <li className="list-unstyled p-xl-3"><a href="/" className="text-decoration-none text-dark" style={{fontWeight:'400'}}>3kW Solar System</a></li>
                        <li className="list-unstyled p-xl-3"><a href="/" className="text-decoration-none text-dark" style={{fontWeight:'400'}}>4kW Solar System</a></li>
                        <li className="list-unstyled p-xl-3"><a href="/" className="text-decoration-none text-dark" style={{fontWeight:'400'}}>5kW Solar System</a></li>
                        <li className="list-unstyled p-xl-3"><a href="/" className="text-decoration-none text-dark" style={{fontWeight:'400'}}>6kW Solar System</a></li>
                        <li className="list-unstyled p-xl-3"><a href="/" className="text-decoration-none text-dark" style={{fontWeight:'400'}}>7kW Solar System</a></li>
                        <li className="list-unstyled p-xl-3"><a href="/" className="text-decoration-none text-dark" style={{fontWeight:'400'}}>8kW Solar System</a></li>
                        <li className="list-unstyled p-xl-3"><a href="/" className="text-decoration-none text-dark" style={{fontWeight:'400'}}>9kW Solar System</a></li>
                        <li className="list-unstyled p-xl-3"><a href="/" className="text-decoration-none text-dark" style={{fontWeight:'400'}}>10kW Solar System</a></li>
                      
                    </ul>
                  </li>
                  <li className='list-unstyled'><a href='/' className='text-decoration-none text-nowrap gsap-fader-2'>BOOK NOW</a></li>
                  <li className='list-unstyled'><a href='/' className='text-decoration-none text-nowrap gsap-fader-2'>PRICING</a></li>
                  <li className='list-unstyled about-us-toggle'>
                    <a href='/' className='text-decoration-none text-nowrap gsap-fader-2'>ABOUT US</a>
                    <ul className='p-xl-0 row row-cols-xl-1 about-us-links'>
                      <li className="list-unstyled p-xl-3"><a href="/" className='text-decoration-none text-dark ' style={{fontWeight:'400'}}>Our Team</a></li>
                      <li className="list-unstyled p-xl-3"><a href="/" className='text-decoration-none text-dark' style={{fontWeight:'400'}}>FAQs</a></li>
                    </ul>
                  </li>
                  <li className='list-unstyled'><a href='/' className='text-decoration-none text-nowrap gsap-fader-2'>CONTACT US</a></li>
                </ul>
              
            </nav>
        </div>
        {/* ----------------------------------------- main navigation links end ------------------------------ */}

        {/* ------------------------------------- glide section start---------------------------------*/ }
        <div className="glide ">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
             <li className="glide__slide " style={{background:'url("https://homeserviceslhr.com/wp-content/uploads/2018/02/electracion.jpg") no-repeat top center /cover'}} >
                <h1>Wanted an Electrician</h1>
                <p className='text-warning'>Leave it to us.</p>
                <button className='btn btn-warning px-xl-5 runded rounded-pill'>Book Now</button>
             </li>
             <li className="glide__slide " style={{background:'url("https://homeserviceslhr.com/wp-content/uploads/2018/02/carpenter-1.jpg") no-repeat top center /cover'}} >
                <h1>WE CAN DO ANYTHING</h1>
                <p className='text-warning'>+923254430008</p>
                <button className='btn btn-warning px-xl-5 runded rounded-pill'>Call Now</button>
             </li>
              <li className="glide__slide " style={{background:'url("https://homeserviceslhr.com/wp-content/uploads/2018/03/Solar-energy-1.jpg") no-repeat top center /cover'}} >
                  <h1 className='text-warning'>Residential</h1>
                  <p className='text-dark'>Solar Solutions</p>
              </li>
              <li className="glide__slide " style={{background:'url("https://homeserviceslhr.com/wp-content/uploads/2018/02/plumber.jpg") no-repeat top center /cover'}} >
                  <h1>PROFESSIONAL</h1>
                  <p className='text-warning'>SERVICEMEN</p>
                <button className='btn btn-warning px-xl-5 runded rounded-pill'>Book Now</button>

              </li>

            </ul>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left border-0" data-glide-dir="<"><i className="fa-solid fa-less-than"></i></button>
            <button className="glide__arrow glide__arrow--right border-0" data-glide-dir=">"><i className="fa-solid fa-greater-than"></i></button>
          </div>
        </div>
        {/* ------------------------------------- glide section end---------------------------------*/ }

        {/* ------------------------------------- marquee section---------------------------------*/}
        <div className='container bg-warning p-0 my-4'>
          <Marquee>
            <p className='m-0 p-2' style={{fontSize:'18px'}}>Welcome to Home Services Lahore. Handyman services can be seen here</p>
          </Marquee>
        </div>
    </div>
  )
}

export default Header