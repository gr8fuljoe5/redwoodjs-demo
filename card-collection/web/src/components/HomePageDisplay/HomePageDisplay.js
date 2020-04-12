import {useState} from 'react';

const HomePageDisplay = ({data}) => {
  const [filteredData, setFilteredData] = useState([]);
  const filterData = (value, column) => {
    let dataSet = [];
    data.filter((o) => {
      if (o[column] === value) {
        dataSet.push(o);
      }
    });
    setFilteredData(dataSet)
  };

  return (
    <div>
      <form>
        <select onChange={(e) => {
          console.log(e.target.value);
          filterData(e.target.value, 'sport');
        }}>
          <option value="Baseball">Baseball</option>
          <option value="Football">Football</option>
        </select>
      </form>
      <h1>Hello</h1>
      {filteredData.length > 0 && filteredData.map((card, idx) => {
        const {id,
          player,
          year,
          manufacturer,
          set,
          number,
          sport,
          autographed,
          image} = card;
        console.log(autographed)
        return (
          <div key={idx}>
            <section>
              <h3>{player}</h3>
              <ul>
                <li>{manufacturer}</li>
                <li>{set}</li>
              </ul>
            </section>
            <aside>
              <img src={image} />
              <ul>
                <li>Sport: {sport}</li>
                <li>Card Number: {number}</li>
                <li>Year: {year}</li>
                {autographed ? (
                  <li>Autographed</li>
                ) : null}
              </ul>
            </aside>
          </div>

        )
      })}
    </div>

  )
}
export default HomePageDisplay
