import React from 'react';
import { graphql } from 'gatsby';

import StyledHero from '../components/StyledHero';

import Layout from '../components/Layout';
import ContactForm from '../components/Contact/Contact';
import Seo from '../components/SEO';

const Contact = ({ data }) => {
  return (
    <Layout>
      <Seo title="Contact" />
      <StyledHero img={data.connectBcg.childImageSharp.fluid} />
      <ContactForm />
    </Layout>
  );
};

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Contact;
