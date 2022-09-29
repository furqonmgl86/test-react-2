import React from "react";
import Button from "./Button";
import "../Styles/DeleteModal.css";

const DeleteModal = ({ hapus, closeDelete, del, dataDelete }) => {
  const delById = (id) => {
    del(id);
  };
  if (hapus) {
    return (
      <div className="modal-container">
        <div className="modal-box">
          <h3>Apakah Anda Ingin menghapus ini?</h3>
          <h4>{dataDelete.title}</h4>
          <br />
          <div className="btn-group">
            <Button text="Yakin" variant="primary" action={() => delById(dataDelete.id)} />
            <Button text="Tidak" variant="warning" action={closeDelete} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DeleteModal;
