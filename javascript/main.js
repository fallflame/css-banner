(function(){

	var banner = document.getElementsByClassName("countdown")[0];
	var modal = document.getElementsByClassName("modal")[0];
	var timeout;

	banner.addEventListener("mouseenter", function(){
		timeout = setTimeout(function(){
			modal.className = 'modal show';
		} ,3000);
	});

	banner.addEventListener("click", function(){
		modal.className = 'modal show';
	});

	banner.addEventListener("mouseleave", function(){
		clearTimeout(timeout);
	});
	
	modal.getElementsByClassName("close")[0].addEventListener('click', function(){
		modal.className = 'modal';
	});

})();
