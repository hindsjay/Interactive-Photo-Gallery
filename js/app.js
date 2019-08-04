// initiate lightGallery plugin
$(document).ready(function() {
  $("#lightgallery").lightGallery({
    thumbnail: true,
    animateThumb: false,
    showThumbByDefault: false,
    mode: 'lg-fade',
    share: false,
    zoom: false,
    fullScreen: false,
    autoplayControls: false,
    download: false,
    toggleThumb: false
  }); 
});