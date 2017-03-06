a=document.getElementsByTagName('audio')[0];
var musics=["mp3/1.mp3","mp3/2.mp3","mp3/3.mp3","mp3/4.mp3","mp3/5.mp3","mp3/6.mp3"];
var l=musics.length;
var i=0;
var j=0;
function play(){
	a.play();
	check(j);
}

function pause(){
	a.pause();
}

function right(){
	
	i++;
	j=i%l;
	console.log(j+" ---- "+l);
	a.setAttribute("src",musics[j]);
	a.play();
	check(j);
}

function left(){
	i--;
	if(i==-1){
		i=l-1;
	}
	j=i;
	console.log(j);
	a.setAttribute("src",musics[j]);
	a.play();
	check(j);
}

function check(n){
		for (var z = 0; z < musics.length; z++) {
			document.getElementsByTagName("h1")[z].style.backgroundColor="initial";
		    document.getElementsByTagName("h1")[z].style.color="initial";		     
		}
	document.getElementsByTagName("h1")[n].style.backgroundColor="red";
	document.getElementsByTagName("h1")[n].style.color="white";
}