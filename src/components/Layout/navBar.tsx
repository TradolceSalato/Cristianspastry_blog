import headerNavLinks from '@/data/headerNavLinks';
import { siteMetadata } from '@/data/siteMetadata';
import React from 'react'
import CustomLink from '../CustomLink';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';

function NavBar() {
  return (
    <nav className="flex items-center justify-between py-10">
    <div>
      <CustomLink href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-1 text-5xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </CustomLink>
    </div>
    <div className="flex items-center text-2xl leading-5 pt-12">
      <div className="hidden sm:block">
        {headerNavLinks.map((link) => (
          <CustomLink
            key={link.title}
            href={link.href}
            className="p-2 font-medium text-black-900  sm:p-4"
          >
            {link.title}
          </CustomLink>
        ))}
      </div>
      <MobileNav />
    </div>
  </nav>
  )
}

export default NavBar;