function recthit(rectone, recttwo) {

  var r1 = $(rectone);
  var r2 = $(recttwo);

  var r1x = r1.offset().left;
  var r1w = r1.width();
  var r1y = r1.offset().top;
  var r1h = r1.height();

  var r2x = r2.offset().left;
  var r2w = r2.width();
  var r2y = r2.offset().top;
  var r2h = r2.height();

  // console.log('offset left',r2x, 'width', r2w, 'offset top', r2y, 'height', r2h);
  // console.log(r2x, r2w, r2y, r2h);

  // if (r1y + r1h < r2y ||
  //   r1y > r2y + r2h ||
  //   r1x > r2x + r2w ||
  //   r1x + r1w < r2x) {
  //   return false;
  // } else {
  //   return true;
  // }
  if (r1x < r2x + r2w  && r1x + r1w  > r2x &&
		r1y < r2y + r2h && r1y + r1h > r2y) {
    return true;
  } else {
    return false;
  }

}//end function 

// $(document).mousemove(function(e) {

//     $('#divOne').css({
//       top: e.pageY,
//       left: e.pageX
//     });

//     //one to many hit detect
//     $('.hitObj').each(function(){
//       if(recthit('#divOne',$(this))){
//         $(this).css({backgroundColor:'yellow'});
//       } else {
//         $(this).css({backgroundColor:'black'});
//       }
//     });// end each

//   }); // end mousmove

//one to many hit detect
// $(document).scroll(function () {

//   $('.mob-menu-item').each(function () {
//     if (recthit('#rect', $(this))) {
//       $(this).delay(1000).addClass('active');
//     } else {
//       $(this).delay(1000).removeClass('active');
//     }
//   });// end each
// })

$(window).scroll(function() {
	clearTimeout($.data(this, 'scrollTimer'));
	$.data(this, 'scrollTimer', setTimeout(function() {
		// do something
    $('.mob-menu-item').each(function () {
      if (recthit('#rect', $(this))) {
        $('.mob-menu-item').removeClass('active');
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });// end each
	}, 250));
});