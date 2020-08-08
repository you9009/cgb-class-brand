import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import echarts from 'echarts'

import styles from './index.module.css'
import StudentInfo from './../StudentInfo/index'

const menuList = [
	{
		name: '品德之光',
		pic: require('./../../assets/img/pingde_btn.png'),
		id: 1
	},
	{
		name: '活力之光',
		pic: require('./../../assets/img/huoli_btn.png'),
		id: 2
	},
	{
		name: '悦美之光',
		pic: require('./../../assets/img/yuemei_btn.png'),
		id: 3
	},
	{
		name: '智慧之光',
		pic: require('./../../assets/img/zhihu_btn.png'),
		id: 4
	},
	{
		name: '实践之光',
		pic: require('./../../assets/img/shijian_btn.png'),
		id: 5
	}
]
const comments = [
	{
		band: '规范书写1',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		time: '2020年8月7日10:34:43',
		text: '张欢欢老师给你颁发了【规范书写】徽章，评语“你今天书写非常认真，继续加油！”',
		pic_box: [
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg'
		]
	},
	{
		band: '规范书写2',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		time: '2020年8月7日10:34:43',
		text: '张欢欢老师给你颁发了【规范书写】徽章，评语“你今天书写非常认真，继续加油！”',
		pic_box: [
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg'
		]
	},
	{
		band: '规范书写3',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		time: '2020年8月7日10:34:43',
		text: '张欢欢老师给你颁发了【规范书写】徽章，评语“你今天书写非常认真，继续加油！”',
		pic_box: [
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg'
		]
	},
	{
		band: '规范书写4',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		time: '2020年8月7日10:34:43',
		text: '张欢欢老师给你颁发了【规范书写】徽章，评语“你今天书写非常认真，继续加油！”',
		pic_box: [ 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg' ]
	},
	{
		band: '规范书写5',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		time: '2020年8月7日10:34:43',
		text: '张欢欢老师给你颁发了【规范书写】徽章，评语“你今天书写非常认真，继续加油！”',
		pic_box: []
	}
]

const data = [
	{
		name: '孟子',
		value: 1,
		pic: require('./../../assets/img/shalou_icon.png'),
		itemStyle: {
			color: '#5e9a80'
		}
	},
	{
		name: '大学',
		value: 1,
		itemStyle: {
			color: '#3aa255'
		}
	},
	{
		name: '中庸',
		value: 1,
		itemStyle: {
			color: '#5e9a80'
		}
	},
	{
		name: '书经（尚书）',
		value: 1,
		itemStyle: {
			color: '#3aa255'
		}
	},
	{
		name: '礼记',
		value: 1,
		itemStyle: {
			color: '#5e9a80'
		}
	},
	{
		name: '易经',
		value: 1,
		itemStyle: {
			color: '#3aa255'
		}
	},
	{
		name: '诗经',
		value: 1,
		itemStyle: {
			color: '#5e9a80'
		}
	},
	{
		name: '战国策',
		value: 1,
		itemStyle: {
			color: '#FFDEAD'
		}
	},
	{
		name: '左传',
		value: 1,
		itemStyle: {
			color: '#EEDC82'
		}
	},
	{
		name: '史记',
		value: 1,
		itemStyle: {
			color: '#FFDEAD'
		}
	},
	{
		name: '孟子',
		value: 1,
		itemStyle: {
			color: '#5e9a80'
		}
	},
	{
		name: '大学',
		value: 1,
		itemStyle: {
			color: '#3aa255'
		}
	},
	{
		name: '中庸',
		value: 1,
		itemStyle: {
			color: '#5e9a80'
		}
	},
	{
		name: '书经（尚书）',
		value: 1,
		itemStyle: {
			color: '#3aa255'
		}
	},
	{
		name: '礼记',
		value: 1,
		itemStyle: {
			color: '#5e9a80'
		}
	},
	{
		name: '易经',
		value: 1,
		itemStyle: {
			color: '#3aa255'
		}
	},
	{
		name: '诗经',
		value: 1,
		itemStyle: {
			color: '#5e9a80'
		}
	},
	{
		name: '战国策',
		value: 1,
		itemStyle: {
			color: '#FFDEAD'
		}
	},
	{
		name: '左传',
		value: 1,
		itemStyle: {
			color: '#EEDC82'
		}
	},
	{
		name: '史记',
		value: 1,
		itemStyle: {
			color: '#FFDEAD'
		}
	},
	{
		name: '孟子',
		value: 1,
		itemStyle: {
			color: '#5e9a80'
		}
	},
	{
		name: '大学',
		value: 1,
		itemStyle: {
			color: '#3aa255'
		}
	},
	{
		name: '中庸',
		value: 1,
		itemStyle: {
			color: '#5e9a80'
		}
	},
	{
		name: '书经（尚书）',
		value: 1,
		itemStyle: {
			color: '#3aa255'
		}
	},
	{
		name: '礼记',
		value: 1,
		itemStyle: {
			color: '#5e9a80'
		}
	},
	{
		name: '易经',
		value: 1,
		itemStyle: {
			color: '#3aa255'
		}
	},
	{
		name: '诗经',
		value: 1,
		itemStyle: {
			color: '#5e9a80'
		}
	},
	{
		name: '战国策',
		value: 1,
		itemStyle: {
			color: '#FFDEAD'
		}
	},
	{
		name: '左传',
		value: 1,
		itemStyle: {
			color: '#EEDC82'
		}
	},
	{
		name: '史记',
		value: 1,
		itemStyle: {
			color: '#FFDEAD'
		}
	}
]

const options = {
	animation: false,
	series: {
		type: 'sunburst',
		highlightPolicy: 'ancestor',
		data: data,
		sort: null,
		label: {
			position: 'outside',
			rotate: 'radial',
			distance: 10,
			formatter: [ '{a|} {b}' ].join('\n'),
			rich: {
				a: {
					backgroundColor: {
						image: require('./../../assets/img/shalou_icon.png')
					}
				}
			}
		}
	}
}

const StudentHome = () => {
	const [ menu, setMenu ] = useState(menuList)
	const [ commentList, setCommentList ] = useState(comments)
	const [ activeMenu, setaActiveMenu ] = useState(null)

	useEffect(() => {
		echarts.init(document.getElementById('student-home')).setOption(options)
	}, [])

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
						倒计时：<span>59</span> s
					</p>
				</div>
				<div className={styles['student-msg']}>
					<img src="http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg" alt="高伊伊" />
					<div className={styles['msg']}>
						<p>高伊伊</p>
						<p>三年级3班</p>
					</div>
				</div>
			</div>
			{/* 内容区 */}
			<div className={styles['main-wrap']}>
				<div className={styles['left']}>
					<ul>
						{menu.map((item, index) => (
							<li key={index} onClick={() => setaActiveMenu(item.id)}>
								<img src={item.pic} alt={item.name} />
							</li>
						))}
					</ul>
					<Link to="/grade-home">
						<img src={require('./../../assets/img/shouye _btn.png')} alt="班级主页" />
					</Link>
				</div>
				<div className={styles['middle']}>
					<div className={styles['echarts-box']}>
						<div className={styles['echarts']} id="student-home" />
						<ul className={styles['cut-box']}>
							<li>
								<img src={require('./../../assets/img/xuanzhuan_zuo_btn.png')} alt="上一项" />
							</li>
							<li>
								<img src={require('./../../assets/img/xuanzhuan_you_btn.png')} alt="下一项" />
							</li>
						</ul>
					</div>
					<div className={styles['select-brand']}>
						<img
							className={styles['brand-pic']}
							src="http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg"
							alt="徽章名字"
						/>
						<div className={styles['info']}>
							<div className={styles['name']}>【保护自然】徽章</div>
							<ul className={styles['num']}>
								<li>
									本学期已获得<span>12</span>次
								</li>
								<li>
									共有<span>2</span>位老师颁发
								</li>
								<li>
									班级同学平均获得<span>8</span>次
								</li>
							</ul>
							<div className={styles['right-radius']} />
						</div>
					</div>
				</div>
				<div className={styles['right']}>
					<div className={styles['title-box']}>
						<div className={styles['today']}>今日获得徽章 8枚</div>
						<div className={styles['total']}>累计获得 120枚</div>
					</div>
					<div className={styles['main']}>
						{commentList.map((item, index) => {
							return (
								<div key={index} className={styles['item']}>
									<img className={styles['brand']} src={item.brand_pic} alt={item.brand} />
									<div className={styles['info-box']}>
										<div className={styles['time']}>{item.time}</div>
										<div className={styles['text']}>{item.text}</div>
										<ul className={styles['pic-box']}>
											{item.pic_box.map((e, i) => {
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
			{/* 弹窗 */}
			{activeMenu ? <StudentInfo id={activeMenu} onClick={() => setaActiveMenu(null)} /> : null}
		</div>
	)
}

export default StudentHome
