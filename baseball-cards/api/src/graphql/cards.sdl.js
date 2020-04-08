export const schema = gql`
  type Card {
    id: Int!
    firstName: String!
    lastName: String!
    sport: String!
    brand: String!
  }

  type Query {
    cards: [Card]
    card(id: Int!): Card
  }

  input CardInput {
    firstName: String
    lastName: String
    sport: String
    brand: String
  }

  type Mutation {
    createCard(input: CardInput!): Card
    updateCard(id: Int!, input: CardInput!): Card
    deleteCard(id: Int!): Card
  }
`
