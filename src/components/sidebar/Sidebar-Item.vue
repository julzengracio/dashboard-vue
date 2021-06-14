<template>
  <router-link :to="path" class="nav-link">
    <span v-if="icon != undefined">
      <i class="bi" :class="icon"></i>
    </span>
    <span v-else class="ms-3"> - </span>
    {{ name }}
  </router-link>
</template>

<script>
export default {
  name: "Sidebar-Item",
  props: ["path", "icon", "name"],
};
</script>

<style scoped>
* {
  font-size: 1em;
}
a {
  padding: 5px 0 5px 15px;
  text-decoration: none;
  color: #fff;
}
a:hover {
  background-color: #808080;
  -webkit-transition: 0.3s linear;
  -ms-transition: 0.3s linear;
  transition: 0.3s linear;
  padding-left: 30px;
  border-radius: 3px;
  text-decoration: none;
  color: #fff;
}
span {
  margin-right: 10px;
}
</style>
