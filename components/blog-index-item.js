import Link from 'next/link'
import PublishedAt from './utils/published-at'

const Post = ({ title, summary, date, path, language }) => (
  <article>
    <header>
      <h2>
        <Link href={path}>
          <a>{title}</a>
        </Link>
      </h2>

      <div className="info">
        <div className="Language">{language === 'en' ? '🇬🇧' : '🇧🇷'}</div>
        <PublishedAt link={path} date={date} />
      </div>
    </header>
    <div className='post-summary'>{summary}</div>
    <style jsx>{`
      article {
        margin: 0 auto;
      }

      article + article {
        margin-top: 3rem;
      }

      header {
        margin-bottom: 16px;
      }

      .Language {
        font-size: 11px;
        color: #808080;
        margin: 2px 8px 0 0;
      }

      h2 {
        font-size: 28px;
        margin-bottom: .4rem;
        line-height: 1.4em;
        font-family: 'Libre Caslon Text', serif;
        font-weight: 700;
      }

      .info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      a {
        color: #000;
        text-decoration: none;
      }

      h2 a:hover {
        text-decoration: underline;
      }

      .post-summary {
        font-size: 1rem;
        line-height: 1.8em;
        color: #4A4A4A;
        font-weight: 300;
      }

      .post-summary p + .post-summary p {
        margin-top: 1.5em;
      }

      @media (min-width: 768px) {
        h2 {
          font-size: 32px;
        }
      }
    `}</style>
  </article>
)

export default Post
