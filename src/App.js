import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { ApolloProvider, InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://todo-8005.hasura.app/v1/graphql'
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': 'GnQgYhtLv4eJwhHve4gYfF8fYk2jPuZRcPDFCY2AT9au1Ky1PS8oq6z7aOBfyCmS', 
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Todo Application</h1>
        <AddTodo />
        <TodoList />
      </div>
    </ApolloProvider>
  );
}

export default App;
