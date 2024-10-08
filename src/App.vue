<template>
<div class="dass_board">
     <div class="header-page">
        <h4>HEADER</h4>
    </div>
    <div class="container">
    <aside class="sidebar">
      <nav>
        <ul>
          <li><router-link exact-active-class="active" to="/admin" >Dashboard</router-link></li>
          <li><router-link active-class="active" to="/admin/manager-user" > Manager User</router-link></li>
          <li><router-link active-class="active" to="/admin/manager-product" > Manager Product</router-link></li>
        </ul>
      </nav>
    </aside> 
    <div class="content">
        
        <router-view></router-view>
    </div>
  </div>

</div>
</template>

<style scoped>
.dass_board{
    margin: 0;
}
.header-page{
    height: 50px;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
   
}
.active {
    background-color: #666; /* Active background color */
    color: white;
    font-weight: bold;
}
.container {
  display: flex;
  min-height: 90vh;
}

.sidebar {
  width: 200px;
  background-color: #333;
  padding: 20px;
  color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  border-right: 1px solid #444;
}

.sidebar nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar nav ul li {
  margin-bottom: 10px;
}

.sidebar nav ul li a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px;
  background-color: #444;
  border-radius: 4px;
}

.sidebar nav ul li a:hover {
  background-color: #555;
}

.content {
  flex-grow: 1;
  padding: 20px;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    position: relative;
  }
  .content {
    padding: 10px;
  }
}
</style>
