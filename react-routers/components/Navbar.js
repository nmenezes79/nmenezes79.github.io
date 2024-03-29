// rafc

import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<nav className='primaryNav'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/about'>About</NavLink>
			<NavLink to='/products'>Product</NavLink>
		</nav>
	)
}
