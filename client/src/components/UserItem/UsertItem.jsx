import React, { useState } from "react";
import axiosBaseUrl from "../../axios";
import "./UserItem.css";
import Modal from "../Modal/Modal";
import { Button } from "../Button/Button";

const UsertItem = ({ name, email, phoneNumber, id, updateUsers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const handleUpdateClick = async (id) => {
    try {
      const { data } = await axiosBaseUrl.get(`api/users/${id}`);
      setUserData(data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axiosBaseUrl.delete(`api/users/${id}`);
      updateUsers();
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleSaveClick = async () => {
    // Здесь вы можете отправить данные на сервер для обновления
    try {
      await axiosBaseUrl.patch(`api/users/${id}`, userData);
      updateUsers();
    } catch (error) {
      console.log(error);
      setError(true);
    }
    // После успешного обновления данных закрываем модальное окно
  };
  return (
    <div className="user_card">
      <div className="user_info">
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone number: {phoneNumber}</p>
      </div>

      <div className="delete_update_btns">
        <Button content={"Update"} method={handleUpdateClick} id={id} />
        <Button content={"Delete"} method={handleDeleteClick} id={id} />
      </div>

      {isModalOpen && (
        <Modal
          method={handleSaveClick}
          userData={userData}
          setUserData={setUserData}
          content={"Update"}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UsertItem;
