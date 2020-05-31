import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BlogCard from './BlogCard';
import Title from '../Title';

import styles from '../../css/blog.module.css';

const getPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          title
          slug
          id: contentful_id
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

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts);
  console.log(posts);

  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blogs" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => (
          <BlogCard key={node.id} blog={node} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
