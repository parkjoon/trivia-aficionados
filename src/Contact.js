import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contactForm: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    }

    updateContactForm(key, val) {
        this.setState({
            contactForm: {
                ...this.state.contactForm,
                [key]: val
            }
        });
    }

    onSubmitContactForm(e) {
        e.preventDefault();
        $.ajax({
            url: 'http://triviaaficionados.com/api/sendmail',
            type: 'POST',
            dataType: 'json',
            data: {
                to: 'triviaaficionados@gmail.com',
                from: `${this.state.contactForm.name} ${this.state.contactForm.email}`,
                subject: this.state.contactForm.subject,
                text: this.state.contactForm.message
            }
        });
    }

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
    								<p className="mb-none lead">We're friendly and available to chat.<br />Reach out to us any time and we'll happily answer your questions.</p>
    							</div>
    						</div>
    						<div className="row mt-lg">
    							<div className="col-md-10 col-md-offset-1">
    								<div className="row mt-lg align-left">
    									<div className="col-md-5 col-md-offset-4 mb-lg">
    										<h4 className="mt-md mb-none">Minneapolis</h4>
    										<ul className="list list-icons mt-xlg">
    											<li><i className="fa fa-map-marker"></i> <strong>Address:</strong> 2433 E 117 Street, Burnsville, MN, US</li>
    											<li><i className="fa fa-phone"></i> <strong>Phone:</strong>{' +1 (612) 470-1352'}</li>
    											<li><i className="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:triviaaficionados@gmail.com">triviaaficionados@gmail.com</a></li>
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
    									<p className="lead mb-none">Please complete the form below, so we can provide quick and efficient service.</p>

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
    							<form id="contactForm">
    								<div className="row">
    									<div className="form-group">
    										<div className="col-md-12">
    											<input type="text" placeholder="Your Name" value={this.state.contactForm.name} data-msg-required="Please enter your name." maxLength="100" className="form-control input-lg" name="name" id="name" onChange={e => this.updateContactForm('name', e.target.value)} required />
    										</div>
    									</div>
    								</div>
    								<div className="row">
    									<div className="form-group">
    										<div className="col-md-12">
    											<input type="email" placeholder="Your E-mail" value={this.state.contactForm.email} data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxLength="100" className="form-control input-lg" name="email" id="email" onChange={e => this.updateContactForm('email', e.target.value)} required />
    										</div>
    									</div>
    								</div>
    								<div className="row">
    									<div className="form-group">
    										<div className="col-md-12">
    											<input type="text" placeholder="Subject" value={this.state.contactForm.subject} data-msg-required="Please enter the subject." maxLength="100" className="form-control input-lg" name="subject" id="subject" onChange={e => this.updateContactForm('subject', e.target.value)} />
    										</div>
    									</div>
    								</div>
    								<div className="row">
    									<div className="form-group">
    										<div className="col-md-12">
    											<textarea maxLength="5000" placeholder="Message" data-msg-required="Please enter your message." rows="10" className="form-control input-lg" name="message" id="message" value={this.state.contactForm.message} onChange={e => this.updateContactForm('message', e.target.value)} required></textarea>
    										</div>
    									</div>
    								</div>
    								<div className="row">
    									<div className="col-md-12">
    										<input type="submit" value="Send Message" className="btn btn-primary btn-lg mb-xs pull-right" data-loading-text="Sending..." onClick={e => this.onSubmitContactForm(e)} />
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
