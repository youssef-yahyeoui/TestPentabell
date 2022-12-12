import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const GetOneTodo = () => {
  const [oneTodo, setOneTodo] = useState([]);
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    getOneTodo();
  }, []);

  const getOneTodo = async () => {
    const response = await axios.get(`/api/todo/${id}`);
    setOneTodo(response.data);
  };
  return (
    <section>
      <div className="App">
        <h1 key={oneTodo._id}>Details of Todo : {oneTodo.title} </h1>
        <br />
        <ul className="check-list">
          <li>Title : {oneTodo.Title}</li>
          <br />
          <li>Description : {oneTodo.description}</li>
          <br />
          <li>created_at : {oneTodo.created_at}</li>
          <br />
          <li>finished_at : {oneTodo.finished_at}</li>
          <br />
          <li>Finished : {String(oneTodo.Finished)}</li>
          <br />
        </ul>
        <button onClick={() => history("/todo")}> BACK </button>
      </div>
    </section>
  );
};
export default GetOneTodo;
