import React, { useState } from 'react';
import './Edit.css';

import { useParams, useHistory } from 'react-router-dom';

export default function Edit(props) {

  const history = useHistory();
  let { id } = useParams();
  let item = props.data.filter(el => el.id.toString() === id)[0];

  const [editedItem, setEditedItem] = useState(item)

  function handleChange(e) {
    const value = e.target.value;

    setEditedItem(prevState => {
      return {
        id: prevState.id,
        text: value,
        completed: prevState.completed
      }
    })
  }

  function handleClick() {
    props.editItem(editedItem);
    history.push("/");
  }

  function pressEnter(e) {
    if (e.keyCode === 13) handleClick();
  }

  return (
    <div className='input-container edit'>
      <input
        type='text'
        onChange={handleChange}
        value={editedItem.text}
        onKeyDown={pressEnter}
      />

      <button
        type='button'
        className='btn'
        onClick={handleClick}>
        Save
      </button>

    </div>
  )
}
