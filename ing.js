function hub(){
scrSize=screen.width;
rstt = localStorage.getItem('RKey');

if(rstt != null) {

    obj = JSON.parse(rstt);

theme=obj.Rt_name;
x=obj.Rx;
f_vp=obj.Rf_vopr;
l_vp=obj.Rl_vopr;
t_id=obj.Rt;
localStorage.removeItem('RKey');
  ga_storage._trackPageview('Тренировка', ' '+theme+'');
select(theme,x,f_vp,l_vp);

}

rst = localStorage.getItem('key');

if(rst != null) {

    obj = JSON.parse(rst);

theme=obj.ztheme;
x=obj.zx;
f_vp=obj.zf_vp;
l_vp=obj.zl_vp;
stus=obj.zstus;
dfnn=obj.za;
correct=obj.zcorrect;
incorrect=obj.zincorrect;
allcorrect=obj.zallcorrect;
correct2=obj.zcorrect2;
counter = dfnn;


 if (x<=9){

incorrect=0;
rating=correct2;
 art='Правильно: ';
 drt=' ';
 }else{
 rat = (correct-incorrect);   //rat = ((correct-incorrect)*100/(allcorrect));
 rating=Math.round(rat);
  art='Правильно: ';
  drt=' ';
 }

localStorage.removeItem('key');
select(theme,x,f_vp,l_vp,stus);
}else{
}

}


var dfnn;


