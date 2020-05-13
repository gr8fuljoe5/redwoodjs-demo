import { Radar } from 'react-chartjs-2';
import generateHex from '../../utils/generateHex';

const AllStateData = (obj) => {
  const datasets = [];
  obj.data.map((item) => {
    datasets.push({
      label: item.state,
      backgroundColor: generateHex(),
      data: [
        item.positive,
        item.negative,
        item.death,
        item.total,
        item.recovered,
      ],
    });
  });

  const options = {
    scale: {
      angleLines: {
        display: false,
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
  };
  const data = {
    labels: ['Positive Tests', 'Negative Tests', 'Death', 'Total', 'Recovered'],
    datasets: datasets,
  };
  return <Radar data={data} options={options} />;
};

export default AllStateData;
