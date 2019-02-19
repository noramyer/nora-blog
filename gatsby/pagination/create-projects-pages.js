'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "project" }, draft: { ne: true } } }
      ) { totalCount }
    }
  `);

  const { projectsPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / projectsPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/projects' : `/projects/${i}`,
      component: path.resolve('./src/templates/projects-index-template.js'),
      context: {
        currentPage: i,
        projectsLimit: projectsPerPage,
        projectsOffset: i * projectsPerPage,
        prevPagePath: i <= 1 ? '/projects' : `/projects/${i - 1}`,
        nextPagePath: `/projects/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }
};
