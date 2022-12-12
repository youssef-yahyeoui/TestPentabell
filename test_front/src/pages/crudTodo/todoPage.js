import "./todo.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Todo({
  title,
  description,
  finished,
  created_at,
  finished_at,
  id,
}) {
  const history = useNavigate();

  const deleteTodo = async (event) => {
    event.preventDefault();
    await axios.delete(`/api/todo/${id}`);
    history("/todo");
    window.location.reload(false);
  };

  function renderActions() {
    return (
      <div className="actions">
        <button onClick={() => history(`/updateTodo/${id}`)}>UPDATE</button>
        <button onClick={() => history(`/TodoDetails/${id}`)}>VIEW MORE</button>
        <button onClick={deleteTodo}> DELETE</button>
      </div>
    );
  }

  return (
    <div class="container">
      <table>
        <thead>
          <tr>
            <th scope="col">title</th>
            <th scope="col">Description</th>
            <th scope="col">finished</th>
            <th scope="col">created_at</th>
            <th scope="col">finished_at</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Title">{title}</td>
            <td data-label="Description">{description}</td>
            <td data-label="finished">{finished}</td>
            <td data-label="created_at">{created_at}</td>
            <td data-label="finished_at">{finished_at}</td>
            <td data-label="Actions">{renderActions()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
