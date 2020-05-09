import { useState } from 'react';
import { Form, TextField, Submit } from '@redwoodjs/web';
import ByStateCell from '../../components/ByStateCell';
import MainLayout from '../../layouts/MainLayout';

const HomePage = () => {
  const [usState, setUsState] = useState();
  const onSubmit = (data) => {
    setUsState(data);
  };
  return (
    <MainLayout>
      <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }} className={'w-full max-w-sm'}>
        <TextField
          className={"bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"}
          name="state"
          placeholder="State"
          maxLength="2"
          defaultValue={'NY'}
        />
        <Submit
          className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'}
        >Go</Submit>
      </Form>
      {usState && <ByStateCell {...usState} />}
    </MainLayout>
  );
};

export default HomePage;
