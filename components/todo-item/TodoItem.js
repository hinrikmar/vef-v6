import React, { useState } from 'react';
import Link from 'next/link';
import css from './TodoItem.css';

// Verkefni í lista á forsíðu
export default function todoItem(props) {
  const { item, onChange } = props;
  return (
    <div className={css.item}>
      <input  className={css.item__input} 
              type="checkbox" 
              name={item.id}
              checked={item.completed}
              value={item.title}
              onChange={onChange}
              />
      <p><Link as={"/todo/"+item.id} href={"/todo?id="+item.id}><a className = {css.item__link}>{item.title}</a></Link></p>
      <p className={css.item__due}>{item.due}</p>
    </div>
  );
}