// вывод с БД 
 var b;
 var Temp;
 counter = 0;
 rating=0;
  	var correct=0;
  var incorrect=0;
    var normal=0;
		art='';
	    drt='';
		var correct2=0;
	var allcorrect=0;
	var f_vp; //первый вопрос
	var l_vp; //крайний вопрос
		var dss=0;
		var x=0;
		str=0;
		st=0;
		   nd =0;
		   stus=0;
		   
		function type3e(theme,x,f_vp,l_vp,stus){ 
		    var ostB = document.getElementById("elem2").innerHTML;
str = new Array();
     		b=answers.split("-");
  lenn=b.length;
  
  var f=answers.split("|");
  var as=f[0].slice(1);
  
	 for (u = 0; u < lenn-1; u++){

			str[u]=document.getElementsByName('hhh')[u].value;
			
			}


switch (u) {
    case 2:
 str='1-'+str[0]+' 2-'+str[1];
    break
  case 3:
 str='1-'+str[0]+' 2-'+str[1]+' 3-'+str[2];
    break
  case 4:
    str='1-'+str[0]+' 2-'+str[1]+' 3-'+str[2]+' 4-'+str[3];
	break
  case 5:
    str='1-'+str[0]+' 2-'+str[1]+' 3-'+str[2]+' 4-'+str[3]+' 5-'+str[4];
    break
	  case 6:
    str='1-'+str[0]+' 2-'+str[1]+' 3-'+str[2]+' 4-'+str[3]+' 5-'+str[4]+' 6-'+str[5];
    break
	  case 7:
    str='1-'+str[0]+' 2-'+str[1]+' 3-'+str[2]+' 4-'+str[3]+' 5-'+str[4]+' 6-'+str[5]+' 7-'+str[6];
    break
		case 8:
    str='1-'+str[0]+' 2-'+str[1]+' 3-'+str[2]+' 4-'+str[3]+' 5-'+str[4]+' 6-'+str[5]+' 7-'+str[6]+' 8-'+str[7];
    break
			case 9:
    str='1-'+str[0]+' 2-'+str[1]+' 3-'+str[2]+' 4-'+str[3]+' 5-'+str[4]+' 6-'+str[5]+' 7-'+str[6]+' 8-'+str[7]+' 9-'+str[8];
    break
  default:
    str='1-'+str[0]+' 2-'+str[1]+' 3-'+str[2]+' 4-'+str[3]+' 5-'+str[4]+' 6-'+str[5]+' 7-'+str[6]+' 8-'+str[7]+' 9-'+str[8]+' 10-'+str[9];
}

var ds=(str.toLowerCase());
var fs=(as.toLowerCase());

if(fs==ds){
 ostB +='<center><div class="foT4" style="color:green;" >'+ds+'</div><hr>';
allcorrect++
correct++
}else{
 ostB +='<center><div class="foT4" style="color:red;clear:left" >'+ds+'</div>- - - - - - - - - <div class="foT4" style="color:black; clear:left" >'+as+'</div><hr>';
allcorrect++
incorrect++
otrabot(x);
 }
 ostB +='<br><center><div style="clear:left; margin:10px;"></div><br><div class="block3" onclick="select(\''+theme+'\','+x+','+f_vp+','+l_vp+','+stus+')"><p align="center">Следующий вопрос</p></div></center>';



 if (x<=9){
if(incorrect<=0 && correct>0){
correct2++
}
incorrect=0;
rating=correct2;
 art='Правильно: ';
 drt=' ';
 }else{
 rat = (correct-incorrect+1);     //rat = ((correct-incorrect)*100/(allcorrect));
  rating=Math.round(rat);       //rating=Math.round(rat);
   art='Правильно: ';          //art='';
   drt=' ';                   //drt='%';


 }
 var Temp=ostB;
 		document.getElementById("head").innerHTML = '<div class="block1" ><center><table style="width:100%;"><tr><td style="width:10%"><img src="img/arra.png" align="left" alt="Smiley face" height="21" onclick="Back('+x+')"></td><td align="center"><p align="center" >'+theme+'<br><p align="center" >Вопрос №'+a+'('+all+')<br><b>'+art+''+rating+''+drt+'</b></td><td style="width:10%" ><img src="img/ch.png" align="right" alt="Smiley face" height="21" onclick="end(\''+theme+'\','+x+','+f_vp+','+l_vp+')"></td></tr></table></center></p></div>';
 document.getElementById("elem").innerHTML = Temp;
		}  
		  
		  function addText(txt,theme,x,f_vp,l_vp,stus){ 
		  
		  
  var ostB = document.getElementById("elem2").innerHTML;
  var b=answers.split("|");
  var as=b[0].slice(1);

var str=document.getElementById(txt).value; 
var ds=(str.toLowerCase());
var fs=(as.toLowerCase());
if(fs==ds){
 ostB +='<center><div class="foT4" style="color:green;" >'+ds+'</div><hr>';
allcorrect++
correct++
}else{
 ostB +='<center><div class="foT4" style="color:red;" >'+ds+'</div>- - - - - - - - - <div class="foT4" style="color:black;" >'+as+'</div><hr>';
allcorrect++
incorrect++
otrabot(x);
 }
 ostB +='<br><center><div style="clear:left; margin:10px;"></div><br><div class="block3" onclick="select(\''+theme+'\','+x+','+f_vp+','+l_vp+','+stus+')"><p align="center">Следующий вопрос</p></div></center>';

 if (x<=9){
if(incorrect<=0 && correct>0){
correct2++
}
incorrect=0;
rating=correct2;
 art='Правильно:';
 drt=' ';
  }else{
  rat = (correct-incorrect+1);    //rat = ((correct-incorrect)*100/(allcorrect));
   rating=Math.round(rat);       //rating=Math.round(rat);
    art='Правильно: ';          //art='';
    drt=' ';                    //drt='%';
 }
 var Temp=ostB;
 		document.getElementById("head").innerHTML = '<div class="block1" ><center><table style="width:100%;"><tr><td style="width:10%"><img src="img/arra.png" align="left" alt="Smiley face" height="21" onclick="Back('+x+')"></td><td align="center"><p align="center" >'+theme+'<br><p align="center" >Вопрос №'+a+'('+all+')<br><b>'+art+''+rating+''+drt+'</b></td><td style="width:10%" ><img src="img/ch.png" align="right" alt="Smiley face" height="21" onclick="end(\''+theme+'\','+x+','+f_vp+','+l_vp+')"></td></tr></table></center></p></div>';
 document.getElementById("elem").innerHTML = Temp;

} 
 
