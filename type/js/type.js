var data = [];
for(var i=65;i<91;i++){
  data.push(String.fromCharCode(i));
}
console.dir(data);
var div = document.querySelector('.container')
document.body.onkeyup = function(e){
  var temKey = e.key.toUpperCase();
  if(temKey==currentZiMu){
    generatorChar();
  }
  else{
    if(data.indexOf(temKey)>-1){
        alert("输入错误!");
    }
  }
}
var currentZiMu = ""; //定义当前显示的字母
generatorChar();
// 在div中生成随机字母
function generatorChar(){
  var randomIndex = Math.floor((Math.random()*26));
  currentZiMu = data[randomIndex];
  div.innerText = currentZiMu;
  div.style.color = 'hsl('+Math.random()*360+',50%,50%)';
}
