<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h3>{{checkStatusForm}} user</h3>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            v-model="initialUser.name"
          />
          <div class="error">{{ initialError.name }}</div>
        </div>

        <div class="form-group">
          <label>Gender</label>
          <div class="gender-options">
            <label>
              <input type="radio" value="Male" v-model="initialUser.gender" /> Male
            </label>
            <label>
              <input type="radio" value="Female" v-model="initialUser.gender" /> Female
            </label>
            <label>
              <input type="radio" value="Other" v-model="initialUser.gender" /> Other
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="dob">Date Of Birth</label>
          <input type="date" id="dob" v-model="initialUser.dateofbirth" />
          <span class="error">{{ initialError.dateofbirth }}</span>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="initialUser.email"
            placeholder="Enter email"
          />
          <span class="error">{{ initialError.email }}</span>
        </div>

        <div class="form-actions">
          <button type="button" @click="handleClose">Close</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  showModal: Boolean,
  initialUser: Object,
  initialError: Object,
  handleSubmit:Function,
  handleClose:Function,
  checkStatusForm:String
});
</script>
<style scoped>
.error{
    color: red;
}
.modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.gender-options {
  display: flex;
  gap: 15px;
}

.gender-options label {
  display: flex;
  align-items: center;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.form-actions button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-actions button[type="submit"] {
  background-color: #007bff;
  color: white;
}
.form-actions button[type="button"] {
  background-color: #6c757d;
  color: white;
}
</style>
