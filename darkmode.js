var hbutton = document.querySelectorAll(".header-button");
var body = document.querySelector("body");
var icons = document.querySelectorAll(".social-media");
var icons2 = document.querySelectorAll(".social-media-");
var coffee = document.getElementById("buy_me_coffee");
var toggle = document.querySelector(".toggle-dark");
if(localStorage.length==0)
localStorage.setItem("toggle_value","0");
var toggle_value = JSON.parse(localStorage.getItem("toggle_value")); //normal mode=0
toggle.onclick = function () {
  if (toggle_value == 0){
    toggle_value = 1;
    localStorage.setItem("toggle_value","1");
  }
  else {toggle_value = 0;
    localStorage.setItem("toggle_value","0");
  }
  if (toggle_value == 1) {
    document.querySelector(".header").style.background = "black";
    for (var i = 0; i < icons.length; i++) {
      icons[i].style.color = "white";
      icons[i].onmouseout = function () {
        this.style.color = "white";
      }
    }
    for (var i = 0; i < icons2.length; i++) {
      icons2[i].style.color = "white";
      icons2[i].onmouseout = function () {
        this.style.color = "white";
      }
    }
    for (var i = 0; i < hbutton.length; i++) {
      hbutton[i].onmouseover = function () {
        this.style.background = "grey";
      }
      hbutton[i].onmouseout = function () {
        this.style.background = "inherit";
      }
    }
    body.style.background = "linear-gradient(to top left,	rgb(40,40,40),gray)";
    document.querySelector(".about-me p").style.color = "white";
    coffee.style.background = "black";
    coffee.style.border = "black 1px solid";
    coffee.onmouseover = function () {
      this.style.border = "black 1px solid";
      this.style.background = "grey";
      this.style.color = "black";
    }
    coffee.onmouseout = function () {
      this.style.border = "black 1px solid";
      this.style.background = "black";
      this.style.color = "white";
    }

    toggle.style.color = "white";
    toggle.style.background = "rgba(255, 255, 255, 0.11)";
    toggle.style.boxShadow="0 0 8px white";
    document.querySelector(".sun").style.display = "inline-block";
    document.querySelector(".moon").style.display = "none";
  }
  else {
    document.querySelector(".sun").style.display = "none";
    document.querySelector(".moon").style.display = "inline-block";
    toggle.style.color = "black";
    toggle.style.background = "rgba(255, 255, 255, 0.11)";
    toggle.style.boxShadow="0 0 8px black";

    document.querySelector(".header").style.background = "darksalmon";
    for (var i = 0; i < icons.length; i++) {
      icons[i].style.color = "black";
    }
    for (var i = 0; i < icons2.length; i++) {
      icons2[i].style.color = "black";
    }
    for (var i = 0; i < hbutton.length; i++) {
      hbutton[i].onmouseover = function () {
        this.style.background = "#c97052";
      }
      hbutton[i].onmouseout = function () {
        this.style.background = "inherit";
      }
    }
    for (var i = 0; i < icons.length; i++) {
      icons[i].onmouseover = function () {
        this.style.color = "white";
      }
      icons[i].onmouseout = function () {
        this.style.color = "black";
      }
    }
    body.style.background = "linear-gradient(to bottom right, rgb(84, 135, 230), skyblue, white)";
    document.querySelector(".about-me p").style.color = "rgb(0, 89, 255)";
    coffee.style.background = "darksalmon";
    coffee.style.border = "darksalmon 1px solid";
    coffee.onmouseover = function () {
      this.style.border = "red 1px solid";
      this.style.background = "whitesmoke";
      this.style.color = "red";
    }
    coffee.onmouseout = function () {
      this.style.border = "darksalmon 1px solid";
      this.style.background = "darksalmon";
      this.style.color = "white";
    }
  }
}
if (toggle_value == 1) {
  document.querySelector(".header").style.background = "black";
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.color = "white";
    icons[i].onmouseout = function () {
      this.style.color = "white";
    }
  }
  for (var i = 0; i < icons2.length; i++) {
    icons2[i].style.color = "white";
    icons2[i].onmouseout = function () {
      this.style.color = "white";
    }
  }
  for (var i = 0; i < hbutton.length; i++) {
    hbutton[i].onmouseover = function () {
      this.style.background = "grey";
    }
    hbutton[i].onmouseout = function () {
      this.style.background = "inherit";
    }
  }
  body.style.background = "linear-gradient(to top left,	rgb(40,40,40),gray)";
  document.querySelector(".about-me p").style.color = "white";
  coffee.style.background = "black";
  coffee.style.border = "black 1px solid";
  coffee.onmouseover = function () {
    this.style.border = "black 1px solid";
    this.style.background = "grey";
    this.style.color = "black";
  }
  coffee.onmouseout = function () {
    this.style.border = "black 1px solid";
    this.style.background = "black";
    this.style.color = "white";
  }

  toggle.style.color = "white";
  toggle.style.background = "rgba(255, 255, 255, 0.11)";
  toggle.style.boxShadow="0 0 8px white";
  document.querySelector(".sun").style.display = "inline-block";
  document.querySelector(".moon").style.display = "none";
}
else {
  document.querySelector(".sun").style.display = "none";
  document.querySelector(".moon").style.display = "inline-block";
  toggle.style.color = "black";
  toggle.style.background = "rgba(255, 255, 255, 0.11)";
  toggle.style.boxShadow="0 0 8px black";

  document.querySelector(".header").style.background = "darksalmon";
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.color = "black";
  }
  for (var i = 0; i < icons2.length; i++) {
    icons2[i].style.color = "black";
  }
  for (var i = 0; i < hbutton.length; i++) {
    hbutton[i].onmouseover = function () {
      this.style.background = "#c97052";
    }
    hbutton[i].onmouseout = function () {
      this.style.background = "inherit";
    }
  }
  for (var i = 0; i < icons.length; i++) {
    icons[i].onmouseover = function () {
      this.style.color = "white";
    }
    icons[i].onmouseout = function () {
      this.style.color = "black";
    }
  }
  body.style.background = "linear-gradient(to bottom right, rgb(84, 135, 230), skyblue, white)";
  document.querySelector(".about-me p").style.color = "rgb(0, 89, 255)";
  coffee.style.background = "darksalmon";
  coffee.style.border = "darksalmon 1px solid";
  coffee.onmouseover = function () {
    this.style.border = "red 1px solid";
    this.style.background = "whitesmoke";
    this.style.color = "red";
  }
  coffee.onmouseout = function () {
    this.style.border = "darksalmon 1px solid";
    this.style.background = "darksalmon";
    this.style.color = "white";
  }
}
if(toggle_value==0){
coffee.style.background = "darksalmon";
coffee.style.border = "darksalmon 1px solid";
coffee.onmouseover = function () {
  this.style.border = "red 1px solid";
  this.style.background = "whitesmoke";
  this.style.color = "red";
}
coffee.onmouseout = function () {
  this.style.border = "darksalmon 1px solid";
  this.style.background = "darksalmon";
  this.style.color = "white";
}
for (var i = 0; i < icons.length; i++) {
  icons[i].style.color = "black";
  icons[i].onmouseover = function () {
    this.style.color = "white";
  }
  icons[i].onmouseout = function () {
    this.style.color = "black";
  }
}
for (var i = 0; i < icons.length; i++) {
  icons2[i].style.color = "black";
  icons2[i].onmouseover = function () {
    this.style.color = "white";
  }
  icons2[i].onmouseout = function () {
    this.style.color = "black";
  }
}}
if(toggle_value==0){
document.querySelector(".sun").style.display = "none";
toggle.style.color = "black";
toggle.style.background = "rgba(255, 255, 255, 0.11)";
toggle.style.boxShadow="0 0 8px black";}

 //code for skills that pop up on hovering

 images = document.querySelectorAll('.skill img');
    for (i = 0; i < images.length; i++) {
      images[i].onmouseover = function () {
        if(toggle_value==0)
        this.parentNode.style.color = "skyblue";
        else 
        this.parentNode.style.color = "lightgrey";

      }
    }
    for (i = 0; i < images.length; i++) {
      images[i].onmouseout = function () {
        this.parentNode.style.color = "rgba(255, 255, 255, 0)";
      }
    }