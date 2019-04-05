import React, { useState } from 'react';
import Link from 'next/link';

import css from './Todos.css';
import TodosItem from '../todo-item/TodoItem.js';
import Button from '../button/Button'
// Listi af verkefnum á forsíðu
export default function Todos(props) {
  const [showNew, setShowNew] = useState(true);
  const { data, loading, onFetchNewData,onUpdateCompleted } = props;

  function onChange(e) {
    const { name, value } = e.target;
    let id = 0;
    for(let i = 0; i < data.length; i++){
      if(data[i].id.toString() === name){
        id = i;
        break;
      }
    }

    const title = value;
    const completed = !data[id].completed;
    const due = data[id].due;
    
    data[id].completed = !data[id].completed
    
    onUpdateCompleted(name, {"title":title, "completed":completed, "due":due},true)
    setShowNew(data);

    //onFetchNewData(true);
  }
  

  return (
    <React.Fragment>
    {loading && (
      (<h3>Uppfæri</h3>)
    )}
    {!loading && (
      <React.Fragment>
        {showNew &&
      (data.map(item => (
        <div className = {css.todos}>
          <TodosItem 
                    key = {item.id}
                    item = {item}
                    onChange = {onChange}/>
        </div>
        
      )))}
      </React.Fragment>
      )}
     </React.Fragment>
  )
  
}
