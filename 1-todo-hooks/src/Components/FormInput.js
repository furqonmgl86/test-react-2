import React, { useState } from "react";
import Button from "./Button";
import "../Styles/FormInput.css";

const FormInput = ({ add }) => {
  const [text, setText] = useState({
    text: "",
  });

  const change = (eTarget) => {
    setText({
      text: eTarget.target.value,
    });
  };

  const submit = (f) => {
    f.preventDefault();
    if (text.text !== "") {
      add(text.text);
    }
    setText({
      text: "",
    });
  };
  return (
    <form style={inputForm} onSubmit={submit}>
      <input type="text" style={input} placeholder="add your task" onChange={change} value={text.text} />
      <Button text="add" variant="primary" action={submit} />
    </form>
  );
};

export default FormInput;

const inputForm = {
  background: "#fff",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};

const input = {
  width: "70%",
  border: "none",
};
