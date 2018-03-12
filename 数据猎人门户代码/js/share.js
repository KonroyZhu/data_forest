/*------------------------------article hover effect --------------------------------*/

function onhover(){
	this.children[3].style.display="block";
}
function onout(){
	this.children[3].style.display="none";
}
var cell1=document.getElementById("sharing-cell1");
var cell2=document.getElementById("sharing-cell2");
var cell3=document.getElementById("sharing-cell3");
var cell4=document.getElementById("sharing-cell4");
var cell5=document.getElementById("sharing-cell5");
var cell6=document.getElementById("sharing-cell6");
cell1.onmouseover=onhover;
cell1.onmouseout=onout;

cell2.onmouseover=onhover;
cell2.onmouseout=onout;

cell3.onmouseover=onhover;
cell3.onmouseout=onout;

cell4.onmouseover=onhover;
cell4.onmouseout=onout;

cell5.onmouseover=onhover;
cell5.onmouseout=onout;

cell6.onmouseover=onhover;
cell6.onmouseout=onout;




/*--------------------------------------------full-text------------------------------*/

var num;/*for changetext function*/
var newcellid;/*for changetext function*/

var full=document.getElementById("full-text");
var closebtn=document.getElementById("close");
var ftitle=document.getElementById("full-text-title");
var farticle=document.getElementById("full-text-text");
var finfoY=document.getElementById("full-info-y");
var finfoW=document.getElementById("full-into-writter");
var frank=document.getElementById("rank");
function show(){
	full.style.display="block";
	/*ftitle.innerHTML="";*/
	/*alert(this.children[2].children[0]);*/
	ftitle.innerHTML=this.children[2].children[0].innerHTML;
	/*alert(this.children[2].children[2]);*/
	farticle.innerHTML=this.children[2].children[3].innerHTML;
	finfoY.innerHTML=this.children[2].children[2].innerHTML;
	finfoW.innerHTML=this.children[2].children[1].innerHTML;
	frank.innerHTML=this.children[0].innerHTML;
	num=this.id;
	newcellid=parseInt(num[12]);
}
function  shut(){
	full.style.display="none";
}

cell1.onclick=show;
cell2.onclick=show;
cell3.onclick=show;
cell4.onclick=show;
cell5.onclick=show;
cell6.onclick=show;
closebtn.onclick=shut;

/*------------------------------- previous & next -----------------------------------*/
var previous=document.getElementById("previous");
var next=document.getElementById("next");


function changetext(id){
	var newcell=document.getElementById(id);
	
	ftitle.innerHTML=newcell.children[2].children[0].innerHTML;
	
	farticle.innerHTML=newcell.children[2].children[3].innerHTML;
	finfoY.innerHTML=newcell.children[2].children[2].innerHTML;
	finfoW.innerHTML=newcell.children[2].children[1].innerHTML;
	frank.innerHTML=newcell.children[0].innerHTML;
}
previous.onclick=function(){
	
	if(1<newcellid){
		newcellid=newcellid-1;
	}else{
		newcellid=6;
	}
	var newid="sharing-cell"+newcellid;
	changetext(newid);
	
}
next.onclick=function(){
	
	if(6>newcellid){
		newcellid=newcellid+1;
	}else{
		newcellid=1;
	}
	var newid="sharing-cell"+newcellid;
	changetext(newid);
}

/*------------------------------------------wechat hover effect----------------------*/
var wechat=document.getElementById("wechat-share");
var QD=document.getElementById("QD-code");
wechat.onmouseover=function(){
	QD.style.display="block";
}
wechat.onmouseout=function(){
	QD.style.display="none";
}
