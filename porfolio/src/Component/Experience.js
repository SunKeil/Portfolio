import React from 'react'
import exp from "../img/exp.png"
import AOS from "aos"
import "aos/dist/aos.css"
import  { useEffect } from 'react'

function Experience() {
    useEffect(()=>{
        AOS.init({duration: 1000})
      },[])

    const expdetails = [
        {title: "Front-End Developer (Webflow)", company: "Brylliant Solutions · Full-time", address: "Davao Region, Philippines",
         date: "Dec 2021 - May 2022 · 6 mos", details: "We build websites using a web tool called Webflow as quickly as we can, we converted a UIUX design to create a working website within the allotted time. If the web design is complete we  deliver the site as fast as one week, I manage to handle  and contribute for three different clients and 10+ side projects.",
          icon: require("../img/tridown.png")},
        {title: "User Experience Designer", company: "Payruler · Internship", address: "Gorordo Avenue, Lahug,Cebu City, Cebu, PH",date: "Jul 2022 - Sep 2022 · 3 mos", details:"As an ux designer, I created a system for scanning certificates to confirm the authenticity of the owner's work experience and position relative to prior employment. I also contibute fully construct an existing design system for the major project the company is currenlty developing.",
         icon: require("../img/tridown.png")},
         {title: "Kodego fullstack development", company: "Kodego Bootcamp ", address: "18th Floor, W Fifth, 5th Avenue, Taguig, 1630 Metro Manila",
         date: "Jan 2023 - May 2023 · 4 mos", details:"I created and design  and also lead a full-stack websites such as e-commerce sites, blogs, shoe stores, and so on. The development tools used were Bootstrap, React JS, Laravel, mySQL, and mongoDB. Additionally, we study teamwork and collaborative work using Github and Figma. The bootcamp's qualified instructors also offer insightful advise and strategies for the whole development process.",
         icon: require("../img/tridown.png")},
    ]

  return (
    <div>
        <div className='container text-center mt-5'>
            <img src={exp} alt='exp' className='img-fluid'data-aos= "fade-up"/>
            
            {
                expdetails.map((exp)=>{
                    return(
                <div className='exp-wrapper row m-5'>
                    <div className='col-sm-6 col-md-5 mb-5'>
                        <div className='exp-title 'data-aos= "fade-up">
                            <img src={exp.icon} alt='exp' className='pe-2 img-fluid '/>
                            <h4 className='pt-1'>{exp.title}</h4>
                        </div>
                        <div className='ps-5 '>
                            <p data-aos= "fade-up">{exp.company}</p>
                            <p data-aos= "fade-up">{exp.address}</p>
                        </div>
                    </div>
                    <div className=' ps-5 col-sm-6 col-md-7 ' >
                        <h4 data-aos= "fade-up">{exp.date}</h4>
                        <p data-aos= "fade-up">{exp.details}</p>
                    </div>
                </div>
                    )
                })
            }
            
        </div>

    </div>
  )
}

export default Experience
