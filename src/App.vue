<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li>
            <router-link class="nav-link" :to="{name: 'Home'}" exact>Home</router-link>
          </li>
         <!-- <li>
            <router-link class="nav-link" :to="{name: 'Products'}" exact>Products</router-link>
          </li> -->
          <li>
            <router-link class="nav-link" :to="{name: 'Users'}" exact>Users</router-link>
          </li>
          <li>
            <router-link class="nav-link" :to="{name: 'ProductTypeList'}" exact>Product Type</router-link>
          </li>
          <li><a href="#">Inventory</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: #ee5566;
}
</style>
<style lang="scss" scoped>
nav {
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
  li {
   // justify-content: space-between;
  }
}
</style>
