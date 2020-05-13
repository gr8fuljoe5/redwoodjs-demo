import AllStateData from '../AllStateData';

export const QUERY = gql`
  query {
    allState: getAllStates {
      state
      total
      positive
      negative
      death
      recovered
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => <div>Error: {error.message}</div>;

export const Success = ({ allState }) => {
  return <AllStateData data={allState} />;
};
