import React from "react";
import "./Button.css";
export const Button = ({ content, method, id }) => {
  const handleClick = () => {
    if (method && typeof method === "function") {
      if (id !== undefined) {
        method(id);
      } else {
        method();
      }
    }
  };
  return (
    <button
      className="btn_component"
      style={{
        backgroundColor:
          content === "Delete"
            ? "#ab304d" // Цвет для удаления
            : content === "Update"
            ? "#30ab47" // Цвет для обновления
            : "#109bf1", // Дефолтный цвет, если кнопка не update и delete
      }}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};
