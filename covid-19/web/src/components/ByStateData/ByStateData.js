import { Radar } from 'react-chartjs-2';

const ByStateData = (obj) => {
  const {
    hospitalizedCurrently,
    hospitalizedCumulative,
    death,
    recovered,
    onVentilatorCurrently,
    total,
    totalTestResults,
    positive,
    negative,
  } = obj.data;
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
    datasets: [
      {
        backgroundColor: '#9e0b0b',
        data: [positive, negative, death, total, recovered],
      },
    ],
  };
  return <Radar data={data} options={options} />;
};

export default ByStateData;
