import axios from "axios";

export default {
  // Gets all donuts
  getDonuts: function() {
    return axios.get("/api/donuts");
  },
  // Gets the donut with the given id
  getDonut: function(id) {
    return axios.get("/api/donuts/" + id);
  },
  // Deletes the donut with the given id
  deleteDonut: function(id) {
    return axios.delete("/api/donuts/" + id);
  },
  // Attempt to update donut boolean
  updateDonut: function(id) {
    return axios.get("/api/donuts/" + id)
  },
  // Saves a donut to the database
  saveDonut: function(donutData) {
    return axios.post("/api/donuts", donutData);
  }
};
