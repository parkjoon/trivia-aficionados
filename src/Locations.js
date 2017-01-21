import React from 'react';

import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

export default class Locations extends React.Component {
    componentDidMount() {
        // Map Markers
		const mapMarkers = [
            {
				address: '2433 East 117th Street Burnsville, MN 55337',
				html: '<strong>Minnesota Office</strong><br>2433 East 117th Street Burnsville, MN 55337<br><br><a href="#" onclick="mapCenterAt({latitude: 44.792495, longitude: -93.242189, zoom: 16}, event)">[+] zoom here</a>',
				icon: {
					image: '/src/assets/img/pin.png',
					iconsize: [26, 46],
					iconanchor: [12, 46]
				}
			}
        ];

		// Map Initial Location
		var initLatitude = 42.293564;
		var initLongitude = -94.328613;

		// Map Extended Settings
		var mapSettings = {
			controls: {
				draggable: (($.browser.mobile) ? false : true),
				panControl: true,
				zoomControl: true,
				mapTypeControl: true,
				scaleControl: true,
				streetViewControl: true,
				overviewMapControl: true
			},
			scrollwheel: false,
			markers: mapMarkers,
			latitude: initLatitude,
			longitude: initLongitude,
			zoom: 5
		};

		var map = $('#googlemaps').gMap(mapSettings);
		var mapRef = $('#googlemaps').data('gMap.reference');

		// Create an array of styles.
		const styles = [
            {
    			featureType: 'road',
    			elementType: 'geometry',
    			stylers: [{ lightness: 0 }, { visibility: 'simplified' }]
    		},
            {
    			featureType: 'road',
    			elementType: 'labels',
    			stylers: [{ visibility: 'off' }]
    		}
        ];

		const styledMap = new google.maps.StyledMapType(styles, {
			name: 'Styled Map'
		});

		mapRef.mapTypes.set('map_style', styledMap);
		mapRef.setMapTypeId('map_style');
    }

    render() {
        return (
            <div>
                <Header view='locations' />

                <div role="main" className="main">
                    <Banner view='locations' />

    				<div className="container">
    					<div className="row mt-xl">
    						<div className="col-md-8 col-md-offset-2 mt-xlg title-with-video-custom center">
    							<h1 className="mt-xlg font-weight-semibold text-uppercase">Locations</h1>
    							<p className="mb-none lead">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nulla consequat massa quis enim.</p>
    						</div>
    					</div>
    				</div>

                    <div id="googlemaps" className="google-map"></div>
    			</div>

                <Footer />
            </div>
        );
    }
}
