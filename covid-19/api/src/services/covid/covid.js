import fetch from 'node-fetch';

export const getByState = async ({ state }) => {
  const response = await fetch(
    `https://covidtracking.com/api/v1/states/${state}/current.json`
  );
  const json = await response.json();

  const {
    hospitalizedCurrently = 0,
    hospitalizedCumulative = 0,
    death = 0,
    recovered = 0,
    onVentilatorCurrently = 0,
    total = 0,
    totalTestResults = 0,
  } = json;
  return {
    state,
    hospitalizedCurrently,
    hospitalizedCumulative,
    death,
    recovered,
    onVentilatorCurrently,
    total,
    totalTestResults,
  };
};
