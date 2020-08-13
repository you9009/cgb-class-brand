import React, { useState, useEffect } from 'react'

import styles from './index.module.css'

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

const brands = [
	{
		name1: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name2: '2020年8月7日17:13:08',
		name3: '王凌剑老师 颁发了【礼仪章】',
		name4: '评价：“同学之间友好相处。遇到问题和矛盾，能主动礼让。”',
		pic_box: [
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg'
		]
	},
	{
		name1: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name2: '2020年8月7日17:13:08',
		name3: '王凌剑老师 颁发了【礼仪章】',
		name4: '评价：“同学之间友好相处。遇到问题和矛盾，能主动礼让。”'
	},
	{
		name1: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name2: '2020年8月7日17:13:08',
		name3: '王凌剑老师 颁发了【礼仪章】'
	},
	{
		name1: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name2: '2020年8月7日17:13:08',
		name3: '王凌剑老师 颁发了【礼仪章】',
		name4: '评价：“同学之间友好相处。遇到问题和矛盾，能主动礼让。”',
		pic_box: [
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
			'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg'
		]
	},
	{
		name1: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name2: '2020年8月7日17:13:08',
		name3: '王凌剑老师 颁发了【礼仪章】',
		name4: '评价：“同学之间友好相处。遇到问题和矛盾，能主动礼让。”'
	},
	{
		name1: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name2: '2020年8月7日17:13:08',
		name3: '王凌剑老师 颁发了【礼仪章】'
	}
]

const comments = [
	{
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name: '道德与法治1',
		name1: 3,
		name2: '传承文化',
		name3: '了解并传承传统文化和习俗，树立文化自信，拥有民族自豪感',
		time: '2020年04月01日13:13:37',
		from: '陈煦老师颁发'
	},
	{
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name: '道德与法治2',
		name1: 3,
		name2: '传承文化',
		name3: '了解并传承传统文化和习俗，树立文化自信，拥有民族自豪感',
		time: '2020年04月01日13:13:37',
		from: '陈煦老师颁发'
	},
	{
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name: '道德与法治3',
		name1: 3,
		name2: '传承文化',
		name3: '了解并传承传统文化和习俗，树立文化自信，拥有民族自豪感',
		time: '2020年04月01日13:13:37',
		from: '陈煦老师颁发'
	}
]

const StudentInfo = ({ id, close, brands, comments }) => {
	const [ menu, setMenu ] = useState(menuList)

	const [ start, setStar ] = useState(null)
	const [ commentList, setCommentList ] = useState(null)
	const [ brandList, setBrandList ] = useState(null)

	useEffect(
		() => {
			if (brands) {
				setStar(brands.shinenum)
				setBrandList(brands.data)
			}
			if (comments) {
				setCommentList(comments)
			}
		},
		[ brands, comments ]
	)

	return (
		<div className={styles['student-info-wrap']}>
			<div className={styles['modal-main']}>
				<div className={styles['left']}>
					<ul>
						{menu.map((item, index) => (
							<li key={index}>{id === item.l_id ? <img src={item.pic} alt={item.name} /> : null}</li>
						))}
					</ul>
				</div>
				<div className={styles['container']}>
					<div className={styles['main']}>
						<div className={styles['top']}>
							<div className={styles['msg']}>
								已收集 <span>{start}</span> 闪光点
							</div>
							<ul>
								{brandList ? (
									brandList.map((item, index) => {
										return (
											<li key={index}>
												<img className={styles['brand']} src={item.chuo_src} alt="" />
												<div className={styles['info']}>
													<div className={styles['time']}>{item.grant_time}</div>
													<div className={styles['txt']}>{item.remark}</div>
													<div className={styles['pic-box']}>
														{item.img_src ? (
															item.img_src.map((e, i) => <img key={i} src={e} alt="" />)
														) : (
															<div />
														)}
													</div>
												</div>
											</li>
										)
									})
								) : null}
							</ul>
						</div>
						<div className={styles['bottom']}>
							<ul className={styles['brand-box']}>
								{commentList ? (
									commentList.map((item, index) => {
										return (
											<li key={index}>
												<div
													className={styles['plan-header']}
													style={{ opacity: item.level / item.maxlevel }}>
													<span className={styles['plan-level']}>光亮度：{item.level}</span>
													<div className={styles['plan-box']}>
														<span
															style={{ width: item.level / item.maxlevel * 76 + '%' }}
														/>
													</div>
												</div>
												<div className={styles['brand-info']}>
													<div className={styles['brand-name']}>
														<img src={item.chuo_src} alt="徽章名" />
														<p>{item.chuo_name}</p>
													</div>
													<div className={styles['info']}>
														<div className={styles['name']}>{item.class_name}</div>
														<div className={styles['msg']}>{item.remark}</div>
													</div>
												</div>
												<div className={styles['time-from']}>
													<p>{item.grant_time}</p>
													<p>{item.grantor_name}</p>
												</div>
											</li>
										)
									})
								) : null}
							</ul>
							<div className={styles['next-page']}>
								<div className={styles['active']}>
									<img src={require('./../../assets/img/jiantou_zuo_btn.png')} alt="上一页" />
								</div>
								<ul>
									<li className={styles['active']}>1</li>
									<li>2</li>
									<li>3</li>
									<li>4</li>
									<li>5</li>
									<li>6</li>
									<li>7</li>
									<li>……</li>
									<li>15</li>
								</ul>
								<div className={styles['active']}>
									<img src={require('./../../assets/img/jiantou_you_btn.png')} alt="上一页" />
								</div>
							</div>
						</div>
					</div>
					<img
						onClick={() => close()}
						className={styles['close']}
						src={require('./../../assets/img/guanbi_bt.png')}
						alt="班级主页"
					/>
				</div>
			</div>
		</div>
	)
}

export default StudentInfo
