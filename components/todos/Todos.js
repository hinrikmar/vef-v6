import React, { useState } from 'react';
import Link from 'next/link';

import css from './Todos.css';
import TodosItem from '../todo-item/TodoItem.js';

// Listi af verkefnum á forsíðu
export default function Todos(props) {
  const [showNew, setShowNew] = useState(true);
  const { data, loading, onFetchNewData } = props;

  function onClick() {
    setShowNew(false);
    onFetchNewData(true);
    console.log(this.props.id)
  }
  

  return (
    


    props.data.map(item => (
      <div className = {css.todos}>
        <TodosItem item = {item} />
      </div>
    ))

  )
  
}
