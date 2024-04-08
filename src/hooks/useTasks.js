import { useContext } from "react";
import { TasksContext } from "../contexts/tasks";

export function useTasks() {
  return useContext(TasksContext);
}