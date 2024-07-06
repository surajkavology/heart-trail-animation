const mainEl = document.querySelector("#main")

mainEl.addEventListener("mousemove", function(dets){
let xpos = dets.clientX;
let ypos = dets.clientY;
const spanEl = document.createElement("span");
mainEl.appendChild(spanEl);
var rn =  Math.floor(Math.random()*100)
spanEl.style.left = xpos + "px";
spanEl.style.top = ypos + "px";
spanEl.style.width = rn + "px"
spanEl.style.height = rn + "px"

setTimeout(function(){
  spanEl.remove()
},3000)
});

console.log(rn)