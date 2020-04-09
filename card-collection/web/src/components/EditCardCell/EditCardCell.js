import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import CardForm from 'src/components/CardForm'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    card: card(id: $id) {
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
const UPDATE_POST_MUTATION = gql`
  mutation UpdateCardMutation($id: Int!, $input: CardInput!) {
    updateCard(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ card }) => {
  const [updateCard, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.cards())
    },
  })

  const onSave = (input, id) => {
    updateCard({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Card {card.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <CardForm card={card} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
