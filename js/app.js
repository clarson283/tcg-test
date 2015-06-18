$(document).ready(function() {

function initialize() {
        var mapOptions = {
          center: { lat: -3.070, lng: 37.349},
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);    	
    	var image = {
    		url: 'images/map-icon.png',
    		scaledSize: new google.maps.Size(40, 42),
    		origin: new google.maps.Point(0,0),
    		anchor: new google.maps.Point(0, 32)
    	};
  		var myLatLng = new google.maps.LatLng(-3.070, 37.349);
  		var mapMarker = new google.maps.Marker({
      		position: myLatLng,
      		map: map,
      		icon: image,
  		});
	}

    google.maps.event.addDomListener(window, 'load', initialize);

/*
    var num = 24655;

    $(".hover-stuff button").on("click", function () {
       num++;
       $("#counter #numOne").text(num[0]);
       $("#counter #lastNum").text(num[4]);
    }); 
*/
/*
    $('.carousel').on("mouseenter", function {
        $('.carousel').carousel('pause');
    });
*/



});