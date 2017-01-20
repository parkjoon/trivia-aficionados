import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="short" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <Link to='/' className="logo"><img alt="Porto Website Template" className="img-responsive" src="/src/assets/img/demos/digital-agency/logo-digital-agency.png" /></Link>
                        </div>
                        <div className="col-sm-2 col-sm-offset-8 align-right">
                            <h5 className="mb-sm">Minneapolis</h5>
                            <span className="phone font-size-sm"><i className="fa fa-phone text-color-primary"></i>{' +1 (800) 123-4567'}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <hr className="solid" />
                            <div className="row">
                                <div className="col-md-6">
                                    <p>© Copyright 2017. All Rights Reserved.</p>
                                </div>
                                <div className="col-md-6 align-right">
                                    <ul className="social-icons pull-right">
                                        <li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li className="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li className="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                    <span className="footer-email-custom pull-right"><i className="fa fa-envelope text-color-primary"></i> <a href="mailto:mail@example.com">triviaafficiandos@gmail.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
