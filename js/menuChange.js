$(function(){

	function resetColor(){
		$('nav a').css("opacity", "0.3");
	};

	function colorir(attr){
		resetColor();
		attr.css("opacity", "1");
	};

	var container = $('#container');

	$.ajax({
		'url':'pages/sobre.html',
		'success':function(data){
			container.html(data);
		}
	})
	
	$('nav a').each(function(){
		const link = $(this);

		link.click(function(){

			var href = $(this).attr('href');

			$.ajax({
				'url':href,
				'success':function(data){
					container.html(data);
				}
			});
			
			colorir(link);
	
			return false;
		});
	});
	
});