import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

import api from './../../assets/js/api'

import styles from './index.module.css'

const SelectClass = () => {
	let history = useHistory()

	const [ school, setSchool ] = useState([])
	const [ grade, setGrade ] = useState([])
	const [ clazz, setClazz ] = useState([])
	const [ schoolActive, setSchoolActive ] = useState({ sa_name: '' })
	const [ gradeActive, setGradeActive ] = useState({ gradeName: '' })
	const [ classActive, setClassActive ] = useState({ c_name: '' })
	const [ active, setActive ] = useState(false)

	// 获取年级列表
	const getClassList = useCallback((key) => {
		let URL = '/SchoolData/getClassList'
		let apiData = {
			sa_id: key.sa_id,
			g_id: key.g_id
		}
		api.post(URL, apiData).then((res) => {
			if (res.data.code === '100200') {
				let data = res.data.data.class_list
				setClazz(data || [])
			}
		})
	}, [])

	// 选取年级
	const selectGrade = useCallback((item) => {
		setGradeActive(item)
	}, [])

	// 获取班级列表
	const getGradeList = useCallback(
		(key) => {
			let URL = '/SchoolData/getClassList'
			let apiData = {
				sa_id: key.sa_id
			}
			api.post(URL, apiData).then((res) => {
				if (res.data.code === '100200') {
					let grade = res.data.data.grade_list
					let clazz = res.data.data.class_list
					if (grade) {
						selectGrade(grade[0])
					}
					if (clazz) {
						selectClzz(clazz[0])
					}
					setGrade(grade || [])
					setClazz(clazz || [])
				}
			})
		},
		[ selectGrade ]
	)

	// 选取校区
	const selectSchool = useCallback(
		(item) => {
			setSchoolActive(item)
			setGradeActive({ gradeName: '' })
			setClassActive({ c_name: '' })
			getGradeList(item)
		},
		[ getGradeList ]
	)

	// 选择班级
	const selectClzz = (item) => {
		setClassActive(item)
	}

	// 获取校区列表
	const getSaList = useCallback(
		(key) => {
			let URL = '/SchoolData/getSaList'
			let apiData = {
				s_id: key.s_id
			}
			api.post(URL, apiData).then((res) => {
				if (res.data.code === '100200') {
					setSchool(res.data.data || [])
					selectSchool(res.data.data[0])
				}
			})
		},
		[ selectSchool ]
	)

	// 默认渲染
	useEffect(
		() => {
			let key = Cookie.getJSON('CGB-BP-USER')
			getSaList(key)
		},
		[ getSaList ]
	)

	// 监控选择
	useEffect(
		() => {
			setActive(!!schoolActive.sa_name && !!gradeActive.gradeName && !!classActive.c_name)
		},
		[ classActive, gradeActive, schoolActive ]
	)

	// 选择班级
	const submit = () => {
		let key = {
			school: schoolActive,
			grade: gradeActive,
			class: classActive
		}
		if (active) {
			let link = {
				pathname: '/grade-home',
				state: {
					s_id: classActive.s_id,
					c_id: classActive.c_id
				}
			}
			history.push(link)
		}
	}

	return (
		<div className={styles['select-class-wrap']}>
			<div className={styles['logo-pic']}>
				<img src={require('./../../assets/img/logo_pic.png')} alt="上海市黄浦区曹光彪小学" />
			</div>
			<div className={styles['grade-wrap']}>
				{/* 校区 */}
				<div className={styles['grade-item']}>
					<div className={styles['item-name']}>校区</div>
					<ul>
						{school.map((item, index) => (
							<li
								key={index}
								className={item === schoolActive ? styles['active'] : ''}
								onClick={() => selectSchool(item)}>
								{item.sa_name}
							</li>
						))}
					</ul>
				</div>
				{/* 年级 */}
				<div className={styles['grade-item']}>
					<div className={styles['item-name']}>年级</div>
					<ul>
						{grade.map((item, index) => (
							<li
								key={index}
								className={item === gradeActive ? styles['active'] : ''}
								onClick={() => selectGrade(item)}>
								{item.gradeName}
							</li>
						))}
					</ul>
				</div>
				{/* 班级 */}
				<div className={styles['grade-item']}>
					<div className={styles['item-name']}>班级</div>
					<ul>
						{clazz.map((item, index) => (
							<li
								key={index}
								className={item === classActive ? styles['active'] : ''}
								onClick={() => selectClzz(item)}>
								{item.c_name}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles['select-grade']}>
				<div className={styles['grade-name']}>
					{schoolActive.sa_name}-{gradeActive.gradeName}-{classActive.c_name}
				</div>
				<button onClick={submit} className={active ? styles['active'] : ''}>
					确定
				</button>
			</div>
		</div>
	)
}

export default SelectClass
