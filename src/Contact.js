import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <Header view='contact' />

                <div role="main" className="main">
    				<section className="section section-text-light section-default section-default-scale-8 section-center mt-none">
    					<div className="container">
    						<div className="row mt-xl">
    							<div className="col-md-8 col-md-offset-2 mt-xlg">
    								<h1 className="mt-xlg font-weight-semibold text-uppercase">Say Hello.</h1>
    								<p className="mb-none lead">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nulla consequat massa quis enim.</p>
    							</div>
    						</div>
    						<div className="row mt-lg">
    							<div className="col-md-10 col-md-offset-1">
    								<div className="row mt-lg align-left">
    									<div className="col-md-5 col-md-offset-4 mb-lg">
    										<h4 className="mt-md mb-none">Minneapolis</h4>
    										<ul className="list list-icons mt-xlg">
    											<li><i className="fa fa-map-marker"></i> <strong>Address:</strong> 1234 Street, City Name, United States</li>
    											<li><i className="fa fa-phone"></i> <strong>Phone:</strong>{'+1 (123) 456-789'}</li>
    											<li><i className="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:triviaafficiandos@gmail.com">triviaafficiandos@gmail.com</a></li>
    										</ul>
    									</div>
    								</div>
    							</div>
    							<div className="row mt-lg">
    								<div className="col-md-10 col-md-offset-1 center">
    									<div className="divider divider-primary divider-small divider-small-center mb-xl">
    										<hr />
    									</div>
    									<h2 className="mb-none mt-xl font-weight-semibold">Send us a Message.</h2>
    									<p className="lead mb-none">Pellentesque pellentesque eget tempor tellus. </p>

    									<div className="divider divider-style-4 divider-primary divider-top-section-custom taller">
    										<i className="fa fa-chevron-down"></i>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</section>

    				<div className="container">
    					<div className="row mt-xl">
    						<div className="col-md-10 col-md-offset-1">
    							<div className="alert alert-success hidden mt-lg" id="contactSuccess">
    								<strong>Success!</strong> Your message has been sent to us.
    							</div>

    							<div className="alert alert-danger hidden mt-lg" id="contactError">
    								<strong>Error!</strong> There was an error sending your message.
    								<span className="font-size-xs mt-sm display-block" id="mailErrorMessage"></span>
    							</div>

    							<form id="contactForm" action="php/contact-form.php" method="POST">
    								<div className="row">
    									<div className="form-group">
    										<div className="col-md-12">
    											<input type="text" placeholder="Your Name" value="" data-msg-required="Please enter your name." maxLength="100" className="form-control input-lg" name="name" id="name" required />
    										</div>
    									</div>
    								</div>
    								<div className="row">
    									<div className="form-group">
    										<div className="col-md-12">
    											<input type="email" placeholder="Your E-mail" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxLength="100" className="form-control input-lg" name="email" id="email" required />
    										</div>
    									</div>
    								</div>
    								<div className="row">
    									<div className="form-group">
    										<div className="col-md-12">
    											<input type="text" placeholder="Subject" value="" data-msg-required="Please enter the subject." maxLength="100" className="form-control input-lg" name="subject" id="subject" required />
    										</div>
    									</div>
    								</div>
    								<div className="row">
    									<div className="form-group">
    										<div className="col-md-12">
    											<textarea maxLength="5000" placeholder="Message" data-msg-required="Please enter your message." rows="10" className="form-control input-lg" name="message" id="message" required></textarea>
    										</div>
    									</div>
    								</div>
    								<div className="row">
    									<div className="col-md-12">
    										<input type="submit" value="Send Message" className="btn btn-primary btn-lg mb-xs pull-right" data-loading-text="Loading..." />
    									</div>
    								</div>
    							</form>
    						</div>
    					</div>
    				</div>
    			</div>

                <Footer />
            </div>
        );
    }
}
