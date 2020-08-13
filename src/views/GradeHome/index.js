import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import echarts from 'echarts'

import { getWeekhor, getWeeknum, getClassPicList, getClassInfo, getClassDynamic } from '../../store'

import PhotoAlbum from './../PhotoAlbum'

import styles from './index.module.css'

const colors = [
	{
		backgroundColor: '#fc0',
		opacity: 0.5
	},
	{
		backgroundColor: '#24c5ed',
		opacity: 0.6
	},
	{
		backgroundColor: '#59da77',
		opacity: 0.2
	},
	{
		backgroundColor: '#fe566f',
		opacity: 0.4
	},
	{
		backgroundColor: '#fc0',
		opacity: 0.5
	},
	{
		backgroundColor: '#24c5ed',
		opacity: 0.6
	},
	{
		backgroundColor: '#59da77',
		opacity: 0.2
	},
	{
		backgroundColor: '#fe566f',
		opacity: 0.4
	},
	{
		backgroundColor: '#fc0',
		opacity: 0.5
	},
	{
		backgroundColor: '#24c5ed',
		opacity: 0.6
	},
	{
		backgroundColor: '#59da77',
		opacity: 0.2
	},
	{
		backgroundColor: '#fe566f',
		opacity: 0.4
	},
	{
		backgroundColor: '#fc0',
		opacity: 0.5
	},
	{
		backgroundColor: '#24c5ed',
		opacity: 0.6
	},
	{
		backgroundColor: '#59da77',
		opacity: 0.2
	},
	{
		backgroundColor: '#fe566f',
		opacity: 0.4
	},
	{
		backgroundColor: '#fc0',
		opacity: 0.5
	},
	{
		backgroundColor: '#24c5ed',
		opacity: 0.6
	},
	{
		backgroundColor: '#59da77',
		opacity: 0.2
	},
	{
		backgroundColor: '#fe566f',
		opacity: 0.4
	},
	{
		backgroundColor: '#fc0',
		opacity: 0.5
	},
	{
		backgroundColor: '#24c5ed',
		opacity: 0.6
	},
	{
		backgroundColor: '#59da77',
		opacity: 0.2
	},
	{
		backgroundColor: '#fe566f',
		opacity: 0.4
	},
	{
		backgroundColor: '#fc0',
		opacity: 0.5
	},
	{
		backgroundColor: '#24c5ed',
		opacity: 0.6
	},
	{
		backgroundColor: '#59da77',
		opacity: 0.2
	},
	{
		backgroundColor: '#fe566f',
		opacity: 0.4
	}
]

const rank = [
	{
		name: '品德之星',
		l_id: 11
	},
	{
		name: '活力之星',
		l_id: 12
	},
	{
		name: '悦美之星',
		l_id: 13
	},
	{
		name: '智慧之星',
		l_id: 14
	},
	{
		name: '实践之星',
		l_id: 15
	}
]

const options = {
	animation: false,
	color: '#fff',
	grid: {
		left: '2%',
		right: '2%',
		bottom: '5%',
		top: '4%',
		containLabel: true
	},
	xAxis: {
		type: 'category',
		data: [],
		axisLabel: {
			color: '#fff'
		},
		axisLine: {
			lineStyle: {
				width: 4,
				opacity: 0.1,
				type: 'solid'
			}
		},
		axisTick: {
			show: false
		}
	},
	yAxis: {
		type: 'value',
		axisLabel: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				width: 4,
				color: 'rgba(255, 255, 255, .1)',
				type: 'solid'
			}
		},
		splitLine: {
			lineStyle: {
				opacity: 0.1,
				type: 'dashed',
				width: 2
			}
		}
	},
	series: [
		{
			data: [],
			type: 'line'
		}
	]
}

// 补全位数
const addZero = (num) => {
	if (num < 10) {
		num = '0' + num
	}
	return num
}

