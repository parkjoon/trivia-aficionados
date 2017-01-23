import React from 'react';

import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Header view='about' />

                    <div role="main" className="main">
        				<Banner view={'about'} />

                        <div className="container">
        					<div className="row mt-xl">
        						<div className="col-md-8 col-md-offset-2 mt-xlg title-with-video-custom center">
        							<h1 className="mt-xlg font-weight-semibold text-uppercase">About Us</h1>
        							<p className="mb-none lead">Learn about what makes us the best choice for your next event.</p>
        						</div>
        					</div>
        				</div>

        				<div className="container">
        					<div className="row mb-xl mt-xlg">
        						<div className="col-md-9">
        							<blockquote className="mt-xl ml-lg blockquote-secondary">
        								<p>We let you decide what night and time you want to schedule trivia, We work around your availability. Our rates are competitive and reasonable and vary based on the term of the agreement.</p>
        								<footer>Tyler Mosher, CEO</footer>
        							</blockquote>
        						</div>
        						<div className="col-md-3 hidden-xs">
        							<div className="row">
        								<div className="col-md-6">
        									<img className="img-responsive mt-xl mb-xl" src="/src/assets/img/demos/digital-agency/office/demo-office-4.jpg" alt="Office" />
        								</div>
        								<div className="col-md-6">
        									<img className="img-responsive mb-xl" src="/src/assets/img/demos/digital-agency/office/demo-office-5.jpg" alt="Office" />
        								</div>
        							</div>
        						</div>
        					</div>
        				</div>

        				<section className="section section-default">
        					<div className="container">
        						<div className="row">
        							<div className="col-md-12 center">
        								<h2 className="mb-none mt-xl font-weight-semibold">What we do.</h2>
                                        <div className="divider divider-primary divider-small divider-small-center mb-xl">
        									<hr />
        								</div>
                                        <p className="lead mb-none">Our service is simple. We do the leg work to promote the event through local advertising and social media. We bring the customers to your pub, keep them captivated for hours with our world class trivia. They drink and spend their disposable income at your fine establishment. They have such a swell time they return week after week and spread the word about what a great time they have with friends, coworkers & family. We post a recap for every quiz which allows our players to share their experience via social media.</p>
        							</div>
        						</div>
    						</div>
        				</section>

                        <section className="m-xl pb-xl m-t">
        					<div className="container">
        						<div className="row">
        							<div className="col-md-12 center">
        								<h2 className="mb-none mt-xl font-weight-semibold">What we bring.</h2>
                                        <div className="divider divider-primary divider-small divider-small-center mb-xl">
        									<hr />
        								</div>
        								<p className="lead mb-none">We provide everything needed to run trivia. We provide the pencils, answer sheets, and A/V equipment. The venue is encouraged to provide the prizes typically consisting of gift certificates redeemable another day. We provide the winning team with a one of a kind Trivia Aficionados metallic lapel pin.</p>
        							</div>
        						</div>
        					</div>
        				</section>

                        <section className="section section-default section-footer">
        					<div className="container">
        						<div className="row">
        							<div className="col-md-12 center">
        								<h2 className="mb-none mt-xl font-weight-semibold">Why choose us?</h2>
                                        <div className="divider divider-primary divider-small divider-small-center mb-xl">
        									<hr />
        								</div>
        								<p className="lead mb-none">Writing quizzes is our passion. Our quizzes are unique, engaging, and interactive. We incorporate sound and video, making the experience more engaging and memorable with our audience.</p>
        							</div>
        						</div>
    						</div>
        				</section>
                    </div>

                <Footer />
            </div>
        );
    }
}
