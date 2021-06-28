<template>
  <main class="mt-5">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">Main Colors</div>
          <div class="card-body row">
            <div class="col-2 p-4" v-for="item in colors" :key="item.name">
              <div class="card">
                <div class="card-top" :class="item.class"></div>
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p>Hex: {{ item.hex }}</p>
                  <p>RGB: {{ item.rgb }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <div class="card">
          <div class="card-header">Gradient Colors</div>
          <div class="card-body row">
            <div class="col-2 p-4" v-for="item in colors" :key="item.name">
              <div class="card">
                <div class="card-top bg-gradient" :class="item.class"></div>
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p>Hex: {{ item.hex }}</p>
                  <p>RGB: {{ item.rgb }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Colors",
  data: function () {
    return {
      colors: [
        {
          name: "Primary",
          hex: "#0d6efd",
          rgb: "rgb(13, 110, 253)",
          class: "bg-primary",
        },
        {
          name: "Secondary",
          hex: "#6c757d",
          rgb: "rgb(108, 117, 125)",
          class: "bg-secondary",
        },
        {
          name: "Success",
          hex: "#198754",
          rgb: "rgb(25, 135, 84)",
          class: "bg-success",
        },
        {
          name: "Danger",
          hex: "#dc3545",
          rgb: "rgb(220, 53, 69)",
          class: "bg-danger",
        },
        {
          name: "Warning",
          hex: "#ffc107",
          rgb: "rgb(255, 193, 7)",
          class: "bg-warning",
        },
        {
          name: "Info",
          hex: "#0dcaf0",
          rgb: "rgb(13, 202, 240)",
          class: "bg-info",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card p {
  margin-bottom: 0;
}
.card-top {
  min-height: 150px;
}
</style>
