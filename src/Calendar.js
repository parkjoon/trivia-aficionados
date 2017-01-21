import React from 'react';

import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

export default class Calendar extends React.Component {
    render() {
        return (
            <div>
                <Header view='calendar' />

                <div role="main" className="main">
                    <Banner view='calendar' />

    				<div className="container">
    					<div className="row mt-xl">
    						<div className="col-md-8 col-md-offset-2 mt-xlg title-with-video-custom center">
    							<h1 className="mt-xlg font-weight-semibold text-uppercase">Calendar</h1>
    							<p className="mb-none lead">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nulla consequat massa quis enim.</p>
    						</div>
    					</div>
    				</div>

    				<section className="m-xl pb-xl">
    					<div className="container">
    						<div className="row">
    							<div className="col-md-12 center">
    								<iframe src="https://calendar.google.com/calendar/embed?src=qpr678gjaefhnr7ardo86g1p0c%40group.calendar.google.com&ctz=America/New_York" style={{border: '0'}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
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
