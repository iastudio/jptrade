
/////////////////
//    SLIDER   //
/////////////////

(function(){


    var sliderSpeed = 500;

    //var slidesCount = $('#slider .slider__item').length;

    $('#slider .slider__item').each(function(i, el){
        $(el).attr('data-index', i);
        $('#slider .slider__dots').append('<div class="slider__dot"></div>');
    });
    $('#slider .slider__dot:eq(0)').addClass('active');

    if ($('.slider__item').length > 0) {
        if ($('#slider').attr('data-count') == undefined)
            $('#slider').attr('data-count', 0);
        var count = parseInt($('#slider').attr('data-count'));
        var slidesCount = $('#slider .slider__item').size()-1;
    }

    //$('#slider .slider__nav').on('click', function(e) {
        //e.preventDefault();
        //if ($('#slider .slider__item:animated').size()>0) return;
        
        //var direction;
        //$(this).hasClass('slider__nav--next') ? direction = 1 : direction = 0;

    setInterval(function() {
        // debugger;
        if ($('#slider .slider__item:animated').size()>0) return;
        var direction = 1;

        if (direction == 0)
            (count == 0) ? count = slidesCount + 1 : count = count;
        else
            (count == slidesCount) ? count = - 1 : count = count;

        $('#slider .slider__item.active').fadeOut(sliderSpeed, 'easeInOutQuad', function() {
            $('.slider__item.active').removeClass('active');
            (direction == 1) ? count++ : count--;
            $('#slider .slider__item').eq(count).hide();
            $('#slider .slider__item').eq(count).addClass('active');
            $('#slider .slider__item').eq(count).fadeIn(sliderSpeed, 'easeInOutQuad');
            $('#slider .slider__dot.active').removeClass('active');
            $('#slider .slider__dot').eq(count).addClass('active');
            ///
            $('#slider').attr('data-count', count);
        });
    }, 3000);

})();
