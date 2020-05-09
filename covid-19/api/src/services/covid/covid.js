import fetch from 'node-fetch';

export const getCurrent = async () => {
  const response = await fetch(
    'https://covidtracking.com/api/v1/us/current.json'
  );
  const json = await response.json();
  console.log('json', json);

  const {
    positive,
    negative,
    pending,
    hospitalizedCurrently,
    hospitalizedCumulative,
    inIcuCurrently,
    inIcuCumulative,
    onVentilatorCurrently,
    onVentilatorCumulative,
    recovered,
    hash,
    lastModified,
    death,
    hospitalized,
    total,
    totalTestResults,
    posNeg,
    notes,
  } = json[0];

  return {
    positive,
    negative,
    pending,
    hospitalizedCurrently,
    hospitalizedCumulative,
    inIcuCurrently,
    inIcuCumulative,
    onVentilatorCurrently,
    onVentilatorCumulative,
    recovered,
    hash,
    lastModified,
    death,
    hospitalized,
    total,
    totalTestResults,
    posNeg,
    notes,
  };
};

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
    positive = 0,
    negative = 0,
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
    positive,
    negative,
  };
};
