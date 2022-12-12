import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-date-picker";

const AddTodo = () => {
  const history = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [finished, setFinished] = useState(false);
  const [created_at, setCreated_at] = useState(new Date());
  const [finished_at, setFinished_at] = useState(new Date());
  // const [updated_at, setUpdated_at] = useState(new Date());

  const changeFinished = () => {
    setFinished(!finished);
  };

  const addTodo = (event) => {
    const formdata = {
      title: title,
      description: description,
      finished: finished,
      created_at: created_at,
      finished_at: finished_at,
      //updated_at: updated_at,
    };
    axios.post("http://localhost:8000/api/todo", formdata);

    history("/todo");
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/todo").then((res) => {
      setTitle(res.data.todo.title);
      setDescription(res.data.todo.description);
      setFinished(res.data.todo.finished);
      setCreated_at(res.data.todo.created_at);
      setFinished_at(res.data.todo.finished_at);
    });
  }, []);

  return (
    <div class="form">
      <div class="title">Add Todo</div>
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

      <h4>Todo finished ? </h4>
      <label class="toggle-switch">
        <input type="checkbox" checked={finished} onChange={changeFinished} />
        <span class="switch" />
      </label>
      <div class="input-container ic2">
        <DatePicker
          selected={created_at}
          onChange={(created_at) => setCreated_at(created_at)}
        />
        <div class="cut"></div>
        <label for="created_at">Created at</label>
      </div>
      <div class="input-container ic2">
        <DatePicker
          selected={finished_at}
          onChange={(finished_at) => setFinished_at(finished_at)}
        />
        <div class="cut"></div>
        <label for="finished_at">finished at</label>
      </div>

      <br />
      <button
        type="text"
        class="submit"
        onClick={addTodo}
        data-testid="AddTodo"
      >
        Add Todo
      </button>
      <button type="text" class="submit" onClick={() => history("/todo")}>
        BACK
      </button>
    </div>
  );
};

export default AddTodo;
