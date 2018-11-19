					// Initialize and add the map
		function getReverseGeocodingData(lat, lng) {
		    var latlng = new google.maps.LatLng(lat, lng);
		    // This is making the Geocode request
		    var geocoder = new google.maps.Geocoder();
		    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
		        if (status !== google.maps.GeocoderStatus.OK) {
		            alert(status);
		        }
		        // This is checking to see if the Geoeode Status is OK before proceeding
		        if (status == google.maps.GeocoderStatus.OK) {
		            console.log(results);
		            var address = (results[0].formatted_address);
		            alert('Dirección '+address)
		        }
		    });
		}

		function initMap() {
			
		  //var url_string = "http://www.example.com/t.html?latt=4.6344452&longi=-74.0687897"; //window.location.href
		  var url_string = window.location.href;
			var url = new URL(url_string);
			var longi = parseFloat(url.searchParams.get("longi"));
			var latt = parseFloat(url.searchParams.get("latt"));
			var locations = [

	      ['Bondi Beach', latt, longi, 3],
	      ['Coogee Beach', 4.6344452,-74.0687897, 2],
	      ['Cronulla Beach', 4.6345186,-74.0681263, 1]
	    ];
			//alert('longitud:'+longi+' latitud:'+latt)
			getReverseGeocodingData(latt,longi)
			
			
		  // The location of Uluru
		  var uluru = {lat: latt, lng: longi};
		  // The map, centered at Uluru
		  var map = new google.maps.Map(
		      document.getElementById('map'),
		      { zoom: 12, 
		      	center: uluru,
		      	mapTypeId: google.maps.MapTypeId.ROADMAP
		      });
		  // The marker, positioned at Uluru
		  var marker = new google.maps.Marker({position: uluru, map: map});
		  
		  for (i = 0; i < locations.length; i++) {  
		      marker = new google.maps.Marker({
		        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		        map: map
		      });

		      google.maps.event.addListener(marker, 'click', (function(marker, i) {
		        return function() {
		          infowindow.setContent(locations[i][0]);
		          infowindow.open(map, marker);
		        }
		      })(marker, i));
		    }

		    var triangleCoords = [
			          {lat:4.6645924, lng:-74.060585},
			          {lat: 4.6323854, lng: -74.0675332},
			          {lat: 4.63737, lng: -74.0814586},
			          {lat: 4.6645924, lng: -74.060585}
			        ];

			// Construct the polygon.
			var bermudaTriangle = new google.maps.Polygon({
			  paths: triangleCoords,
			  strokeColor: '#FFF0F0',
			  strokeOpacity: 0.8,
			  strokeWeight: 2,
			  fillColor: '#FF0F0F',
			  fillOpacity: 0.35
			});
			bermudaTriangle.setMap(map);


		}

