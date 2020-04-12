const MainLayout = ({ children }) => {
  return <>
    <header>
      <h1>Paul's Baseball Card Collection</h1>
      <nav>
        <ul>
          <li>Admin</li>
        </ul>
      </nav>
    </header>
    {children}

    </>
}

export default MainLayout
