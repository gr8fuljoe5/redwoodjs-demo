export const schema = gql`
  type Card {
    id: Int!
    player: String!
    year: Int!
    manufacturer: String!
    set: String!
    number: String!
    sport: String!
    autographed: Boolean!
    image: String
    postedAt: DateTime!
  }

  type Query {
    cards: [Card]
    card(id: Int!): Card
  }

  input CardInput {
    player: String
    year: Int
    manufacturer: String
    set: String
    number: String
    sport: String
    autographed: Boolean
    image: String
    postedAt: DateTime
  }

  type Mutation {
    createCard(input: CardInput!): Card
    updateCard(id: Int!, input: CardInput!): Card
    deleteCard(id: Int!): Card
  }
`
