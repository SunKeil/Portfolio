import React, { useEffect } from 'react'
import projects from "../img/pro.png"
import divider from "../img/divider.png"
import AOS from "aos"
import "aos/dist/aos.css"
function Projects() {

  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])

  const cards = [
    {name: "FRIENDLY FAT", subname: "Low carb snacks and supplements made with 100% natural ingredients and healthy fats. No sugar. No bullshit.",
     img: require("../img/cards/friendly.png"), icon: require("../img/sshare.png"), link: "https://friendlyfat.com/"},
     {name: "BOOCH PLEASE", subname: "Den syrliga citronsmaken gör den annars jordiga rödbetan till en frisk och spännande törstsläckare med en iögonfallande",
     img: require("../img/cards/booch.png"), icon: require("../img/sshare.png"), link: "https://www.boochplease.com/"},
     {name: "DARDOCS", subname: "Delivering healthcare services like nobody else.Get seamless service, eliminate frustration and live healthy lives.",
     img: require("../img/cards/dardocs.png"), icon: require("../img/sshare.png"), link: "https://www.dardoc.com/"},
     {name: "AIQUIRE", subname: "Payruler - The most comprehensive HRMS and payroll system in the Philippines",
     img: require("../img/cards/aiquire.png"), icon: require("../img/sshare.png"), link: "https://payruler.com/"},
     {name: "PAYRULER", subname: "Payruler - The most comprehensive HRMS and payroll system in the Philippines",
     img: require("../img/cards/payruler.png"), icon: require("../img/sshare.png"),link: "https://payruler.com/"},
     {name: "IGOTCHU APP", subname: "Payruler - The most comprehensive HRMS and payroll system in the Philippines",
     img: require("../img/cards/igotchu.png"), icon: require("../img/sshare.png")},
     {name: "COVERFEET", subname: "Step into style our shoes - buy now! Experience the difference in quality with our products",
     img: require("../img/cards/cover.png"), icon: require("../img/sshare.png"), link: "https://github.com/SunKeil?tab=repositories"},
     {name: "SKETCHY BLOG", subname: "Explore this website further to discover more about a person's deepest brain region.",
     img: require("../img/cards/blog.png"), icon: require("../img/sshare.png"), link: "https://github.com/SunKeil?tab=repositories"},
     {name: "RENTY", subname: "Rent at Renty, we offer the best place that’s suits you.",
     img: require("../img/cards/renty.png"), icon: require("../img/sshare.png"), link: "https://github.com/SunKeil?tab=repositories"},
     {name: "CALCULUSIAN", subname: "Calculusian is an online learning system which purpose is to provide additional information about the selected topics of integral calculus. ",
     img: require("../img/cards/calculusian.png"), icon: require("../img/sshare.png"), link: "https://github.com/SunKeil?tab=repositories"},
  ]

  return (
    <div>
      <div className='container mt-5'>
        <div className='text-center'>
          <img src={projects} alt='pro' className='mb-5 img-fluid'/>
          <img src={divider} alt='divider' className='img-fluid'/>
        </div>
        <div className='cards-wrappers'>
        {
          cards.map((card)=>{
            return (
              <div className='projects '>
                {/* <h3>Front-End Developer (Webflow)</h3> */}
                <div className='card'data-aos= "fade-up">
                    <div className='hover-wrapper'>
                      <img src={card.img} alt='card-img' className='img-fluid hover-scale'/>
                    </div>
                    <div className='row m-2 align-items-center'>
                      <div className='col-10'>
                        <h5>{card.name}</h5>
                        <p>{card.subname}</p>
                      </div>
                      <div className='col-2'>
                        <a href={card.link}>
                          <img src={card.icon} alt='iconshare'/>
                        </a>
                      </div>
                    </div>
                </div>
              </div>
            )
          })
        }
        </div>
       
      </div>
    </div>
  )
}

export default Projects
