import CardsLayout from 'src/layouts/CardsLayout'
import EditCardCell from 'src/components/EditCardCell'

const EditCardPage = ({ id }) => {
  return (
    <CardsLayout>
      <EditCardCell id={id} />
    </CardsLayout>
  )
}

export default EditCardPage
