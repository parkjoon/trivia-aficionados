import React from 'react';

import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

export default class PrivateEvents extends React.Component {
    render() {
        return (
            <div>
                <Header view={'privateEvents'} />

                <Banner view={'privateEvents'} />

                <Footer />
            </div>
        );
    }
}
