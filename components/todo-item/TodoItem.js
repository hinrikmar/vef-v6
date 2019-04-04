import React, { useState } from 'react';
import css from './TodoItem.css';

// Verkefni í lista á forsíðu
export default function todoItem(props) {
  const { item } = props;
  return (
    <div class={css.item}>
      <input  className={css.item__input} 
              type="checkbox" 
              name={item.id} 
              value={item.title}
              placeholder= "dd/mm/yyyy, --:-- " />
      <p className={css.item__link}>{item.title}</p>
    </div>
  );
}
