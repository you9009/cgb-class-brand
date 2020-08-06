import Login from './views/Login/index'
import SelectClass from './views/SelectClass/index'
import StudentHome from './views/StudentHome/index'

export const router = [
	{
		path: '/login',
		component: Login
	},
	{
		path: '/select-class',
		component: SelectClass
	},
	{
		path: '/student-home',
		component: StudentHome
	},
]
