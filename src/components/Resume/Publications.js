import React from 'react';
import PropTypes from 'prop-types';

import Paper from './Publications/Paper';

const Publications = ({ data }) => (
  <div className="publications">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Publications</h3>
    </div>
    {data.map((item) => (
      <Paper
        data={item}
        key={`${item.name}-${item.publisher}`}
      />
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    publisher: PropTypes.string,
    url: PropTypes.string,
    releaseDate: PropTypes.string,
    summary: PropTypes.string,
  })),
};

Publications.defaultProps = {
  data: [],
};

export default Publications;
