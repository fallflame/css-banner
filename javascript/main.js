(function(){

	var $slider = document.getElementsByClassName("container")[0];
	var timeout;

	$slider.addEventListener("mouseenter", function(){
		timeout = setTimeout(function(){
			location.hash='#modal';
		} ,3000);
	});

	$slider.addEventListener("mouseleave", function(){
		clearTimeout(timeout);
	});

})();
