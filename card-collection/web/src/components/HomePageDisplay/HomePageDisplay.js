import { useState } from 'react';
import filter from 'lodash/filter';

const HomePageDisplay = ({data}) => {
  const [filteredData, setFilteredData] = useState({});
  const filterData = (value, column) => {
    return filter(data, (o) => {
      if(o[column] == value){
        setFilteredData(o);
      }
    })
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
      {JSON.stringify(filteredData)}
    </div>

  )
}
export default HomePageDisplay
