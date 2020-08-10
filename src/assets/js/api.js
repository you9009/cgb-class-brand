import axios from 'axios'
import CryptoJS from 'crypto-js'

axios.defaults.baseURL = 'http://api.silaishi.com'
axios.defaults.timeout = 10000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
	get(url, params) {
		return axios({
			method: 'get',
			url,
			params: getApiUtils(params)
		})
	},

	post(url, data) {
		return axios({
			method: 'post',
			url,
			data: getApiUtils(data),
			transformRequest: [
				function(data) {
					let ret = ''
					for (let it in data) {
						ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					}
					return ret.slice(0, -1)
				}
			]
		})
	}
}

const getApiUtils = (data) => {
	let time = new Date().getTime().toString()
	let list = []

	for (const key in data) {
		if (data.hasOwnProperty(key)) {
			const element = data[key]
			if (element === '' || element === null || element === undefined) {
				delete data[key]
			} else {
				list.push(key)
			}
		}
	}
	list.sort()

	data.client_time = time.slice(0, 10)
	let keyCase = data.client_time.slice(-6)
	let keyValue = ''

	for (const key in list) {
		if (list.hasOwnProperty(key)) {
			const element = list[key]

			keyValue += encodeURIComponent(element) + '=' + encodeURIComponent(data[element]) + '&'
		}
	}

	let keyVal = keyValue.slice(0, -1)

	data.mac = CryptoJS.HmacSHA1(keyVal, keyCase).toString(CryptoJS.enc.Hex)
	return data
}
