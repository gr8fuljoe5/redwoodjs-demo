import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/web'

const HomePage = () => {
  const [states, setStates] = useState();
  const onSubmit = (data) => {
    fetch(`https://covidtracking.com/api/v1/states/${data.state}/current.json`)
      .then(response => response.json())
      .then((json) => setStates(json))
  }

  return (
    <>
      <Form onSubmit={onSubmit} style={{fontSize: '2rem'}}>
        <TextField
          name="state"
          placeholder="State"
          maxLength="2"
        />
        <Submit>Go</Submit>
      </Form>
      {states && (
        <section>
          <h3>{states.state}</h3>
          <ul>
            <li>Positive case: {states.positive}</li>
          </ul>
        </section>
      )}
    </>
  )
}

export default HomePage
