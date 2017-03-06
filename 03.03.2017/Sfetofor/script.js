
function qirmizi() {
	console.log(" i am qirmizi");
	document.getElementsByClassName("qirmizi")[0].style.backgroundColor="red";
	document.getElementsByClassName("sari")[0].style.backgroundColor="#7F7F00";
	document.getElementsByClassName("yawil")[0].style.backgroundColor="#4A8E11";
	setTimeout(sari,5*500);
}

function sari() {
	console.log(" i am sari");	
	document.getElementsByClassName("sari")[0].style.backgroundColor="yellow";
	document.getElementsByClassName("qirmizi")[0].style.backgroundColor="darkred";
	document.getElementsByClassName("yawil")[0].style.backgroundColor="#4A8E11";
	setTimeout(yawil,2*500);
}

function yawil() {
	console.log("i am yawil");
	document.getElementsByClassName("yawil")[0].style.backgroundColor="green";
	document.getElementsByClassName("sari")[0].style.backgroundColor="#7F7F00";
	document.getElementsByClassName("qirmizi")[0].style.backgroundColor="darkred";
	setTimeout(qirmizi,5*500);
}
qirmizi();

