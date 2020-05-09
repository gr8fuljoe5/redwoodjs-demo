const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>COVID-19</h1>
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href="#">Active</a>
            </li>
            <li className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
            <li className="mr-6">
              <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
            <li className="mr-6">
              <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
