import React from 'react'
import { Navbar } from './navbar.component'
import { MaxWidthWrapper } from './maxWidthWrapper'
import { Footer } from './footer/footer.component'

export const Layout = ({ children, lang }) => (
  <>
    <Navbar lang={lang} />
    <MaxWidthWrapper>{children}</MaxWidthWrapper>
    <Footer/>
  </>
)
