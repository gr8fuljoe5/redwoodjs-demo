import { useState } from 'react'
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
      <section className="flex flex-row bg-gray-200 p-3 rounded-md">
        <form>
          <select
            className={'text-lg font-mono m-4'}
            onChange={(e) => {
              filterData(e.target.value, 'sport')
            }}
          >
            <option value="Baseball">Baseball</option>
            <option value="Football">Football</option>
          </select>
          <select
            className={'text-lg font-mono m-4'}
            onChange={(e) => {
              filterData(e.target.value, 'manufacturers')
            }}
          >
            {manufacturers &&
              manufacturers.map((manufacturer) => {
                return <option value={manufacturer}>{manufacturer}</option>
              })}
          </select>
        </form>
      </section>
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
                  <h3 className={'text-xl lg:text-3xl'}>{`${player} - (${sport})`}</h3>
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
                    {autographed ? <li>Autographed</li> : null}
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
