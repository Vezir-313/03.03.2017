a=document.getElementsByClassName("custom")[0];
kv=document.getElementsByClassName("kv")[0];
uc=document.getElementsByClassName("uc")[0];
daire=document.getElementsByClassName("daire")[0];
a.setAttribute("class","kv");
a.style.width="400px";
a.style.height="400px";
function reset(){
	kv.style.width="100px";
	kv.style.height="100px";

	daire.style.width="100px";
	daire.style.height="100px";

	uc.style.borderWidth= "0 75px 100px 75px";
	a.style.width="0";
	a.style.height="0";
}

function convert(t){
	reset();
	if(t.getAttribute("class")=="uc"){
			a.style.backgroundColor="white";	
	}else if(t.getAttribute("class")=="kv"){
			a.style.backgroundColor="white";
			a.style.backgroundColor=kv.style.backgroundColor;
		}else{
			a.style.backgroundColor="white";
			a.style.backgroundColor=daire.style.backgroundColor;
		}	
	a.setAttribute("class",t.getAttribute("class"));
	if(t.getAttribute("class")=="uc"){
		a.style.borderWidth= "0 300px 400px 300px";
	}else{
		a.style.width="400px";
		a.style.height="400px";
	}
}


function color(t){
	var a=document.getElementById("custom");

	
		if(a.getAttribute("class")=="uc"){
			a.style.backgroundColor="white";
			a.style.borderColor="transparent transparent " + t.value + " transparent";
			uc.style.borderColor="transparent transparent " + t.value + " transparent";	
		}else if(a.getAttribute("class")=="kv"){
			a.style.backgroundColor=t.value;
			kv.style.backgroundColor=t.value;
		}else{
			a.style.backgroundColor=t.value;
			daire.style.backgroundColor=t.value;
		}

}