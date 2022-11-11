<template>
    <div>
      <header>To Do List</header>
        <input type="text" v-model="categoryInput">
        <button @click="createCategory">Create Category</button>
        <h2 v-for="category in categories" :key="category">
          {{category}}
          <TaskList></TaskList>
        </h2>
    </div>
  </template>
  
  <script setup lang="ts">
  import useCategory from "../composables/use-category"
  import TaskList from "@/components/task-list.vue";

  const {categories, categoryInput, createCategory} = useCategory()

  </script>
  
<style>
</style>