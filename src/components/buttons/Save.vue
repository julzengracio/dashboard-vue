<template>
  <button
    type="button"
    class="btn btn-primary"
    @click="save"
  >
    <span v-if="!status">Save</span>
    <span v-else-if="status == 1">
      <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      Saving
    </span>
    <span v-else><i class="bi bi-check-lg text-white"></i>&nbsp;Saved</span>
  </button>
</template>

<script>
  export default {
    name: "SaveButton",
    props: {
      status: Number
    },
    methods: {
      save: function() {
        this.$emit("save");
      }
    }
  }
</script>