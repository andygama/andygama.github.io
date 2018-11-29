
$(document).ready(function() {

var waypoint = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function() {
    notify('Basic waypoint triggered')
  }
})

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
}); 
