import Card from "src/components/Card/Card";
import filter from 'lodash/filter';

const HomePageDisplay = ({data}) => {
  const filerData = (obj) => {
    return filter(obj, (o) => {
      if(o.sport == 'Baseball'){
        return o;
      }
    })
  }

  return (
    <div>
      <h1>Hello</h1>
    </div>

  )
}
export default HomePageDisplay
