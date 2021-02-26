<template>
  <li class="my-2">
    <router-link :to="path">
      <i class="bi" :class="icon"></i>
      {{ name }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "Sidebar-Item",
  props: ["path", "icon", "name"]
};
</script>

<style scoped>
* {
  font-size: 1em;
}
li:hover {
  background-color: #808080;
  -webkit-transition: 0.3s linear;
  -ms-transition: 0.3s linear;
  transition: 0.3s linear;
  padding-left: 10px;
  border-radius: 3px;
}
a:hover {
  text-decoration: none;
  color: #fff;
}
a {
  padding: 5px 0 5px 15px;
  text-decoration: none;
  color: #fff;
}
i {
  margin-right: 10px;
}
</style>
