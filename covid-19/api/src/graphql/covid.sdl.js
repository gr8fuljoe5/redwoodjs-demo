export const schema = gql`
  type Covid {
    state: String!
    hospitalizedCurrently: Int!
    hospitalizedCumulative: Int!
    death: Int!
    recovered: Int!
    onVentilatorCurrently: Int!
    total: Int!
    totalTestResults: Int!
  }

  type Query {
    getByState(state: String!): Covid!
  }
`
