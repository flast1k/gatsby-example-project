import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const Blog = ({ data }) => {
  return (
    <Layout>
      Hello from blog page<Link to="/">back home</Link>
      <h1>title: {data.site.siteMetadata.title} </h1>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`;

export default Blog;
