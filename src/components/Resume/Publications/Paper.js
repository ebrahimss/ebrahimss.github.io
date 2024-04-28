import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Paper = ({
  data: {
    name, publisher, url, releaseDate, summary,
  },
}) => (
  <article className="papers-container">
    <header>
      <h4><a href={url}>{name}</a> - {publisher}</h4>
      <p className="daterange"> {dayjs(releaseDate).format('MMMM YYYY')}</p>
    </header>
    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {summary}
      </Markdown>
    ) : null}

  </article>
);

Paper.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    summary: PropTypes.string,
  }).isRequired,
};

export default Paper;
