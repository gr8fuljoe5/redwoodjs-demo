const MainLayout = ({ children }) => {
  return (
    <>
      <header>This is the header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default MainLayout
