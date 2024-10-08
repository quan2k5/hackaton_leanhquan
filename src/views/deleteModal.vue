<template>
  <div v-if="showDeleteModal" class="modal">
      <div class="modal-content">
        <h2>Xác nhận</h2>
        <p>Bạn có chắc chắn muốn xóa tài khoản này?</p>
        <div class="form-actions">
          <button @click="closeModalDelete" class="cancel-btn">Cancel</button>
          <button class="delete-confirm-btn" @click="handleDelete">Delete</button>
        </div>
      </div>
    </div>
</template>
<script setup>
const props=defineProps(['showDeleteModal','handleDelete','closeModalDelete']);
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
}

.modal h2 {
  margin-bottom: 10px;
  font-size: 24px;
  color: #333;
}

.modal p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #555;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.cancel-btn {
  padding: 8px 16px;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-btn:hover {
  background-color: #ccc;
}

.delete-confirm-btn {
  padding: 8px 16px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-confirm-btn:hover {
  background-color: #c9302c;
}

@media (max-width: 768px) {
  .modal-content {
    width: 90%;
  }
}

</style>
