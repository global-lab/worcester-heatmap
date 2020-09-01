import "./styles.css";
import L from 'leaflet';
import "leaflet-geotiff-2";
// optional renderers
import "leaflet-geotiff-2/dist/leaflet-geotiff-rgb"
import "leaflet-geotiff-2/dist/leaflet-geotiff-plotty"; // requires plotty

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// initialize the map
var map = L.map("map").setView([42.28, -71.8], 13);

// load a tile layer
L.tileLayer("http://tiles.mapc.org/basemap/{z}/{x}/{y}.png", {
  attribution:
    'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
  maxZoom: 17,
  minZoom: 9
}).addTo(map);

L.tileLayer('./Afternoon.jpg').addTo(map);
// L.leafletGeotiff("./AfternoonOriginal.tif", {
//   // renderer: L.LeafletGeotiff.rgb(),
//   band: 0,
// }).addTo(map);