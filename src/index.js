const mapboxgl = require('mapbox-gl');
const marker = require('./marker')

mapboxgl.accessToken = "pk.eyJ1IjoidGF0aWFuZHNhcmFoIiwiYSI6ImNqcjg5NmZyYzA0YjA0NHJ2b2h5OXVqanYifQ.JuGLljLjvDK9bJrSlFDryg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

marker('hotel', [-74.009, 40.705]).addTo(map)
marker('restaurant', [-87.6354, 41.8885]).addTo(map)
marker('activity', [-74.009, 40.705]).addTo(map)
marker('bleh', [-74.009, 40.705]).addTo(map)