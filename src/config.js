import Cookie from 'js-cookie'

export const fakeAuth = {
	isAuthenticated: !!Cookie.get('CGB-BP-USER'),
	signIn(cb) {
		fakeAuth.isAuthenticated = true
		Cookie.set('CGB-BP-USER', cb.data)
		setTimeout(cb.fn, 100)
	},
	signOut(fn) {
		fakeAuth.isAuthenticated = false
		Cookie.remove('CGB-BP-USER')
		setTimeout(fn, 100)
	}
}
