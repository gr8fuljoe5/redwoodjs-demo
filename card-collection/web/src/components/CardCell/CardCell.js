import Card from 'src/components/Card'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    card: card(id: $id) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Card not found</div>

export const Success = ({ card }) => {
  return <Card card={card} />
}
