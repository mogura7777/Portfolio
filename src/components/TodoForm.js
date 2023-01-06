/** @format */

import React from "react";

const TodoForm = (props) => {
  return (
    <div className="TodoForm">
      <form className="TodoForm__box" onSubmit={props.onSubmit}>
        <input
          className="TodoForm__input"
          type="text"
          placeholder="Add a task..."
          value={props.value}
          onChange={props.onChange}
          maxLength="40"
          ref={props.reference}
          required
        />
        <div className="btn-container">
          <button className="form__btn" type="submit">
            {!props.isEditing ? "＋" : "保存"}
          </button>
          {/* <button className="form__btn" type="button" onFocus={props.onClick}>
            {!props.isEditing ? "クリア" : "Cancel"}
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
