import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      Hello world!<Link to="/blog/">blog page</Link>
      <h1>hello styling</h1>
      <div className="container">
        <div className="row">
          <div className="col-4">Hello</div>
          <div className="col-4">Hello</div>
          <div className="col-4">Hello</div>
        </div>
      </div>
    </Layout>
  );
}
