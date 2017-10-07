;(function($){
	"use strict";

	$(window).on('load', function () {
		var map;

		// var coordPoltava = {lat: 49.5685276, lng: 34.58543170000007};
		// var coordKiev = {lat: 50.4486526, lng: 30.516699199999948};
		// var coordOdessa = {lat: 46.4782251, lng: 30.723232699999926};

		var coords = [
			{lat: 49.5685276, lng: 34.58543170000007},
			{lat: 50.4486526, lng: 30.516699199999948},
			{lat: 46.4782251, lng: 30.723232699999926}
		];

		map = new google.maps.Map(
			document.getElementById('ba_map'), {
          		center: coords[0],
          		zoom: 16,
          		disableDefaultUI: true
        	});	

		for (var i=0; i < coords.length; i++){
			var marker;
			marker = new google.maps.Marker({
			          position: coords[i],
			          map: map,
			          icon: 'img/map-marker.png'
			        });
		}

        // var markerPoltava = new google.maps.Marker({
        //   position: coordPoltava,
        //   map: map,
        //   icon: 'img/map-marker.png'
        // });		

        // var markerKiev = new google.maps.Marker({
        //   position: coordKiev,
        //   map: map,
        //   icon: 'img/map-marker.png'
        // });	

        // var markerOdessa = new google.maps.Marker({
        //   position: coordOdessa,
        //   map: map,
        //   icon: 'img/map-marker.png'
        // });	


        $('.ba-map__link').on('click', function(evt) {
        	evt.preventDefault();

        	var $office = $(this).data('office');

        	map.setCenter(coords[$office]);

        	// switch ($office) {
        	// 	case 'pl':

        	// 		map.setCenter(coordPoltava);

        	// 		break;
        	// 	case 'kiev':

        	// 		map.setCenter(coordKiev);

        	// 		break;	
        	// 	case 'od':

        	// 		map.setCenter(coordOdessa);

        	// 		break;
        	// }
        });

	});

})(jQuery);