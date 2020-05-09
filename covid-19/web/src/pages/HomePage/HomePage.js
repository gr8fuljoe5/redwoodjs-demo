import { useState } from 'react';
import { Form, TextField, Submit } from '@redwoodjs/web';
import ByStateCell from '../../components/ByStateCell';

const HomePage = () => {
  const [usState, setUsState] = useState();
  const onSubmit = (data) => {
    setUsState(data);
  };
  return (
    <>
      <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
        <TextField
          name="state"
          placeholder="State"
          maxLength="2"
          defaultValue={'NY'}
        />
        <Submit>Go</Submit>
      </Form>
      {usState && <ByStateCell {...usState} />}
    </>
  );
};

export default HomePage;
