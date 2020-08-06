import Login from './views/Login/index'
import SelectClass from './views/SelectClass/index'
import StudentHome from './views/StudentHome/index'
import GradeHome from './views/GradeHome/index'

export const router = [
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/select-class',
		name: 'SelectClass',
		component: SelectClass,
		requireAuth: true
	},
	{
		path: '/grade-home',
		name: 'GradeHome',
		component: GradeHome,
		requireAuth: true
	},
	{
		path: '/student-home',
		name: 'StudentHome',
		component: StudentHome,
		requireAuth: true
	}
]
