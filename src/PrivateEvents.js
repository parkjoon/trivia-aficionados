import React from 'react';

import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

export default class PrivateEvents extends React.Component {
    render() {
        return (
            <div>
                <Header view={'privateEvents'} />
                    <div role="main" className="main">
                        <Banner view='privateEvents' />

        				<section className="m-xl pb-xl">
        					<div className="container" style={{textAlign: 'center'}}>
        						<div className="row">
        							<div className="col-md-12 center">
        								<h2 className="mb-none mt-xl font-weight-semibold">No event is too big or small for Trivia Aficionados!</h2>
        								<div className="divider divider-primary divider-small divider-small-center mb-xl">
        									<hr />
        								</div>
        							</div>
        						</div>
        						<div className="row mt-xl">
        							<div className="col-md-4 center">
        								<div className="feature-box feature-box-style-4 appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="0">
        									<span className="featured-boxes featured-boxes-style-6 p-none m-none">
        										<span className="featured-box featured-box-primary featured-box-effect-6 p-none m-none">
        											<span className="box-content p-none m-none">
        												<i className="icon-featured icon-bulb icons"></i>
        											</span>
        										</span>
        									</span>
        									<div className="feature-box-info">
        										<h4 className="mb-sm">Engage Your Audience</h4>
        										<p className="mb-lg">Trivia is an epic ice breaker that makes your company event, wedding, or Bar Mitzvah unique and memorable.</p>
        									</div>
        								</div>
        							</div>
        							<div className="col-md-4 center">
        								<div className="feature-box feature-box-style-4 appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="300">
        									<span className="featured-boxes featured-boxes-style-6 p-none m-none">
        										<span className="featured-box featured-box-primary featured-box-effect-6 p-none m-none">
        											<span className="box-content p-none m-none">
        												<i className="icon-featured icon-puzzle icons"></i>
        											</span>
        										</span>
        									</span>
        									<div className="feature-box-info">
        										<h4 className="mb-sm">Captivating Questions</h4>
        										<p className="mb-lg">Our quizzes aren’t just for trivia know-it-alls. Our quizzes are fun and accessible for any kind of audience.</p>
        									</div>
        								</div>
        							</div>
        							<div className="col-md-4 center">
        								<div className="feature-box feature-box-style-4 appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="600">
        										<span className="featured-boxes featured-boxes-style-6 p-none m-none">
        											<span className="featured-box featured-box-primary featured-box-effect-6 p-none m-none">
        												<span className="box-content p-none m-none">
        													<i className="icon-featured icon-rocket icons"></i>
        												</span>
        											</span>
        										</span>
        									<div className="feature-box-info">
        										<h4 className="mb-sm">Flexible Themes</h4>
        										<p className="mb-lg">Tell us your idea or theme and we will customize our trivia for your audience.</p>
        									</div>
        								</div>
        							</div>
        						</div>
                                <a href="#" className="btn btn-borders btn-lg btn-primary mt-xl appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="600" onClick={() => window.location = '/contact'} style={{display: 'inline-block'}}>Get a Quote!</a>
        					</div>
        				</section>
                    </div>

                <Footer />
            </div>
        );
    }
}
