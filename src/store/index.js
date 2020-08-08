const files = require.context('.', false, /\.js$/)

const storeMap = new Map()
files.keys().forEach((key) => {
	if (key === './index.js') {
		return
	}

	let k = files(key)
	for (const [ n, v ] of Object.entries(k)) {
		storeMap.set(n, v)
	}
})
const modules = Array.from(storeMap.entries()).reduce((main, [ key, value ]) => ({ ...main, [key]: value }), {})

export default modules
