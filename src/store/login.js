import api from './../assets/js/api'

// 登录
export const login = (key) => {
	let URL = '/SchoolData/login'
	let data = {
		username: key.username,
		password: key.password
	}
	return api.post(URL, data)
}

// 获取校区列表
export const getSaList = (key) => {
	let URL = '/SchoolData/getSaList'
	let data = {
		s_id: key.s_id
	}
	return api.post(URL, data)
}
