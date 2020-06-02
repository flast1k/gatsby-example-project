import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import BlogCard from '../components/Blog/BlogCard';
import Title from '../components/Title';

import styles from '../css/blog.module.css';
import Seo from '../components/SEO';

const BlogListTemplate = props => {
  const { currentPage, numPages } = props.pageContext;
  const { data } = props;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const prevPage =
    currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`;
  const nextPage = `/blogs/${currentPage + 1}`;

  return (
    <Layout>
      <Seo title="Blogs" />
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => (
            <BlogCard key={node.id} blog={node} />
          ))}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              Prev
            </AniLink>
          )}

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

          {!isLast && (
            <AniLink fade to={nextPage} className={styles.link}>
              Next
            </AniLink>
          )}
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
