import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

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

const GradeHome = () => {
	let history = useHistory()
	const [ colorList, setColorList ] = useState(colors)

	return (
		<div className={styles['grade-wrap']}>
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
			<div className={styles['gap-wrap']}>
				<ul>{colorList.map((item, index) => <li key={index} style={{ ...item }} />)}</ul>
			</div>

			<div className={styles['grade-box']}>
				<div className={styles['grade-left']}>
					<div className={styles['top']}>
						<div className={styles['title']}>学生荣誉榜</div>
					</div>
					<div className={styles['card']}>
						<p>请把学生卡放置在刷卡区</p>
						<p>查看个人光谱</p>
					</div>
				</div>
				<div className={styles['grade-middle']}>
					<div className={styles['top']}>
						<div className={styles['title']}>
							获章总量 <span>257</span> 枚
						</div>
					</div>
					<div className={styles['bottom']}>
						<div className={styles['box']}><img src='http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg' alt="相册" /></div>
					</div>
				</div>
				<div className={styles['grade-right']}>
					<div className={styles['title']}>评价动态</div>
				</div>
			</div>
		</div>
	)
}

export default GradeHome
