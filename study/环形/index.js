var progessDom = document.querySelector(".progess");
var textDom = document.querySelector(".text");

function rotateCircle(persent) {
  var circleLength = Math.floor(
    2 * Math.PI * parseFloat(progessDom.getAttribute("r"))
  );
  var value = (persent * circleLength) / 100;

  var red = 255 + parseInt(((0 - 255) / 100) * persent);
  var green = 0 + parseInt(((191 - 0) / 100) * persent);
  var blue = 0 + parseInt(((255 - 0) / 100) * persent);

  progessDom.setAttribute("stroke-dasharray", value + ",10000");
  progessDom.setAttribute("stroke", `rgb(${red},${green},${blue})`);

  textDom.innerHTML = persent + "%";
  textDom.setAttribute("fill", `rgb(${red},${green},${blue})`);
}

let num = 0;
setInterval(() => {
  num++;
  if (num > 100) {
    num = 0;
  }
  rotateCircle(num);
}, 30);
