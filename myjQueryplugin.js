// Creating my own jQuery plugin from scratch
			$.fn.changify = function() {
              // jquery's $() function gives us an array of all found objects in this

              return this.each ( function(){
											// inside the each()'s function() $(this) gives each one of the elements 
											console.log(  $(this).data('changed') );
											// one at a time...
											if ($(this).data('changed') != 1) {
												$(this).css('border','2px solid black');
												$(this).css('color','green');
												$(this).css('font-family','cursive');
												$(this).css('background-color','red');
												$(this).data('changed', '1');
											} else {
												$(this).css('border','none');
												$(this).css('color','blue');
												$(this).css('font-family','none');
												$(this).css('background-color','white');
												$(this).data('changed', '0');
										}
							});
            };

function change(){
			$("h1").changify();
		}
