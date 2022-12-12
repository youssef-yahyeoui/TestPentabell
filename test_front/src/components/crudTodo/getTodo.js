import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "./todoPage";

const GetTodos = () => {
  const [todo, setTodo] = useState([]);
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      getTodos();
      setIsLoading(false);
    }
  }, [isLoading]);

  const getTodos = async () => {
    const response = await axios.get("http://localhost:8000/api/todos");
    setTodo(response.data);
  };
  return (
    <div className="App">
      <h1>List Todos </h1>
      <button onClick={() => history("/addTodo")} data-testid="Add-New">
        {" "}
        Add New Todo{" "}
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        todo.map(function (todos) {
          return (
            <Todo
              id={todos._id}
              key={todos._id}
              title={todos.title}
              description={todos.description}
              finished={String(todos.finished)}
              created_at={todos.created_at}
              finished_at={todos.finished_at}
            />
          );
        })
      )}
    </div>
  );
};
export default GetTodos;
