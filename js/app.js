$(document).ready(function() {

function initialize() {
        var mapOptions = {
          center: { lat: -3.070, lng: 37.349},
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      /*var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
      var marker = new google.maps.Marker({
			  position: myLatLng,
			  map: map,
			  icon: iconBase + '<span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>'
		});*/
      google.maps.event.addDomListener(window, 'load', initialize);

});