function select(theme,x,f_vp,l_vp,stus){

stus=stus;

all=l_vp-f_vp+1;

if (dfnn == 888 || dfnn ==undefined){
a=(++this.counter);

if (a==3 || a==50 || a==100 || a==150 || a==200 || a==250 || a==300 || a==350 || a==400 || a==450 || a==500 || a==550){
reset(theme,x,f_vp,l_vp,stus,a,correct,incorrect,allcorrect,correct2);
} // разобраться что за процедура
}else{a=dfnn;
dfnn = 888;
 localStorage.removeItem('key');
}
dss=a+f_vp-1;


if (a>all) { end(theme,x,f_vp,l_vp)}else{
var db = openDatabase('DB8', '2.0', 'Test DB', 5 * 1024 * 1024);
db.transaction(function (tx) {


if(stus > 0){ nd =0; uyt='data'; tid='';}else{uyt='quests';tid='t_id,';}



  tx.executeSql('SELECT id,'+tid+'quest,answers,type FROM '+uyt+' WHERE id='+dss+'', [], function (tx, results) {
   var len = results.rows.length, i; // получает количество id
      for (i = 0; i < len; i++){ // циклит
   var  id = results.rows.item(i).id;
   t_id = results.rows.item(i).t_id;
    type = results.rows.item(i).type;
	  quest = results.rows.item(i).quest;
 answers = results.rows.item(i).answers;
		document.getElementById("head").innerHTML = '<div class="block1" ><center><table style="width:100%;"><tr><td style="width:10%"><img src="img/arra.png" align="left" alt="Smiley face" height="21" onclick="Back('+x+')"></td><td align="center"><p align="center" >'+theme+'<br><p align="center" >Вопрос №'+a+'('+all+')<br><b>'+art+''+rating+''+drt+'</b></td><td style="width:10%" ><img src="img/ch.png" align="right" alt="Smiley face" height="21" onclick="end(\''+theme+'\','+x+','+f_vp+','+l_vp+')"></td></tr></table></center></p></div>';
	
	document.getElementById("equest").innerHTML = '<center><div class="newTT" ><br><b>'+quest+'</b><br><br></font></div ></center>';

}
  
  var Temp = document.getElementById("elem").innerHTML;
  var postB = document.getElementById("elem2").innerHTML;
if (type==4){ // для типа вопросов 4

postB +='<center><br><br><input id="text" class="t4form" type="text" placeholder="Введите ответ" /><br><br><br><hr>';
postB +='<br><br><div class="block3"  onclick="addText(\'text\',\''+theme+'\','+x+','+f_vp+','+l_vp+','+stus+')" >Ответить</div></center>';

}else if(type==3){ // для вывода соответствия
postB +='<center><br><br>';
 b=answers.split("-");
  lenn=b.length;
     for (u = 0; u < lenn-1; u++){
 num='num'+u+'';
 dn=u+1;
  
if(u==4 & scrSize<390 || u==5 & scrSize<420 & scrSize>390 || u==8 & scrSize<390 || u==9 & scrSize<420 & scrSize>390){
 postB +='<br><br><label class="foT3">'+dn+' - </label><input class="t3form" type="text" maxlength="1" name="hhh" />';   
}else{
 postB +=' <label class="foT3">'+dn+' - </label><input class="t3form" type="text" maxlength="1" name="hhh" />';
  /*postB +='<label style="font-family: Helvetica; font-size: 20px;"> '+dn+' - </label><input class="t3form" type="text" maxlength="1" id="text"  />'; */
}
}
postB +='<br><br><br><hr><br><br><div class="block3"  onclick="type3e(\''+theme+'\','+x+','+f_vp+','+l_vp+','+stus+')">Ответить</div></center>';


}else{
 b=answers.split("|"); // для других типов вопросов
 lenn=b.length;
 if(type==2){stl="<div class=\"vtype2\" ><p class=\"vPtype2\">";}else{stl="<div class=\"block2\" ><p style=\"margin:0 0 0 10px;\">";}
   for (u = 0; u < lenn-1; u++){
    	  num='num'+u+'';
	  postB +='<label>'+stl+'<input type="checkbox" id='+num+'> '+b[u].slice(1)+'<br></p></div></label>';
   }
    postB +='<br> <center><div style="clear:left; margin:10px;"></div><br><div class="block3" onclick="e(\''+theme+'\','+x+','+f_vp+','+l_vp+','+stus+')"><p align="center">Ответить</p></div></center>';

}
  Temp= postB;
  document.getElementById("elem").innerHTML = Temp;
//alert(ku);



 }, null);
});

}
}
function e(theme,x,f_vp,l_vp,stus){ // для обозначения правильного ответа Е и его цвета при неправильном варианте
    var ostB = document.getElementById("elem2").innerHTML;
  if(type==2){stl="<div class=\"vtype2\" ><p class=\"vPtype2\">";}else{stl="<div class=\"block2\" ><p style=\"margin:0 0 0 10px;\">";} // для типа 2 те несколько правильных ответов
 for (el = 0; el < lenn-1; el++){
		f='num'+el+'';
		ii= document.getElementById(f).checked;
		if (ii==true && b[el].charAt(0)=='@')
										{
										correct++
										ostB+=''+stl+'<input type="checkbox" checked><font color="green">  '+b[el].slice(1)+'</font><br></p></div>';
										allcorrect++
										}
										else if (ii==false && b[el].charAt(0)=='?')
										{ 
										ostB+=''+stl+'<input type="checkbox" >  '+b[el].slice(1)+'<br></p></div>';
										normal++
										}
										else if (ii==true && b[el].charAt(0)=='?')
										{
										incorrect++
										ostB+=''+stl+'<input type="checkbox"  checked><font color="red">  '+b[el].slice(1)+'</font><br></p></div>';
										 otrabot(x);
										}
										else
										{
										incorrect++
										ostB+=''+stl+'<input type="checkbox" ><font color="red">  '+b[el].slice(1)+'</font><br></p></div>';
										allcorrect++
										otrabot(x);
										}
 }
 /* alert(correct);  alert(incorrect);  alert(allcorrect); // если что меняй в обратку, т.е убирай эти строки */

if (x<=9){
if(incorrect<=0 && correct>0){
correct2++
}
incorrect=0;
rating=correct2;
 art='Правильно:';
 drt=' ';
 }else{
   rat = (correct-incorrect+1);    //rat = ((correct-incorrect)*100/(allcorrect));
    rating=Math.round(rat);      //rating=Math.round(rat);
     art='Правильно:';          //art='';
     drt=' ';                   //drt='%';
 }
 ostB +='<br><center><div style="clear:left; margin:10px;"></div><br><div class="block3" onclick="select(\''+theme+'\','+x+','+f_vp+','+l_vp+','+stus+')"><p align="center">Следующий вопрос</p></div></center>';
 Temp=ostB;
 		document.getElementById("head").innerHTML = '<div class="block1" ><center><table style="width:100%;"><tr><td style="width:10%"><img src="img/arra.png" align="left" alt="Smiley face" height="21" onclick="Back('+x+')"></td><td align="center"><p align="center" >'+theme+'<br><p align="center" >Вопрос №'+a+'('+all+')<br><b>'+art+''+rating+''+drt+'</b></td><td style="width:10%" ><img src="img/ch.png" align="right" alt="Smiley face" height="21" onclick="end(\''+theme+'\','+x+','+f_vp+','+l_vp+')"></td></tr></table></center></p></div>';
 document.getElementById("elem").innerHTML = Temp;

}


