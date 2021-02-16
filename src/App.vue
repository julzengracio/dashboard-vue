<template>
  <div id="app">
    <Sidebar :toggled="toggled" />
    <div id="main" :class="{ toggled: toggled }">
      <ul class="nav bg-light">
        <li class="nav-item">
          <Toggler @toggle="toggleSidebar" />
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
      <div class="container-fluid mt-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./components/sidebar/Sidebar";
import hamburgerButton from "./components/buttons/HamburgerButton";

export default {
  name: "App",
  data: function() {
    return {
      toggled: false,
    };
  },
  components: {
    Sidebar: sidebar,
    Toggler: hamburgerButton,
  },
  methods: {
    toggleSidebar: function() {
      this.toggled = !this.toggled ? true : false;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap"); /* Google Font */
@import "~bootstrap/dist/css/bootstrap.min.css"; /* Bootstrap */

body {
  margin: 0;
  background-color: #f2f2f2;
}

#app {
  font-family: "Maven Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main {
  transition: margin-left 0.5s;
}

@media only screen and (min-width: 768px) {
  .toggled {
    margin-left: 250px;
  }
}
</style>