const GradeHome = () => {
	let history = useHistory()

	const [ colorList, setColorList ] = useState(colors)
	const [ searchKey, setSearchKey ] = useState(null)

	const [ commentList, setCommentList ] = useState([])
	const [ rankTitle, setRankTitle ] = useState(rank)
	const [ Rank, setRank ] = useState(null)
	const [ rankList, setRankList ] = useState([])
	const [ photoAlbum, SetPhotoAlbum ] = useState(false)
	const [ totalNum, SetTotalNum ] = useState(0)
	const [ todayInfo, SetTodayInfo ] = useState(0)
	const [ Time, SetTime ] = useState(0)
	const [ photoAlbumData, setPhotoAlbumData ] = useState(0)
	const [ cover, setCover ] = useState(null)

	// 获取班级详情数据
	const getTodayInfo = (key) => {
		getClassInfo(key).then((res) => {
			if (res.data.code == '100200') {
				let Time = new Date()
				let year = Time.getFullYear()
				let month = Time.getMonth() + 1
				let day = Time.getDate()
				let w = Time.getDay()
				let weekList = [ '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日' ]
				if (res.data.data) {
					let weather = res.data.data.weather
					if (weather) {
						let data = {
							day: year + '年' + addZero(month) + '月' + addZero(day) + '日',
							week: weekList[w],
							pic: require('./../../assets/img/home_mood_pic_' + weather.img + '.png'),
							name: weather.name,
							gradeclass: key.gradeName + key.c_name
						}
						SetTodayInfo(data)
					}
				}
			}
		})
	}

	// 本周学生荣誉榜
	const setSelectRank = useCallback(
		(item) => {
			let isBool = history.location.state
			if (isBool) {
				let key = {
					c_id: isBool.c_id,
					l_id: item.l_id
				}
				setRank(item)
				getWeekhor(key).then((res) => {
					let data = []
					if (res.data) {
						if (res.data.code == '200') {
							data = res.data.data
						}
					}
					setRankList(data)
				})
			}
		},
		[ history.location.state ]
	)

	// 本周获章情况
	const getWeekEcharts = (key) => {
		getWeeknum(key).then((res) => {
			if (res.data.code == '200') {
				SetTotalNum(res.data.data.totalNum)
				let title = []
				let data = []
				let isBool = false
				let list = res.data.data
				for (const k in list) {
					if (list.hasOwnProperty(k)) {
						const element = list[k]
						if (k !== 'totalNum') {
							isBool = true
							title.push(k)
							data.push(element)
						}
					}
				}

				options.xAxis.data = title
				options.series[0].data = data
				if (isBool) {
					echarts.init(document.getElementById('grade-home')).setOption(options)
				}
			}
		})
	}

	// 获取班级动态
	const getComment = (key) => {
		getClassDynamic(key).then((res) => {
			if (res.data.code == '100200') {
				setCommentList(res.data.data)
			}
		})
	}

	// 获取班级相册列表
	const openPhotoAlbum = (num) => {
		SetPhotoAlbum(true)
		let key = {
			page: num,
			pagesize: 6,
			...searchKey
		}
		getClassPicList(key).then((res) => {
			if (res.data.code == '100200') {
				setPhotoAlbumData(res.data)
			}
		})
	}

	const getPhotoAlbum = (item) => {
		let key = {
			page: 1,
			pagesize: 6,
			...item
		}
		getClassPicList(key).then((res) => {
			if (res.data.code == '100200') {
				if (res.data.data) {
					if (res.data.data.length) {
						setCover(res.data.data[0].pic)
					}
				}
			}
		})
	}

	// 默认渲染
	useEffect(
		() => {
			let searchKey = {
				...history.location.state,
				c_id: 5678,
				s_id: 47
			}
			// let searchKey = history.location.state
			setSearchKey(searchKey)
			setSelectRank(rankTitle[0])
			getWeekEcharts(searchKey)
			getTodayInfo(searchKey)
			getComment(searchKey)
			getPhotoAlbum(searchKey)

			// 获取时间 —— 60秒刷新一次
			const getTime = () => {
				let time = new Date()
				let hours = time.getHours()
				let minutes = time.getMinutes()
				SetTime(addZero(hours) + ':' + addZero(minutes))
			}
			getTime()
			const start = setInterval(() => {
				getTime()
			}, 60 * 1000)
			return () => {
				clearInterval(start)
			}
		},
		[ history.location.state, rankTitle, setSelectRank ]
	)

	// 去班级选择页面
	const linkToSelect = () => {
		history.push('/check-class')
	}

	// 去学生详情页
	const linkToStudent = () => {
		// let state = history.location.state
		let state = {
			c_id: 6191,
			u_id: 159569,
			union_id: 3333
		}
		let link = {
			pathname: '/student-home',
			state
		}
		history.push(link)
	}

	return (
		<div className={styles['grade-wrap']}>
			{/* 顶部信息区 */}
			<div className={styles['grade-header']}>
				<div className={styles['logo-pic']}>
					<img src={require('./../../assets/img/logo_pic.png')} alt="上海市黄浦区曹光彪小学" />
					<div className={styles['grader-name']} onClick={linkToSelect}>
						<img src={require('./../../assets/img/banji_icon.png')} alt="" />
						<span>{todayInfo.gradeclass}</span>
					</div>
				</div>
				<div className={styles['weather-box']}>
					<div className={styles['time']}>{Time}</div>
					<div className={styles['day']}>
						<p>{todayInfo.day}</p>
						<p>
							{todayInfo.week}，{todayInfo.name}
						</p>
					</div>
					<div className={styles['weather']}>
						<img src={todayInfo.pic} alt="天气" />
					</div>
				</div>
			</div>

			{/* 颜色光带区 */}
			<div className={styles['gap-wrap']}>
				<ul>{colorList.map((item, index) => <li key={index} style={{ ...item }} />)}</ul>
			</div>

			{/* 主要内容区 */}
			<div className={styles['grade-box']}>
				<div className={styles['grade-left']}>
					<div className={styles['top']}>
						<div className={styles['title']}>学生荣誉榜</div>
						<div className={styles['main']}>
							<ul>
								{rankTitle.map((item, index) => (
									<li
										key={index}
										className={item === Rank ? styles['active'] : ''}
										onClick={() => setSelectRank(item)}>
										{item.name}
									</li>
								))}
							</ul>
							<div className={styles['student-list']}>
								{rankList.map((item, index) => (
									<div className={styles['item']} key={index}>
										<img src={item.u_logo_pic} alt={item.u_name} />
										<div className={styles['name']}>{item.u_name}</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className={styles['card']} onClick={linkToStudent}>
						<p>请把学生卡放置在刷卡区</p>
						<p>查看个人光谱</p>
					</div>
				</div>
				<div className={styles['grade-middle']}>
					<div className={styles['top']}>
						<div className={styles['title']}>
							获章总量 <span>{totalNum}</span> 枚
						</div>
						<div className={styles['main']} id="grade-home" />
					</div>
					<div className={styles['bottom']} onClick={() => openPhotoAlbum(1)}>
						<img className={styles['bg']} src={require('./../../assets/img/dianshi_bg.png')} alt="背景" />
						<div className={styles['main']}>
							<img src={cover} alt="相册" />
						</div>
					</div>
				</div>
				<div className={styles['grade-right']}>
					<div className={styles['title']}>评价动态</div>
					<div className={styles['main']}>
						{commentList.map((item, index) => {
							return (
								<div key={index} className={styles['item']}>
									<img className={styles['brand']} src={item.u_logo_pic} alt="" />
									<div className={styles['info-box']}>
										<div className={styles['time']}>{item.cdate}</div>
										<div className={styles['text']}>{item.title}</div>
										<ul className={styles['pic-box']}>
											{item.img_src.map((e, i) => {
												return (
													<li key={i}>
														<img src={e} alt="" />
													</li>
												)
											})}
										</ul>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>

			{/* 班级相册 */}
			{photoAlbum ? (
				<PhotoAlbum
					data={photoAlbumData}
					next={(e) => openPhotoAlbum(e)}
					closeModal={() => SetPhotoAlbum(false)}
				/>
			) : null}
		</div>
	)
}

export default GradeHome
