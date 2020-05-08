


import fetch from 'node-fetch'

export const getByState = async ({ state }) => {
  const response = await fetch(
    `https://covidtracking.com/api/v1/states/${state}/current.json`
  );
  const json = await response.json();

  const {hospitalizedCurrently, hospitalizedCumulative, death, recovered, onVentilatorCurrently, total, totalTestResults} = json;
  return {
    state,
    hospitalizedCurrently,
    hospitalizedCumulative,
    death,
    recovered,
    onVentilatorCurrently,
    total,
    totalTestResults,
  }
};
