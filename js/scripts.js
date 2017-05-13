var jsonObj = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];  

function initMap() {
	var uluru = {lat: 47.4926021, lng: 19.0632918};
	var map = new google.maps.Map(document.getElementById('integratedMap'), {
	  zoom: 15,
	  center: uluru,
	  styles: jsonObj
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}

$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: false,
	 	anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage','6thpage','7thpage','8thpage','9thpage'],
 		menu: '#menu',
	});
	var that;
	$('a').each(function () {
	 	$(this).on('click', function () {
	 		if(typeof that != 'undefined'){
	 			that.css('color', '#a6a6a6');
	 		}
	 		$('#menu-button').trigger('click');
	 		$(this).css('color', '#555555');
	 		that = $(this); 
	 	});	
	})
	visualizeApartmentsBackgrounds();
});

var backgroundPicsFileNamesArray = ["ap1FirstPic", "ap2FirstPic", "ap3FirstPic"];
var numberOfPicsForApartmentsArray = [8,7,7];
var ap1TextsArr = ['Family apartment',' 15 Puskin Str.', 
					'This uniquely designed apartment is the gem in our collection. And so are all the elements, the kitchen furniture, the bathroom and floor tiles, the loft bed just above the sitting area, and most of all the tiny little back garden, which you can access by climbing out through the window. It is worth it, and worth to have your morning coffee there, among the plants.',
					'The apartment is fitted with a double bed and two single beds. On request we can provide a spare bed, or a baby cot. There are two bathrooms: one is equipped with a bathtub, and the other one with a small shower. ',
					'Highly recommended for families with children. Your kids are going to love it. And you too. '];
var ap2TextsArr = ['Studio apartments',' 17 Puskin Str.', 
					'These two small places are designed by Judit Boros, one of Budapest\'s creative and fresh contemporary interior designers. ',
					'They are twin studios, connected by one common kitchen. Each studio has a comfy loft bed, designed for couples, equipped with a double bed. Attention: to reach the loft beds, you need to climb a few steps. In the sitting area there is a couch, with a coffee table, and a carpenter-made dining table with bar chairs, and a flat sreen tv with loads of channels. The bathroom has a shower, and the coolest floor tiles you will see.'];
var ap3TextsArr = ['Studio apartments',' 17 Puskin Str.', 
					'These twin apartments are located on the second floor of the house, and there is no elevator in the house. The apartments are well equipped with a small modern kitchen, a sitting area, television with cable channels and free unlimited wifi.',
					'The bathroom is modern, with a shower and a washing machine.'];
var arrOfArrays = [ap1TextsArr, ap2TextsArr, ap3TextsArr];									
function showHideMenuNavigation(x) {
    x.classList.toggle("change");
   
    if ($("#mainMenuContainer").hasClass("slideIn")) {
        $("#mainMenuContainer").removeClass("slideIn")
						       .addClass("slideOut")
						       .css('left', -$("#mainMenuContainer").outerWidth(true) + 'px');
    }
    else if($("#mainMenuContainer").hasClass("slideOut")){
       $("#mainMenuContainer").removeClass("slideOut")
					          .addClass("slideIn")
					          .css('left', '0'); 
    } else {
    	 $("#mainMenuContainer").addClass("slideIn")
    	 						.css('left', '0'); 
    }
}

function visualizeApartmentsBackgrounds(argument) {
	$('.apartPicAndButtonContainer').each(function (index, el) {
		
		$(el).css('background-image', 'url(imgs/mainPageApartmentsPics/'+ backgroundPicsFileNamesArray[index] + '.jpg)');
		if (index != 0) {


			$(el).parent().css('padding-top', window.outerHeight*0.19 + 'px');
		}
		$(el).find('.stepIn').on('click', function(event) {
			event.preventDefault();
			if ($(this).hasClass('clicked')) {
				$(this).removeClass('clicked')
					   .text('Step in >>');
				$('.stepInTextContainer').remove();
				$('.swiper-container').remove();
				$.fn.fullpage.setAllowScrolling(true);
				$('#menu-button').show();
			} else {
				$(this).text('<< Step out')
					   .addClass('clicked');
				$(el).append('<div class="stepInTextContainer"></div>');
				$('.stepInTextContainer').append(' <div class="swiper-container">\
							        <div class="swiper-wrapper">\
							        </div>\
							        <div class="swiper-pagination swiper-pagination-white"></div>\
							        <div class="swiper-button-next swiper-button-white"></div>\
							        <div class="swiper-button-prev swiper-button-white"></div>\
    							</div>');

				for (var i = 1; i <= numberOfPicsForApartmentsArray[index]; i++) {
					$('.swiper-wrapper').append('<div class="swiper-slide" style="background-image:url(imgs/ap'+(index+1)+'Pics/'+ i +'.jpg)"></div>');
				}
				$('.swiper-wrapper').prepend('<div class="swiper-slide textSlider" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(imgs/ap'+(index+1)+'Pics/3.jpg)"></div>')
				var arrOfArraysLength = arrOfArrays[index].length;
				var counter= 0;
				var textSlider = $('.textSlider');
				while (counter < arrOfArraysLength) {
					if (counter == 0) {
						textSlider.append('<h2>'+ arrOfArrays[index][counter] +'</h3>');
					} else if( counter == 1){
						textSlider.append('<h3>'+ arrOfArrays[index][counter] +'</h3><br>');
					} else {
						textSlider.append('<p>'+ arrOfArrays[index][counter] +'</p><br>');
					}

					counter++;
				}
				$('.textSlider').css({
					'background-repeat': 'no-repeat',
					'background-size' :'100% 100%',
					'text-align': 'left'
				});; 

				 //background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('http://placehold.it/350x150');
				var swiper = new Swiper('.swiper-container', {
				    pagination: '.swiper-pagination',
				    paginationClickable: true,
				    nextButton: '.swiper-button-next',
				    prevButton: '.swiper-button-prev',
				    spaceBetween: 30,
				    effect: 'fade'
				});

				 /*<div class="swiper-slide" style="background-image:url(imgs/ap1Pics/2.jpg)"></div>\
							            <div class="swiper-slide" style="background-image:url(imgs/ap1Pics/3.jpg)"></div>\
							            <div class="swiper-slide" style="background-image:url(imgs/ap1Pics/4.jpg)"></div>\
							            <div class="swiper-slide" style="background-image:url(imgs/ap1Pics/5.jpg)"></div>*/
				$.fn.fullpage.setAllowScrolling(false);
				$('#menu-button').hide();
			}
			console.log("Step in clicked! Index number :" + index);
			//$(el).append('<div class="stepInTextContainer"></div>');
		});
	});
}


