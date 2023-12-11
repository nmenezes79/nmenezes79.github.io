// rafc

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
	return (
		<div>
			<div>
				<input type="search" placeholder='Search Products' />
			</div>
			<nav className='secondaryNav'>
				<Link to='featured'>Feature</Link>
				<Link to='new'>New</Link>
			</nav>
			<Outlet/>
		</div>
	)
}
