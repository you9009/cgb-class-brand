import React, { useState, useEffect, Fragment } from 'react'

import styles from './index.module.css'

const PhotoAlbum = ({ data, closeModal, next }) => {
	const [ picList, setPicList ] = useState([])
	const [ total, setTotal ] = useState(0)
	const [ selectPic, setSelectPic ] = useState(null)
	const [ page, setPage ] = useState(1)

	useEffect(
		() => {
			if (data.data) {
				if (data.data.length) {
					let total = Math.ceil(data.total / 6)
					setTotal(total)
					setPicList(data.data)
					setSelectPic(data.data[0])
				}
			}
		},
		[ data ]
	)

	const nextPage = (key) => {
		let now = page
		if (key == 'prev') {
			if (now != 1) {
				now--
			}
		}
		if (key == 'next') {
			if (total>0) {
				if (now != total) {
					now++
				}
			}
		}

		if (now != page) {
			setPage(now)
			next(now)
		}
	}

	return (
		<div className={styles['photo-album-modal']}>
			{/* 顶部信息 */}
			<div className={styles['photo-album-header']}>
				<div className={styles['left']}>
					<img src={require('./../../assets/img/xiangce_icon.png')} alt="图标" />
					<span>班级相册</span>
				</div>
				<img
					onClick={() => closeModal()}
					className={styles['right']}
					src={require('./../../assets/img/guanbi_bt.png')}
					alt="图标"
				/>
			</div>
			{/* 内容区 */}
			<div className={styles['photo-album-main']}>
				<div className={styles['left']}>
					{selectPic ? (
						<Fragment>
							<div className={styles['pic']}>
								<img src={selectPic.pic} alt={selectPic.chuo_name} />
							</div>
							<div className={styles['brand-info']}>
								<div className={styles['brand-name']}>
									<img src={selectPic.chuo_src} alt={selectPic.chuo_name} />
									<p>{selectPic.chuo_name}</p>
								</div>
								<div className={styles['info-box']}>
									<div className={styles['info']}>
										<p>{selectPic.grantor_name}</p>
										<p>评语：{selectPic.remark}</p>
									</div>
									<div className={styles['time']}>{selectPic.grant_time}</div>
								</div>
							</div>
						</Fragment>
					) : null}
				</div>
				<div className={styles['right']}>
					<ul>
						{picList ? (
							picList.map((item, index) => (
								<li
									className={item === selectPic ? styles['active'] : ''}
									key={index}
									onClick={() => setSelectPic(item)}>
									<img src={item.pic} alt="" />
								</li>
							))
						) : null}
					</ul>
					<div className={styles['next-page']}>
						<div onClick={() => nextPage('prev')}>
							<img src={require('./../../assets/img/jiantou_zuo_btn.png')} alt="上一页" />
						</div>
						<p>
							{page}/{total}
						</p>
						<div onClick={() => nextPage('next')}>
							<img src={require('./../../assets/img/jiantou_you_btn.png')} alt="上一页" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PhotoAlbum
