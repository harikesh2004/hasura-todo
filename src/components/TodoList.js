import { useQuery, useMutation } from '@apollo/client';
import { GET_TODOS } from '../graphql/queries';
import { DELETE_ALL_TODOS } from '../graphql/mutations';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [deleteAllTodos] = useMutation(DELETE_ALL_TODOS, {
    refetchQueries: [{ query: GET_TODOS }],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => deleteAllTodos()}>Delete All</button>
      {data.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
