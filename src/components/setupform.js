import React, { Component } from 'react';
import { Form, Text } from 'react-form';


const CapitalismSetup = () => (
  <Form
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {({submitForm}) => {
      return(
        <form onSubmit={submitForm}>

          <div>
            <h4> Number of players </h4>
            <Text field='numPlayers' />
          </div>

          <div>
            <h4> Number of players </h4>
            <<Text field='userName' />
          </div>

          <button type='submit'> Submit </button>
        </form>
      );
    }}
  </Form>
);

export default CapitalismSetup;
