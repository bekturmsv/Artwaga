import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/slices/user";
import "./UserList.css";
import UsertItem from "../UserItem/UsertItem";
import axiosBaseUrl from "../../axios";
import FilterForm from "../FilterForm/FilterForm";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const isLoading = users.status === "loading";

  const updateUsers = () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    dispatch(fetchUsers(filters));
  }, [filters]);
  return (
    <div className="user_list">
      <FilterForm filters={filters} setFilters={setFilters} />{" "}
      {users.status === "loading" ? (
        <p style={{ margin: "auto" }}>Loading...</p> // Отображаем "Loading..." во время загрузки
      ) : (
        users.items.map((obj, index) => (
          <UsertItem
            key={index}
            name={obj.name}
            email={obj.email}
            phoneNumber={obj.phoneNumber}
            id={obj._id}
            updateUsers={updateUsers}
          />
        ))
      )}
    </div>
  );
};

export default UserList;
