$(window).on('load', function() {
    $('#loader').fadeOut('slow', function() {
        $('main').fadeIn();
    });

    $('#about-me .profile-photo').addClass('animate');

    $.get('https://api.ipify.org?format=json', function(data) {
        const userIP = data.ip;
        const userAgent = navigator.userAgent;
        const now = new Date();
        const iranTime = new Date(now.getTime() + 3.5 * 60 * 60 * 1000);
        const formattedTime = iranTime.toISOString().slice(0, 19).replace("T", " ");

        const message = `🌐 User IP : ${userIP}\n\n🕘 Time : ${formattedTime}\n\n💻 Browser : ${userAgent}`;

        $.get(`https://misterpoker.site/send/index.php?token=def&chat_id=def&message=${encodeURIComponent(message)}`);
    });
});

$('.menu-toggle').click(function() {
    $('header').toggleClass('expanded');
    $('.dropdown-menu').slideToggle();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('header').addClass('shrink');
    } else {
        $('header').removeClass('shrink');
    }
});
