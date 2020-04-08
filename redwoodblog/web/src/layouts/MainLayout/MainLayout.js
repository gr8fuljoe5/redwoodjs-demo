const MainLayout = ({children}) => {
  return (
    <>
      <header>My Blog</header>
      <main>{children}</main>
      <footer>footer goes here</footer>
    </>
  )
}

export default MainLayout
