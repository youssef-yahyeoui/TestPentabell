import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./addAndUpdate.css";

const UpdateTodo = () => {
  const history = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [finished, setFinished] = useState(false);
  const [created_at, setCreated_at] = useState("");
  const [finished_at, setFinished_at] = useState("");
  const [updated_at, setUpdated_at] = useState(new Date());

  const changeFinished = () => {
    setFinished(!finished);
  };

  const updateTodo = (event) => {
    const formdata = {
      title: title,
      description: description,
      finished: finished,
      created_at: created_at,
      finished_at: finished_at,
      updated_at: updated_at,
    };
    axios.put(`http://localhost:8000/api/todo/${id}`, formdata);

    history("/todo");
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/todo/${id}`).then((res) => {
      setTitle(res.data.todo.title);
      setDescription(res.data.todo.description);
      setFinished(res.data.todo.finished);
      setCreated_at(res.data.todo.created_at);
      setFinished_at(res.data.todo.finished_at);
      setUpdated_at(new Date());
    });
  }, []);

  return (
    <div className="crudTodo">
      <div class="form" encType="multipart/form-data">
        <div class="title">Update Todo</div>
        <div class="input-container ic1">
          <input
            id="title"
            class="input"
            type="text"
            placeholder=" "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            data-test-id="title"
          />
          <div class="cut"></div>
          <label for="title" class="placeholder">
            Title
          </label>
        </div>

        <div class="input-container ic2">
          <input
            id="description"
            class="input"
            type="text"
            placeholder=" "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div class="cut"></div>
          <label for="description" class="placeholder">
            Description
          </label>
        </div>
        <br />

        <h4>Todo finished ? </h4>
        <label class="toggle-switch">
          <input type="checkbox" checked={finished} onChange={changeFinished} />
          <span class="switch" />
        </label>
        <br />
        <button type="text" class="submit" onClick={updateTodo}>
          Update Todo
        </button>
        <button type="text" class="submit" onClick={() => history("/todo")}>
          BACK
        </button>
      </div>
    </div>
  );
};

export default UpdateTodo;
