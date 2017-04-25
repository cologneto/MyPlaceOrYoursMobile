$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: false,
	 	anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
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


function showHideMenuNavigation(x) {
    x.classList.toggle("change");
   
    if ($("#mainMenuContainer").hasClass("slideIn")) {
        $("#mainMenuContainer").removeClass("slideIn");
         $("#mainMenuContainer").addClass("slideOut");
         $("#mainMenuContainer").css('left', '-100vw');
    }
    else if($("#mainMenuContainer").hasClass("slideOut")){
       $("#mainMenuContainer").removeClass("slideOut");
        $("#mainMenuContainer").addClass("slideIn");
        $("#mainMenuContainer").css('left', '0'); 
    } else {
    	 $("#mainMenuContainer").addClass("slideIn");
    	 $("#mainMenuContainer").css('left', '0'); 
    }
}

function visualizeApartmentsBackgrounds(argument) {
	$('.apartPicAndButtonContainer').each(function (index, el) {
		$(el).css('background-image', 'url(imgs/mainPageApartmentsPics/'+ backgroundPicsFileNamesArray[index] + '.jpg)');
		if (index != 0) {
			$(el).parent().css('padding-top', '19vh');
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
							            <div class="swiper-slide" style="background-image:url(imgs/ap1Pics/2.jpg)"></div>\
							            <div class="swiper-slide" style="background-image:url(imgs/ap1Pics/3.jpg)"></div>\
							            <div class="swiper-slide" style="background-image:url(imgs/ap1Pics/4.jpg)"></div>\
							            <div class="swiper-slide" style="background-image:url(imgs/ap1Pics/5.jpg)"></div>\
							            <div class="swiper-slide" style="background-image:url(imgs/ap1Pics/6.jpg)"></div>\
							        </div>\
							        <div class="swiper-pagination swiper-pagination-white"></div>\
							        <div class="swiper-button-next swiper-button-white"></div>\
							        <div class="swiper-button-prev swiper-button-white"></div>\
    							</div>');
				var swiper = new Swiper('.swiper-container', {
				    pagination: '.swiper-pagination',
				    paginationClickable: true,
				    nextButton: '.swiper-button-next',
				    prevButton: '.swiper-button-prev',
				    spaceBetween: 30,
				    effect: 'fade'
				});
				$.fn.fullpage.setAllowScrolling(false);
				$('#menu-button').hide();
			}
			console.log("Step in clicked! Index number :" + index);
			//$(el).append('<div class="stepInTextContainer"></div>');
		});
	});
}


