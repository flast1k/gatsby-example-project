import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`;

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(getData);

  const {
    siteTitle,
    siteDesc,
    author,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
    </Helmet>
  );
};

export default Seo;
