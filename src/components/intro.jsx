import React from 'react';
import Typed from 'react-typed';
import './stars.scss';
import '../css/style.css';

class Intro extends React.Component{
  render(){
    return (
      <div id="home" className="intro route bg-image background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
    {/* <div className="overlay-intro"></div> */}
    <div className="intro-content display-table">
    <div className="table-cell">
    <div className="container">
    <h1 className="intro-title mb-4">Cassiopeia Technologies</h1>
    <p className="intro-subtitle"><span className="text-slider-items">
    </span><strong className="text-slider"><Typed strings={['Software Development','Electrical and Electronics Services','Software Development Services ','Mechanical Engineering Services',
    'Renewable Energy Sectors','ICT Solutions']} typeSpeed = {80} backDelay = {1100} backSpeed = {30} loop/></strong></p>
    <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#work" role="button">View Our Services</a></p>
    </div>
    </div>
    </div>
    </div>
    
    );
  }
}

export default Intro;