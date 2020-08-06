const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
	if (key === './index.js') {
		return
	}
  console.log(files(key))
	modules[key.replace(/(\.\/|\.js)/g, '')] = files(key)
})
export default modules
