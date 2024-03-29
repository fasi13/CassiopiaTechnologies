import React from 'react';
import ReactDOM from 'react-dom';

//import css in order
import './css/normalize.css';
import './css/animate.css';
import 'bootstrap/dist/css/bootstrap.css';
//import './css/ionicons.css';
//import './css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './css/style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Partners from './components/partners.jsx'
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';
import Tools from './components/tools.jsx';

ReactDOM.render(
	<React.Fragment>
	<Navbar />
        <Intro />
        <Services />
        <Partners/>
        <Tools/>
        <About />
        <Contact />
        <BackToTop />
        <Preloader />
	</React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