function repeat(theme,x,f_vp,l_vp){

del();
select (theme,x,f_vp,l_vp);

}
function del(){
stus=0;
counter = 0;
 rating=0;
 correct=0;
 correct2=0;
 incorrect=0;
 normal=0;
 allcorrect=0;
 localStorage.removeItem('key');
var db = openDatabase('otr', '1.0', 'Test DB', 1 * 1024 * 1024);
db.transaction(function(tx)
    {
      tx.executeSql('DELETE FROM otrabot');
	  tx.executeSql('DELETE FROM sqlite_sequence');
    });

del2();

	
}

function del2(){
	var db = openDatabase('DB8', '2.0', 'Test DB', 5 * 1024 * 1024);
	
	db.transaction(function(tx)
    {
      tx.executeSql('DELETE FROM data');
	 
    }); 
}

function end(theme,x,f_vp,l_vp){

document.getElementById("head").innerHTML = '<div align="center" class="block1" ><div style="padding:10px 15px 10px 15px" >'+theme+'<br>Отчёт</div> </div>';
document.getElementById("equest").innerHTML = '<div class="newTT" ><font face="Helvetica" ><center><b>'+art+' '+rating+''+drt+'</b></center><br></font></div>';
if (stus==1){

document.getElementById("elem").innerHTML = '<br> <center><div class="block3" onclick="Back('+x+')"><p align="center">Выход</p></div></center>';

}else{
document.getElementById("elem").innerHTML = '<br> <center><div class="block3" onclick="select_error(\''+theme+'\','+x+','+f_vp+','+l_vp+')"><p align="center">Вернуть ошибочные</p></div><br><div class="block3" onclick="repeat(\''+theme+'\','+x+','+f_vp+','+l_vp+')"><p align="center">Повторить</p></div><br><div class="block3"  onclick="Back('+x+')"><p align="center">Выход</p></div></center>';

}
}

