import React from 'react';

export default class Banner extends React.Component {
    renderAboutBanner() {
        return (
            <div className="slider-container rev_slider_wrapper" style={{height: '320px', marginBottom: '-25px'}}>
    			<div id="revolutionSlider" className="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 800, "gridheight": 320, "spinner": "off"}'>
    				<ul>
    					<li data-transition="fade">
    						<img src="/src/assets/img/demos/digital-agency/slides/demo-banner-1.jpg"
    							alt=""
    							data-bgposition="center center"
    							data-bgfit="cover"
    							data-bgrepeat="no-repeat"
    							className="rev-slidebg" />
                            <div className="tp-dottedoverlay tp-opacity-overlay"></div>
    					</li>
    				</ul>
    			</div>
    		</div>
        );
    }

    renderCalendarBanner() {
        return (
            <div className="slider-container rev_slider_wrapper" style={{height: '320px', marginBottom: '-25px'}}>
    			<div id="revolutionSlider" className="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 800, "gridheight": 320, "spinner": "off"}'>
    				<ul>
    					<li data-transition="fade">
    						<img src="/src/assets/img/trivia-aficionados/banners/calendar-1.jpg"
    							alt=""
    							data-bgposition="center center"
    							data-bgfit="cover"
    							data-bgrepeat="no-repeat"
    							className="rev-slidebg" />
                            <div className="tp-dottedoverlay tp-opacity-overlay"></div>
    					</li>
    				</ul>
    			</div>
    		</div>
        );
    }

    renderHomeBanner() {
        return <section className="parallax section section-text-light section-parallax section-center mt-none mb-xl" data-plugin-parallax data-plugin-options='{"speed": 1.5}' data-image-src="/src/assets/img/trivia-aficionados/banners/banner-1.png" style={{minHeight: '650px'}}></section>
    }

    renderLocationsBanner() {
        return (
            <div className="slider-container rev_slider_wrapper" style={{height: '320px', marginBottom: '-25px'}}>
    			<div id="revolutionSlider" className="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 800, "gridheight": 320, "spinner": "off"}'>
    				<ul>
    					<li data-transition="fade">
    						<img src="/src/assets/img/trivia-aficionados/banners/pub-1.jpg"
    							alt=""
    							data-bgposition="center center"
    							data-bgfit="cover"
    							data-bgrepeat="no-repeat"
    							className="rev-slidebg" />
                            <div className="tp-dottedoverlay tp-opacity-overlay"></div>
    					</li>
    				</ul>
    			</div>
    		</div>
        );
    }

    renderPrivateEventsBanner() {
        return (
            <div>
                <div className="slider-container rev_slider_wrapper" style={{height: '320px', marginBottom: '-25px'}}>
					<div id="revolutionSlider" className="slider rev_slider" data-plugin-revolution-slider data-plugin-options='{"delay": 9000, "gridwidth": 800, "gridheight": 320, "spinner": "off"}'>
						<ul>
							<li data-transition="fade">
								<img src="/src/assets/img/trivia-aficionados/banners/drinks-1.jpg"
									alt=""
									data-bgposition="center center"
									data-bgfit="cover"
									data-bgrepeat="no-repeat"
									className="rev-slidebg" />
                            <div className="tp-dottedoverlay tp-opacity-overlay"></div>
							</li>
						</ul>
					</div>
				</div>

				<div className="container">
					<div className="row mt-xl">
						<div className="col-md-8 col-md-offset-2 mt-xlg title-with-video-custom center">
							<h1 className="mt-xlg font-weight-semibold text-uppercase">Private Events</h1>
							<p className="mb-none lead">Hire Trivia Aficionados for your private event or company party.</p>
						</div>
					</div>
				</div>
            </div>
        );
    }


    render() {
        switch(this.props.view) {
            case 'about':
                return this.renderAboutBanner();
            case 'calendar':
                return this.renderCalendarBanner();
            case 'home':
                return this.renderHomeBanner();
            case 'locations':
                return this.renderLocationsBanner();
            case 'privateEvents':
                return this.renderPrivateEventsBanner();
            default:
                return this.renderHomeBanner();
        }
    }
}
