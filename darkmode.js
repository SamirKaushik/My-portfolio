var hbutton=document.querySelectorAll(".header-button");
    var icons=document.querySelectorAll(".social-media");
    var icons2=document.querySelectorAll(".social-media-");
    var toggle = document.querySelector(".toggle-dark");
    var toggle_value = 0; //normal mode=0
    toggle.onclick = function () {
      if (toggle_value == 0)
        toggle_value = 1;
      else toggle_value = 0;
      if (toggle_value == 1) {
        document.querySelector(".header").style.background = "black";
        for(var i=0;i<icons.length;i++){
          icons[i].style.color="white";
        }
        for(var i=0;i<icons2.length;i++){
          icons2[i].style.color="white";
        }
        for(var i=0;i<hbutton.length;i++){
          hbutton[i].onmouseover= function(){
            this.style.background="grey";
          }
          hbutton[i].onmouseout= function(){
            this.style.background="inherit";
          }
        }

      }
      else{
        document.querySelector(".header").style.background = "darksalmon";
        for(var i=0;i<icons.length;i++){
          icons[i].style.color="black";
        }
        for(var i=0;i<icons2.length;i++){
          icons2[i].style.color="black";
        }
        for(var i=0;i<hbutton.length;i++){
          hbutton[i].onmouseover= function(){
            this.style.background="#c97052";
          }
          hbutton[i].onmouseout= function(){
            this.style.background="inherit";
          }
        }
        for(var i=0;i<icons.length;i++){
          icons[i].onmouseover= function(){
            this.style.color="white";
          }
          icons[i].onmouseout= function(){
            this.style.color="black";
          }
        }

      }
    }
