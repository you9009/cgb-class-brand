import React, { useState, useEffect } from 'react'

import styles from './index.module.css'

const pics = [
	{
		pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name: '规范书写',
		time: '2020年04月01日13:13:37',
		from: '张欢欢老师给思小来颁发了岗位小明星徽章。',
		say: '做得真棒！做得真棒！'
	},
	{
		pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name: '规范书写1',
		time: '2020年04月01日13:13:37',
		from: '张欢欢老师给思小来颁发了岗位小明星徽章。',
		say: '做得真棒！做得真棒！'
	},
	{
		pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name: '规范书写2',
		time: '2020年04月01日13:13:37',
		from: '张欢欢老师给思小来颁发了岗位小明星徽章。',
		say: '做得真棒！做得真棒！'
	},
	{
		pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name: '规范书写3',
		time: '2020年04月01日13:13:37',
		from: '张欢欢老师给思小来颁发了岗位小明星徽章。',
		say: '做得真棒！做得真棒！'
	},
	{
		pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name: '规范书写4',
		time: '2020年04月01日13:13:37',
		from: '张欢欢老师给思小来颁发了岗位小明星徽章。',
		say: '做得真棒！做得真棒！'
	},
	{
		pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		brand_pic: 'http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg',
		name: '规范书写5',
		time: '2020年04月01日13:13:37',
		from: '张欢欢老师给思小来颁发了岗位小明星徽章。',
		say: '做得真棒！做得真棒！'
	}
]

const PhotoAlbum = (props) => {
	const [ picList, setPicList ] = useState(pics)
	const [ selectPic, setSelectPic ] = useState(picList[0])

	return (
		<div className={styles['photo-album-modal']}>
			{/* 顶部信息 */}
			<div className={styles['photo-album-header']}>
				<div className={styles['left']}>
					<img src={require('./../../assets/img/xiangce_icon.png')} alt="图标" />
					<span>班级相册</span>
				</div>
				<img
					onClick={() => props.closeModal()}
					className={styles['right']}
					src={require('./../../assets/img/guanbi_bt.png')}
					alt="图标"
				/>
			</div>
			{/* 内容区 */}
			<div className={styles['photo-album-main']}>
				<div className={styles['left']}>
					<div className={styles['pic']}>
						<img src="http://psylife-youjinjin.oss-cn-hangzhou.aliyuncs.com/img/timg.jpg" alt="相册" />
					</div>
					<div className={styles['brand-info']}>
						<div className={styles['brand-name']}>
							<img src={selectPic.pic} alt={selectPic.name} />
							<p>{selectPic.name}</p>
						</div>
						<div className={styles['info-box']}>
							<div className={styles['info']}>
								<p>{selectPic.from}</p>
								<p>评语：{selectPic.say}</p>
							</div>
							<div className={styles['time']}>{selectPic.time}</div>
						</div>
					</div>
				</div>
				<div className={styles['right']}>
					<ul>
						{picList.map((item, index) => (
							<li
								className={item === selectPic ? styles['active'] : ''}
								key={index}
								onClick={() => setSelectPic(item)}>
								<img src={item.pic} alt="" />
							</li>
						))}
					</ul>
					<div className={styles['next-page']}>
						<div>
							<img src={require('./../../assets/img/jiantou_zuo_btn.png')} alt="上一页" />
						</div>
						<p>1/30</p>
						<div>
							<img src={require('./../../assets/img/jiantou_you_btn.png')} alt="上一页" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PhotoAlbum
