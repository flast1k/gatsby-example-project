import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import styles from '../css/error.module.css';
import Banner from '../components/Banner';
import Seo from '../components/SEO';

function Error() {
  return (
    <Layout>
      <Seo title="Error" />
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
}

export default Error;
