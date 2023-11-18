import './App.css';
import React, { useState } from 'react' ;
import { v4 as uuidv4 } from 'uuid';
import Item from './components/Item';

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState();

  const handleSubmit = (e) => {
    const newItem = {
      id: uuidv4(),
      item: item,
      complete: false,
    }

    e.preventDefault();

    if(item && !edit) {
      setList([...list, newItem]);
      setItem("");
      setEdit(false);
      setEditId(null);
    }  
    else if (item && edit && editId) {
      setList(
        list.map((el) => {
          if (el.id === editId) {
            return {
              ...el,
              item: item,
            };
          };
          return el;
        })
      );
      setItem("");
      setEditId(null);
      setEdit(false);
    }
  }

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  return (
    <div className="App">
      <div className='shopping-wrap'>      
        <div className='formWrap'>
          <h2>Shopping List</h2>
          <form onSubmit={ handleSubmit }>
            <input type="text" value={ item } onChange={ handleChange }/>
            { edit ? (
              <button type="submit">Edit</button>
            )
            :(
              <button type="submit">Add</button>
            )
            }
            
          </form>
        </div>

        <div className='itemWrap'>
          {list.map((c, id) => (
            <Item
              key={id}
              id={c.id}
              item={c.item}
              list={list}
              setList={setList}
              complete={c.complete}
              setItem={setItem}
              setEdit={setEdit}
              setEditId={setEditId}
            />
          ))}
        </div>
      </div>
    </div>   
  );
}

export default App;
