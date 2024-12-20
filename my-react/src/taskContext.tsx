import React, { createContext, ReactNode, useState } from "react";

type Task = {
  taskName: string;
};

type TaskContextValues = {
  taskList: Task[];
  addTask: (taskName: string) => void;
  removeTask: (taskName: string) => void;
};

type TaskContextProviderProps = {
  children: ReactNode;
};

const TaskContext = createContext<TaskContextValues>({
  taskList: [],
  addTask: () => {},
  removeTask: () => {},
});

export const TaskContextProvider = (props: TaskContextProviderProps) => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    setTaskList((prevTasks) => [...prevTasks, { taskName }]);
  };

  const removeTask = (taskName: string) => {
    setTaskList((prevTasks) =>
      prevTasks.filter((task) => task.taskName !== taskName)
    );
  };

  return (
    <TaskContext.Provider value={{ taskList, addTask, removeTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
