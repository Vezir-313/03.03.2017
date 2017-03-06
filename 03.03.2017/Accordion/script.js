document.getElementsByClassName("accor")[0].style.height="300px";

function reset(){
 b=document.getElementsByClassName("accor");

	for(i = 0; i < b.length;i++){
		if(b[i].getElementsByTagName("div")[0].getAttribute("class")=="ok2"){
			b[i].getElementsByTagName("div")[0].setAttribute("class","ok");
			b[i].style.height="40px";
			b[i].getElementsByTagName("i")[0].setAttribute("class","fa fa-caret-right");
			 console.log(i+1+" Changed");
		}

	}
}


function okay(t){
	reset();

	t.style.height="300px";
	t.getElementsByTagName("i")[0].setAttribute("class","fa fa-caret-down");	
	t.getElementsByTagName("div")[0].setAttribute("class","ok2");
}

