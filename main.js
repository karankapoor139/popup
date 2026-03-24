 $(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'ytmp.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);


     $('.map').click(function() {
        audioElement.play();

    });

      $('.black').click(function() {
        audioElement.play();

    });


       $('#footer').click(function() {
        audioElement.play();

    });

        $('#poptxt').click(function() {
        audioElement.play();

    });





});

 $("#footer").fadeIn('slow')
.css({top:752,position:'absolute'})
.animate({top:685}, 800, function() {
    //callback
});
$(document).ready(function() {
    $(".arow-div").delay(1000).fadeIn(500);
});

    $(document).ready(function(){
  $("#poptxt").click(function(){
    $('#poptxt').hide('fast');
  });
});
    $(document).ready(function(){
  $(".alert_popup").click(function(){
    $('.alert_popup').hide('fast');
  });
});



           $(document).ready(function(){
  $("#footer").click(function(){
    $('#poptxt').hide('fast');
  });
});

   $(document).ready(function(){
  $(".black").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});



document.addEventListener("keydown", function(event) {
  // Intercept 'Escape' key press
  if (event.key === "Escape") {
    event.preventDefault(); // Blocks default behavior like exiting fullscreen
    console.log("Escape key disabled");
  }

  // Use 'Enter' as an alternative escape action
  if (event.key === "Enter") {
    console.log("Custom escape triggered with Enter key!");
    // You can trigger your landing page's escape behavior here
    // Example: hide modal or redirect user
    // document.getElementById("yourElement").style.display = "none";
  }
});