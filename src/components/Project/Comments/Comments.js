import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ReactDisqusComments from 'react-disqus-comments';

export const PureComments = ({ data, projectTitle, projectSlug }) => {
  const {
    siteUrl,
    disqusShortname
  } = data.site.siteMetadata;

  if (!disqusShortname) {
    return null;
  }

  return (
    <ReactDisqusComments
      shortname={disqusShortname}
      identifier={projectTitle}
      title={projectTitle}
      url={siteUrl + projectSlug}
    />
  );
};

export const Comments = (props) => (
  <StaticQuery
    query={graphql`
      query ProjectCommentsQuery {
        site {
          siteMetadata {
            disqusShortname
            url
          }
        }
      }
    `}
    render={(data) => <PureComments {...props} data={data}/>}
  />
);

export default Comments;
