import React, { useState, Fragment, useEffect } from 'react'

const NextPage = ({ page, total, cls }) => {
	const [ now, setNow ] = useState(1)
	const [ numList, setNumList ] = useState(null)

	useEffect(
		() => {
			if (total && page) {
				let length = 5
				let list = [ ...new Array(length).keys() ]

				let dlist = []
				if (page <= length) {
					for (let i = 0; i < list.length; i++) {
						const element = list[i]
						dlist.push(element + 1)
					}
					list = [ ...dlist, '...', total ]
				} else if (page >= length && page + 3 <= total) {
					dlist = [ page - 2, page - 1, page, page + 1, page + 2 ]
					list = [ 1, '...', ...dlist, '...', total ]
				} else {
					dlist = [ total - 4, total - 3, total - 2, total - 1, total ]
					list = [ 1, '...', ...dlist ]
				}

				setNumList(list)
				setNow(Number(page))
			}
		},
		[ page, total ]
	)

	return (
		<Fragment>
			{numList ? (
				numList.map((item, index) => (
					<li className={item == now ? [ cls ] : ''} key={index}>
						{item}
					</li>
				))
			) : null}
		</Fragment>
	)
}

export default NextPage
