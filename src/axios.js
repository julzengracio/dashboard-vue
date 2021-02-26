import axios from "axios";

export default {
  getRandomUser() {
    return axios.get("https://randomuser.me/api/");
  },
  getRandomUsers(count) {
    return axios.get("https://randomuser.me/api/?results=" + count);
  },
};
