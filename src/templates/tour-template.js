import React from 'react';
import { graphql } from 'gatsby';

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images: [mainImage, ...tourImages],
    start,
    journey,
  } = data.tour;

  return <h1>{name}</h1>;
};

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          src
        }
      }
    }
  }
`;

export default TourTemplate;
