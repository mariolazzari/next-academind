import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({ text }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = e => {
    setModalIsOpen(false);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={deleteHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
};

export default Todo;
