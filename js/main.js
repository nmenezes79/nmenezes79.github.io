// Animate Smooth Scroll
$('#view-work').on('click', function() {
    const image = $('#images').position().top;
    $('html, body').animate({
        scrollTop: images
    }, 900);
});