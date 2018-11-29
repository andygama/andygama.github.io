
$(document).ready(function() {

var waypoint = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function() {
    notify('Basic waypoint triggered')
  }
})

$("a").fadeIn(300);
}); 
