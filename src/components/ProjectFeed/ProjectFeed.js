import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import styles from './ProjectFeed.module.scss';

const ProjectFeed = ({ edges }) => (
  <div className={styles['project-feed']}>
    {edges.map((edge) => (
      <div className={styles['project-feed__item']} key={edge.node.fields.slug}>
        <div className={styles['project-feed__item-meta']}>
          <time className={styles['project-feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span className={styles['project-feed__item-meta-divider']} />
          <span className={styles['project-feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['project-feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className={styles['project-feed__item-title']}>
          <Link className={styles['project-feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles['project-feed__item-description']}>{edge.node.frontmatter.description}</p>
        <Link className={styles['project-feed__item-readmore']} to={edge.node.fields.slug}>Read</Link>
      </div>
    ))}
  </div>
);

export default ProjectFeed;
