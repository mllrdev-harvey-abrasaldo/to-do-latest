<template>
  <input v-model="taskInput">
  <button @click="addTask">Add Task</button>
  <table>
    <tbody>
      <div v-for="task in tasks" :key="task.id">
        <td><span><input type="checkbox" v-model="task.isDone"></span></td>
        <td><span>
          <div v-if="!task.isEditing">
            {{task.text}}
            <button class="buttons" @click="toggleEdit(task)">Edit Task</button>
          </div>
          <div v-else>
            <input v-model="task.text" />
            <button @click="toggleEdit(task)">done</button>
          </div>
        </span></td>
      
        <td><span><button @click="remove(task.id)">Delete Task</button></span></td>
      </div>
    </tbody>
    
  </table>
</template>
  
<script setup lang="ts">
import useTask from "../composables/use-task"

const {
  taskInput,
  tasks,
  addTask,
  toggleEdit,
  remove,
} = useTask();

</script>

<style>

button {
  padding: 10px;
  margin: 5px;
  background: green;
  border-radius: 5px;
  color: white;
}

button:hover {
  background-color: lightgreen;
}

button:active {
  transform: scale(0.90);
}
</style>