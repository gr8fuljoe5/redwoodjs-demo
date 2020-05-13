import { Link, routes } from '@redwoodjs/router';

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>COVID-19</h1>
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <Link
                className="text-blue-500 hover:text-blue-800"
                to={routes.allStates()}
              >
                All States
              </Link>
            </li>
            <li className="mr-6">
              <Link
                className="text-blue-500 hover:text-blue-800"
                to={routes.byState()}
              >
                By State
              </Link>
            </li>
            <li className="mr-6">
              <Link
                className="text-blue-500 hover:text-blue-800"
                to={routes.current()}
              >
                Current
              </Link>
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
