import React, { useEffect, useRef } from 'react'
import './Feature.scss'
import {featuredata} from '../data/featuredata'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Feature = () => {
  const featurebox = useRef()
  
  useEffect(()=>{
     gsap.to('.feature-box',{
       opacity:'1',
       delay:0.2,
       stagger:0.1,
      duration:0.4,
      scrollTrigger:{
        trigger:'.feature-box',
        scroller:'body',
        start:'top 90%'
      }
    })
    gsap.to('.feature-headings',{
      delay:0.2,
      opacity:'1',
      transform:'translateY(0%)',
      stagger:0.2,
      scrollTrigger:{
        trigger:'.feature-headings',
        start:'top 90%',

      }
    })
  },[])
  return (
    <div className='container p-0'>
      <h3 className='text-center m-5 feature-headings' style={{fontSize:'18px'}}>We can handle professionally home and office Maintenance & Repair Construction, or Other Handyman Services in Lahore</h3>
      <h2 className='text-center m-5 feature-headings' style={{fontSize:'24px',color:'#6da70f'}}>We Start only at<span className='text-dark'> Rs. 500 </span> only!</h2>
      <h1 className='text-center mb-5 feature-headings' style={{fontSize:'32px'}}>We are offering following <br/> <span style={{color:'#6da70f'}}> Handyman</span> Services in <span style={{color:'#6da70f'}}>Lahore</span> </h1>
      <div className="row  row-cols-md-2 justify-content-center  justify-content-md-start row-cols-lg-3 row-cols-xl-4  g-5">
      {featuredata.map(data=>{
        return (
            <div key={data.title} className='d-flex flex-column align-items-center col-10 feature-box' ref={featurebox}>
              <div className="img-holder ">
                <img src={data.image} className='img-fluid' alt={data.title} />
              </div>
            <p className='w-100 position-relative feature-para py-3 ps-5 pe-3 text-nowrap mt-3 mb-5' style={{textAlign:'right',backgroundColor:'#fbd232',fontSize:'16px'}}> <i className={' feature-icon'}  > <i className={data.icon}></i> </i> {data.title} </p>
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default Feature