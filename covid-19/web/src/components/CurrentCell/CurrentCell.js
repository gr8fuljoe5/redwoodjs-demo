export const QUERY = gql`
  query {
    getCurrent {
      total
      positive
      negative
      pending
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => <div>Error: {error.message}</div>;

export const Success = ({ current }) => {
  console.log('current', current)
  return <h1>CURRENT</h1>
};
