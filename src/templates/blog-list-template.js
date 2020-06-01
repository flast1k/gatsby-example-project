import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import BlogCard from '../components/Blog/BlogCard';
import Title from '../components/Title';

import styles from '../css/blog.module.css';

const BlogListTemplate = props => {
  const { currentPage, numPages } = props.pageContext;
  const { data } = props;

  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => (
            <BlogCard key={node.id} blog={node} />
          ))}
        </div>
        <section className={styles.links}>
          {Array.from({ length: numPages }, (_, i) => {
            const currentPageIndex = i + 1;

            return (
              <AniLink
                fade
                key={i}
                to={`/blogs/${i === 0 ? '' : currentPageIndex}`}
                className={
                  currentPageIndex === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {currentPageIndex}
              </AniLink>
            );
          })}
        </section>
      </section>
    </Layout>
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
