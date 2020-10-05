$(document).ready(function() {
    $('a').attr('href', 'www.codefactory.wien');
    $('code').css("color", "red");
    $('ol > li').css("background-color", "#2a7b90");
    $('textarea').text("Express your opinion");
    $('img').attr('src', 'https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg')
    $('blockquote').css({
        "background-color": "orange",
        'font-style': 'italic'
    });
    $('#logo').css("color", "black");
    $('.gray').css("color", "white");
    $('.date').remove();
    var templates = $("<li>New Template</li>");
    var order = $("<li>Other Template</li>");
    var contact = $("<li>Contact US</li>");
    $('ul:nth-child(2)').prepend(templates, order, contact);
    
});

$('#content-wrap p').each(function() {
    var text = $(this).text();
    $(this).text(text.replace('Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.', 'I want a programming language in which I need only to say what I wish, and done.')); 
});