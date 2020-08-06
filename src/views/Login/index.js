import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

import styles from './index.module.css'

const Login = () => {
	let history = useHistory()

	const [ userName, setUserName ] = useState('')
	const [ PassWord, setPassWord ] = useState('')
	const [ active, setActive ] = useState(false)

	// 监控输入
	useEffect(
		() => {
			setActive(!!userName && !!PassWord)
		},
		[ PassWord, userName ]
	)

	// 登录
	const loginTo = () => {
		let key = {
			username: userName,
			password: PassWord
		}
		if (active) {
			Cookie.set('CGB-BP-USER', key)
			history.replace('/select-class')
		}
	}

	return (
		<div className={styles['login-wrap']}>
			<div className={styles['logo-pic']}>
				<img src={require('./../../assets/img/logo_pic.png')} alt="上海市黄浦区曹光彪小学" />
			</div>
			<div className={styles['form-wrap']}>
				<div className={styles['form-input']}>
					<input
						type="text"
						placeholder="请输入教师账号"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div className={styles['form-input']}>
					<input
						type="password"
						placeholder="请输入密码"
						value={PassWord}
						onChange={(e) => setPassWord(e.target.value)}
					/>
				</div>
				<div className={styles['form-button']}>
					<button onClick={loginTo} className={active ? styles['active'] : ''}>
						登录
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
