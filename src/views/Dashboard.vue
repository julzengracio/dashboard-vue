<template>
  <div class="home">
    <header>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>
    </header>
    <main class="mt-5">
      <div class="row">
        <div class="col-12 col-lg">
          <div class="card bg-primary bg-gradient text-white">
            <div class="card-body">
              <h2>{{ rng }}</h2>
              <p>Group 1</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg">
          <div class="card bg-warning bg-gradient text-white">
            <div class="card-body">
              <h2>{{ rng }}</h2>
              <p>Group 2</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg">
          <div class="card bg-info bg-gradient text-white">
            <div class="card-body">
              <h2>{{ rng }}</h2>
              <p>Group 3</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg">
          <div class="card bg-success bg-gradient text-white">
            <div class="card-body">
              <h2>{{ rng }}</h2>
              <p>Group 4</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  computed: {
    rng: function() {
      return Math.floor(Math.random() * 5000) + 1; 
    }
  }
};
</script>
