import React from 'react'
import PropTypes from 'prop-types'
import Head from './head'
import Nav from './nav'
import Title from './title'

function Header ({ path, pageTitle, ogImage, description }) {
  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} description={description} />

      <header>
        <div className="container">
          <Title path={path} />
          <Nav />
        </div>
      </header>
      <style jsx>
        {`
          header {
            padding: .7rem 0;
            margin-bottom: 1rem;
            background-color: #FFF;
            box-shadow: 1px 0 6px rgba(0, 0, 0, .1);
          }

          .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 45rem;
            padding: 0 1rem;
            margin: 0 auto;
          }

          @media (min-width: 768px) {
            header {
              position: fixed;
              width: 100%;
              top: 0;
              left: 0;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Roboto+Text:400,700&display=swap');

          html {
            margin: 0;
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            margin: 0;
            font-size: 18px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
            color: #333;
            line-height: 1.5;
            background-color: #fff;
          }

          h1,
          h2,
          h3,
          h4 {
            margin-bottom: 0.5rem;
            font-weight: bold;
            color: inherit;
            line-height: 1.25;
          }

          h1 {
            font-size: 2rem;
          }

          h2 {
            margin-top: 1rem;
            font-size: 1.8rem;
            margin-bottom: 1.2rem;
          }

          h3 {
            margin-top: 1.5rem;
            font-size: 1.5rem;
          }

          p {
            margin-top: 0;
            margin-bottom: 2.2rem;
            line-height: 1.8em;
          }

          .entry-page p {
            margin: 1.4rem 0;
          }

          ul,
          ol,
          dl {
            margin-top: 0;
            margin-bottom: 1rem;
          }

          a {
            color: #0079FF;
            cursor: pointer;
          }

          a:hover,
          a:focus {
            text-decoration: underline;
          }

          hr {
            position: relative;
            margin: 1.5em 0;
            border: 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #fff;
          }

          blockquote {
            padding: 0.5em 1em;
            margin: 0.8em 0;
            color: #555;
            border-left: 0.25em solid #ccc;
          }

          blockquote p:last-child {
            margin-bottom: 0;
          }

          pre code {
            font-size: 18px;
          }

          code {
            color: #fff;
          }

          .e-content code {
            color: #fff;
            font-size: 0.8em;
            padding-right: 0;
            padding-left: 0;
            background-color: #062742;
          }

          .e-content figure {
            width: 100%;
            margin: 24px auto;
          }

          figure figcaption {
            font-size: 12px;
            text-align: center;
          }

          .wrap {
            max-width: 38rem;
            margin-left: auto;
            margin-right: auto;
          }

          article img {
            max-width: 100%;
            height: auto;
          }

          @media (min-width: 768px) {
            .e-content figure {
              margin: 24px auto;
            }
          }
        `}
      </style>
    </>
  )
}

Header.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string,
  ogImage: PropTypes.string
}

export default Header
