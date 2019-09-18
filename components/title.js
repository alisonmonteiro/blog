import Link from 'next/link'
import { siteMeta } from '../blog.config'

const Title = ({ path }) => (
  <>
    {path === '/' ? (
      <h1>
        <Link href='/'>
          <a rel='me'>
            <img width='40' src='/static/profile.png' alt='Profile Picture'/> {siteMeta.title}
          </a>
        </Link>
      </h1>
    ) : (
      <p>
        <Link href='/'>
          <a rel='me'>
            <img width='40' src='/static/profile.png' alt='Profile Picture'/> {siteMeta.title}
          </a>
        </Link>
      </p>
    )}
    <style jsx>{`
      h1, p {
        margin: 0;
        font-size: 1.3rem;
        line-height: 1rem;
      }

      img {
        display: block;
        margin-right: .7rem;
        border: 2px solid #CCC;
        border-radius: 100%;
      }

      a {
        display: flex;
        align-items: center;
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
