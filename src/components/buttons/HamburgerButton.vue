<template>
  <button type="button" class="sidebar-toggler btn btn-sm" :class="{ change: toggled }" @click="toggle">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </button>
</template>

<script>
export default {
  name: "HamburgerButton",
  data: function() {
    return {
      toggled: false
    };
  },
  methods: {
    toggle: function() {
      this.$emit("toggle");
      this.toggled = !this.toggled ? true : false;
    }
  }
};
</script>

<style scoped>
.sidebar-toggler .bar1,
.bar2,
.bar3 {
  width: 30px;
  height: 3px;
  background-color: black;
  margin: 6px 0;
  transition: 0.4s;
}
.sidebar-toggler {
  cursor: pointer;
}
.sidebar-toggler:focus{
  outline: none;
  box-shadow: none;
}
.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-6px, 6px);
  transform: rotate(-45deg) translate(-6px, 6px);
}
.change .bar2 {
  opacity: 0;
}
.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-6px, -7px);
  transform: rotate(45deg) translate(-6px, -7px);
}
</style>
