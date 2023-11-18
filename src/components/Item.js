import React from 'react'
import './Item.css';
import { FaTrashAlt, FaPen } from 'react-icons/fa';

const Item = ({ id, item, list, setItem, setList, setEdit, setEditId, complete }) => {

  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  const handleComplete = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
          };
        };
        return item;
      })
    );
  };

  const handleItem = (id) => {
    const editItem = list.find((el) => el.id === id);
    setItem(editItem.item);
    setEdit(true);
    setEditId(id);
  }

  return (
    <div className="item">
      <input type="checkbox" onClick={() => handleComplete(id)} />
      <p className={complete ? "complete" : ""}>{item}</p>
      <FaPen className="edit-btn" fill='#22A699'
        onClick={() => {
          const confirmBox = window.confirm("Do you want to edit this item?");
          if (confirmBox === true) {
            handleItem(id);
          }
        }}
      />    
      <FaTrashAlt className="delete-btn" fill='#F24C3D' onClick={() => remove(id)} />      
    </div>
  );
}; 

export default Item;