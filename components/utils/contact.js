import React from 'react'

export default function Contact() {
  return (
    <>
      <a target="_blank" href="https://twitter.com/alisonmonteir1">Twitter</a>
      <a target="_blank" href="https://github.com/alisonmonteiro">Github</a>

      <style jsx>{`
        a {
          text-decoration: underline;
          font-size: 20px;
          margin-right: 15px;
          transition: all .2s;
          color: #000;
        }

        a:last-child {
          margin-right: 0;
        }

        a:hover {
          color: #0079ff;
        }
      `}</style>
    </>
  )
}