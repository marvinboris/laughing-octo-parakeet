/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

$(function () {
    $.getScript('/js/jquery.star-rating-svg.js', function () {
        $(".ranking-stars").starRating({
            totalStars: 5,
            starShape: 'rounded',
            starSize: 40,
            emptyColor: 'lightgray',
            hoverColor: 'salmon',
            activeColor: 'orange',
            useGradient: false,
            callback: function (currentRating) {
                $('input[name="mark"]').val(currentRating);
                console.log(currentRating);
            }
        });

        $(".read-only-stars").starRating({
            readOnly: true,
            starShape: 'rounded',
            starSize: 20,
        });
    });
});

require('./src/index');
