import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export default function Item(props) {
  return (
    <div className='item'>
      <input
        type='checkbox'
        checked={props.data.completed}
        onChange={() => props.check(props.data.id)} />

      <span class="checkmark"></span>

      <Link to={`edit/${props.data.id}`}>
        {props.data.text}
      </Link>

      <button
        type='button'
        className='btn'
        onClick={() => props.deleteItem(props.data.id)}>
          <span>+</span>
      </button>
    </div>
  )
}
