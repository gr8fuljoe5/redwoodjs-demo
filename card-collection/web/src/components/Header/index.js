import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
      <div
        className={'flex-1 text-gray-700 text-center bg-gray-100 px-4 py-2 m-2'}
      >
        <h1>Paul's baseball card collection</h1>
      </div>
      <div className={'text-gray-500'}>
        <a href={'#'} className={'hover:text-gray-700'}>
          <FontAwesomeIcon icon={faCoffee} />
        </a>
      </div>
    </header>
  )
}

export default Header
