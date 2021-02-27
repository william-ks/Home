$(() => {

    var target = $('.animes'),
        animationClass = 'animate__animated animate__zoomIn',
        windowHeight = $(window).height(),
        offset = windowHeight - (windowHeight / 4);

    
    function OFF_SET_TOP(element){
        var elOFFY = $(element).offset().top;
        return elOFFY;
    }

    function animeScroll() {

        var windowTop = $(window).scrollTop();

        target.each(function() {

            if (windowTop > (OFF_SET_TOP(this) - offset)) {
                $(this).css('opacity', '1');
                $(this).addClass(animationClass);
            }

        });

    }

    $(window).scroll(function() {
        animeScroll();
    });

})
