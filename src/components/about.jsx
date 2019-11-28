import React from 'react';
import myImage from "../img/cassi_logo_white.png";
import imageOverlay from "../img/energy.jpg";

class About extends React.Component{
    constructor(){
        super();
        this.state = {
            skills:[
                {id:"HTML5_skill", content: "Electronics",porcentage: "80%", value: "80"},
                {id:"CSS3_skill", content: "Mechanical ",porcentage: "75%", value: "75"},
                {id:"JavaScript_skill", content: "IT Solutions",porcentage: "90%", value: "90"}
               /* {id:"PHP_skill", content: "PHP",porcentage: "70%", value: "70"},
                {id:"ReactJS_skill", content: "ReactJS",porcentage: "80%", value: "80"},
                {id:"Python_skill", content: "Python",porcentage: "75%", value: "75"},
                {id:"VanillaJS_skill", content: "VanillaJS",porcentage: "85%", value: "85"},
                {id:"Wordpress_skill", content: "Wordpress",porcentage: "80%", value: "80"}*/
            ],
            about_us:[
                {id: "first-p-about",content: "Cassiopia Technologies is an Microelectronic engineering Design and consulting firm that work on the most advanced technology to offer engineering solutions and Service with the best quality and computative price from prototyping and manufacturing to mechatronics and renewable energy."},
                {id: "second-p-about", content: "Cassiopia Technologies is also an integrated engineering company composed of a group of talented and experienced engineers skilled in different engineering areas including electrical & electronic engineering, mechanical engineering, and software engineers."},
                {id: "second-p-about", content: "Our team of experts with unparalleld knowledge of electronics, mechatronics and robotics is ever available to attend to your requests."}
            ]
        }
    }

    render(){
        return (
            <section id="about" className="about-mf sect-pt4 route" style={{backgroundImage: "url("+imageOverlay+")"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5" style={{margin: "0 auto"}}>
                                                <div className="about-img" style={{textAlign: "center"}}>
                                                    <img src={myImage} className="img-fluid rounded b-shadow-a" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-mf">
                                            {/* <p className="title-s">Skill</p> */}
                                            {
                                                this.state.skills.map(skill => {
                                                    return(
                                                        <React.Fragment key={skill.id}>
                                                            <span>{skill.content}</span> <span className="pull-right">{skill.porcentage}</span>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{width: skill.porcentage}} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </React.Fragment>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                About Us
                                                </h5>
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
                    </div>
                </div>
            </section>
        );
    }
}

export default About;