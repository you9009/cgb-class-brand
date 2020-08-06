import React, { useEffect, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const Login = (props) => {
	let history = useHistory()
	let location = useLocation()

	let { from } = location.state || { from: { pathname: '/select-class' } }

	let loginTo = () => {
		props.signIn({ fn: () => history.replace(from), data: { key: 111 } })
	}

	const requireAuth = useCallback(
		() => {
			if (props.isAuthenticated) {
				history.replace(from)
			}
		},
		[ from, history, props.isAuthenticated ]
	)

	useEffect(
		() => {
			const auth = requireAuth()
			window.addEventListener('load', auth)
			return () => {
				window.addEventListener('load', auth)
			}
		},
		[requireAuth]
	)

	return (
		<div>
			<h1>this is Login</h1>
			<button onClick={loginTo}>登录</button>
		</div>
	)
}

export default Login
