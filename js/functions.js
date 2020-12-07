$(function(){

	/* Apply fancybox*/
	
    $('.modal a[data-fancybox="gallery"]').fancybox({});

    // side bar

    var sideBar = $('.sideBar');

    function aparecer(){
        sideBar.removeClass('none')
    }

    function sumir(){
        sideBar.addClass('none');
    }


    $('.content > div[class="menuButton"]').click(function(){
        if(sideBar.hasClass('none') == true){
            aparecer();
        }else{
            sumir();
        }

        $('.content tg').click(function(){
            if(sideBar.hasClass('none') != true){
                sumir();
            }
        });
    });


    $( window ).resize(function(){
        if($('html').css('width') > 940){
            aparecer();
        }

    });


});