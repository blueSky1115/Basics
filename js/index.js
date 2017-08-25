/**
 * Created by lc on 2017/3/27.
 */

$(function () {

    (function () {
        var navbar = $('.navtext').find('li');

        navbar.each(function () {

            navbar.eq(0).attr('class','active');
            navbar.on('mouseenter',function () {

                navbar.attr('class','');
                $(this).attr('class','active');
            });
            navbar.on('mouseleave',function () {

                $(this).attr('class','');
            })
        })

    })();
    
});