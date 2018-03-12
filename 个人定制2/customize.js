var article1=document.getElementById("article1");
var article2=document.getElementById("article2");
var article3=document.getElementById("article3");

var block1=document.getElementById("block1");
var block2=document.getElementById("block2");
var block3=document.getElementById("block3");

var body=document.getElementById("move");

block1.onclick=function(){
	block1.style.backgroundColor="#EFEFEF";
	block1.style.color="#666666";
	block2.style.backgroundColor="#65AB8E";
	block2.style.color="#fff";
	block3.style.backgroundColor="#65AB8E";
	block3.style.color="#fff";
	article1.style.display="block"
	article2.style.display="none";
	article3.style.display="none";
	body.style.position="relative";
	body.style.left="0px";
	
}
block2.onclick=function(){
	block2.style.backgroundColor="#EFEFEF";
	block2.style.color="#666666";
	block1.style.backgroundColor="#65AB8E";
	block1.style.color="#fff";
	block3.style.backgroundColor="#65AB8E";
	block3.style.color="#fff";
	article2.style.display="block"
	article1.style.display="none";
	article3.style.display="none";
	body.style.position="relative";
	body.style.left="0px";
}
block3.onclick=function(){
	block3.style.backgroundColor="#EFEFEF";
	block3.style.color="#666666";
	block2.style.backgroundColor="#65AB8E";
	block2.style.color="#fff";
	block1.style.backgroundColor="#65AB8E";
	block1.style.color="#fff";
	article3.style.display="block"
	article2.style.display="none";
	article1.style.display="none";
	body.style.position="relative";
	body.style.left="0px";
	
}