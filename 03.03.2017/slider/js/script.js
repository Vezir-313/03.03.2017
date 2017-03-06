var a=document.getElementById("slider");

var dizi=["image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg"];

var i=0;
var j;

function saga() {
	
	i++;
	if(i==5){
		i=0;
	}
	j=i;
	a.style.backgroundImage="url(" + dizi[j] + ")";

	// console.log(dizi[j])
}

function sola() {
	i--;
	if(i==-1){
		i=4;
	}
	j=i;
	a.style.backgroundImage="url(" + dizi[j] + ")";
}