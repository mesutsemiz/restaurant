import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase' >
      <div>
        {/* LOGO */}
        <Link href="/">Massimo</Link>
      </div>
      {/* MOBIL MENU */}
      <div>
        <Menu/>
      </div>
    </div>
  )
}

export default Navbar