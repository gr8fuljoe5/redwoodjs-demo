export const schema = gql`
  type Card {
    id: Int!
    name: String!
    brand: String!
    year: String!
    series: String!
    number: String
    grade: String
    image: String
    postedAt: DateTime
  }

  type Query {
    cards: [Card]
    card(id: Int!): Card
  }

  input CardInput {
    name: String
    brand: String
    year: String
    series: String
    number: String
    grade: String
    image: String
    postedAt: DateTime
  }

  type Mutation {
    createCard(input: CardInput!): Card
    updateCard(id: Int!, input: CardInput!): Card
    deleteCard(id: Int!): Card
  }
`
