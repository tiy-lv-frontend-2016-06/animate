$(document).ready(function(){
  


  $("#nav").on('click', 'li', function() {
    if ($(this).find('ul').css('display') === 'none') {
      $(this).parents('ul').find('li').find('ul').slideUp();
      $(this).find('ul').slideDown();
    }
  });


  $("#container").css({
    background:'red',
    width:'700px'
  })

  // $("#container").css('background', 'red').css('width', '700px')

})

