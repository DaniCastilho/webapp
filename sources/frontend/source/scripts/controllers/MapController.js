class MapController {

    constructor() {

    }

    initMap() {
        let _mapContainer = document.getElementById("map");
        let _map = new google.maps.Map(_mapContainer, {
            center: { lat: -33.8688, lng: 151.2195 },
            zoom: 13
        });

        let _input = document.getElementById("txtAddress");
        let _searchbox = new google.maps.places.SearchBox(_input);

        _map.addListener('bounds_changed', () => {
            _searchbox.setBounds(_map.getBounds());
        });

        let _markers = [];

        _searchbox.addListener('places_changed', () => {
            let _place = _searchbox.getPlaces()[0];

            if (_place.length == 0) {
                return;
            }
            let _bounds = new google.maps.LatLngBounds();
            _markers.forEach((_place) => {
                if (!_place.geometry) {
                    return;
                }
            })
            let _icon = {
                url: _place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };
            _markers.push(new google.maps.Marker({
                map: _map,
                icon: _icon,
                title: _place.name,
                position: _place.geometry.location
            }));

            if (_place.geometry.viewport) {
                _bounds.union(_place.geometry.viewport);
            } else {
                _bounds.extend(_place.geometry.location);
            }
            _map.fitBounds(_bounds);

        })
    }
}
export default MapController;