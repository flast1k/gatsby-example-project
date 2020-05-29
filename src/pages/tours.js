import React from 'react';

import Layout from '../components/Layout';
import Button from '../examples/Button';

const Tours = () => {
  return (
    <Layout>
      Hello from tours page
      <div>
        <Button big>first button</Button>
        <Button color="#f15025">second button</Button>
      </div>
    </Layout>
  );
};

export default Tours;
