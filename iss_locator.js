// fetching location of ISS using issLocationApi
const issLocationApi = `https://api.wheretheiss.at/v1/satellites/25544`;
fetch(issLocationApi)
.then(response => {
    return response.json();
}).then(data => {
    const {longitude, latitude} = data;
    // Write the long, lat in HTML
    document.getElementsByTagName('h1')[1].textContent = `Latitude: ${Number(latitude).toFixed(3)}, Longitude: ${Number(longitude).toFixed(3)}`;
    // Draw the map using leaflet.js
    var mymap = L.map('mapid').setView([40, 20], 1.5);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWhuZDE1NiIsImEiOiJja214bmdoamswb3VtMnFwZmJ3M3EyeWw0In0.bFXlrEcvxbh4V-EhBvdEsg'
    }).addTo(mymap);
    // Pinpoint the location on the map
    var marker = L.marker([latitude, longitude]).addTo(mymap);

});




