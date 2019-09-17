import Layout from './default'
import Footer from '../footer'

function Page ({ meta, children }) {
  return (
    <Layout pageTitle={meta.title}>
      <article>
        <header>
          <h1>{meta.title}</h1>
        </header>
        <div>{children}</div>
      </article>
      <Footer />
      <style jsx>{`
        h1 {
          font-size: 28px;
          margin-bottom: .7rem;
          line-height: 1.4em;
          font-family: 'Libre Caslon Text', serif;
          font-weight: 700;
        }
      `}</style>
    </Layout>
  )
}

export default Page
