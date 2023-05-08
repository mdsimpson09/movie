// //waits for dom to load
$(document).ready(function(){
    alert("let's get ready to party with jQuery!");
}); 
// $(function(){
// alert('ready');
// });

$('#image').addClass('image-center');


$('article p:last-child').remove();

$('#title').css('font-size', Math.random()*100);

// $("<li>").text("It's monday and I hate mondays");
$('ol').prepend($('<li>', {text:"It's monday and i hate mondays"}));

$('aside')
.empty()
.append($('<p>', {text: "Sorry about that list :("}));

$('.form-control').on('keyup blur change', function () {
    let red = $('.form-control').eq(0).val();
    let blue = $('.form-control').eq(1).val();
    let green = $('.form-control').eq(2).val();
    $('body').css('background-color',
    "rgb{" + red + "," + green + "," + blue + "}");
});

$('img').on('click', function (e) {
    $(e.target).remove();
  });
// });
