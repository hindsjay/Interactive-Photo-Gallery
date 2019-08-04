// initiate lightGallery plugin
$(document).ready(function() {
  $("#lightgallery").lightGallery({
    thumbnail: true,
    animateThumb: false,
    showThumbByDefault: false,
    mode: 'lg-fade',
    share: false,
    fullScreen: false,
    autoplayControls: false,
    download: false,
    toggleThumb: false
  }); 
});


// search bar function
const inputElement = document.querySelector('input');
const captionNodeList = document.querySelectorAll('div[data-sub-html]');

inputElement.addEventListener('keyup', function(event) {
  const inputElementValue = event.target.value.toLowerCase();
  
  captionNodeList.forEach(function(element) {
    const captionText = element.getAttribute('data-sub-html');
    if (captionText.toLowerCase().indexOf(inputElementValue) > -1 ) {
      element.style.display = '';
    } else {
      element.style.display = 'none';
    }
  });
});