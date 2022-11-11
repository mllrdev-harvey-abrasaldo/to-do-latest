<template>
  <div>
    <RouterLink to="/home">Home</RouterLink> |
    <RouterLink to="/todo">To do List</RouterLink>
  </div>
  <RouterView/>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

body {
  text-align: left;
}
</style>
