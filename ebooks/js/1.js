
  $(function() {
	// sua loi load ban dau  
	window.dispatchEvent(new Event('resize'));

	 $('.content ul').isotope({
	 	itemSelector:'li'
	 });
 
     $('.menu ul.menu li a.menu').click(function(event) {
	 	var danhmuc = $(this).data('danhmucebook');
	 	var ten = $(this).text();
	 	if(danhmuc == 'all'){
			$('section h1').text("Tất cả");
	 		$('.content ul').isotope({filter:'*'});
	 	}
	 	else {
	 		$('section h1').text(ten);
	 		$('.content ul').isotope({filter:danhmuc});
	 	}
	 	

	 	

	 	return false;
	 });;






	 // code cho phan nut 
	
 });
