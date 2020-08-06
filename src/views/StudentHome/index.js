import React from 'react'
import { Link, useHistory } from 'react-router-dom'


const StudentHome = () => {
	let history = useHistory()

	return (
		<div>
			<h1>this is StudentHome</h1>
			<Link to="/select-class">select-class</Link>
		</div>
	)
}

export default StudentHome
