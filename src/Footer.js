import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="short" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <a className="logo" href="#" onClick={() => window.location = '/'}><img alt="Porto Website Template" className="img-responsive" src="/src/assets/img/trivia-aficionados/logos/logo-1.png" /></a>
                        </div>
                        <div className="col-sm-2 col-sm-offset-8 align-right">
                            <h5 className="mb-sm">Minneapolis</h5>
                            <span className="phone font-size-sm"><i className="fa fa-phone text-color-primary"></i>{' +1 (612) 470-1352'}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <hr className="solid" />
                            <div className="row">
                                <div className="col-md-6">
                                    <p>© Copyright 2017. All rights reserved.</p>
                                </div>
                                <div className="col-md-6 align-right">
                                    <ul className="social-icons pull-right">
                                        <li className="social-icons-facebook"><a href="https://www.facebook.com/Trivia-Aficionados-409506256056717/" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li className="social-icons-twitter"><a href="https://twitter.com/TriviaMN" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li className="social-icons-instagram"><a href="https://www.instagram.com/triviaaficionados/" target="_blank" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                    <span className="footer-email-custom pull-right"><i className="fa fa-envelope text-color-primary"></i> <a href="mailto:triviaaficionados@gmail.com">triviaaficionados@gmail.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
