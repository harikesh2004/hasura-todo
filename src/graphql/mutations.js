import { gql } from '@apollo/client';

export const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    insert_todos(objects: {title: $title}) {
      returning {
        id
        title
        is_completed
      }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    delete_todos(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;

export const MARK_TODO_COMPLETED = gql`
  mutation MarkTodoCompleted($id: Int!, $is_completed: Boolean!) {
    update_todos(where: {id: {_eq: $id}}, _set: {is_completed: $is_completed}) {
      affected_rows
    }
  }
`;

export const DELETE_ALL_TODOS = gql`
  mutation DeleteAllTodos {
    delete_todos(where: {}) {
      affected_rows
    }
  }
`;
