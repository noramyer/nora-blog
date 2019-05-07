import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';

const NotFoundTemplate = ({ data }) => {
  const {
    title,
    subtitle
  } = data.site.siteMetadata;

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Not found...">
        <p>You just hit a route that doesn&#39;t exist, sorry :(</p>
          <img
            src={'/media/404.png'}
            alt='Sorry!'
          />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

export default NotFoundTemplate;
