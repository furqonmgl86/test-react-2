import React from "react";
import Button from "./Button";
import "../Styles/UpdateModal.css";

const UpdateModal = ({ update, closeUpdate, data, change, updateData }) => {
  if (update) {
    return (
      <div className="modal-container">
        <div className="modal-box">
          <h3>Edit Task</h3>
          <div className="input">
            {/* <input type="text" placeholder={data.title} value={data.title} /> */}
            <input type="text" placeholder={data.title} onChange={change} />
          </div>
          <div className="btn-group">
            <Button text="Oke" variant="primary" action={updateData} />
            <Button text="Batal" variant="warning" action={closeUpdate} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default UpdateModal;
