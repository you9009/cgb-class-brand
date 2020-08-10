import api from '../assets/js/api'

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

// 获取班级列表
export const getClassList = (key) => {
	let URL = '/SchoolData/getClassList'
	let data = {
		sa_id: key.sa_id,
		g_id: key.g_id
	}
	return api.post(URL, data)
}

// 获取班级详情数据
export const getClassInfo = (key) => {
	let URL = '/SchoolData/getClassInfo'
	let data = {
		s_id: key.s_id,
		c_id: key.c_id
	}
	return api.post(URL, data)
}

// 获取班级相册列表
export const getClassPicList = (key) => {
	let URL = '/SchoolData/getClassPicList'
	let data = {
		s_id: key.s_id,
		c_id: key.c_id,
		page: key.page,
		pagesize: key.pagesize
	}
	return api.post(URL, data)
}

// 本周学生荣誉榜接口
export const getWeekhor = (key) => {
	let URL = '/SchoolData/weekhor'
	let data = {
		l_id: key.l_id,
		c_id: key.c_id
	}
	return api.post(URL, data)
}

// 本周获章情况
export const getWeeknum = (key) => {
	let URL = '/SchoolData/weeknum'
	let data = {
		c_id: key.c_id
	}
	return api.post(URL, data)
}

// 个人光谱详情页面接口
export const getGpInfo = (key) => {
	let URL = '/SchoolData/getGpInfo'
	let data = {
		u_id: key.u_id,
		l_id: key.l_id,
		type: key.type,
		page: key.page,
		pagesize: key.pagesize
	}
	return api.post(URL, data)
}

// 徽章个人与班级平均数据
export const getCinfo = (key) => {
	let URL = '/SchoolData/cinfo'
	let data = {
		c_id: key.c_id,
		u_id: key.u_id,
		chuo_id: key.chuo_id
	}
	return api.post(URL, data)
}
