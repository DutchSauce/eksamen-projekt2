console.log("Hello world!");
/*--------- Kørende baggrund ----------*/
var bg = new Image();
bg.src = "img/baggrund.png";
function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;

    function Background(){
        this.x = 0, this.y = 0, this.w = bg.width, this.h = bg.height;
        this.render = function(){
            ctx.drawImage(bg, this.x--, 0);
            if(this.x <= -2000){
                this.x = 0;
            }
        }
    }
    var background = new Background();

    function animate(){
        ctx.save();
        ctx.clearRect(0, 0, cW, cH);
        // Start drawing here
        background.render();
        // End drawing here
        ctx.restore();
    }
    var animateInterval = setInterval(animate, 30);
}
window.addEventListener('load', function(event) {
    initCanvas();
});

/* ------ menu baren burger menu -------*/
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    else {
      x.style.display = "block";
    }
  }


/* ----------- drop down js
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 1; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function show_alert() {
  alert("Er du sikker");
}
----------- */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
