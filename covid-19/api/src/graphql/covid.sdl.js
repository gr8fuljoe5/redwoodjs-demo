export const schema = gql`
  type ByState {
    state: String!
    hospitalizedCurrently: Int
    hospitalizedCumulative: Int
    death: Int
    recovered: Int
    onVentilatorCurrently: Int
    total: Int
    totalTestResults: Int
    positive: Int
    negative: Int
  }

  type Current {
    positive: Int
    negative: Int
    pending: Int
    hospitalizedCurrently: Int
    hospitalizedCumulative: Int
    inIcuCurrently: Int
    inIcuCumulative: Int
    onVentilatorCurrently: Int
    onVentilatorCumulative: Int
    recovered: Int
    hash: String
    lastModified: String
    death: Int
    hospitalized: Int
    total: Int!
    totalTestResults: Int
    posNeg: Int
    notes: String
  }

  type Query {
    getByState(state: String!): ByState!
    getCurrent: Current!
  }
`;
