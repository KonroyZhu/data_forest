
/*板块转换*/
var flow=document.getElementById("flow");
var student=document.getElementById("student");
var teacher=document.getElementById("teacher");
var enterprise=document.getElementById("enterprise");

var article_process=document.getElementById("article-process");
var article_student=document.getElementById("article-student");
var article_teacher=document.getElementById("article-teacher");
var article_enterprise=document.getElementById("article-enterprise");
flow.onclick=function(){
	article_process.style.display="block";
	article_student.style.display="none";
	article_teacher.style.display="none";
	article_enterprise.style.display="none";
	flow.style="border-bottom:1px solid #50b37e;"
	student.style="border-bottom:1px solid #cacaca;"
	teacher.style="border-bottom:1px solid #cacaca;"
	enterprise.style="border-bottom:1px solid #cacaca;"
}
student.onclick=function(){
	article_process.style.display="none";
	article_student.style.display="block";
	article_teacher.style.display="none";
	article_enterprise.style.display="none";
	flow.style="border-bottom:1px solid #cacaca;"
	student.style="border-bottom:1px solid #50b37e;"
	teacher.style="border-bottom:1px solid #cacaca;"
	enterprise.style="border-bottom:1px solid #cacaca;"
}
teacher.onclick=function(){
	article_process.style.display="none";
	article_student.style.display="none";
	article_teacher.style.display="block";
	article_enterprise.style.display="none";
	flow.style="border-bottom:1px solid #cacaca;"
	student.style="border-bottom:1px solid #cacaca;"
	teacher.style="border-bottom:1px solid #50b37e;"
	enterprise.style="border-bottom:1px solid #cacaca;"
}
enterprise.onclick=function(){
	article_process.style.display="none";
	article_student.style.display="none";
	article_teacher.style.display="none";
	article_enterprise.style.display="block";
	flow.style="border-bottom:1px solid #cacaca;"
	student.style="border-bottom:1px solid #cacaca;"
	teacher.style="border-bottom:1px solid #cacaca;"
	enterprise.style="border-bottom:1px solid #50b37e;"
}
/*一键定制*/
var Cbtn=document.getElementById("Cbtn");
var closebtn=document.getElementById("close");
var customize=document.getElementById("customize-section");
Cbtn.onclick=function(){
	customize.style="display:block;";
}
closebtn.onclick=function(){
	customize.style="display:none;";
}
var submitbtn=document.getElementById("sub");
submitbtn.onclick=function(){
	alert("clicked");
}



