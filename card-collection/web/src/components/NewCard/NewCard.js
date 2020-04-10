import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import CardForm from 'src/components/CardForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateCardMutation($input: CardInput!) {
    createCard(input: $input) {
      id
    }
  }
`

const NewCard = () => {
  const [createCard, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.cards())
    },
  })

  const onSave = (input) => {
    createCard({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Card</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <CardForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCard
