<template>
  <div>
    <user-header :openAddModal="openAddModal"></user-header>
    <div class="search_container">
        <input type="text" class="search_input" placeholder="search user" v-model="searchQuery">
    </div>
    <user-table 
      :users="filteredUsers" 
      :openEditModal="openEditModal"
      :openDeleteModal="openModalDelete"
    ></user-table>
    <user-form 
      :showModal="showModal" 
      :initialUser="initialUser"
      :initialError="initialError"
      :handleSubmit="handleSubmit"
      :handleClose="handleClose"
      :checkStatusForm="checkStatusForm"
    ></user-form>
    <delete-modal 
      :handleDelete="handleDelete"
      :showDeleteModal="deleteModal1"
      :closeModalDelete="closeModalDelete"
    ></delete-modal>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import userForm from "./userForm.vue";
import userHeader from './userHeader.vue';
import userTable from './userTable.vue';
import deleteModal from './deleteModal.vue'

const showModal = ref(false);
const users = ref([]);
const searchQuery = ref('');
const deleteModal1 = ref(false);
const checkStatusForm = ref("add");
const deleteItem = ref({});

const initialUser = reactive({
  id: 0,
  name: "",
  gender: "",
  dateofbirth: "",
  email: "",
});

const initialError = reactive({
  name: "",
  email: "",
  dateofbirth: "",
});

onMounted(() => {
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  users.value = storedUsers;
});

const resetUser = () => {
  initialUser.id = 0;
  initialUser.name = "";
  initialUser.gender = "";
  initialUser.email = "";
  initialUser.dateofbirth = "";
};

const resetError = () => {
  initialError.name = "";
  initialError.email = "";
  initialError.dateofbirth = "";
};

const openAddModal = () => {
  showModal.value = true;
  resetUser();
  resetError();
  checkStatusForm.value = "add";
};

const openEditModal = (user) => {
  showModal.value = true;
  checkStatusForm.value = "edit";
  Object.assign(initialUser, user);
  resetError();
};

const handleClose = () => {
  showModal.value = false;
  resetUser();
  resetError();
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateDate = (selectedDate) => {
  const currentDate = new Date();
  const chosenDate = new Date(selectedDate);
  return chosenDate <= currentDate;
};

const checkSimilarEmail = (email) => {
  return !users.value.some(item => item.email === email);
};

const validateUser = () => {
  let isValid = true;

  if (!initialUser.name) {
    initialError.name = "Name is required";
    isValid = false;
  }

  if (!initialUser.email) {
    initialError.email = "Email is required";
    isValid = false;
  } else if (!validateEmail(initialUser.email)) {
    initialError.email = "Invalid email format";
    isValid = false;
  } else if (checkStatusForm.value === "add" && !checkSimilarEmail(initialUser.email)) {
    initialError.email = "Email already exists";
    isValid = false;
  }

  if (!initialUser.dateofbirth) {
    initialError.dateofbirth = "Date of birth is required";
    isValid = false;
  } else if (!validateDate(initialUser.dateofbirth)) {
    initialError.dateofbirth = "Date of birth cannot be in the future";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = () => {
  if (validateUser()) {
    if (checkStatusForm.value === "add") {
      initialUser.id = Math.ceil(Math.random() * 100001);
      users.value.push({ ...initialUser });
    } else if (checkStatusForm.value === "edit") {
      const index = users.value.findIndex(user => user.id === initialUser.id);
      users.value.splice(index, 1, { ...initialUser });
      checkStatusForm.value = "add";
    }
    localStorage.setItem("users", JSON.stringify(users.value));
    handleClose();
  }
};

const handleDelete = () => {
  const index = users.value.findIndex(item => item.id === deleteItem.value.id);
  users.value.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users.value));
  deleteModal1.value = false;
};

const openModalDelete = (user) => {
  deleteItem.value = user;
  deleteModal1.value = true;
};

const closeModalDelete = () => {
  deleteModal1.value = false;
};

const filteredUsers = computed(() => {
  if (searchQuery.value) {
    return users.value.filter(item => 
      item.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return users.value;
});
</script>

<style scoped>
.search_container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
.search_input {
  height: 30px;
  width: 250px;
  border: 1px solid rgba(0, 0, 0, 0.199);
  border-radius: 5px;
  padding-left: 10px;
}
</style>
