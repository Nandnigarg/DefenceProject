import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default MetaTags;