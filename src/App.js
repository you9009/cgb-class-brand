import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'

import Login from './views/Login/index'
import SelectClass from './views/SelectClass/index'
import StudentHome from './views/StudentHome/index'

import './assets/css/react.css'
import { fakeAuth } from './config.js'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login">
					<Login {...fakeAuth} />
				</Route>
				<PrivateRoute path="/select-class">
					<SelectClass {...fakeAuth} />
				</PrivateRoute>
				<PrivateRoute path="/student-home">
					<StudentHome {...fakeAuth} />
				</PrivateRoute>
			</Switch>
		</BrowserRouter>
	)
}
const PrivateRoute = ({ children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				fakeAuth.isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)}
		/>
	)
}

export default App
