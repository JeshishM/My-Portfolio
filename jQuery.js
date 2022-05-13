// use document.ready() to have jquery wait for page to load before running our code
      $(document).ready(
        function() {
          // our code is here inside this anonymous function
          $("#myslideshow1").flipster();
        }
      );

			$(function () {
				$('.mytext1').textillate({ in: { effect: 'bounce' } });
			})

			$(function () {
				$('.mytext2').textillate({ in: { effect: 'fadeIn' } });
			})

			// $(function () {
			// 	$('.mybodytext').textillate({ in: { effect: 'rollIn' } });
			// })

			$(function() {
   			 $( "#accordion" ).accordion();
  		} );

			