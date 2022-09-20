var dragMe;
window.onload=function(){
  var rect = document.querySelector("#rect");
  dragMe = document.querySelector(".mob-menu-item.active");
  
//   initDrag({
//     element: dragMe,
//     start: function(){addShadow();},
//     drag: function(){isCollapsed(dragMe, rect);},
//     stop: function(){removeShadow();}
//   });
}

function isCollapsed(dragMe, rect){
  var object_1 = dragMe.getBoundingClientRect();
  var object_2 = rect.getBoundingClientRect();
  
  if (object_1.left < object_2.left + object_2.width  && object_1.left + object_1.width  > object_2.left &&
		object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
    rect.classList.add("collide");
  }
  else{
    rect.classList.remove("collide");
  }
}

isCollapsed(dragMe, rect) 
// function addShadow(){
//   dragMe.classList.add("onDrag");
// }

// function removeShadow(){
//   dragMe.classList.remove("onDrag");
// }

// function initDrag(options){
//   var element = options.element;
//   var mousedown, mouseup, mousemove,
//       dragStart, initX, initY,
//       offsetLeft, offsetTop;
  
//   function mouseMove(ev){
//     if(dragStart){
//       var newX = offsetLeft + (ev.pageX - initX);
//       var newY = offsetTop + (ev.pageY - initY);

//       element.style.top = newY+"px";
//       element.style.left = newX+"px";
      
//       options.drag.call();
//     }
//   }
  
//   function mouseUp(ev){
//     dragStart = false;
//     document.removeEventListener("mousemove", mouseMove, false);
//     document.removeEventListener("mouseup", mouseUp, false);
    
//     options.stop.call();
//   }
  
//   function mouseDown(ev){
//     initX = ev.pageX;
//     initY = ev.pageY;
//     dragStart = true;
//     offsetLeft = element.offsetLeft;
//     offsetTop = element.offsetTop;
//     document.addEventListener("mousemove", function(ev){mouseMove(ev)}, false);
//     document.addEventListener("mouseup", function(ev){mouseUp(ev)}, false);
    
//     options.start.call();
//   }
  
//   element.addEventListener("mousedown", function(ev){mouseDown(ev)}, false);
// }