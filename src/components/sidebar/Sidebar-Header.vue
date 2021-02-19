<template>
  <div class="mb-3">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "Sidebar-Header",
  props: ["title"],
};
</script>

<style scoped>
span {
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 15px;
  font-size: 0.9em;
  letter-spacing: 1px;
  opacity: 0.7;
}
</style>
