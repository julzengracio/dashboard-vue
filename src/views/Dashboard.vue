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
              <h2>{{ getRandomInt() }}</h2>
              <p>Group 1</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg">
          <div class="card bg-warning bg-gradient text-white">
            <div class="card-body">
              <h2>{{ getRandomInt() }}</h2>
              <p>Group 2</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg">
          <div class="card bg-info bg-gradient text-white">
            <div class="card-body">
              <h2>{{ getRandomInt() }}</h2>
              <p>Group 3</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg">
          <div class="card bg-success bg-gradient text-white">
            <div class="card-body">
              <h2>{{ getRandomInt() }}</h2>
              <p>Group 4</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <line-chart
                :chart-data="dataCollection"
                :height="chartHeight"
                :options="chartOptions"
              ></line-chart>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import LineChart from "../components/charts/LineChart.js";

export default {
  name: "Dashboard",
  components: {
    LineChart,
  },
  data: function() {
    return {
      chartHeight: 100,
      chartOptions: {
        title: {
          display: true,
          text: "Vue-Chartjs",
        },
      },
      dataCollection: {},
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * 1000) + 1;
    },
    fillData() {
      this.dataCollection = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Data One",
            pointBackgroundColor: "#f87979",
            pointBorderColor: "#f87979",
            borderColor: "#0dcaf0",
            borderWidth: 2,
            fill: false,
            lineTension: 0.2,
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
          {
            label: "Data Two",
            pointBackgroundColor: "#f87979",
            pointBorderColor: "#f87979",
            borderColor: "#ffc107",
            borderWidth: 2,
            fill: false,
            lineTension: 0.2,
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
            ],
          },
        ],
      };
    }
  }
};
</script>
