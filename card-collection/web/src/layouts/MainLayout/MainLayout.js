const MainLayout = ({ children }) => {
  return (
    <>
      <header>Card Collection</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}

export default MainLayout
