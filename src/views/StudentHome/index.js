import React from 'react'
import { Link,useHistory } from 'react-router-dom'

const StudentHome = (props) => {
	let history = useHistory()

	const exit = () => {
		props.signOut(() => history.push('/login'))
	}
	return (
		<div>
			<button onClick={exit}>退出</button>
			<h1>this is StudentHome</h1>
			<Link to="/select-class">select-class</Link>
		</div>
	)
}

export default StudentHome
