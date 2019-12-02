import React from 'react';
import imageOverlay from "../img/energy.jpg";

class Contact extends React.Component{

    render(){
        return (
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url("+imageOverlay+")"}}>
            <div className="overlay-mf"></div>
            <div className="container">
            <div className="row">
            <div className="col-sm-12">
            <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
            <div className="row">
            <div className="col-md-6">
            <div className="title-box-2">
            <h5 className="title-left">
            Send A Message
            </h5>
            </div>
            <div>
            <form action="https://www.gmail.com" method="POST" className="contactForm">
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage"></div>
            <div className="row">
            <div className="col-md-12 mb-3">
            <div className="form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validation"></div>
            </div>
            </div>
            <div className="col-md-12 mb-3">
            <div className="form-group">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <div className="validation"></div>
            </div>
            </div>
            <div className="col-md-12 mb-3">
            <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div className="validation"></div>
            </div>
            </div>
            <div className="col-md-12 mb-3">
            <div className="form-group">
            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
            <div className="validation"></div>
            </div>
            </div>
            <div className="col-md-12">
            <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
            </div>
            </div>
            </form>
            </div>
            </div>
            <div className="col-md-6">
            <div className="title-box-2 pt-4 pt-md-0">
            <h5 className="title-left">
            How to Reach Us
            </h5>
            </div>
            <div className="more-info">
            <p className="lead">
            Cassiopeia Technologies’ office is nestled in a Addis Abeba, 
            Ethiopia. We’d love to meet up over a coffee if you’re in town and are of course available via phone and email. 
            If you’d like to speak to us regarding our services or solutions, please feel free to get in touch – we look forward to hearing from you.
            </p>
            </div>

            <div className="title-box-2 pt-4 pt-md-0">
            <h5 className="title-left">
            Address Info
            </h5>
            </div>
            <div className="more-info">
            <p className="lead">
            <p><strong>Tell:</strong> +251911368761</p>
            <p><strong>email:</strong> cassiopeiatechnologies@gmail.com</p>
            </p>

            </div>

            <div className="socials">
            <ul>
            <li>
            <a href="https://www.facebook.com/Cassiopeia-Technologies-PLC-110255637058687" target="_blank" rel="noopener noreferrer"><span className="ico-rounded"><ion-icon name="logo-facebook" size = "large"></ion-icon></span></a></li>
            <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><span className="ico-rounded"><ion-icon name="logo-linkedin" size = "large"></ion-icon></span></a></li>
        {/*<li><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><span className="ico-rounded"><ion-icon name="mail" size = "large"></ion-icon></span></a></li>*/}
        </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <footer>
        <div className="container">
        <div className="row">
        <div className="col-sm-12">
        <div className="copyright-box">
        <p className="copyright">2019 &copy; Copyright <strong>Cassiopeia Technologies</strong>. All Rights Reserved</p>
        </div>
        </div>
        </div>
        </div>
        </footer>
        </section>
        );
}
}

export default Contact;