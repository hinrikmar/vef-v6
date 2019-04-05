import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.css';

export default function Button(props) {
  const { text, onClick } = props;

  return (
    <button className={css.button} onClick={onClick}>
      {text}
    </button>
  );
}

Error.propTypes = {
  onClick: PropTypes.func,
};
