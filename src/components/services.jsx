import React from 'react';

//import vmarine
import vmarine from "../img/energy.jpg";
//pcb pics
import pcb from "../img/PCB_0.png";
import pcb1 from "../img/PCB_1.png";
import pcb2 from "../img/PCB_2.png";
import pcb3 from "../img/PCB_3.png";
import pcb4 from "../img/PCB_4.png";
import it1 from "../img/IT_1.png";

//import todo
//import todoList from "../img/todolist.png";


//import amtbw


//import medlingos


//import landing page


class Services extends React.Component{

    render(){
        return (
          <section id="work" className="services-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">
                      Our Services
                    </h3>
                    <p className="subtitle-a">
                      Check Out Our Latest Projects.
                    </p>
                    <div className="line-mf"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={vmarine} data-lightbox="gallery-vmarine">
                      <div className="work-img">
                        <img src={vmarine} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Energy Sector</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Our strong engineering gene pool ensures scientific approach towards all projects 
                                                          and activities. We strive to discover the best of technologies and talent which 
                                                          enables us to optimize resource utilization and maximise output. 
                                                        </span> 
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={vmarine} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      {/*<a href={vmarine2} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine3} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine4} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine5} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine6} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine7} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>*/}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={pcb} data-lightbox="gallery-aguadeluz">
                      <div className="work-img">
                        <img src={pcb} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Electronics Design</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Electronics Design, PCB and Schematcs Design, Engineering Consultancy</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href={pcb} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={pcb1} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={pcb2} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={pcb3} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={pcb4} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>
              
                <div className="col-md-4">
                  <div className="work-box">
                    <a data-lightbox="gallery-medlingos">
                      <div className="work-img">
                        {<img src={it1} alt="" className="img-fluid"/>}
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">IT Solutions</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Support technicians on IT usually work for organizations to perform tasks that revolve around detection and resolution of technical problems.</span>{/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    
                      <a href={it1} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
        );
    }
}

export default Services;