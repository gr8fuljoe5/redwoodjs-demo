import { Doughnut } from 'react-chartjs-2';

const ByStateData = (obj) => {
  const { death, recovered, positive, negative } = obj.data;
  const data = {
    labels: ['Positive Tests', 'Negative Tests', 'Death', 'Recovered'],
    datasets: [
      {
        backgroundColor: [
          'rgba(206, 102, 186, 0.3)',
          'rgba(193, 228, 37, 0.3)',
          'rgba(60, 91, 55, 0.3)',
          'rgba(109, 77, 178, 0.3)',
        ],
        borderColor: [
          'rgba(206, 102, 186, 1)',
          'rgba(193, 228, 37, 1)',
          'rgba(60, 91, 55, 1)',
          'rgba(109, 77, 178, 1)',
        ],
        data: [positive, negative, death, recovered],
      },
    ],
  };
  return <Doughnut data={data} />;
};

export default ByStateData;
