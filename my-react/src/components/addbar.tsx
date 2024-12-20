import React, { useContext } from "react";
import TaskContext from "../taskContext.tsx";

const Addbar = () => {
  const { taskList, removeTask } = useContext(TaskContext);

  return (
    <>
      {taskList.map((task, index) => (
        <div className="addbar" key={index}>
          <h5>{task.taskName}</h5>
          <img
            src="/assets/remove.png"
            alt="Remove"
            onClick={() => removeTask(task.taskName)}
          />
        </div>
      ))}
    </>
  );
};

export default Addbar;
