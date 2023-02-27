

import CustomLink from '@/components/CustomLink';
import React from 'react'

interface Props {
    headerNavLinks : any[]
}

function NavBar(props:Props) {
  return (
    <nav className="bg-white shadow flex items-center justify-between py-10 ml-8">
    <div className=" ">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">{"Cristian's pastry Dashboard"}</h1>
    </div>
    <div className="">
    <div className=" pr-10">
      {props.headerNavLinks.map((link: { title: React.Key | null | undefined; href: any }) => (
        <CustomLink
          key={link.title}
          href={link.href}
          className="p-2 font-medium text-black-900  sm:p-4 text-2xl "
        >
          {link.title}
        </CustomLink>
      ))}
    </div>
    </div>
  </nav>
  )
}

export default NavBar