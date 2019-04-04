import PropTypes from 'prop-types';

import css from './Field.css';

export default function Field(props) {
  const { children, label } = props;
  return (
    <div className = {css.field}>
      <p className = {css.field__label}> {label} </p>
      <input  type="text" 
              name="inputText" 
              className ={css.field__input} 
              value=""
              placeholder= "dd/mm/yyyy, --:-- " />
    </div>
  );
}

Field.propTypes = {

}

Field.defaultProps = {

}
