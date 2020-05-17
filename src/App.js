import React, {useState} from 'react';
import './App.css';
import './Button.css';
import './InputText.css';
import './Checkbox.css';
import Header from './Header/Header';
import List from './List/List';
import AddItem from './AddItem/AddItem';
import About from './About/About';
import Edit from './Edit/Edit';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import todoData from './data/data.json'; // imitate getting data from server

function App() {
  const [data, setData] = useState(todoData);
  const [newItem, setNewItem] = useState({
    id: '',
    text: '',
    completed: false
  });

  function deleteItem(id) {
    setData((prevData) => {
      return prevData.filter(item => item.id !== id);
    })
  }

  function addItem() {
    let id;
    // check if there is available id
    for(let i = 1; i <= data.length + 1; i++) {
      if (data.some(e => e.id === i)) continue;
      id = i;
    };

    const item = {
      id: id,
      text: newItem.text,
      completed: newItem.completed
    }

    //add new item
    setData(prevData => {
      let newData = [...prevData];
      newData.push(item);
      return newData;
    });

    //reset new item
    setNewItem(prevData => {
      return {
        id: "",
        text: "",
        completed: false
      }
    });
  }

  function editItem(editedItem) {
    setData((prevData) => {
      return prevData.map(item => {
        if (item.id === editedItem.id) {
          item = {
            id: item.id,
            text: editedItem.text,
            completed: item.completed
          }
        }
        return item;
      });
    });
  }

  function check(id) {
    setData((prevData) => {
      return prevData.map(item => {
        if (item.id === id) {
          item = {
            id: item.id,
            text: item.text,
            completed: !item.completed
          }
        }
        return item;
      });
    });
  }

  function handleChange(item) {
    setNewItem(item);
  }

  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <main>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/edit/:id">
              <Edit
                data={data}
                editItem={editItem}
                handleChange={handleChange}
                item={newItem}
              />
            </Route>

            <Route exact path="/">
              <AddItem
                addItem={addItem}
                handleChange={handleChange}
                item={newItem}
              />

              <List
                data={data}
                deleteItem={deleteItem}
                check={check}
              />
            </Route>
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
