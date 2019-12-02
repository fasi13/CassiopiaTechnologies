import React from 'react';
import imageOverlay from "../img/energy.jpg";
import altium from "../img/altium.jpg";
import ansys from "../img/ansys.png";
import creo from "../img/creo.png";

import rets from "../img/rets.png";
import java from "../img/java.png";
import keyshot from "../img/keyshot.png";
import homer from "../img/homer.jpg";
import matlab from "../img/matlab.jpg";
import pvsyst from "../img/pvsyst.jpg";
import solidwork from "../img/solidw.jpg";
import revitmap from "../img/revitmap.jpg";

class Contact extends React.Component{

  render(){
    return (
      <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url("+imageOverlay+")"}}>
      <div className="container">
      <div className="row">
      <div className="col-sm-12">
      <div className="contact-mf">
      <div id="tools" className="box-shadow-full">
      <div>
      <div className="title-box text-center">
      <h3 className="title-a">
      Tools
      </h3>
      <p className="subtitle-a">
      Check Out Our Tools.
      </p>
      <div className="line-mf"></div>
      </div>
      <div className="row">
      <div className="col-md-3">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={altium} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-3">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={ansys} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-3">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={rets} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-2">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={java} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-3">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={keyshot} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-3">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={homer} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-3">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={matlab} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-3">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={pvsyst} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-3">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={solidwork} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-3">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={revitmap} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>

      <div className="col-md-3">
      <div className="work-box">
      <div className="about-img" style={{textAlign: "center"}}>
      <img src={creo} className="img-fluid rounded b-shadow-a" alt=""/>
      </div>
      </div>
      </div>
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

export default Contact;