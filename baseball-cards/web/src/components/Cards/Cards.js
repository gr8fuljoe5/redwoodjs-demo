import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_POST_MUTATION = gql`
  mutation DeleteCardMutation($id: Int!) {
    deleteCard(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const CardsList = ({ cards }) => {
  const [deleteCard] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete card ' + id + '?')) {
      deleteCard({ variables: { id } })
    }
  }

  return (
    <div className="bg-white text-gray-900 border rounded-lg overflow-x-scroll">
      <table className="table-auto w-full min-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="font-semibold text-left p-3">id</th>
            <th className="font-semibold text-left p-3">firstName</th>
            <th className="font-semibold text-left p-3">lastName</th>
            <th className="font-semibold text-left p-3">sport</th>
            <th className="font-semibold text-left p-3">brand</th>
            <th className="font-semibold text-left p-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr
              key={card.id}
              className="odd:bg-gray-100 even:bg-white border-t"
            >
              <td className="p-3">{truncate(card.id)}</td>
              <td className="p-3">{truncate(card.firstName)}</td>
              <td className="p-3">{truncate(card.lastName)}</td>
              <td className="p-3">{truncate(card.sport)}</td>
              <td className="p-3">{truncate(card.brand)}</td>
              <td className="p-3 pr-4 text-right whitespace-no-wrap">
                <nav>
                  <ul>
                    <li className="inline-block">
                      <Link
                        to={routes.card({ id: card.id })}
                        title={'Show card ' + card.id + ' detail'}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Show
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        to={routes.editCard({ id: card.id })}
                        title={'Edit card ' + card.id}
                        className="text-xs bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Edit
                      </Link>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        title={'Delete card ' + card.id}
                        className="text-xs bg-gray-100 text-red-600 hover:bg-red-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                        onClick={() => onDeleteClick(card.id)}
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CardsList
