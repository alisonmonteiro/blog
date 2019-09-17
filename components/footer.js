function Footer () {
  return (
    <footer>
      <p>
        Proudly built with <a href='https://nextjs.org'>Next.js</a> -{' '}
        <a href='/feed.json'>RSS Feed</a>
      </p>
      <style jsx>{`
        footer {
          padding: 1em 0;
          font-size: .8rem;
        }

        p {
          margin: 3em 0 1em;
        }
      `}</style>
    </footer>
  )
}

export default Footer
