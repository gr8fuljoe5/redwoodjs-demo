import ByStateData from '../../components/ByStateData/ByStateData';

export const QUERY = gql`
  query($state: String!) {
    byState: getByState(state: $state) {
      state
      hospitalizedCurrently
      hospitalizedCumulative
      death
      recovered
      onVentilatorCurrently
      total
      totalTestResults
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => <div>Error: {error.message}</div>;

export const Success = ({ byState }) => {
  console.log('byState', byState);
  return <ByStateData data={byState} />;
};
