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
							<div className="col-md-4">
								<a className="twitter-timeline" data-lang="en" data-dnt="true" data-theme="light" href="https://twitter.com/TriviaMN">Tweets by TriviaMN</a>
							</div>
                            <div className="col-md-4">
                                <iframe src="https://snapwidget.com/embed/321881" className="snapwidget-widget" allowTransparency="true" frameBorder="0" scrolling="no" style={{border: 'none', overflow: 'hidden', width: '100%'}}></iframe>
							</div>
                            <div className="col-md-4">
								<div className="fb-page" data-href="https://www.facebook.com/Trivia-Aficionados-409506256056717/" data-tabs="timeline, events, messages" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Trivia-Aficionados-409506256056717/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Trivia-Aficionados-409506256056717/">Trivia Aficionados</a></blockquote></div>
							</div>
    					</div>
    				</div>
                </div>

                <Footer />
            </div>
        );
    }
}
