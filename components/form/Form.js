import React, { useState } from 'react';

import { addTodo } from '../../api';

import Button from '../button/Button';
import Field from '../field/Field';
import Errors from '../errors/Errors';

import css from './Form.css';

// Form á forsíðu
export default function Form(props) {
  const { onCreated, onCreateCompleted } = props;

  const [data, setData] = useState({ title: '', date: undefined });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  async function onClickAdd(e) {
    console.log("vikrar ")
    onCreateCompleted(state.title, state.due);
  }
  let state = {
    title: '',
    due: ''
  }

  function onChangeTitle(e) {
    const { value } = e.target;
    console.log(value)
    state.title = value;
  }
  function onChangeDue(e) {
    const { value } = e.target;
    console.log(value)
    state.due = value;
  }

  return (
    <React.Fragment>
      {loading && (
        (<p>Bý til todo...</p>)
      )}
      {!loading && (
        <React.Fragment>
          <h1>Nýtt verkefni</h1>
          <p>{data.message}</p>
          <form className={css.form} >
            <Field label = "Titill: "
                  placeholder = ""
                  onChange = {onChangeTitle}/>     
            <Field label = "Klárast fyrir" 
                  placeholder = "dd/mm/yyyy, --:--"
                  onChange = {onChangeDue} />
            <Button 
              text = {"Búa til"} onClick = {onClickAdd}/>
          </form>
        </React.Fragment>
        )}
      </React.Fragment>
  )
}
