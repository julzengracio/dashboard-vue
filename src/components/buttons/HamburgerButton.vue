<template>
  <button
    type="button"
    class="sidebar-toggler btn btn-sm"
    :class="{ change: toggled }"
    @click="toggle"
  >
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
      toogle: this.toggled
    };
  },
  props: {
    toggled: Boolean
  },
  methods: {
    toggle: function() {
      this.$emit("toggle");
    }
  }
};
</script>

<style scoped>
.sidebar-toggler .bar1,
.bar2,
.bar3 {
  width: 20px;
  height: 2px;
  background-color: black;
  margin: 5px 0;
  transition: 0.4s;
}
.sidebar-toggler {
  cursor: pointer;
}
.sidebar-toggler:focus {
  outline: none;
  box-shadow: none;
}
.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-5px, -5px);
  transform: rotate(-45deg) translate(-5px, 5px);
}
.change .bar2 {
  opacity: 0;
}
.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-5px, -5px);
  transform: rotate(45deg) translate(-5px, -5px);
}
</style>
