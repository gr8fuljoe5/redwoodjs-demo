import { Link, routes } from '@redwoodjs/router'

import Cards from 'src/components/Cards'

export const QUERY = gql`
  query POSTS {
    cards {
      id
      name
      brand
      year
      series
      number
      grade
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
  return <Cards cards={cards} />
}
