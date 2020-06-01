import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import BlogCard from '../components/Blog/BlogCard';
import Title from '../components/Title';

import styles from '../css/blog.module.css';

const BlogListTemplate = props => {
  const { data } = props;

  return (
    <section className={styles.blog}>
      <Title title="latest" subtitle="posts" />
      <div className={styles.center}>
        {data.posts.edges.map(({ node }) => (
          <BlogCard key={node.id} blog={node} />
        ))}
      </div>
    </section>
  );
};

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default BlogListTemplate;
