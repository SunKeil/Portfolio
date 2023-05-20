import React from 'react'
import uppertri from "../img/uppertri.png"
import alcantara from "../img/alcantara.png"
import keilsun from "../img/keilsun.png"
import down from "../img/down.png"
import AOS from "aos"
import "aos/dist/aos.css"
import  { useEffect } from 'react'


function Home() {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])

    const skillsetlist = [
        {name: "HTML", img: require("../img/skillset/html.png")},
        {name: "CSS", img: require("../img/skillset/css.png")},
        {name: "JAVASCRIPT", img: require("../img/skillset/java.png")},
        {name: "BOOTSTRAP", img:require("../img/skillset/bootstrap.png")},
        {name: "REACT JS", img: require("../img/skillset/react.png")},
        {name: "NODE JS", img: require("../img/skillset/node.png")},
        {name: "MONGODB", img: require("../img/skillset/mongo.png")},
        {name: "MYSQL", img: require("../img/skillset/mysql.png")},
        {name: "GITHUB", img: require("../img/skillset/git.png")},
        {name: "FIGMA", img: require("../img/skillset/figma.png")},
    ]
    const infos = [
      {icon: require("../img/Portfolio/loc.png"),data: "San Jose del Monte Bulacan, Gumaok West blk 9" },
      {icon: require("../img/Portfolio/phone.png"),data: "09983832092"},
      {icon: require("../img/Portfolio/mail.png"),data: "alcakeilsun@gmail.com" },
      {icon: require("../img/Portfolio/git.png"),data: "Github: SunKeil" },
      {icon: require("../img/Portfolio/link.png"),data: "Linkedin: Keilsun B. Alcantara"},
    ]
    const personalDetails = [
      {data: "Watching Movies", title: "HOBBIES" },
      {data: "Listening to Music"},
      {data: "Drawing" },
      {data: "Gaming" },
      {data: "Basketball" , title: "RECREATIONAL ACTIVITIES"},
      {data: "Working out"},
      {data: "Drawing", title: "TALENT"},
      {data: "Singing (Karaoke)"},
      
    ]
    const educationdetails = [
      {title: "KodeGo Bootcamp", course: "Full-Stack Development", address:"18th Floor, W Fifth, 5th Avenue, Taguig, 1630 Metro Manila" ,icon: require("../img/tridown.png")},
      {title: "Bulacan State University", course: "BSM Computer Science", address: "Malolos, Bulacan", icon: require("../img/tridown.png")},
      {title: "San Jose Del Monte National Junior & Senior High School", course: "ICT Computer Programming", address: "San Jose Del Monte Bulacan", icon: require("../img/tridown.png")},
      {title: "Sudtonggan Elementary School",  address: "Mactan Lapu-lapu City, Cebu", icon: require("../img/tridown.png")},
    ]


  return (
    <div>
      <div className='container text-center pt-5'>
        <div>
            <img src={uppertri} alt='uppertri' className='img-fluid'data-aos= "fade-up"/>
        </div>
        <div>
            <img src={keilsun} alt='keilsun' className='img-fluid'data-aos= "fade-up"/>
        </div>
        <div>
            <img src={alcantara} alt='alcantara' className='img-fluid'data-aos= "fade-up"/>
        </div>
        <div>
            <img src={down} alt='down' className='img-fluid'data-aos= "fade-up"/>
        </div>
      </div>
      <div className='container text-center pt-5'>
        <h2 data-aos= "fade-up">WHO AM I?</h2>
        <p data-aos= "fade-up">Creative and Detailed Software Developer that will truly accomplish  and achieve the given resposibility to 
            develop and serve as wonderful and impactfull result to  potentials clients, 
            profient in both design and development process that work as team orriented member of the whole team.
        </p>
      </div>
      <div className='container pt-5'>
      <div className='details'>
       <div className='detail mb-5 '>
        {
            infos.map((info)=>{
                return (
                    <div className='infos'>
                      <div className='icon'>
                        <img src={info.icon} alt='skillicons' className='img-fluid m-2'data-aos= "fade-up"/> 
                      </div>
                      <div className='data-icon'>
                        <p data-aos= "fade-up">{info.data}</p> 
                      </div>  
                    </div>
                )
            })
        }
        </div> 
        <div className='detail'>
        {
            personalDetails.map((details)=>{
              return(
                <div className='data-size'data-aos= "fade-up">
                  <h4>{details.title}</h4>
                  <p className='pt-1 pb-1'>{details.data}</p>
                </div>
              )
            })
        }
        </div>
      </div>
      </div>
      <div className='container pt-5 card-wrapper text-center'>
        <h2>SKILLSET</h2>
        <div className=' skill mt-5'>
        {
            skillsetlist.map((skill)=>{
                return (
                    <div className='skill-cards'data-aos= "fade-up">
                        <div className='skill-img'>
                            <img src={skill.img} alt='skillicons'/>
                        </div>
                        <div>
                           <h4 >{skill.name}</h4> 
                        </div>
                    </div>
                )
            })
        }
        </div>
      </div>
      <div className='container mt-5 card-wrapper text-center'>
        <h2 data-aos= "fade-up">EDUCATION</h2>
        <div className='education-details mt-5 mb-5'>
        <div className='education-wrapper'>
        {
            educationdetails.map((education)=>{
              return(
                <div className="educ-size mb-3">
                  <div >
                    <div className='icon-title'>
                      <img src={education.icon} alt='education-icon'data-aos= "fade-up"/>
                      <h4 className='ps-3' data-aos= "fade-up">{education.title}</h4>
                    </div>
                    <p className='ps-5 ' data-aos= "fade-up">{education.course}</p>
                    <p className='ps-5 ' data-aos= "fade-up">{education.address}</p>
                  </div>
                </div>
              )
            })
        }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
