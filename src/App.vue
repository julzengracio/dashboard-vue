<template>
  <div id="app">
    <Sidebar :toggled="toggled" @toggle="toggleSidebar" />
    <div id="main" :class="{ toggled: toggled }">
      <header class="sticky-top">
        <nav class="navbar navbar-expand navbar-light bg-light">
          <div class="container-fluid">
            <Toggler :toggled="toggled" @toggle="toggleSidebar" />
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Dashboard</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Users</router-link>
                </li>
              </ul>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="bi bi-bell"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="bi bi-gear"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><i class="bi bi-person-circle"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main class="container mt-3 px-4">
        <router-view />
      </main>
      <footer class="container-fluid border-top mt-5">
        <div class="py-2">
          Julz Engracio &copy; 2021
        </div>
      </footer>
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
      toggled: true,
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

body {
  margin: 0;
  background-color: #f2f2f2 !important;
}

#app {
  font-family: "Maven Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main {
  transition: margin-left 0.5s;
}

.navbar {
  border-bottom: 1px solid #cccccc;
}

@media only screen and (min-width: 992px) {
  .toggled {
    margin-left: 250px;
  }
}
</style>
