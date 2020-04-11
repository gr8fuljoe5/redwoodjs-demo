import { Link, routes } from '@redwoodjs/router'
import HomePageDisplay from 'src/components/HomePageDisplay'

export const QUERY = gql`
  query POSTS {
    cards {
      id
      player
      year
      manufacturer
      set
      number
      sport
      autographed
      image
      postedAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No cards yet. '}
      <Link
        to={routes.newCard()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ cards }) => {
  return <HomePageDisplay data={cards}/>
}
