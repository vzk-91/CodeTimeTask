let d=new Date();
let p=new Date(d.getTime());
let monthA=['01','02','03','04','05','06','07','08','09','10','11','12'];
let changeTime = p.getDate()+ 2 +'.'+monthA[p.getMonth()]+'.'+p.getFullYear();

$(".validity_time").text(changeTime);