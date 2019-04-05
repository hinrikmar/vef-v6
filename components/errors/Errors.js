import React from 'react';
import PropTypes from 'prop-types';
import css from './Errors.css';

export default function Errors(props) {
  const { errors,message } = props;

  return (
    <p className={css.errors}>message</p>
  );
}

Errors.propTypes = {
};
