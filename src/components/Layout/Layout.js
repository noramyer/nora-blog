import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="google-site-verification" content="sKzPuFkNJNnHtIb-sEd7QFe4nAwKc8GuSYj4Cec6xck" />
    </Helmet>
    {children}
  </div>
);

export default Layout;
