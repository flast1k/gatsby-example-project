import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const Blog = () => {
  return (
    <Layout>
      Hello from blog page
      <Link to="/">back home</Link>
    </Layout>
  );
};

export default Blog;
