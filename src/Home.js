import React from 'react';

import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Header view='home' />

                <div role="main" className="main">
    				<Banner view={'home'} />

    				<div className="container">
    					<div className="row mb-xl mt-xlg">
    						<div className="col-md-9">
    							<div className="row">
    								<div className="col-md-6">
    									<h4 className="font-weight-semibold">Company.</h4>
    									<p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nulla consequat massa quis enim.</p>
    								</div>
    								<div className="col-md-6">
    									<h4 className="font-weight-semibold">Mission.</h4>
    									<p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nulla consequat massa quis enim.</p>
    								</div>
    							</div>

    							<blockquote className="mt-xl ml-lg blockquote-secondary">
    								<p>Pellentesque pellentesque eget tempor tellus. Fusce lacllentesque eget tempor tellus ellentesque pelleinia tempor malesuada.</p>
    								<footer>David Doe, CEO</footer>
    							</blockquote>
    						</div>
    						<div className="col-md-3 hidden-xs">
    							<div className="row">
    								<div className="col-md-6">
    									<img className="img-responsive mt-xl mb-xl" src="/src/assets/img/office/our-office-4.jpg" alt="Office" />
    									<img className="img-responsive mb-xl" src="/src/assets/img/office/our-office-6.jpg" alt="Office" />
    								</div>
    								<div className="col-md-6">
    									<img className="img-responsive mb-xl" src="/src/assets/img/office/our-office-5.jpg" alt="Office" />
    									<img className="img-responsive mb-xl" src="/src/assets/img/office/our-office-7.jpg" alt="Office" />
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>

    				<section className="section section-default">
    					<div className="container">
    						<div className="row">
    							<div className="counters">
    								<div className="col-md-3 col-sm-6">
    									<div className="counter counter-dark">
    										<i className="fa fa-user"></i>
    										<strong data-to="25000" data-append="+">0</strong>
    										<label>Happy Clients</label>
    									</div>
    								</div>
    								<div className="col-md-3 col-sm-6">
    									<div className="counter counter-dark">
    										<i className="fa fa-star"></i>
    										<strong data-to="15">0</strong>
    										<label>Years in Business</label>
    									</div>
    								</div>
    								<div className="col-md-3 col-sm-6">
    									<div className="counter counter-dark">
    										<i className="fa fa-coffee"></i>
    										<strong data-to="352">0</strong>
    										<label>Cups of Coffee</label>
    									</div>
    								</div>
    								<div className="col-md-3 col-sm-6">
    									<div className="counter counter-dark">
    										<i className="fa fa-bar-chart"></i>
    										<strong data-to="178">0</strong>
    										<label>High Score</label>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</section>

    				<section className="m-xl pb-xl">
    					<div className="container">
    						<div className="row">
    							<div className="col-md-12 center">
    								<h2 className="mb-none mt-xl font-weight-semibold">Leadership.</h2>
    								<p className="lead mb-none">Pellentesque pellentesque eget tempor tellus. </p>
    								<div className="divider divider-primary divider-small divider-small-center mb-xl">
    									<hr />
    								</div>
    							</div>
    						</div>
    						<div className="row mt-lg">
    							<div className="col-md-8 col-md-offset-2">
    								<div className="row mt-lg">
    									<div className="col-md-3 col-xs-12 center mb-lg">
    										<h4 className="mt-md mb-none">David Doe</h4>
    										<p className="mb-none">CEO</p>
    										<span className="thumb-info-social-icons mt-sm pb-none">
    											<a href="http://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i><span>Facebook</span></a>
    											<a href="http://www.twitter.com"><i className="fa fa-twitter"></i><span>Twitter</span></a>
    											<a href="http://www.linkedin.com"><i className="fa fa-linkedin"></i><span>Linkedin</span></a>
    										</span>
    									</div>
    									<div className="col-md-3 col-xs-12 center mb-lg">
    										<h4 className="mt-md mb-none">Jeff Doe</h4>
    										<p className="mb-none">CMO</p>
    										<span className="thumb-info-social-icons mt-sm pb-none">
    											<a href="mailto:mail@example.com"><i className="fa fa-envelope"></i><span>Email</span></a>
    											<a href="http://www.linkedin.com"><i className="fa fa-linkedin"></i><span>Linkedin</span></a>
    										</span>
    									</div>
    									<div className="col-md-3 col-xs-12 center mb-lg">
    										<h4 className="mt-md mb-none">Craig Doe</h4>
    										<p className="mb-none">COO</p>
    										<span className="thumb-info-social-icons mt-sm pb-none">
    											<a href="http://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i><span>Facebook</span></a>
    											<a href="http://www.twitter.com"><i className="fa fa-twitter"></i><span>Twitter</span></a>
    											<a href="http://www.linkedin.com"><i className="fa fa-linkedin"></i><span>Linkedin</span></a>
    										</span>
    									</div>
    									<div className="col-md-3 col-xs-12 center mb-lg">
    										<h4 className="mt-md mb-none">Richard Doe</h4>
    										<p className="mb-none">President</p>
    										<span className="thumb-info-social-icons mt-sm pb-none">
    											<a href="http://www.linkedin.com"><i className="fa fa-linkedin"></i><span>Linkedin</span></a>
    										</span>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</section>

    				<section className="section section-default section-footer">
    					<div className="container">
    						<div className="row">
    							<div className="col-md-12 center">
    								<h2 className="mb-none mt-xl font-weight-semibold">Clients.</h2>
    								<p className="lead mb-none">Pellentesque pellentesque eget tempor tellus. </p>
    								<div className="divider divider-primary divider-small divider-small-center mb-xl">
    									<hr />
    								</div>
    							</div>
    						</div>
    						<div className="row mt-lg">
    							<div className="content-grid content-grid-dashed mt-xlg mb-lg">
    								<div className="row content-grid-row">
    									<div className="content-grid-item col-md-4 center">
    										<img className="img-responsive" src="/src/assets/img/logos/logo-1.png" alt="" />
    									</div>
    									<div className="content-grid-item col-md-4 center">
    										<img className="img-responsive" src="/src/assets/img/logos/logo-2.png" alt="" />
    									</div>
    									<div className="content-grid-item col-md-4 center">
    										<img className="img-responsive" src="/src/assets/img/logos/logo-3.png" alt="" />
    									</div>
    								</div>
    								<div className="row content-grid-row">
    									<div className="content-grid-item col-md-4 center">
    										<img className="img-responsive" src="/src/assets/img/logos/logo-4.png" alt="" />
    									</div>
    									<div className="content-grid-item col-md-4 center">
    										<img className="img-responsive" src="/src/assets/img/logos/logo-5.png" alt="" />
    									</div>
    									<div className="content-grid-item col-md-4 center">
    										<img className="img-responsive" src="/src/assets/img/logos/logo-6.png" alt="" />
    									</div>
    								</div>
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
