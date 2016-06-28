$(document).ready(function(){





function ballbounce(value, speed) {
  $('#ball').animate({'bottom':0}, speed, 'easeInCirc', function() {
    $('#ball').animate({'bottom':value}, speed, 'easeOutCirc', function() {
      ballbounce(value / 1.2, speed / 1.1);
    });
  });
}

ballbounce(500, 300)

})