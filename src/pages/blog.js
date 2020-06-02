import React from 'react';
import { graphql } from 'gatsby';

import StyledHero from '../components/StyledHero';
import Layout from '../components/Layout';
import BlogList from '../components/Blog/BlogList';
import Seo from '../components/SEO';

const Blog = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog" />
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  );
};

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Blog;
