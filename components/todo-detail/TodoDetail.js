import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../button/Button';
import css from './todoDetail.css';
// Stakt verkefni á /:id
export default function todoDetail(props) {

  const [showNew, setShowNew] = useState(true);
  const { data, loading, onFetchNewData,onUpdateCompleted, onDeleteCompleted} = props;


  let state = {
    title: data.title,
    completed: data.completed,
    due: data.due,
  }

  function onChangeTitle(e) {
    const { value } = e.target;
    console.log(value)
    state.title = value;
  }
  function onChangeFinished(e) {
    const { checked } = e.target;
    console.log(checked)
    
    const title = data.title;
    const completed = checked;
    const due = data.due;

    onUpdateCompleted({"completed":completed},true)

    data.completed = completed
    setShowNew(data);
    state.completed = !checked;
  }
  function onChangeDue(e) {
    const { value } = e.target;
    console.log(value)
    state.due = value;
  }
  
  function onClickUpdate(){
    const { title, completed, due }= state;
    console.log(title)
    data.title = title;
    data.due = due;
    data.completed = completed;
    
    setShowNew(data);
    
    onUpdateCompleted({"title":title,"completed":completed,"due":due},true)
    onFetchNewData(true)
  }

  function onClickDelete(){
    onDeleteCompleted(true)
  }
  const { title, completed,due } = state;
  

  return (
    <form>
      <div className = {css.todoDetail__list}>
        <p className = {css.todoDetail__term}> Titill: </p>
        <input 
          autoComplete="off"
          name = "title"
          type="text" 
          defaultValue={data.title}
          className ={css.todoDetail__definition} 
          onChange = {onChangeTitle}
        />
      </div>

      <div className = {css.todoDetail__list}>
        <p className = {css.todoDetail__term}> Lokið: </p>
        <input 
          name = "finished"
          type="checkbox"
          checked={data.completed}
          onChange = {onChangeFinished}
          className ={css.todoDetail__definition} 
        />
      </div>

      <div className = {css.todoDetail__list}>
        <p className = {css.todoDetail__term}> Klárast fyrir: </p>
        <input  
          type="text"
          name = "due"
          defaultValue = {data.due}
          className ={css.todoDetail__definition} 
          placeholder= "dd/mm/yyyy, --:--"
          onChange = {onChangeDue}
        />
      </div>

      <div className = {css.todoDetail__list}>
        <p className = {css.todoDetail__term}> Uppfært: </p>
        <p className ={css.todoDetail__definition} >{data.updated}</p>
      </div>

      <div className = {css.todoDetail__list}>
        <p className = {css.todoDetail__term}> Búið til: </p>
        <p className ={css.todoDetail__definition} >{data.created}</p>
      </div>
      <div className = {css.todoDetail__buttons}>
      
      <Button text = {"Uppfæra"} onClick = {onClickUpdate} />
        <Button text = {"Eyða"} onClick = {onClickDelete}/>
      </div>
      <p><Link as="/" href="/"><a className = {css.todoDetail__back}>Til baka</a></Link></p>
    </form>
  )
}
