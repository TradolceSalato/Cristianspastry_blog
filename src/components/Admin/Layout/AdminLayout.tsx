

import CustomLink from '@/components/CustomLink';
import React from 'react'
import Footer from './Footer';
import NavBar from './NavBar';

interface Props {
  isLogin: boolean;
  children: any
}

function AdminLayout(props: Props,) {
  let headerNavLinks = [
    { href: '/admin/dashboard', title: 'Dashboard' },
    { href: '/admin/addrecipe', title: 'Aggiungi ricetta', },
  ];
  // mx-auto max-w-7xl py-6 sm:px-6 lg:px-8   px-4 py-6 sm:px-0
  return (
    <>
      {
        props.isLogin ? (
          <>
            <NavBar headerNavLinks={headerNavLinks} />
            <main>
              <div className="">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                  <div className=" h-auto rounded-lg border-4 border-dashed border-gray-200">
                    {props.children}
                  </div>
                </div>
                {/* /End replace */}
              </div>
            </main>
            <Footer />
          </>) : <Footer />
      }
    </>
  )
}

export default AdminLayout;