import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Cookie from 'js-cookie'

import './assets/css/react.css'
import { router } from './router.js'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>{router.map((route, i) => <SubRoutes key={i} {...route} />)}</Switch>
		</BrowserRouter>
	)
}

const SubRoutes = (route) => {
	let isBool = !route.requireAuth||!!Cookie.get('CGB-BP-USER')

	return isBool ? (
		<Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
	) : (
		<Redirect to="/login" />
	)
}

export default App
