import React from 'react'
import { Navbar } from './navbar.component'
import { MaxWidthWrapper } from './maxWidthWrapper'

export const Layout = ({ children, lang }) => (
  <>
    <Navbar lang={lang} />
    <MaxWidthWrapper>{children}</MaxWidthWrapper>
  </>
)
