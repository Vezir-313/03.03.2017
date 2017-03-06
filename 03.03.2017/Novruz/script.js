function timer(){
var end = new Date("03.20.2017");
var now = new Date();
var d = Date.parse(end)-Date.parse(now);
if(d>0){
var sec = Math.floor(d / 1000)%60;
var min = Math.floor(((d / 1000) / 60) % 60);

var hour = Math.floor((d / (1000*60*60))% 24);
var day = Math.floor(d / (1000 * 60 * 60 *24));

console.log(day+" gun "+hour+" saat "+min+" deqiqe "+sec+" saniye qalif");

document.getElementsByClassName("sec")[0].innerHTML=sec;
document.getElementsByClassName("day")[0].innerHTML=day;
document.getElementsByClassName("hour")[0].innerHTML=hour;
document.getElementsByClassName("min")[0].innerHTML=min;
setTimeout(timer, 500);
}
else {
document.getElementsByClassName("sec")[0].innerHTML="0";
document.getElementsByClassName("day")[0].innerHTML="0";
document.getElementsByClassName("hour")[0].innerHTML="0";
document.getElementsByClassName("min")[0].innerHTML="0";
}
}

timer();