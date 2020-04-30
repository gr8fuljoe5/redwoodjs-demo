import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { manufacturers } from 'src/constants/manufacturers'

const HomePageDisplay = ({ data }) => {
  const [filteredData, setFilteredData] = useState([])
  const filterData = (value, column) => {
    let dataSet = []
    data.filter((o) => {
      if (o[column] === value) {
        dataSet.push(o)
      }
    })
    setFilteredData(dataSet)
  }

  return (
    <div className="">
      <form>
        <section className={'flex flex-row bg-gray-200 p-3 rounded'}>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-sport"
            >
              Sport
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-400 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => {
                  filterData(e.target.value, 'sport')
                }}
                id="grid-sport"
              >
                <option value="Baseball">Baseball</option>
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
                <option value="Hockey">Hockey</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-manufacturers"
            >
              State
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-400 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => {
                  filterData(e.target.value, 'manufacturer')
                }}
                id="grid-manufacturers"
              >
                {manufacturers &&
                  manufacturers.map((manufacturer, idx) => {
                    return (
                      <option value={manufacturer} key={idx}>
                        {manufacturer}
                      </option>
                    )
                  })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </form>

      {filteredData.length > 0 &&
        filteredData.map((card, idx) => {
          const {
            player,
            year,
            manufacturer,
            set,
            number,
            sport,
            autographed,
            image,
          } = card
          return (
            <section
              className={
                'grid grid-cols-1 lg:grid-cols-3 border border-2 border-gray-200 rounded my-1 shadow-md bg-gray-100 my-5'
              }
            >
              <section
                className={'font-sans text-lg text-gray-800 p-3 col-span-2'}
                key={idx}
              >
                <h3
                  className={'text-xl lg:text-3xl'}
                >{`${player} - (${sport})`}</h3>
                <ul className={'list-none'}>
                  <li>
                    <span className={'font-semibold'}>Card Number:</span>{' '}
                    {number}
                  </li>
                  <li>
                    <span className={'font-semibold'}>Manufacturer:</span>{' '}
                    {manufacturer}
                  </li>
                  <li>
                    <span className={'font-semibold'}>Year:</span> {year}
                  </li>
                  <li>
                    <span className={'font-semibold'}>Set:</span> {set}
                  </li>
                  <li>
                    <span className={'font-semibold'}>Autographed:</span>{' '}
                    {autographed ? (
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className={'fill-current text-green-500'}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faThumbsDown}
                        className={'fill-current text-red-500'}
                      />
                    )}
                  </li>
                </ul>
              </section>
              <aside className={'col-span-1 p-3'}>
                <img
                  src={image}
                  className={
                    'border-double border-4 border-gray-600 rounded float-none lg:float-right'
                  }
                  width={100}
                  alt={player}
                />
              </aside>
            </section>
          )
        })}
    </div>
  )
}
export default HomePageDisplay
