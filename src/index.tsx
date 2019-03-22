import React from 'react';
import ReactDOM from 'react-dom';

export const App = (): JSX.Element => {
  return (
    <>
      <h1>Todo List</h1>
      <form>
        <input type="text" required/>
        <button type="submit">Add Todo</button>
      </form>
    </>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
