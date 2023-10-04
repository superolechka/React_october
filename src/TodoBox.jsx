import React, { useState } from 'react';
import Item from './Item';
import { uniqueId } from 'lodash';

function TodoBox() {
  const [items, setItems] = useState([]);
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    const newItem = {
      id: uniqueId(),
      task: task,
    };
    setItems([newItem, ...items]);
    setTask('');
  };

  const handleRemove = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      <div className="mb-3">
        <form onSubmit={handleSubmit} className="d-flex">
          <div className="me-3">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
              className="form-control"
              placeholder="I am going..."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            add
          </button>
        </form>
      </div>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <Item task={item.task} onRemove={() => handleRemove(item.id)} />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoBox;

