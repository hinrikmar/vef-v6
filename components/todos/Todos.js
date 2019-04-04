import React, { useState } from 'react';
import Link from 'next/link';

import css from './Todos.css';

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
        <input className={css.assignment_checkbox} type="checkbox" name={item.id} value={item.title}/>
        <p className={css.assignment_text}>{item.title}</p>
      </div>
    ))

  )
  
}
