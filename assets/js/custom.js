(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	$(document).ready(function() {
	    $.ajax({
			url: 'courses.json',
			method: 'GET',
			dataType: 'json',
			success: function(response) {
				var courses = response.courses;

				console.log(courses);

				var courseCarousel = $('.owl-carousel');

				$.each(courses, function(_index, course) {
					var carouselItem = $('<div></div>').addClass('item').attr('id', 'courseItem_' + course.id);
					var img = $('<img>').addClass('img').attr('src', course.image).attr('alt', course.title);
					var downContent = $('<div></div>').addClass('down-content');
					var courseLink = $('<a></a>').addClass('h4').text(course.title);
					var courseDescription = $('<p></p>').text(course.description);
					var button = $('<div></div>').addClass('text-button-pay').html('<a href="' + course.buttonLink + '">' + course.buttonText + '</a>');
					/* var enrollLink = $('<a></a>').addClass('text-button-pay a').attr('href', '#' + course.sectionId).text(course.buttonText); */

					/* downContent.append(courseLink, courseDescription, enrollLink); */

					var contentList = $('<ul>');
					$.each(course.courseContent, function(_index, content) {
						var contentItem = $('<li>').addClass('course-ul').text(content);
						contentList.append(contentItem);
					});
					
					var enrollLink = $('<a></a>').addClass('text-button-pay a').attr('href', '#' + course.sectionId).text(course.buttonText);

					downContent.append(courseLink, courseDescription, contentList, enrollLink);
					carouselItem.append(img, downContent);
					courseCarousel.append(carouselItem);
				});

				courseCarousel.owlCarousel({
					loop: true,
					margin: 10,
					nav: true,
					responsive: {
						0: {
							items: 1
						},
						594: {
							items: 2
						},
						750: {
							items: 2
						},
						890:{
							items: 3
						}
					}
				});
			},
			error: function(error) {
				console.log('Error:', error);
			}
		});
	});


	  $(document).ready(function() {
		$('#contact').submit(function(e) {
		  e.preventDefault(); // Prevent the default form submission
	  
		  // Validate the form fields
		  var name = $('#name').val();
		  var email = $('#email').val();
		  var phoneNumber = $('#phone-number').val();
	  
		  if (name === '' || email === '' || phoneNumber === '') {
			// Display an error message or perform any other necessary validation
			alert('Please fill out all fields');
			return;
		  }
	  
		  // Get the title and message to display in the modal
		  var title = "Felicitaciones!"; // Custom title for the modal
		  var message = "¡Registro exitoso! Gracias por unirte a nosotros. Te hemos enviado un correo de confirmación. Por favor, mantente al tanto en tu bandeja de entrada y verifica tu correo electrónico para completar el proceso de registro. Si no encuentras el correo en tu bandeja de entrada, asegúrate de revisar la carpeta de spam o correo no deseado. Si tienes alguna pregunta, no dudes en contactarnos.";
	  
		  // Update the modal title and body with the new content
		  $('#myModal .modal-title').text(title);
		  $('#myModal .modal-body p').text(message);
	  
		  // Display the modal
		  $('#myModal').modal('show');
		});
	});

	$(document).ready(function() {
		$('#contact-end').submit(function(e) {
		  e.preventDefault(); // Prevent the default form submission
	  
		  // Validate the form fields
		  var name = $('#name').val();
		  var email = $('#email').val();
		  var phoneNumber = $('#phone-number').val();
	  
		  if (name === '' || email === '' || phoneNumber === '') {
			// Display an error message or perform any other necessary validation
			alert('Please fill out all fields');
			return;
		  }
	  
		  // Get the title and message to display in the modal
		  var title = "¡Gracias por contactarnos! "; // Custom title for the modal
		  var message = "Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible. Tu consulta es importante para nosotros y haremos todo lo posible por brindarte una respuesta oportuna.";
	  
		  // Update the modal title and body with the new content
		  $('#myModal .modal-title').text(title);
		  $('#myModal .modal-body p').text(message);
	  
		  // Display the modal
		  $('#myModal').modal('show');
		});
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );


	$( "#tabs" ).tabs();


	(function init() {
	  function getTimeRemaining(endtime) {
	    var t = Date.parse(endtime) - Date.parse(new Date());
	    var seconds = Math.floor((t / 1000) % 60);
	    var minutes = Math.floor((t / 1000 / 60) % 60);
	    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	    var days = Math.floor(t / (1000 * 60 * 60 * 24));
	    return {
	      'total': t,
	      'days': days,
	      'hours': hours,
	      'minutes': minutes,
	      'seconds': seconds
	    };
	  }
	  
	  function initializeClock(endtime){
	  var timeinterval = setInterval(function(){
	    var t = getTimeRemaining(endtime);
	    document.querySelector(".days > .value").innerText=t.days;
	    document.querySelector(".hours > .value").innerText=t.hours;
	    document.querySelector(".minutes > .value").innerText=t.minutes;
	    document.querySelector(".seconds > .value").innerText=t.seconds;
	    if(t.total<=0){
	      clearInterval(timeinterval);
	    }
	  },1000);
	}
	initializeClock(((new Date()).getFullYear()+1) + "/1/1")
	})()

})(jQuery);
