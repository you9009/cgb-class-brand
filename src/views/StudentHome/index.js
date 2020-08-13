import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import echarts from 'echarts'

import { getStuDataInfo, getGpInfo, getcinfo } from '../../store'

import styles from './index.module.css'
import StudentInfo from './../StudentInfo/index'

const menuList = [
	{
		name: '品德之光',
		pic: require('./../../assets/img/pingde_btn.png'),
		l_id: 11
	},
	{
		name: '活力之光',
		pic: require('./../../assets/img/huoli_btn.png'),
		l_id: 12
	},
	{
		name: '悦美之光',
		pic: require('./../../assets/img/yuemei_btn.png'),
		l_id: 13
	},
	{
		name: '智慧之光',
		pic: require('./../../assets/img/zhihu_btn.png'),
		l_id: 14
	},
	{
		name: '实践之光',
		pic: require('./../../assets/img/shijian_btn.png'),
		l_id: 15
	}
]

const StudentHome = () => {
	let history = useHistory()
	const [ countDown, setCountDown ] = useState(60)
	const [ menu, setMenu ] = useState(menuList)

	const [ searchKey, setSearchKey ] = useState(null)
	const [ studInfo, setStudInfo ] = useState(null)
	const [ studGrdt, setStudGrdt ] = useState(null)
	const [ studGrdtComments, setStudGrdtComments ] = useState(null)

	const [ brandkey, setBrandKey ] = useState(null)
	const [ showBrand, setshowBrand ] = useState(null)
	const [ brandList, setBrandList ] = useState(null)

	const [ activeId, setActiveId ] = useState(null)
	const [ activeBrands, setActiveBrands ] = useState(null)
	const [ activeComments, setActiveComments ] = useState(null)

	// 获取学生信息
	const getStuInfo = (key) => {
		getStuDataInfo(key).then((res) => {
			if (res.data.code == '100200') {
				let data = res.data.data
				if (data) {
					let item = {
						u_id: data.u_id,
						gu_code: data.gu_code,
						u_name: data.u_name,
						u_logo_pic: data.u_logo_pic,
						c_name: data.c_name
					}
					setStudInfo(item)
				}
			}
		})
	}

	// 获章流水
	const getGpComments = (key) => {
		getGpInfo(key).then((res) => {
			if (res.data.code == '200') {
				let data = res.data.data
				setStudGrdt({
					todaynum: data.todaynum,
					totalnum: data.totalnum
				})
				for (let i = 0; i < data.data.length; i++) {
					const element = data.data[i]
					if (element.img_src) {
						element.img_src = data.data[i].img_src.split(',')
					} else {
						delete data.data[i].img_src
					}
				}
				setStudGrdtComments(data.data)
			}
		})
	}

	// 每个章获得点亮值--echarts
	const getGpEcharts = (key) => {
		getGpInfo(key).then((res) => {
			if (res.data.code == '200') {
				let data = res.data.data
				for (let i = 0; i < data.length; i++) {
					const element = data[i]
					data[i] = {
						chuo_id: element.chuo_id,
						name: element.chuo_name,
						value: 1,
						pic: element.chuo_src,
						itemStyle: {
							color: element.color,
							opacity: Number(element.level) / Number(element.maxlevel)
						}
					}
				}
				// 所有徽章数据
				setBrandList(data)
				// echarts
				const options = {
					animation: false,
					series: {
						type: 'sunburst',
						highlightPolicy: 'ancestor',
						data: data,
						sort: null,
						nodeClick: false,
						label: {
							position: 'outside',
							rotate: 'radial',
							distance: 10,
							color: 'auto',
							fontWeight: 'bold'
						}
					}
				}
				echarts.init(document.getElementById('student-home')).setOption(options)
				// 当前展示徽章
				setBrandKey(0)
			}
		})
	}

	// 打开弹窗
	const openStudentInfo = (item) => {
		let isBool = true
		let brandsdata = {
			u_id: 159569,
			type: 2,
			l_id: item.l_id
		}
		getGpInfo(brandsdata).then((res) => {
			if (res.data) {
				if (res.data.code == '200') {
					let data = res.data.data
					for (let i = 0; i < data.data.length; i++) {
						const element = data.data[i]
						if (element.img_src) {
							element.img_src = data.data[i].img_src.split(',')
						} else {
							delete data.data[i].img_src
						}
					}
					setActiveBrands(data)
				}
			} else {
				isBool = false
			}
		})
		let commentsdata = {
			u_id: 159569,
			type: 1,
			l_id: item.l_id,
			page: 1,
			pagesize: 3
		}
		getGpInfo(commentsdata).then((res) => {
			if (res.data) {
				if (res.data.code == '200') {
					let data = res.data.data
					setActiveComments(data)
				}
			} else {
				isBool = false
			}
		})
		if (isBool) {
			setActiveId(item.l_id)
		}
	}

	// 切换当前徽章
	const nextBand = (name) => {
		let length = brandList.length - 1
		let now = brandkey
		if (name == 'prev') {
			if (now == 0) {
				now = length
			} else {
				now--
			}
		}
		if (name == 'next') {
			if (now == length) {
				now = 0
			} else {
				now++
			}
		}
		setBrandKey(now)
	}

	// 返回上一页
	const goBack = () => {
		let state = history.location.state
		delete state.union_id
		let link = {
			pathname: '/grade-home',
			state
		}
		history.replace(link)
	}

	// 倒计时
	const getCountDown = useCallback(
		() => {
			setInterval(() => {
				if (countDown > 0) {
					setCountDown(countDown - 1)
				} else {
					let state = history.location.state
					delete state.union_id
					let link = {
						pathname: '/grade-home',
						state
					}
					history.replace(link)
				}
			}, 1000)
		},
		[ countDown, history ]
	)

	// 默认执行
	useEffect(
		() => {
			let searchKey = history.location.state
			setSearchKey(searchKey)
			getStuInfo(searchKey)
			getGpComments({ ...searchKey, type: 2 })
			getGpEcharts({ ...searchKey, type: 1 })
		},
		[ history.location.state ]
	)

	// 选取展示徽章
	useEffect(
		() => {
			if (brandkey != null) {
				let key = {
					u_id: searchKey.u_id,
					c_id: searchKey.c_id,
					chuo_id: brandList[brandkey].chuo_id
				}
				getcinfo(key).then((res) => {
					if (res.data.code == '200') {
						setshowBrand(res.data.data)
					}
				})
			}
		},
		[ brandList, brandkey, searchKey ]
	)

	return (
		<div className={styles['student-home']}>
			{/* 顶部信息区 */}
			<div className={styles['header-wrap']}>
				<img
					className={styles['logo-pic']}
					src={require('./../../assets/img/logo_pic.png')}
					alt="上海市黄浦区曹光彪小学"
				/>
				<div className={styles['count-down']}>
					<img src={require('./../../assets/img/shalou_icon.png')} alt="倒计时图标" />
					<p>
						倒计时：<span>{countDown}</span> s
					</p>
				</div>
				{studInfo ? (
					<div className={styles['student-msg']}>
						<img src={studInfo.u_logo_pic} alt="" />
						<div className={styles['msg']}>
							<p>{studInfo.u_name}</p>
							<p>{studInfo.c_name}</p>
						</div>
					</div>
				) : null}
			</div>
			{/* 内容区 */}
			<div className={styles['main-wrap']}>
				<div className={styles['left']}>
					<ul>
						{menu.map((item, index) => (
							<li key={index} onClick={() => openStudentInfo(item)}>
								<img src={item.pic} alt={item.name} />
							</li>
						))}
					</ul>
					<div className={styles['back']} onClick={() => goBack()}>
						<img src={require('./../../assets/img/shouye _btn.png')} alt="班级主页" />
					</div>
				</div>
				<div className={styles['middle']}>
					<div className={styles['echarts-box']}>
						<div className={styles['echarts']} id="student-home" />
						<div className={styles['echarts-bg']}>
							<img src={require('./../../assets/img/jike_pic.png')} alt="echarts背景" />
						</div>
						<ul className={styles['cut-box']}>
							<li onClick={() => nextBand('next')}>
								<img src={require('./../../assets/img/xuanzhuan_zuo_btn.png')} alt="下一项" />
							</li>
							<li onClick={() => nextBand('prev')}>
								<img src={require('./../../assets/img/xuanzhuan_you_btn.png')} alt="上一项" />
							</li>
						</ul>
					</div>
					{showBrand ? (
						<div className={styles['select-brand']}>
							<img className={styles['brand-pic']} src={showBrand.chuo_src} alt="" />
							<div className={styles['info']}>
								<div className={styles['name']}>【{showBrand.chuo_name}】徽章</div>
								<ul className={styles['num']}>
									<li>
										<img src={showBrand.chuo_src} alt="" />
										本学期已获得<span>{showBrand.num1}</span>次
									</li>
									<li>
										<img src={require('./../../assets/img/hztb.png')} alt="" />
										共有<span>{showBrand.num2}</span>位老师颁发
									</li>
									<li>
										<img src={require('./../../assets/img/hztb.png')} alt="" />
										班级同学平均获得<span>{showBrand.num3}</span>次
									</li>
								</ul>
								<div className={styles['right-radius']} />
							</div>
						</div>
					) : null}
				</div>
				<div className={styles['right']}>
					<div className={styles['title-box']}>
						<div className={styles['today']}>今日获得徽章 {studGrdt ? studGrdt.todaynum : 0}枚</div>
						<div className={styles['total']}>累计获得 {studGrdt ? studGrdt.totalnum : 0}枚</div>
					</div>
					<div className={styles['main']}>
						{studGrdtComments ? (
							studGrdtComments.map((item, index) => {
								return (
									<div key={index} className={styles['item']}>
										<img className={styles['brand']} src={item.chuo_src} alt="" />
										<div className={styles['info-box']}>
											<div className={styles['time']}>{item.grant_time}</div>
											<div className={styles['text']}>{item.remark}</div>
											<ul className={styles['pic-box']}>
												{item.img_src ? (
													item.img_src.map((e, i) => {
														return (
															<li key={i}>
																<img src={e} alt="" />
															</li>
														)
													})
												) : null}
											</ul>
										</div>
									</div>
								)
							})
						) : null}
					</div>
				</div>
			</div>
			{/* 弹窗 */}
			{activeId ? (
				<StudentInfo
					id={activeId}
					brands={activeBrands}
					comments={activeComments}
					close={() => setActiveId(null)}
				/>
			) : null}
		</div>
	)
}

export default StudentHome
