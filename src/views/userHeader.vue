<script setup>
import {defineProps} from 'vue'
const props=defineProps(['openAddModal']);
</script>
<template>
    <div>
        <header class="header">
        <h1>Manager User</h1>
        <button class="add-new-user" @click="openAddModal">Add New User</button>
        </header>
    </div>
</template>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 24px;
  margin: 0;
}

.add-new-user {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-new-user:hover {
  background-color: #0056b3;
}
</style>