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
      <div class="row mt-4">
        <div class="col-12 col-lg">
          <div class="card">
            <div class="card-header bg-facebook">
              <i class="bi bi-facebook" style="font-size: 4em"></i>
            </div>
            <div class="card-body text-center">
              <div class="row">
                <div class="col">
                  <div>
                    {{ getRandomInt() }}
                    <p>Friends</p>
                  </div>
                </div>
                <div class="col">
                  <div>
                    {{ getRandomInt() }}
                    <p>Feeds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg">
          <div class="card">
            <div class="card-header bg-twitter">
              <i class="bi bi-twitter" style="font-size: 4em"></i>
            </div>
            <div class="card-body text-center">
              <div class="row">
                <div class="col">
                  <div>
                    {{ getRandomInt() }}
                    <p>Followers</p>
                  </div>
                </div>
                <div class="col">
                  <div>
                    {{ getRandomInt() }}
                    <p>Tweets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg">
          <div class="card">
            <div class="card-header bg-linkedin">
              <i class="bi bi-linkedin" style="font-size: 4em"></i>
            </div>
            <div class="card-body text-center">
              <div class="row">
                <div class="col">
                  <div>
                    {{ getRandomInt() }}
                    <p>Connections</p>
                  </div>
                </div>
                <div class="col">
                  <div>
                    {{ getRandomInt() }}
                    <p>Feeds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12" id="wrapper">
          <v-app>
            <v-data-table
              :headers="randomUsersData.headers"
              :items="randomUsersData.users"
              item-key="user"
              :items-per-page="5"
              :loading="loading"
              loading-text="Fetching Data... Please wait"
              class="elevation-1"
            >
              <template v-slot:[`item.picture`]="{ item }">
                <v-img
                  :src="item.picture.thumbnail"
                  max-height="30"
                  max-width="30"
                  class="rounded-circle"
                >
                </v-img>
              </template>
            </v-data-table>
          </v-app>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import LineChart from "../components/charts/LineChart.js";
import axios from "../axios.js";

export default {
  name: "Dashboard",
  components: {
    LineChart,
  },
  data: function () {
    return {
      loading: false,
      chartHeight: 100,
      chartOptions: {
        title: {
          display: true,
          text: "Vue-Chartjs",
          responsive: true,
          maintainAspectRatio: false,
        },
      },
      dataCollection: {},
      randomUsersData: {
        headers: [
          {
            text: "",
            align: "start",
            sortable: false,
            value: "picture",
          },
          {
            text: "First Name",
            value: "name.first",
          },
          {
            text: "Last Name",
            value: "name.last",
          },
          {
            text: "Email",
            value: "email",
          },
          {
            text: "Country",
            value: "location.country",
          },
        ],
        users: [],
      },
    };
  },
  async mounted() {
    this.fillData();
    axios
      .getRandomUsers(15)
      .then((response) => (this.randomUsersData.users = response.data.results))
      .catch((error) => console.log(error))
      .then(() => (this.loading = false));
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
    },
  },
};
</script>

<style scoped>
.bg-facebook {
  background-color: #3b5998 !important;
  color: #fff;
  text-align: center;
}
.bg-twitter {
  background-color: #00aced !important;
  color: #fff;
  text-align: center;
}
.bg-linkedin {
  background-color: #4875b4 !important;
  color: #fff;
  text-align: center;
}
#wrapper >>> .v-application--wrap {
  min-height: 0 !important;
}
</style>
