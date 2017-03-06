var txt= document.getElementsByTagName("p")[0];

function setBold(){
	txt.style.fontWeight = "bold";
}

function setItalic(){
	txt.style.fontStyle = "italic";
}

function initial(){
	txt.style.fontWeight = "initial";
	txt.style.fontStyle = "initial";
	txt.style.fontSize = "initial";
	document.getElementsByTagName("select")[0].value="16px";
}

function sizeTxt(t){
	txt.style.fontSize = t.value;
	console.log(t);
}