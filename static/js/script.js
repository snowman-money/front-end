
var video = document.querySelector(".video")
function toggle(){

    video.classList.toggle("active");
}


jQuery(".close").click(function() {
    // changes the iframe src to prevent playback or stop the video playback in our case
    $('#youtube-player').each(function(index) {
      $(this).attr('src', $(this).attr('src'));
      return false;
    });
    
//click function
  });