function select_error(theme,x){
if(incorrect>0 || all!=correct2 && a>1){
document.getElementById("head").innerHTML = '<div align="center" class="block1" ><div style="padding:10px 15px 10px 15px" >'+theme+'<br>Отчёт<div class="temen"><div class="loading"><img src="img/load2.gif"  height="31"><br><br> Загрузка.. </div></div> </div></div>';
}else{
alert('Ошибок нет!');
}
a=0;
counter = 0;
 rating=0;
 correct=0;
  correct2=0;
 incorrect=0;
 normal=0;
 allcorrect=0;

zblo(theme,x);

}

function zblo(theme,x){
 var db = openDatabase('otr', '1.0', 'Test DB', 1 * 1024 * 1024);
 db.transaction(function (tx) {
tx.executeSql('SELECT q_id FROM otrabot', [], function (tx, results) {

   var len = results.rows.length, i; // получает количество id
   for (i = 0; i < len; i++){
   q_id = results.rows.item(i).q_id;

fuckoff(q_id,theme,x,len);


   }

 }, null);

});


}

   function fuckoff(q_id,theme,x,len){

 var db = openDatabase('DB8', '2.0', 'Test DB', 5 * 1024 * 1024);
db.transaction(function (tx) {
  tx.executeSql('SELECT quest, answers,type FROM quests WHERE id='+q_id+'', [], function (tx, results) {
   var len3 = results.rows.length, i2; // получает количество id
      for (i2 = 0; i2 < len3; i2++){ // циклит

  quest = results.rows.item(i2).quest;
 answers = results.rows.item(i2).answers;
 type_v= results.rows.item(i2).type;


nd++;
zaebalo(nd,quest,answers,theme,x,len,type_v);
}


//alert(ku);
 }, null);



});
   }


   function zaebalo (nd,quest,answers,theme,x,len,type_v){

	var db = openDatabase('DB8', '2.0', 'Test DB', 5 * 1024 * 1024);
				db.transaction(function (tx) {
				tx.executeSql('CREATE TABLE IF NOT EXISTS data (id unique,quest, answers,type)');
				tx.executeSql('INSERT INTO data(id,quest,answers,type) VALUES ('+nd+',\''+quest+'\',\''+answers+'\',\''+type_v+'\')');

if (nd==len){
nd=0;
stus=1;
prst(theme,x,len);
}
});


   }

function prst(theme,x,len){



select(theme,x,1,len,1);

}


function otrabot(x){

var db = openDatabase('otr', '1.0', 'Test DB', 1 * 1024 * 1024);
db.transaction(function (tx) {
tx.executeSql('CREATE TABLE IF NOT EXISTS otrabot (id INTEGER PRIMARY KEY AUTOINCREMENT,q_id unique)');
tx.executeSql('INSERT INTO otrabot (q_id) VALUES ('+dss+')');

});
}

function reset(theme,x,f_vp,l_vp,stus,a, correct,incorrect,allcorrect,correct2)
{
var val ='{\"ztheme\":\"'+theme+'\",\"zx\":'+x+',\"zf_vp\":'+f_vp+',\"zl_vp\":'+l_vp+',\"zstus\":\"'+stus+'\",\"za\":'+a+',\"zcorrect\":'+correct+',\"zincorrect\":'+incorrect+',\"zallcorrect\":'+allcorrect+',\"zcorrect2\":'+correct2+'}';

 localStorage.setItem('key', val);
location.reload();


//localStorage.removeItem('key'); // удаляет

}
function Back(x){
var val ='{\"Bx\":'+x+'}';

 localStorage.setItem('BKey', val);


document.location.href = 'theme.html';




}