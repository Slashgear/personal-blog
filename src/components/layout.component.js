import React from 'react'
import { Navbar } from './navbar.component'
import { MaxWidthWrapper } from './maxWidthWrapper'

export const Layout = ({ children }) => (
  <>
    <Navbar />
    <MaxWidthWrapper>{children}</MaxWidthWrapper>
  </>
)
