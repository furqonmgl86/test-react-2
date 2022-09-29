import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import FormInput from "./Components/FormInput";
import { useState } from "react";
import DeleteModal from "./Components/DeleteModal";
import UpdateModal from "./Components/UpdateModal";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Membaca Buku",
    },
    {
      id: 2,
      title: "Jalan-jalan",
    },
    {
      id: 3,
      title: "Main Bola",
    },
  ]);
  const [isDelete, setIsDelete] = useState(false);
  const [dataDelete, setDataDelete] = useState({
    id: "",
    title: "",
  });

  // OPEN-CLOSE DELETE MODAL
  const openDeleteModal = (id, data) => {
    setIsDelete(true);
    setDataDelete({
      id: id,
      title: data,
    });
  };
  const closeDeleteModal = () => {
    setIsDelete(false);
  };
  // AKHIR OPEN-CLOSE DELETE MODAL

  // FUNCTION HAPUS DATA
  const deleteTask = (id) => {
    const filterTodos = todos.filter((item) => item.id !== id);
    setTodos(filterTodos);
    setIsDelete(false);
  };
  // AKHIR FUNCTION HAPUS DATA

  // MENAMBAHKAN DATA
  const addTask = (data) => {
    const id = todos.length;
    const newData = {
      id: id + 1,
      title: data,
    };
    console.log(newData);
    setTodos([...todos, newData]);
  };
  // AKHIR MENAMBAHKAN DATA

  // AWAL FITUR UPDATE
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateData, setUpdateData] = useState({
    id: "",
    title: "",
  });
  const openModalUpdate = (id, data) => {
    setIsUpdate(true);
    setUpdateData({
      id,
      title: data,
    });
  };
  const closeModalUpdate = () => {
    setIsUpdate(false);
  };

  const setUpdate = (e) => {
    setUpdateData({
      ...updateData,
      title: e.target.value,
    });
  };

  const update = () => {
    const { id, title } = updateData;
    const newData = { id, title };
    const newTodos = todos;

    newTodos.splice(id - 1, 1, newData);
    setTodos(newTodos);
    setIsUpdate(false);
    setUpdateData({
      id: "",
      title: "",
    });
  };

  // AKHIR  FITUR UPDATE

  return (
    <div className="app">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Task List</h3>
      </div>
      <div className="list">
        {todos.map((item) => (
          <TodoItem key={item.id} todo={item} openDelete={openDeleteModal} openUpdate={openModalUpdate} />
        ))}
      </div>
      <div className="input-form">
        <FormInput add={addTask} />
      </div>
      <UpdateModal update={isUpdate} closeUpdate={closeModalUpdate} change={setUpdate} data={updateData} updateData={update} />
      <DeleteModal hapus={isDelete} closeDelete={closeDeleteModal} dataDelete={dataDelete} del={deleteTask} />
    </div>
  );
}

export default App;
