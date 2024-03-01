import React, { useState } from "react";
import "./Header.css";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import axiosBaseUrl from "../../axios";
import { fetchUsers } from "../../redux/slices/user";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const createNewUser = async () => {
    try {
      await axiosBaseUrl.post(`/api/users/createUser`, newUser);
      dispatch(fetchUsers());
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <header>
        <div className="header__logo">User List</div>
        <div className="header__btn">
          <Button
            content={"Создать пользователя"}
            method={() => setIsModalOpen(true)}
          />

          <Button content={"Обновить"} method={() => dispatch(fetchUsers())} />
        </div>
      </header>

      {isModalOpen && (
        <Modal
          method={createNewUser}
          userData={newUser}
          setUserData={setNewUser}
          content={"Create"}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
