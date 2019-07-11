

var colors = ["white","pink","violet","aqua","lavender","plum"]
math.random() = colors
function backgroundChange() {
  var index = Math.floor(Math.random() * 4);
  document.body.style.backgroundColor = colors[index];


}
