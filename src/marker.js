const mapboxgl = require('mapbox-gl');

const getMarker = (type, coordinates) => {
    
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    if (type === "activity"){
        markerDomEl.style.backgroundImage = "url('./marker.png')";
    } 
    
    else if (type === "restaurant") {
        markerDomEl.style.backgroundImage = "url('./restaurantmarker.png')";
    } 
    
    else if (type === "hotel") {
        markerDomEl.style.backgroundImage = "url('./hotelmarker.png')";
    }
    else{
        markerDomEl.style.backgroundImage = "url('./marker.png')";
    }
    const newMarker = new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);

    return newMarker
}



module.exports = getMarker