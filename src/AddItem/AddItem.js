import React from 'react';

export default function AddItem(props) {

  function pressEnter(e) {
    if (e.keyCode === 13) props.addItem();
  }

  function handleChange(e) {
    const value = e.target.value;

    const item = {
      id: props.item.id,
      text: value,
      completed: props.item.completed
    };

    props.handleChange(item);
  }

  return (
    <div className='input-container'>
      <input
        type='text'
        onChange={handleChange}
        value={props.item.text}
        onKeyDown={pressEnter}
        placeholder='Add item'
      />

      <button type='button' className='btn' onClick={props.addItem}>+</button>
    </div>
  )
}
