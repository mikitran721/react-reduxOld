import React from "react";

const TodoForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Vui long nhap todo..." />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoForm;
