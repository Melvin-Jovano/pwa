import { useMapEvents } from 'react-leaflet';

function LocationFinder() {
    let markerExist = false;
    let marker;

    const map = useMapEvents({
        click(e) {
            if(markerExist) {
                marker.setLatLng(e.latlng);
                return;
            }

            markerExist = true;
            marker = L.marker(e.latlng);
            map.addLayer(marker);
        },
    });
    return null;
};

export default LocationFinder;