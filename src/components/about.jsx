import React from 'react';
import imageOverlay from "../img/energy.jpg";

class About extends React.Component{
    constructor(){
        super();
        this.state = {
            skills:[
            {id:"Electrinics", content: "Electrical and Electronics Engineering Service",porcentage: "80%", value: "80"},
            {id:"Mechanical", content: "Mechanical Engineering Service ",porcentage: "95%", value: "75"},
            {id:"Webdevelopment", content: " Software Development Service",porcentage: "90%", value: "90"},
            {id:"energy", content: "Renewable Energy",porcentage: "89%", value: "89"},
            {id:"software", content: "ICT solution",porcentage: "90%", value: "70"}
            ],
            about_us:[
            {id: "first-p-about",content: "Cassiopeia Technologies is a Technology company aims to give Design, installation and consultation endless engineering service on Renewable energy, Electrical Engineering, mechanical Engineering, software development and ICT solutions."},
            {id: "second-p-about", content: "Renewable energy is the global concern to reduce global warming and rural electrification and our company is treading that path. The firm boasts a team of talented engineers who employ an interdisciplinary approach when solving technical and practical problems. "},
            {id: "second-p-about", content: "Our expertise solve customer problems from scratch to product development on Mechanical Modeling and simulation, PCB Design, electronics design, software development (IOT, programming  and web development), firmware design and simulation, ICT solution and solar energy design and installations."},
            {id: "second-p-about", content: "Cassiopeia Technologies understands that the best products are the ones that work with both electrical and mechanical units, and we have made this an integral part of our services."}
            ]
        }
    }

    render(){
        return (
            <section id="about" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url("+imageOverlay+")"}}>
            <div className="container">
            
            <div className="col-sm-12 ">
            <div className="box-shadow-full">
            <div className="col-md-12">
            <div className="about-me pt-4 pt-md-0">
            <div className="title-box text-center">
            <h3 className="title-a">
            About Us
            </h3>
            <div className="line-mf"></div>
            </div>
            {
                this.state.about_us.map((content) => {
                    return <p className="lead" key={content.id}>{content.content}</p>;
                })
            }
            </div>
            </div>
            </div>
            </div>

            </div>
            </section>
            );
    }
}

export default About;