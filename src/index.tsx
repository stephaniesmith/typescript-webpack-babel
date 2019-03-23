import React, { useState, FormEvent } from 'react';
import ReactDOM from 'react-dom';

type FormElem = FormEvent<HTMLFormElement>

interface ITodo {
  text: string;
  complete: boolean;
}

export const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value)
    setValue('');
  }

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  }

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          required
          onChange={e => setValue(e.target.value)}/>
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map(({ text, complete }: { text: string, complete: boolean }, i: number ) => (
          <>
          <div style={{ textDecoration: complete ? 'line-through' : '' }} key={i}>{text}</div>
          <button type="button" onClick={() => completeTodo(i)}>
            {complete ? 'Incomplete' : 'Complete'}
          </button>
          </>
        ))}
      </section>
    </>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
