import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Project.module.scss';

const Project = ({ project }) => {
  const {
    tags,
    title,
    date
  } = project.frontmatter;

  const { html } = project;
  const { tagSlugs } = project.fields;

  return (
    <div className={styles['project']}>
      <Link className={styles['project__home-button']} to="/">All Articles</Link>

      <div className={styles['project__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['project__footer']}>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

      <div className={styles['project__comments']}>
        <Comments projectSlug={project.fields.slug} projectTitle={project.frontmatter.title} />
      </div>
    </div>
  );
};

export default Project;
