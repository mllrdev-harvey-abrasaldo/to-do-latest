import type ITask from "@/interface/Task";
import { ref } from "vue";

export default function usetask() {
  let id = 0;
  const taskInput = ref("");
  const tasks = ref<ITask[]>([]);

  const addTask = (): void => {
    if (taskInput.value == "") {
      alert("Please Enter Task");
    } else {
      tasks.value.push({
        id: id++,
        text: taskInput.value,
      });
      taskInput.value = "";
    }
  };

  const findIndex = (task: ITask): number =>
    tasks.value.findIndex((item) => item === task);

  const toggleEdit = (task: ITask): void => {
    if (task.text == ""){
      remove(task.id)
    }
    else{
      tasks.value[findIndex(task)].isEditing = !tasks.value[findIndex(task)].isEditing;
    }
  };

  const remove = (task: number): void => {
    tasks.value = tasks.value.filter((item) => item.id !== task);
  };

  return {
    taskInput,
    tasks,
    addTask,
    toggleEdit,
    remove,
  };
}
