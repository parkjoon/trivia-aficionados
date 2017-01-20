import About from './About';
import Calendar from './Calendar';
import Contact from './Contact';
import Home from './Home';
import Locations from './Locations';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router } from 'react-router';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path='/' component={Home} />
		<Route path='/home' component={Home} />
		<Route path='/about' component={About} />
		<Route path='/calendar' component={Calendar} />
		<Route path='/contact' component={Contact} />
		<Route path='/locations' component={Locations} />
	</Router>
), document.getElementById('root'))
