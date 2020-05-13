import { Doughnut } from 'react-chartjs-2';

const ByStateData = (obj) => {
  const { death, recovered, total, positive, negative } = obj.data;
  const data = {
    labels: ['Positive Tests', 'Negative Tests', 'Death', 'Total', 'Recovered'],
    datasets: [
      {
        backgroundColor: [
          'rgba(206, 102, 186, 0.3)',
          'rgba(193, 228, 37, 0.3)',
          'rgba(60, 91, 55, 0.3)',
          'rgba(139, 255, 149, 0.3)',
          'rgba(109, 77, 178, 0.3)',
        ],
        data: [positive, negative, death, total, recovered],
      },
    ],
  };
  return <Doughnut data={data} />;
};

export default ByStateData;
