import React, { useEffect } from 'react'
import './Achievment.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Achievment = () => {
  
  useEffect(()=>{
    gsap.to('.gsap-fade-3',{
      translate:'0% 0%',
      opacity:'1',
      duration:0.6,
      delay:0.2,
      stagger:0.2,
      scrollTrigger:{
        trigger:'.trigger-1',
        scroller:'body',
        markers:'true',
        start:'top 90%'
      }
    })
    const metertimeline = gsap.timeline()
  },[])
  
  return (
    <div className='container p-0'>
    <h2 style={{fontSize:'24px',fontWeight:'700'}} className='text-center my-4 py-1 trigger-1 gsap-fade-3'>How it Works?</h2>
    <div className="row row-cols-1 row-cols-lg-4 mb-5  p-2" style={{backgroundColor:'#fbd232'}}>
        <div><h2 className='text-center gsap-fade-3' style={{fontSize:'22px',whiteSpace:'nowrap',fontWeight:'600'}}>Book Service</h2></div>
        <div><h2 className='text-center gsap-fade-3' style={{fontSize:'22px',whiteSpace:'nowrap',fontWeight:'600'}}>Handyman Arrives</h2></div>
        <div><h2 className='text-center gsap-fade-3' style={{fontSize:'22px',whiteSpace:'nowrap',fontWeight:'600'}}>Job Done</h2></div>
        <div><h2 className='text-center gsap-fade-3' style={{fontSize:'22px',whiteSpace:'nowrap',fontWeight:'600'}}>Satisfaction Guranteed</h2></div>
    </div>
    <h2 style={{fontSize:'24px',fontWeight:'700'}} className='text-center mb-4 py-1'>Our Projects</h2>
    <div className="row row-cols-1 row-cols-lg-2 mb-5 g-5">
      <div className="col px-5">
        <div className='d-flex justify-content-between mb-3'>
          <h4>Painter</h4>
          <h4>155</h4>
        </div>
        <div className="meter-div w-100 mb-2">
            <div className="meter meter-1" ></div>
        </div>
      </div>
      <div className="col px-5">
        <div className='d-flex justify-content-between mb-3'>
          <h4>Carpenter</h4>
          <h4>100</h4>
        </div>
        <div className="meter-div w-100 mb-2">
            <div className="meter meter-2" ></div>
        </div>
      </div>
      <div className="col px-5">
        <div className='d-flex justify-content-between mb-3'>
          <h4>Plumber</h4>
          <h4>160</h4>
        </div>
        <div className="meter-div w-100 mb-2">
            <div className="meter meter-3" ></div>
        </div>
      </div>
      <div className="col px-5">
        <div className='d-flex justify-content-between mb-3'>
          <h4>Electrical</h4>
          <h4>100</h4>
        </div>
        <div className="meter-div w-100 mb-2">
            <div className="meter meter-4" ></div>
        </div>
      </div>
    </div>
    <h2 className='text-center mt-5' style={{fontSize:"32px",fontWeight:"700"}}>Testimonials</h2>
    <div className='mx-3 mx-sm-2 mb-5 position-relative' style={{border:'3px solid #fbd232',padding:'30px 20px 30px 80px',fontSize:'18px',color:'rgba(51, 51, 51, 0.7)'}}><i className="fa-solid fa-quote-left position-absolute" style={{top:'10px',left:'20px',color:'#fbd232',fontSize:'50px'}}></i> <em> Servicemen came to visit to try and do a number of odd jobs and did nice work. fastened a window, a sink, associate degreed an electrical plug all for an inexpensive value. I glad along with his work and your services. Would positively use them once more </em></div>
    <h4 className='mx-3 mx-sm-2 mb-5' style={{fontSize:"18px",fontWeight:'700'}}>Ghulam Ishaq</h4>
    <div className='mx-3 mx-sm-2 mb-5 position-relative' style={{border:'3px solid #fbd232',padding:'30px 20px 30px 80px',fontSize:'18px',color:'rgba(51, 51, 51, 0.7)'}}><i className="fa-solid fa-quote-left position-absolute" style={{top:'10px',left:'20px',color:'#fbd232',fontSize:'50px'}}></i> <em> I have used the services of your company on many occasions. Your servicemen measures continuously attractive, prompt and economical. The work performed has been excellent and as delineate. I even have confidence in recommending their services to anyone.</em></div>
    <h4 className='mx-3 mx-sm-2 mb-5' style={{fontSize:"18px",fontWeight:'700'}}>Rashid Akhtar</h4>
    <div className='mx-3 mx-sm-2 mb-5 position-relative' style={{border:'3px solid #fbd232',padding:'30px 20px 30px 80px',fontSize:'18px',color:'rgba(51, 51, 51, 0.7)'}}><i className="fa-solid fa-quote-left position-absolute" style={{top:'10px',left:'20px',color:'#fbd232',fontSize:'50px'}}></i> <em> Your Servicemen have worked as expected. Even I come in the early morning or at night time they are available and do the work prompt and effective. they’re friendly and includes a careful form of work. I’m satisfied and advocate the alternative to use your services.</em></div>
    <h4 className='mx-3 mx-sm-2 mb-5' style={{fontSize:"18px",fontWeight:'700'}}>Kiran</h4>
    <h1 className='text-center mb-5 mx-4' style={{fontSize:'22px'}}>You can Book or Call us for Handyman Services in Lahore <br/>
    @ +923214707808</h1>
    <div className="row justify-content-center row-cols-sm-2 row-cols-1 mb-5">
      <div className="col-sm-5 col-md-4 col-lg-3 py-2 px-5 px-sm-2"><button className='book-btn-1'>Book Now</button></div>
      <div className="col-sm-5 col-md-4 col-lg-3 py-2 px-5 px-sm-2"><button className='book-btn-2'>Pricing</button></div>
    </div> 

    </div>
  )
}

export default Achievment