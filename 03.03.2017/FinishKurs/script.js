function getTime(d,m){
	var day=d;
	var mon=m;
	for(i=4;i<=300;i+=4){
		var d = new Date(mon+"/"+day+"/2017");
	 	if(d.getDay()==6 || d.getDay()==0){
	 		i-=4;
	 	}

	 	if((mon==4 && day==30) || (mon==2 && day==28) || (day==31)){
	 		day=1;
	 		mon++;
	 	}else{
	 		day++;
	 	}
	 	
	 console.log(d+'---'+i);
	}

	return d;
}	
var t=getTime(23,1);

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

document.getElementsByClassName("date")[0].innerHTML = t.getDate();
document.getElementsByClassName("month")[0].innerHTML = monthNames[t.getMonth()];
document.getElementsByClassName("year")[0].innerHTML = t.getFullYear();

