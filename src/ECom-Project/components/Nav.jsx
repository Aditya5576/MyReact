import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
   <nav>
    <Link className='link-tag' to={'/'}>HOME</Link>
    <Link className='link-tag' to={'/viewproduct'}>VIEW PRODUCT</Link>
    <Link className='link-tag' to={'/addproduct'}>ADD PRODUCT</Link>

   </nav>
  )
}

export default Nav
