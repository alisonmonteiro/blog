import Link from 'next/link'
import { siteMeta } from '../../blog.config'
import Layout from './default'
import SyntaxHighlight from '../syntax-highlight'
import PublishedAt from '../utils/published-at'
import blogposts from '../../posts/index'
import NextPrevPost from '../next-prev-post'

function BlogPost ({ path, meta, children, language }) {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title)
  const previousPost = blogposts[currentPostIndex + 1]
  const nextPost = blogposts[currentPostIndex - 1]

  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <SyntaxHighlight />
      <article className='h-entry'>
        <header>
          <h1 className='p-name'>{meta.title}</h1>

          <div className="info">
            <div className="Language">{language === 'en' ? '🇬🇧' : '🇧🇷'}</div>
            <PublishedAt date={meta.publishedAt} link={path} />
          </div>
        </header>
        <div className='e-content'>{children}</div>
        <footer>
          {(previousPost || nextPost) && (
            <div className='post-pagination'>
              {previousPost && (
                <NextPrevPost
                  title={previousPost.title}
                  path={previousPost.path}
                  position='previous'
                />
              )}
              {nextPost && (
                <NextPrevPost
                  title={nextPost.title}
                  path={nextPost.path}
                  position='next'
                />
              )}
            </div>
          )}
        </footer>
      </article>
      <style jsx>{`
        header {
          margin-bottom: 2em;
        }

        [rel='author'] {
          margin-left: 1em;
        }

        article {
          margin-bottom: 2em;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: .7rem;
          line-height: 1.4em;
          font-family: 'Libre Caslon Text', serif;
          font-weight: 700;
        }

        .info {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .Language {
          font-size: 11px;
          color: #808080;
          margin: 2px 8px 0 0;
        }

        footer {
          margin-top: 2em;
        }

        .post-pagination {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </Layout>
  )
}

export default BlogPost
