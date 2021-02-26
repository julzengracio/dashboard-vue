<template>
  <button
    class="d-flex justify-content-between"
    type="button"
    data-bs-toggle="collapse"
    :data-bs-target="'#' + target"
    aria-expanded="false"
    aria-controls="navDropdown"
  >
    <div>
      <i class="bi" :class="icon"></i>
      {{ name }}
    </div>
    <i class="bi bi-caret-down-fill"></i>
  </button>
</template>

<script>
export default {
  name: "Sidebar-Dropdown",
  props: ["target", "name", "icon"]
};
</script>

<style scoped>
button:focus {
  outline: none;
}
button {
  text-decoration: none;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: block;
  outline: none;
  padding: 0;
  font-family: inherit;
  padding-left: 15px;
}
i {
  margin-right: 10px;
}
</style>
