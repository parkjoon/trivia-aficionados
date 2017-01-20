import React from 'react';

export default class Banner extends React.Component {
    render() {
        return (
            <section className="parallax section section-text-light section-parallax section-center mt-none mb-xl" data-plugin-parallax data-plugin-options='{"speed": 1.5}' data-image-src="/src/assets/img/demos/digital-agency/slides/slide-digital-agency-1.jpg" style={{minHeight: '560px'}}>
                <div className="container">
                    <div className="row mt-xl">
                        <div className="col-md-8 col-md-offset-2 mt-xlg">
                            <h1 className="mt-xlg font-weight-semibold text-uppercase">BANNER</h1>
                            <p className="mb-none lead">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Nulla consequat massa quis enim.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
