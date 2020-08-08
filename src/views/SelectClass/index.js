import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import styles from './index.module.css'

const selectClassList = [
	{
		title: '校区',
		list: [
			{
				name: '校区1'
			},
			{
				name: '校区2'
			},
			{
				name: '校区3'
			}
		]
	},
	{
		title: '年级',
		list: [
			{
				name: '一年级'
			},
			{
				name: '二年级'
			},
			{
				name: '三年级'
			},
			{
				name: '四年级'
			},
			{
				name: '五年级'
			},
			{
				name: '六年级'
			}
		]
	},
	{
		title: '班级',
		list: [
			{
				name: '1班'
			},
			{
				name: '2班'
			},
			{
				name: '3班'
			},
			{
				name: '4班'
			},
			{
				name: '5班'
			},
			{
				name: '6班'
			},
			{
				name: '7班'
			},
			{
				name: '8班'
			},
			{
				name: '9班'
			},
			{
				name: '10班'
			}
		]
	}
]

const SelectClass = () => {
	let history = useHistory()

	const [ gradeList, setGradeList ] = useState(selectClassList)
	const [ schoolActive, setSchoolActive ] = useState({})
	const [ gradeActive, setGradeActive ] = useState({})
	const [ classActive, setClassActive ] = useState({})
	const [ active, setActive ] = useState(false)

	// 监控选择
	useEffect(
		() => {
			setActive(!!schoolActive.name && !!gradeActive.name && !!classActive.name)
		},
		[ classActive, gradeActive, schoolActive ]
	)

	const getType = (name) => {
		if (name === '校区') {
			return schoolActive
		}
		if (name === '年级') {
			return gradeActive
		}
		if (name === '班级') {
			return classActive
		}
	}
	const setType = (name, e) => {
		if (name === '校区') {
			setSchoolActive(e)
		}
		if (name === '年级') {
			setGradeActive(e)
		}
		if (name === '班级') {
			setClassActive(e)
		}
	}

	// 选择班级
	const submit = () => {
		let key = {
			school: schoolActive,
			grade: gradeActive,
			class: classActive
		}
		if (active) {
			history.push('/grade-home')
		}
	}

	return (
		<div className={styles['select-class-wrap']}>
			<div className={styles['logo-pic']}>
				<img src={require('./../../assets/img/logo_pic.png')} alt="上海市黄浦区曹光彪小学" />
			</div>
			<div className={styles['grade-wrap']}>
				{gradeList.map((item, index) => {
					return (
						<div className={styles['grade-item']} key={index}>
							<div className={styles['item-name']}>{item.title}</div>
							<ul>
								{item.list.map((e, i) => (
									<li
										key={i}
										className={e === getType(item.title) ? styles['active'] : ''}
										onClick={() => setType(item.title, e)}>
										{e.name}
									</li>
								))}
							</ul>
						</div>
					)
				})}
			</div>
			<div className={styles['select-grade']}>
				<div className={styles['grade-name']}>
					{schoolActive.name}-{gradeActive.name}-{classActive.name}
				</div>
				<button onClick={submit} className={active ? styles['active'] : ''}>
					确定
				</button>
			</div>
		</div>
	)
}

export default SelectClass
