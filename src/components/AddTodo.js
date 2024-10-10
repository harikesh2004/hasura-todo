import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ADD_TODO } from '../graphql/mutations';
import { GET_TODOS } from '../graphql/queries';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  });

  const handleAddTodo = () => {
    if (title.trim()) {
      addTodo({
        variables: { title }
      });
      setTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
