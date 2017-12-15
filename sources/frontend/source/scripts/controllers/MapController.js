class MapController{

    constructor(){

    }
    initMap(){
        let _mapContainer = document.getElementById("map");
        let _map = new google.maps.Map(_mapContainer, {
            center: {lat: -33.8688, lng: 151.2195},
            zoom: 13
        });

        let _input = document.getElementById("txtAddress");
        let _autocomplete = new google.maps.places.Autocomplete(_input);

        _autocomplete.addListener('place_changed', ()=>{
            _autocomplete.bindTo('bounds', _mapContainer);
            let _place = _autocomplete.getPlace();

          if (_place.geometry.viewport) {
            _map.fitBounds(_place.geometry.viewport);
          } else {
            _map.setCenter(_place.geometry.location);
            _map.setZoom(17);          
            }
        })
        
        let _marker = new google.maps.Marker({
            map: _map,
            anchorPoint: new google.maps.Point(0, -29)
        });
        
        _marker.setIcon(/** @type {google.maps.Icon} */({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
          }));
        
    }
}
export default MapController;