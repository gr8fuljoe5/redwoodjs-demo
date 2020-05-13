import { useState } from 'react';
import { Form, SelectField, Submit } from '@redwoodjs/web';
import ByStateCell from '../../components/ByStateCell';
import MainLayout from '../../layouts/MainLayout';
import states from '../../constants/states';

const stateList = Object.entries(states);

stateList.forEach((state) => {
  console.log('state', state);
});

const ByStatePage = () => {
  const [usState, setUsState] = useState();
  const onSubmit = (data) => {
    console.log('data', data);
    setUsState(data);
  };

  return (
    <MainLayout>
      <Form onSubmit={onSubmit} className={'w-full max-w-sm'}>
        <div className="inline-block relative w-64">
          <SelectField
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            name={'state'}
          >
            {stateList.map((state, idx) => {
              return (
                <option value={state[0]} key={idx}>
                  {state[1]}
                </option>
              );
            })}
          </SelectField>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <Submit
          className={
            'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
          }
        >
          Go
        </Submit>
      </Form>
      {usState && <ByStateCell {...usState} />}{' '}
    </MainLayout>
  );
};

export default ByStatePage;
