import Link from 'next/link'
import { siteMeta } from '../blog.config'

const Title = ({ path }) => (
  <>
    {path === '/' ? (
      <h1>
        <a href={siteMeta.siteUrl}>{siteMeta.title}</a>
      </h1>
    ) : (
      <p>
        <Link href='/'>
          <a rel='me'>{siteMeta.title}</a>
        </Link>
      </p>
    )}
    <style jsx>{`
      h1, p {
        margin: 0;
        font-size: 1.3rem;
        line-height: 1rem;
      }

      a {
        color: #333;
        text-decoration: none;
      }

      p {
        font-weight: bold;
      }
    `}</style>
  </>
)

export default Title
