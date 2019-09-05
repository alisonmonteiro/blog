import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Container from '../container'

function Layout ({ path, children, pageTitle, ogImage }) {
  return (
    <Container>
      <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />

      <main>
        {children}

        <Footer />
      </main>

      <style jsx>{`
        main {
          width: 100%;
          max-width: 45rem;
          padding: 1rem 1rem 0;
          margin: 0 auto;
        }
      `}</style>
    </Container>
  )
}

export default Layout
