function hub(){
rstt = localStorage.getItem('RKey');
if(rstt != null) {
    obj = JSON.parse(rstt);
theme=obj.Rt_name;
x=obj.Rx;
f_vp=obj.Rf_vopr;
l_vp=obj.Rl_vopr;
t_id=obj.Rt;
  ga_storage._trackPageview(' Все вопросы', ' '+theme+'');
allsee(theme,x,f_vp,l_vp);
}
}
yes=1;
no='no.png';
function img(yes){
if (yes==1){yes=2; no='yes.png'}else{yes=1;  no='no.png';}
document.getElementById("head").innerHTML = '<div class="block1" ><p align="center" >'+theme+'<br><img src="img/logo3.png" align="left" alt="Smiley face" height="21" onclick="Back('+x+')"><td align="center"><p align="center">'+theme+'</label><br>Все вопросы по теме.<br><b>#'+vse_vopr+'</b></td><td style="width:10%" ><label for="sem" ><img src="img/'+no+'" align="right" alt="Smiley face" height="26" onclick="img('+yes+')"></label></td></tr></table></center></p></div>';
}
function allsee(theme,x,f_vp,l_vp){
yes=1;
no='no.png';
vse_vopr =l_vp-f_vp+1;

document.getElementById("head").innerHTML = '<div class="block1"><center><table style="width:100%;"><tr><td style="width:10%"></td><td align="center"><p align="center"> <br>Загрузка..<br> </b></td><td style="width:10%" ></td></tr></table></div></center></p></div><div class="temen"><div style="color:white; font-family:Helvetica; font-size: 18px;" align="center" class="loading">Пожалуйста подождите<br>Загрузка.. </div></div>';

document.getElementById("equest").innerHTML = '<center><label for="sem"></label></center>'

var db = openDatabase('DB8', '2.0', 'Test DB', 5 * 1024 * 1024);
db.transaction(function (tx) {


  tx.executeSql('SELECT id,quest, answers,type FROM quests WHERE t_id='+t_id+' ORDER BY id ASC ', [], function (tx, results) {
   var len = results.rows.length, i; // получает количество id
      for (i = 0; i < len; i++){ // циклит
   var  id = results.rows.item(i).id;
  quest = results.rows.item(i).quest;
 answers = results.rows.item(i).answers;
 type = results.rows.item(i).type;
 na=i+1;
  var all= document.getElementById("equest").innerHTML; all+= '<div><div style="clear:left;"/><br><div class="newTT" align="center"><font face="Helvetica"><br><b>#'+na+'<br>'+quest+'</b></font></div ><div style="clear:left; "/><br><hr>';

 b=answers.split("|");
 lenn=b.length;
   for (u = 0; u < lenn-1; u++){
   num='num'+u+'';
   if(type==2){stl="<div class=\"vtype2\" ><p class=\"vPtype2\">";}
   else{stl="<div class=\"block2\"><p style=\"margin:0 0 0 10px;\">";}
 uja=u+1;
   		if (b[u].charAt(0)=='@')
										{
if(x == 1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==9 || x==10 ){
										all+=''+stl+''+b[u].slice(1)+'<br></p></div>';			

}else{
										all+='<div class="block2"><p style="margin:0 0 0 10px;">'+uja+'.'+b[u].slice(1)+'<br></p></div>';
}
	}

	else
		{
if(x == 1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==9 || x==10 ){
if(type==2){stl="<div class=\"vtype2\" style=\"color:black; font-weight: normal;\"><p class=\"vPtype2\">";}
else{stl="<div class=\"block2\" style=\"color:black; font-weight: normal;\" ><p style=\"margin:0 0 0 10px;\">";}
all+=''+stl+''+b[u].slice(1)+'<br></p></div>';		

}else{ all+='<div class="block2" style="color:black; font-weight: normal;" ><p style="margin:0 0 0 10px;">'+uja+'.'+b[u].slice(1)+'<br></p></div>';
    }
}
   }
all+='</div>';	

document.getElementById("equest").innerHTML = all;

}
 setTimeout('img(2);', 20);
document.getElementById("elem").innerHTML = '</div><br>';

 }, null);
 }
);
}
function Back(x){
var val ='{\"Bx\":'+x+'}';

 localStorage.setItem('BKey', val);

document.location.href = 'theme.html';

}
