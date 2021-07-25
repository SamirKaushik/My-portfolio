document.body.style.background =
  "linear-gradient(to bottom right,  violet,  indigo)";
function getNumber() {
  return document.getElementById("number").innerText;
}
function getPrevious() {
  return document.getElementById("previous_numbers").innerText;
}
function setPrevious(a) {
  document.getElementById("previous_numbers").innerText +=
    document.getElementById("number").innerText + a;
  document.getElementById("number").innerText = "";
}
function clear_all() {
  document.getElementById("previous_numbers").innerText = "";
  document.getElementById("number").innerText = "";
}
function setNumber(num) {
  document.getElementById("number").innerText = getNumber() + num;
}
function calculate() {
  if (document.getElementById("previous_numbers").innerText != "") {
    document.getElementById("previous_numbers").innerText +=
      document.getElementById("number").innerText;
    document.getElementById("number").innerText = eval(
      document.getElementById("previous_numbers").innerText
    );
    document.getElementById("previous_numbers").innerText = "";
  }
}
function clear_Entry() {
  var previous_num = document.getElementById("previous_numbers").innerText;
  var numb = document.getElementById("number").innerText;
  if (document.getElementById("number").innerText == "") {
    document.getElementById("previous_numbers").innerText = previous_num.slice(
      0,
      -1
    );
  } else document.getElementById("number").innerText = numb.slice(0, -1);
}
function toggle_calculator() {
  if (document.getElementById("toggle_on").style.display == "none") {
    document.getElementById("toggle_off").style.display = "none";
    document.getElementById("toggle_on").style.display = "block";
    document.getElementById("calculator").style.backgroundColor = "white";
    document.getElementById("calculator").style.color = "black";
  } else {
 
    document.getElementById("toggle_on").style.display = "none";
    document.getElementById("toggle_off").style.display = "block";
    document.getElementById("calculator").style.backgroundColor = "black";
    document.getElementById("calculator").style.color = "white";
  }
}
function background_theme() {
  if (
    document.body.style.background ==
    "linear-gradient(to right bottom, violet, indigo)"
  ) {
    document.body.style.background =
      "linear-gradient(to right bottom,  white,  green)";
  } else if (
    document.body.style.background ==
    "linear-gradient(to right bottom, white, green)"
  )
    document.body.style.background =
      "linear-gradient(to right bottom, yellow, red)";
  else if (
    document.body.style.background ==
    "linear-gradient(to right bottom, yellow, red)"
  )
    document.body.style.background =
      "linear-gradient(to right bottom, grey, black)";
  else
    document.body.style.background =
      "linear-gradient(to right bottom, violet, indigo)";
}
