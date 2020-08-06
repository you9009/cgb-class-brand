import axios from 'axios'
import Cookie from 'js-cookie'

axios.defaults.baseURL = ''
axios.defaults.timeout = 10000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params: getApiUtils(params)
    })
  },

  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: getApiUtils(data),
      transformRequest: [
        function (data) {
          let ret = ''
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret.slice(0, -1)
        }
      ]
    })
  }
}

const getApiUtils = (data) => {
  let time = new Date()
  let Y = time.getFullYear()
  let M = time.getMonth() + 1
  let D = time.getDate()
  let H = time.getHours()
  let I = time.getMinutes()
  let S = time.getSeconds()
  let Time = String(Y) + String(M) + String(D) + String(H) + String(I) + String(S)

  let tokenData = Cookie.get('SJSL-MH-USER')
  data.timestamp = Time
  data.token = tokenData ? tokenData.token : ''
  data.token_id = tokenData ? tokenData.token_id : ''

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key]
      if (element == null || element === undefined || element === '') {
        delete data[key]
      }
    }
  }
  return data
}
