window.addEventListener("scroll", callbackFunc);
function callbackFunc() {
  var y = window.pageYOffset;
  if (y > 1) {
    //scrolled header
    //$(".nav_container_default").addClass('nav_container_scroll');
    $(".nav_container_default").css({
      'top':"-"+((y/1.5)+1)+"px"
    });

    $("#header_top").css({
      'margin-top':((y/100)-3)+"em"
    });
    $("#header").css({
      'background':`linear-gradient( to right, rgba(0, 0, 0, ${y/400}), rgba(45, 29, 39, ${y/400}), rgba(46, 47, 70, ${y/400}), rgba(0, 0, 0, ${y/400}) ), url(city2.jpeg) no-repeat center center`,
      'background-size': 'cover'
    });
  } else {
    //default header
    //$(".nav_container_default").removeClass('nav_container_scroll');

  }
}
