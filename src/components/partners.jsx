import React from 'react';

import Meee from "../img/Meee.png";
import davis from "../img/davis.png";
import inventwork from "../img/inventwor.png";
import fiverr from "../img/fiverr.png";
import imageOverlay from "../img/energy.jpg";
import dventus from "../img/dventus.jpg";


class Services extends React.Component{

  render(){
    return (
      <section id="partners" className="services-mf sect-pt4 route bg-image "style={{backgroundImage: "url("+imageOverlay+")"}}>
      
      <div className="container box-shadow-full" >
      <div className="row ">
      <div className="col-sm-12 ">
      
      <div className="title-box text-center">
      <h3 className="title-a">
      Our Partners
      </h3>
      <p className="subtitle-a">
      Check Out Our Partners.
      </p>
      <div className="line-mf"></div>

      </div>
      </div>

      </div>
      <div className="row">
      <div className="col-md-4">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={Meee} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>
      
      <div className="col-md-4">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={davis} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-4">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={inventwork} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-4">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={dventus} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-4">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={fiverr} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>
      
      </div>
      </div>
      </section>
      );
  }
}

export default Services;