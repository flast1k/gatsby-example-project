import React, { Component } from 'react';
import { graphql } from 'gatsby';

import StyledHero from '../components/StyledHero';
import ToursComponent from '../components/Tours/Tours';

import Layout from '../components/Layout';

class Tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
        <ToursComponent />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Tours;
