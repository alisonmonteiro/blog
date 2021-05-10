import Link from 'next/link'
import { siteMeta } from '../../blog.config'
import Layout from './default'
import SyntaxHighlight from '../syntax-highlight'
import MainFooter from '../footer'
import PublishedAt from '../utils/published-at'
import blogposts from '../../posts/index'
import NextPrevPost from '../next-prev-post'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share'

function BlogPost ({ origin, path, meta, children, language }) {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title)
  const previousPost = blogposts[currentPostIndex + 1]
  const nextPost = blogposts[currentPostIndex - 1]
  const shareUrl = siteMeta.siteUrl + path

  return (
    <Layout pageTitle={meta.title} description={meta.summary} ogImage={meta.image}>
      <SyntaxHighlight />
      <article className='h-entry'>
        <header>
          <h1 className='p-name'>{meta.title}</h1>

          <div className="info">
            <div className="Language">{language === 'en' ? '🇬🇧' : '🇧🇷'}</div>
            <PublishedAt date={meta.publishedAt} link={path} />
          </div>
        </header>
        <div className="e-content">{children}</div>
        <footer>
          <div className="share">
            <span>Share: </span>
            <div className="button-wapper">
              <TwitterShareButton url={shareUrl} title={meta.title} via={siteMeta.social.twitter}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
            </div>
            <div className="button-wapper">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
            </div>
            <div className="button-wapper">
              <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={32} round={true} />
              </TelegramShareButton>
            </div>
          </div>

          {(previousPost || nextPost) && (
            <div className="post-pagination">
              {previousPost && (
                <NextPrevPost
                  title={previousPost.title}
                  path={previousPost.path}
                  position="previous"
                />
              )}
              {nextPost && (
                <NextPrevPost
                  title={nextPost.title}
                  path={nextPost.path}
                  position="next"
                />
              )}
            </div>
          )}
        </footer>
      </article>
      <MainFooter />
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
          margin-top: 1rem;
          line-height: 1.4em;
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

        .share {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin: 1rem 0 2rem;
        }

        .share .button-wapper {
          margin-left: .8rem;
          cursor: pointer;
          transition: transform .2s;
        }

        .share .button-wapper:hover {
          transform: scale(1.1);
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
