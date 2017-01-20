import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header" className="header-narrow header-semi-transparent" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAt": 1, "stickySetTop": "0"}'>
                <div className="header-body">
                    <div className="header-container container">
                        <div className="header-row">
                            <div className="header-column">
                                <div className="header-logo">
                                    <Link to='/' className="logo"><img alt="Porto" width="131" height="40" src="/src/assets/img/demos/digital-agency/logo-digital-agency.png" /></Link>
                                </div>
                            </div>
                            <div className="header-column">
                                <div className="header-row">
                                    <div className="header-nav header-nav-stripe">
                                        <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
                                            <i className="fa fa-bars"></i>
                                        </button>
                                        <ul className="header-social-icons social-icons hidden-xs">
                                            <li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                            <li className="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                            <li className="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                        </ul>
                                        <div className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1 collapse">
                                            <nav>
                                                <ul className="nav nav-pills" id="mainNav">
                                                    <li className={this.props.view == 'home' ? 'active' : ''}>
                                                        <Link to='/'>Home</Link>
                                                    </li>
                                                    <li className={this.props.view == 'about' ? 'active' : ''}>
                                                        <Link to='/about'>About</Link>
                                                    </li>
                                                    <li className={this.props.view == 'calendar' ? 'active' : ''}>
                                                        <Link to='/calendar'>Calendar</Link>
                                                    </li>
                                                    <li className={this.props.view == 'locations' ? 'active' : ''}>
                                                        <Link to='/locations'>Locations</Link>
                                                    </li>
                                                    <li className={this.props.view == 'contact' ? 'active' : ''}>
                                                        <Link to='/contact'>Contact</Link>
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
