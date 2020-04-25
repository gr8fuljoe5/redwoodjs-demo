import CardsLayout from 'src/layouts/CardsLayout'
import CardCell from 'src/components/CardCell'

const CardPage = ({ id }) => {
  return (
    <CardsLayout>
      <CardCell id={id} />
    </CardsLayout>
  )
}

export default CardPage
