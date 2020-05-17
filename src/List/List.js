import React from 'react';
import Item from '../Item/Item';
import { Redirect } from "react-router-dom";

export default function List(props) {

  const listItems = props.data.map(item => {
    return <Item
        key={item.id}
        data={item}
        deleteItem={props.deleteItem}
        check={props.check}
      />
  });

  return (
    <section>
      {listItems}
    </section>
  )
}
