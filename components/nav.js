import Link from 'next/link'

const Nav = () => (
  <nav>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <Link href='/about'>
      <a>About</a>
    </Link>
    <style jsx>{`
      nav {
        display: flex;
      }

      nav a {
        text-decoration: underline;
        font-size: 1rem;
        margin-right: 15px;
        transition: all .2s;
        color: #000;
      }

      nav a:last-child {
        margin-right: 0;
      }

      nav a:hover {
        color: #0079FF;
      }
    `}</style>
  </nav>
)

export default Nav
