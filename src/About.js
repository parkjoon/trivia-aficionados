import React from 'react';

import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Header view='about' />

                <Banner />

                <Footer />
            </div>
        );
    }
}
