import React, { useState, useEffect, useCallback, useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

import { getSaList, getClassList } from '../../store'

import styles from './index.module.css'

const CheckClass = () => {
	let history = useHistory()

	const [ school, setSchool ] = useState([])
	const [ grade, setGrade ] = useState([])
	const [ clazz, setClazz ] = useState([])

	const [ schoolActive, setSchoolActive ] = useState({ sa_name: '' })
	const [ gradeActive, setGradeActive ] = useState({ gradeName: '' })
	const [ classActive, setClassActive ] = useState({ c_name: '' })

	const [ active, setActive ] = useState(false)


	// 选取学校
	const selectSchool = (item) => {
		setSchoolActive(item)
		getClassList(item).then((res) => {
			if (res.data.code == '100200') {
				let Grade = []
				let Clazz = []
				if (res.data.data) {
					if (res.data.data.grade_list) {
						Grade = res.data.data.grade_list
					}
					if (res.data.data.class_list) {
						Clazz = res.data.data.class_list
					}
				}
				setGrade(Grade)
				setClazz(Clazz)
			}
		})
	}

	// 选取年级
	const selectGrade = (item) => {
		setGradeActive(item)
		let key = {
			sa_id: schoolActive.sa_id,
			g_id: item.g_id
		}
		getClassList(key).then((res) => {
			if (res.data.code == '100200') {
				let Clazz = []
				if (res.data.data) {
					if (res.data.data.class_list) {
						Clazz = res.data.data.class_list
					}
				}
				setClazz(Clazz)
			}
		})
	}

	// 选取班级
	const selectClzz = (item) => {
		setClassActive(item)
	}

	// 默认渲染
	useEffect(() => {
		let key = Cookie.getJSON('CGB-BP-USER')
		getSaList(key).then((res) => {
			if (res.data.code == '100200') {
				setSchool(res.data.data)
				selectSchool(res.data.data[0])
			}
		})
	}, [])

	// 监控选择
	useEffect(
		() => {
			setActive(!!schoolActive.sa_name && !!gradeActive.gradeName && !!classActive.c_name)
		},
		[ classActive, gradeActive, schoolActive ]
	)

	// 选择班级
	const submit = () => {
		if (active) {
			let link = {
				pathname: '/grade-home',
				state: {
					s_id: classActive.s_id,
					c_id: 6191,
					// s_id: classActive.s_id,
					// c_id: classActive.c_id
					c_name:classActive.c_name,
					gradeName:gradeActive.gradeName
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
						{school ? (
							school.map((item, index) => (
								<li
									key={index}
									className={item === schoolActive ? styles['active'] : ''}
									onClick={() => selectSchool(item)}>
									{item.sa_name}
								</li>
							))
						) : null}
					</ul>
				</div>
				{/* 年级 */}
				<div className={styles['grade-item']}>
					<div className={styles['item-name']}>年级</div>
					<ul>
						{grade ? (
							grade.map((item, index) => (
								<li
									key={index}
									className={item === gradeActive ? styles['active'] : ''}
									onClick={() => selectGrade(item)}>
									{item.gradeName}
								</li>
							))
						) : null}
					</ul>
				</div>
				{/* 班级 */}
				<div className={styles['grade-item']}>
					<div className={styles['item-name']}>班级</div>
					<ul>
						{clazz ? (
							clazz.map((item, index) => (
								<li
									key={index}
									className={item === classActive ? styles['active'] : ''}
									onClick={() => selectClzz(item)}>
									{item.c_name}
								</li>
							))
						) : null}
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

export default CheckClass
