(function(){

	var $slider = document.getElementsByClassName("container")[0];
	var timeout;

	/*
	$slider.addEventListener("mouseenter", function(){
		timeout = setTimeout(function(){
			document.getElementById("modal").className = 'modal show';
		} ,3000);
	});
*/


	$slider.addEventListener("click", function(){
		document.getElementById("modal").className = 'modal show';
	});

	$slider.addEventListener("mouseleave", function(){
		clearTimeout(timeout);
	});

})();
