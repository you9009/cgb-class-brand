import api from './../assets/js/api'
// 获取校区列表
const getSaList = (key) => {
	let URL = '/SchoolData/getSaList'
	let apiData = {
		s_id: key.s_id
	}
	api.post(URL, apiData).then((res) => {
		if (res.data.code === '100200') {
			console.log(res.data.data)
		}
	})
}
