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
    backgroundColor: '#9e0b0b',
    labels: [
      'Currently Hospitalized',
      'Hospitalized Cumulative',
      'Death',
      'Recovered',
      'Currently On Ventilator',
      'Total',
      'Total Tested',
    ],
    datasets: [
      {
        data: [
          hospitalizedCurrently,
          hospitalizedCumulative,
          death,
          recovered,
          onVentilatorCurrently,
          total,
          totalTestResults,
        ],
      },
    ],
  };
  return <Radar data={data} options={options} />;
};

export default ByStateData;
