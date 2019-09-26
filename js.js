let attempts=4;/*Попытки*/
let fixedn=getRandomInt(1,10);
document.querySelector(".look").onclick=function () {
let fddd=document.querySelector(".number").value;
if (attempts>0) {
if (fddd>fixedn) {
	document.querySelector(".hint").innerHTML="Поmеньше";
}
if (fddd<fixedn) {
	document.querySelector(".hint").innerHTML="Побольше";
}
if (fddd==fixedn) {
	document.querySelector(".hint").innerHTML="Правuльно";
	document.querySelector(".number").disabled=true;
	let audio = new Audio("Win.mp3");
	audio.play()
}
attempts=attempts-1;}
document.querySelector(".qant").innerHTML=attempts;
if (attempts<=0) {
	document.querySelector(".look").style.textDecoration="line-through";
	document.querySelector(".number").disabled=true;
	let audio = new Audio("Nope1.mp3");
	audio.play()
}
};
document.querySelector(".new").onclick=function () {
	attempts=4;
	fixedn=getRandomInt(1,10);
	document.querySelector(".hint").innerHTML="";
	document.querySelector(".qant").innerHTML=attempts;
	document.querySelector(".look").style.textDecoration="none";
	document.querySelector(".number").disabled=false;
	document.querySelector(".number").value=0;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}