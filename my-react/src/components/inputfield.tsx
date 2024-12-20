import React, { useState, useContext } from "react";
import TaskContext from "../taskContext.tsx";

const Inputfield = () => {
  const [task, setTask] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    setTask(e.target.value);
  };

  const handleButtonClick = () => {
    if (task) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="inputfield">
      <input type="text" value={task} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add task</button>
    </div>
  );
};

export default Inputfield;
