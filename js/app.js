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

  $('.carousel').on("mouseenter", function () {
      $('.carousel').carousel('pause');
  });


  var possibilities = ['pizza', 'mozzarella sticks', 'pad thai', 'cookies', 'burritos', 'chocolate cake', 'ice cream', 'tacos', 'salad', 'filet mignon'];
  var rand = possibilities[Math.floor(Math.random() * possibilities.length)];

  $("#find-food button").on("click", function () {
    var ingOne = $("#ingr-one").val();
    var ingTwo = $("#ingr-two").val();
      if (ingOne == "" && ingTwo == "") {
        alert("You gotta put some ingredients, man...")
      } else {
        $("#foodOffer").text(rand);
        $("#suggestion").show();
      }
  });
  
  

  $("input#inputFirstName").on("focus", function () {
      $("label[for='inputFirstName']").css("visibility", "visible");
  });

  $("input#inputFirstName").on("blur", function () {
      $("label[for='inputFirstName']").css("visibility", "hidden");
  });

  $("input#inputLastName").on("focus", function () {
      $("label[for='inputLastName']").css("visibility", "visible");
  });

  $("input#inputLastName").on("blur", function () {
      $("label[for='inputLastName']").css("visibility", "hidden");
  });

  $("input#inputPhoneNumber").on("focus", function () {
      $("label[for='inputPhoneNumber']").css("visibility", "visible");
  });

  $("input#inputPhoneNumber").on("blur", function () {
      $("label[for='inputPhoneNumber']").css("visibility", "hidden");
  });

  $("input#inputEmail").on("focus", function () {
      $("label[for='inputEmail']").css("visibility", "visible");
  });

  $("input#inputEmail").on("blur", function () {
      $("label[for='inputEmail']").css("visibility", "hidden");
  });

  $("textarea#inputMessage").on("focus", function () {
      $("label[for='inputMessage']").css("visibility", "visible");
  });

  $("textarea#inputMessage").on("blur", function () {
      $("label[for='inputMessage']").css("visibility", "hidden");
  });

});