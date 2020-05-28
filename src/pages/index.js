import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      Hello world!<Link to="/blog/">blog page</Link>
      <h1>hello styling</h1>
    </Layout>
  );
}
