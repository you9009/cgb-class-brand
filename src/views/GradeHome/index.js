import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

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
const comments = [
	{
		band: '规范书写1',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		time: '2020年8月7日10:34:43',
		text: '张欢欢老师给小朋友颁发了【规范书写】徽章，评语“小朋友今天书写非常认真，继续加油！”',
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
		text: '张欢欢老师给小朋友颁发了【规范书写】徽章，评语“小朋友今天书写非常认真，继续加油！”',
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
		text: '张欢欢老师给小朋友颁发了【规范书写】徽章，评语“小朋友今天书写非常认真，继续加油！”',
		pic_box: [
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg'
		]
	},
	{
		band: '规范书写4',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		time: '2020年8月7日10:34:43',
		text: '张欢欢老师给小朋友颁发了【规范书写】徽章，评语“小朋友今天书写非常认真，继续加油！”',
		pic_box: [ 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg' ]
	},
	{
		band: '规范书写5',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		time: '2020年8月7日10:34:43',
		text: '张欢欢老师给小朋友颁发了【规范书写】徽章，评语“小朋友今天书写非常认真，继续加油！”',
		pic_box: []
	}
]
const rank = [
	{
		name: '品德之星',
		list: [
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			}
		]
	},
	{
		name: '活力之星',
		list: [
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			}
		]
	},
	{
		name: '悦美之星',
		list: [
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			}
		]
	},
	{
		name: '智慧之星',
		list: [
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			}
		]
	},
	{
		name: '实践之星',
		list: [
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈紫函'
			},
			{
				cover: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
				name: '陈子涵'
			}
		]
	}
]

const GradeHome = () => {
	let history = useHistory()
	const [ colorList, setColorList ] = useState(colors)
	const [ commentList, setCommentList ] = useState(comments)
	const [ rankTitle, setRankTitle ] = useState(rank)
	const [ selectRank, setSelectRank ] = useState(rankTitle[0].list)
	const [photoAlbum, SetPhotoAlbum] = useState(false)

	const linkToStudent = () => {
		history.push('/student-home')
	}

	return (
		<div className={styles['grade-wrap']}>
			{/* 顶部信息区 */}
			<div className={styles['grade-header']}>
				<div className={styles['logo-pic']}>
					<img src={require('./../../assets/img/logo_pic.png')} alt="上海市黄浦区曹光彪小学" />
					<div className={styles['grader-name']}>
						<img src={require('./../../assets/img/banji_icon.png')} alt="三年级2班" />
						<span>三年级2班</span>
					</div>
				</div>
				<div className={styles['weather-box']}>
					<div className={styles['time']}>12:00</div>
					<div className={styles['day']}>
						<p>2019年4月24日</p>
						<p>星期三，多云</p>
					</div>
					<div className={styles['weather']}>
						<img src={require('./../../assets/img/home_mood_pic_duoyun.png')} alt="天气" />
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
										className={item.list === selectRank ? styles['active'] : ''}
										onClick={() => setSelectRank(item.list)}>
										{item.name}
									</li>
								))}
							</ul>
							<div className={styles['student-list']}>
								{selectRank.map((item, index) => (
									<div className={styles['item']} key={index}>
										<img src={item.cover} alt={item.name} />
										<div className={styles['name']}>{item.name}</div>
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
							获章总量 <span>257</span> 枚
						</div>
						<div className={styles['main']}>
							<p>这里是个echarts</p>
						</div>
					</div>
					<div className={styles['bottom']} onClick={() => SetPhotoAlbum(true)}>
						<img className={styles['bg']} src={require('./../../assets/img/dianshi_bg.png')} alt="背景" />
						<div className={styles['main']}>
							<img src="http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg" alt="相册" />
						</div>
					</div>
				</div>
				<div className={styles['grade-right']}>
					<div className={styles['title']}>评价动态</div>
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

			{/* 班级相册 */}
			{photoAlbum ? <PhotoAlbum closeModal={()=>SetPhotoAlbum(false)} /> : null}
		</div>
	)
}

export default GradeHome