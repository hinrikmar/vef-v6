import PropTypes from 'prop-types';

import css from './Field.css';

export default function Field(props) {
  const { children, label,before,onChange } = props;
  const placeholder = (before == "true") ? "dd/mm/yyyy, --:--" : ""
  return (
    <div className = {css.field}>
      <p className = {css.field__label}> {label} </p>
      <input  type="text" 
              className ={css.field__input} 
              placeholder= {placeholder}
              onChange = {onChange} />
    </div>
  );
}

Field.propTypes = {

}

Field.defaultProps = {

}
