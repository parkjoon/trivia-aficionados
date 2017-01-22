import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header" className="header-narrow header-semi-transparent" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAt": 1, "stickySetTop": "0"}'>
                <div className="header-body">
                    <div className="header-container container">
                        <div className="header-row">
                            <div className="header-column">
                                <div className="header-logo">
                                    <a className="logo" href="#" onClick={() => window.location = '/'}><img alt="Porto" width="131" height="40" src="/src/assets/img/demos/digital-agency/logo-digital-agency.png" /></a>
                                </div>
                            </div>
                            <div className="header-column">
                                <div className="header-row">
                                    <div className="header-nav header-nav-stripe">
                                        <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
                                            <i className="fa fa-bars"></i>
                                        </button>
                                        <ul className="header-social-icons social-icons hidden-xs">
                                            <li className="social-icons-facebook"><a href="https://www.facebook.com/Trivia-Aficionados-409506256056717/" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                            <li className="social-icons-twitter"><a href="https://twitter.com/TriviaMN" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                            <li className="social-icons-instagram"><a href="https://www.instagram.com/triviaaficionados/" target="_blank" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                        <div className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1 collapse">
                                            <nav>
                                                <ul className="nav nav-pills" id="mainNav">
                                                    <li className={this.props.view == 'home' ? 'active' : ''}>
                                                        <a href="#" onClick={() => window.location = '/'}>Home</a>
                                                    </li>
                                                    <li className={this.props.view == 'about' ? 'active' : ''}>
                                                        <a href="#" onClick={() => window.location = '/about'}>About</a>
                                                    </li>
                                                    <li className={this.props.view == 'calendar' ? 'active' : ''}>
                                                        <a href="#" onClick={() => window.location = '/calendar'}>Calendar</a>
                                                    </li>
                                                    <li className={this.props.view == 'privateEvents' ? 'active' : ''}>
                                                        <a href="#" onClick={() => window.location = '/private_events'}>Private Events</a>
                                                    </li>
                                                    <li className={this.props.view == 'locations' ? 'active' : ''}>
                                                        <a href="#" onClick={() => window.location = '/locations'}>Locations</a>
                                                    </li>
                                                    <li className={this.props.view == 'contact' ? 'active' : ''}>
                                                        <a href="#" onClick={() => window.location = '/contact'}>Contact</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
