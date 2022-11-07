import React, { useEffect } from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default function Layout ({ children, title, description }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
