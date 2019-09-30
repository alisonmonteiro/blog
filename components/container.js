const Container = ({ children }) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      margin: 0 auto;

      @media (min-width: 768px) {
        padding-top: 62px;
      }
    `}</style>
  </>
)

export default Container
