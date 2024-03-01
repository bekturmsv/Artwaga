import React from "react";
import "./Modal.css";
const Modal = ({ handleSaveClick, setIsModalOpen, userData, setUserData }) => {
  return (
    <div className="modal">
      <article className="modal-container">
        <header className="modal-container-header">
          <h1 className="modal-container-title">Update user</h1>
          <button onClick={() => setIsModalOpen(false)} className="icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
              />
            </svg>
          </button>
        </header>
        <section className="modal-container-body rtf">
          <label htmlFor="updateName">Name:</label>
          <input
            id="updateName"
            className="user_update_inp"
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <label htmlFor="updateEmail">Email:</label>

          <input
            id="updateEmail"
            className="user_update_inp"
            type="text"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <label htmlFor="updateNumber">Phone:</label>

          <input
            id="updateNumber"
            type="text"
            className="user_update_inp"
            value={userData.phoneNumber}
            onChange={(e) =>
              setUserData({ ...userData, phoneNumber: e.target.value })
            }
          />
        </section>
        <footer className="modal-container-footer">
          <button onClick={handleSaveClick} className="button is-primary">
            Update
          </button>
        </footer>
      </article>
    </div>
  );
};

export default Modal;
