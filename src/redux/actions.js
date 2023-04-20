import { nanoid } from "nanoid";

export const addTask = text => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = taskId => {
  return { type: "tasks/deleteTask", pyaload: taskId };
};

export const toggleCompleted = taskId => {
  return { type: "tasks/toggleCompleted", payload: taskId };
};

export const setStatusFilter = value => {
  return { type: "filters/setStatusFilter", payload: value };
};
