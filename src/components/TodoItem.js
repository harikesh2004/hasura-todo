import { useMutation } from '@apollo/client';
import { DELETE_TODO, MARK_TODO_COMPLETED } from '../graphql/mutations';
import { GET_TODOS } from '../graphql/queries';

const TodoItem = ({ todo }) => {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  });
  const [markCompleted] = useMutation(MARK_TODO_COMPLETED, {
    refetchQueries: [{ query: GET_TODOS }],
  });

  return (
    <div className={`todo-card ${todo.is_completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.is_completed}
        onChange={() => markCompleted({ variables: { id: todo.id, is_completed: !todo.is_completed } })}
      />
      {todo.title}
      <button onClick={() => deleteTodo({ variables: { id: todo.id } })}>Delete</button>
    </div>
  );
};

export default TodoItem;
