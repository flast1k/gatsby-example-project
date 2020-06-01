const path = require('path');

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.tours.edges.forEach(({ node }) => {
    const { slug } = node;
    createPage({
      path: `tours/${slug}`,
      component: path.resolve('./src/templates/tour-template.js'),
      context: {
        slug,
      },
    });
  });

  data.posts.edges.forEach(({ node }) => {
    const { slug } = node;
    createPage({
      path: `blog/${slug}`,
      component: path.resolve('./src/templates/blog-template.js'),
      context: {
        slug,
      },
    });
  });
  // amount of posts
  const posts = data.posts.edges;
  // posts per page
  const postsPerPage = 5;
  // how many pages
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    const currentPage = i + 1;
    createPage({
      path: i === 0 ? 'blogs' : `blogs/${currentPage}`,
      component: path.resolve('./src/templates/blog-list-template.js'),
      context: {
        limit: postsPerPage,
        skip: postsPerPage * i,
        numPages,
        currentPage,
      },
    });
  });
};
