// Text Animation like typing in title
const typewriter = () => {
  const currentTitle = document.getElementById('title');
  replaceTitle = 'TS1LV3R.GITHUB.IO'.split('');

  window.setTimeout(() => {
    replaceTitle.forEach((c, index) => {
      setTimeout(() => {
        if(index == 0) currentTitle.innerText = c;
        else currentTitle.innerText += c;
      }, 60 * index);
    });
  }, 1000);
};

// Ripple animation
const target = $('.point');

const fluffy = () => {
  target.animate({marginTop: '-=12px'}, 800).animate({marginTop: '+=12px'}, 800);
  setTimeout('fluffy()', 1600);
};

target.on('mouseover', (arg) => {
  $(arg.currentTarget).addClass("-active");
});

target.on('mouseout', () => {
  target.removeClass("-active");
});

window.onload = () => {
  typewriter();
  fluffy();
};

/*
// Change color of icons on mouseover
const icon = document.getElementById("icon");

icon.addEventListener("mouseover", function(event){
  event.target.style.color = "#666666";
});
icon.addEventListener("mouseout", function(event){
  event.target.style.color = "#fd6a02";
});

// Shake icons
function fluffy() {
  $('.icons').animate({marginTop: '-=12px'}, 800).animate({marginTop: '+=12px'}, 800);
  setTimeout('fluffy()', 1600);
}
fluffy();
*/
