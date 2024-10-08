<script setup>
const props=defineProps(["users","openEditModal","openDeleteModal"]);
console.log(props.users);

</script>
<template>
     <table class="user-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Name</th>
          <th>Gender</th>
          <th>DateOfBirth</th>
          <th>Email</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.dateofbirth }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="edit-btn" @click="openEditModal(user)">Edit</button>
            <button class="delete-btn" @click="openDeleteModal(user)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
</template>
<style scoped>
.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th, .user-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.user-table th {
  background-color: #f4f4f4;
}

.edit-btn, .delete-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-btn {
  background-color: #ffc107;
  color: white;
  margin-right: 5px;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
}
</style>