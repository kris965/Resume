var mymap = L.map('map').setView([40.785091, -73.968285], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia3Jpczk2NSIsImEiOiJjazllY296OTYwMHF3M25yemxyZ2Zudm94In0.dB8AiAaqTkDrqXpmL7e-Tw'
}).addTo(mymap);

var marker = L.marker([40.785091, -73.968285]).addTo(mymap);