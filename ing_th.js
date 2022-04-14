function hub(){
rstt = localStorage.getItem('BKey');

if(rstt != null) {

    obj = JSON.parse(rstt);

x=obj.Bx;

 localStorage.removeItem('BKey');

 sel(x);

 }else{
discp();
}
}

function discp(){

document.getElementById("head").innerHTML = '<div align="center" class="block4" ><div style="padding:10px 15px 10px 15px" ><center><table style="width:100%;"><tr><td style="width:10%"><img src="img/info.png" align="left" alt="Smiley face" height="21" onclick="info()"></td><td align="center"><b>Проверка знаний</b></td><td style="width:10%" ><img src="img/whel.png" align="right" alt="Smiley face" height="21" onclick="opin()"></td></tr></table></div></div>';
document.getElementById("equest").innerHTML = '<center><div class="newTT" ><font face="Helvetica"><br><b>Выберите раздел</b><br><br></font></div></center>';

 var Temp = document.getElementById("elem").innerHTML;
 var postB = document.getElementById("elem2").innerHTML;
postB='<br> <center> <div class="block6" onclick="sel(1)"><p align="center">Математика<br></p><br></div><br> <center> <div class="block6" onclick="sel(2)"><p align="center">Русский язык</p></div><br> <center> <div class="block6" onclick="sel(3)"><p align="center">Английский язык</p></div><br> <center> <div class="block6" onclick="sel(4)"><p align="center">Весь материал</p></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'; // <center> <div class="block6" onclick="sel(5)"><p align="center">Задания повышенной сложности</p></div><br> <center> <div class="block6" onclick="sel(6)"><p align="center">Тест на общую эрудицию</p></div><center><div class="newTT" ><font face="Helvetica"><br><b>Дополнительно</b><br></font></div><br></center> <center> <div class="block6" onclick="sel(9)"><p align="center">Поступающим в кадетские</p></div><br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>';<center> <div class="block6" onclick="sel(10)"><p align="center">Нормативы по физкультуре</p></div>
 Temp= postB;
  document.getElementById("elem").innerHTML = Temp;
}
function sel(x){
localStorage.removeItem('RKey');
 if(x==1){prname="Математика";}
 else if(x==2){prname="Русский язык";}
 else if(x==3){prname="Английский язык";}
 else if(x==4){prname="Весь материал";}
 else if(x==5){prname="Повышенная сложность";}
 else if(x==6){prname="Тест на общую эрудицию";}
 else if(x==9){prname="Поступающим в кадетские";}
 else if(x==10){prname="Поступающим в кадетские";}
 else{prname="Проверка знаний";}
document.getElementById("head").innerHTML = '<div align="center" class="block4" ><div style="padding:10px 15px 10px 15px" ><center><table style="width:100%;"><tr><td style="width:10%"><img src="img/arra.png" align="left" alt="Smiley face" height="21" onclick="discp()"></td><td align="center"><b>'+prname+'</b></td><td style="width:10%" ><img src="img/clear.png" align="right" alt="Smiley face" height="21"></td></tr></table></center></div></div>';

ga_storage._trackPageview('Главная', ' '+prname+'');

document.getElementById("equest").innerHTML = '<div class="newTT" ><font face="Helvetica"><br><center><b>Выберите вариант билета</b></center><br></font></div>';
 var Temp = document.getElementById("elem").innerHTML;
 var ostB = document.getElementById("elem2").innerHTML;

 var db = openDatabase('TB8', '2.0', 'Test DB', 1 * 1024 * 1024);
db.transaction(function (tx) {

  tx.executeSql('SELECT id, f_vopr, l_vopr, t_name FROM theme WHERE p_id='+x+'', [], function (tx, results) {
  //WHERE p_id='+p_url+
   var len = results.rows.length, i; // получает количество id
   for (i = 0; i < len; i++){ /// циклит
id = results.rows.item(i).id;
t_name = results.rows.item(i).t_name;
f_vopr = results.rows.item(i).f_vopr;
l_vopr = results.rows.item(i).l_vopr;
nid=i+1;
    ostB +='<center><br><div class="block6"  onclick="choice(\''+t_name+'\','+x+','+f_vopr+','+l_vopr+','+id+')"<p style="margin:0 0 0 7px;">'+t_name+'</p></div></center>';

 Temp =ostB;
	document.getElementById("elem").innerHTML = Temp + '<center><br><div class="block6" onclick="discp()"><p align="center">Выход</p></div></center><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
   }

 }, null);
});
del();
}

function del(){
stus=0;
counter = 0;
 rating=0;
 correct=0;
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

function choice(t_name,x,f_vopr,l_vopr,id){

kl=t_name.length;

 if (kl > 40){
t_name=t_name.substring(0,40);
t_name= t_name+' ...';
}

allv=l_vopr-f_vopr+1;   // количество вопросов
document.getElementById("head").innerHTML = '<div class="block1" ><center><table style="width:100%;"><tr><td style="width:10%"><img src="img/arra.png" align="left" alt="Smiley face" height="21" onclick="sel('+x+')"></td><td align="center"><p align="center" >'+t_name+'<br><p align="center" >Всего вопросов по теме:<br>'+allv+'</td><td style="width:10%" ><img src="img/clear.png" align="right" alt="Smiley face" height="21"></td></tr></table></center></p></div>';
document.getElementById("equest").innerHTML = '<div class="newTT" ><font face="Helvetica" ><br><center><b></b></center><br><br></font></div>';
if(allv<=0){
document.getElementById("equest").innerHTML = '<div class="newTT" ><font face="Helvetica" ><br><center><b>Запуск темы невозможен!<br><br> #Тема в разработке.<br> или <br>#Техническое ограничение приложения.</b></center><br></font></div>';
document.getElementById("elem").innerHTML = '<center><br><div class="block3" onclick="sel('+x+')"><p align="center">Выход</p></div></center>';
}
else if(allv==1){ // для информационных блоков
 document.getElementById("head").innerHTML = '<div class="block1" ><center><table style="width:100%;"><tr><td style="width:10%"><img src="img/arra.png" align="left" alt="Smiley face" height="21" onclick="sel('+x+')"></td><td align="center"><p align="center" >'+t_name+'<br></td><td style="width:10%" ><img src="img/clear.png" align="right" alt="Smiley face" height="21"></td></tr></table></center></p></div>';
 document.getElementById("elem").innerHTML = '<br> <center><div class="block3" onclick="fakeSee('+id+')"><p align="center">Показать документ</p></div><br></font></div></div><br><div class="block3" onclick="sel('+x+')"><p align="center">Выход</p></div></center><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
 }
else if(allv==2){ // для информационных блоков
 document.getElementById("head").innerHTML = '<div class="block1" ><center><table style="width:100%;"><tr><td style="width:10%"><img src="img/arra.png" align="left" alt="Smiley face" height="21" onclick="sel('+x+')"></td><td align="center"><p align="center" ><br>'+t_name+'<br><br></td><td style="width:10%" ><img src="img/clear.png" align="right" alt="Smiley face" height="21"></td></tr></table></center></p></div>';
 document.getElementById("elem").innerHTML = '<br> <center><div class="block3" onclick="fakeSee('+id+')"><p align="center">Показать документ</p></div><br></font></div></div><br><div class="block3" onclick="sel('+x+')"><p align="center">Выход</p></div></center><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
}
else if( allv<26){ // для русского и математики
document.getElementById("elem").innerHTML = '<br> <center><div class="block3" onclick="redirect(\''+t_name+'\','+x+','+f_vopr+','+l_vopr+',1,'+id+')"><p align="center">Тренировка</p></div><br><div class="block3" onclick="redirect(\''+t_name+'\','+x+','+f_vopr+','+l_vopr+',2,'+id+')"><p align="center">Контрольная работа</p></div><br><div class="block3" onclick="sel('+x+')"><p align="center">Выход</p></div></center><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
}
else if(allv>=26){ // для английского и солянки
document.getElementById("elem").innerHTML = '<br> <center><div class="block3" onclick="fakeSee('+id+')"><p align="center">Текст для билета</p></div><br><div class="block3" onclick="redirect(\''+t_name+'\','+x+','+f_vopr+','+l_vopr+',2,'+id+')"><p align="center">Контрольная работа</p></div><br><div class="block3" onclick="sel('+x+')"><p align="center">Выход</p></div></center><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
}
else if(allv>=49){ // для эрудиции
document.getElementById("elem").innerHTML = '<br> <center><div class="block3" onclick="redirect(\''+t_name+'\','+x+','+f_vopr+','+l_vopr+',2,'+id+')"><p align="center">Начать тест</p></div><br><div class="block3" onclick="sel('+x+')"><p align="center">Выход</p></div></center><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
}

}

function redirect(t_name,x,f_vopr,l_vopr,r,id){
var val ='{\"Rt_name\":\"'+t_name+'\",\"Rx\":'+x+',\"Rf_vopr\":'+f_vopr+',\"Rl_vopr\":'+l_vopr+',\"Rt\":'+id+'}';

 localStorage.setItem('RKey', val);

if(r==1){
document.location.href = 'test.html';
}else if(r==2){
document.location.href = 'control.html';
}else{
document.location.href = 'see.html';
}

}
function fakeSee(id) {

document.location.href = id+'.html';

}
function opin(){
document.getElementById("head").innerHTML =  '<div align="center" class="block4" ><div style="padding:10px 15px 10px 15px" > <center><table style="width:100%;"><tr><td style="width:10%"> <img src="img/arra.png" align="left" alt="Smiley face" height="21" onclick="discp()"></td><td align="center"><b>Настройки</b></td><td style="width:10%" ></td></tr></table></div> </div>';

document.getElementById("equest").innerHTML = '<div class="newTT" ><font face="Helvetica"><br><center><b> Если что-то пошло не так )))</b></center></div><br>';

document.getElementById("elem").innerHTML = '<center><br><div class="block3" onclick="up()"><p align="center">Перезагрузка</p></div></center><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>';
}
function up(){
		localStorage.removeItem('LoadC');
var db = openDatabase('DB8', '2.0', 'Test DB', 5 * 1024 * 1024);
db.transaction(function(tx)
    {
      tx.executeSql('DELETE FROM quests');
	  tx.executeSql('DELETE FROM data');
    });
	var dt = openDatabase('TB8', '2.0', 'Test DB', 1 * 1024 * 1024);
	dt.transaction(function(tx)
    {
      tx.executeSql('DELETE FROM theme');
	  });
 setTimeout( 'location="index.html";', 5000 );

document.getElementById("equest").innerHTML = '<div class="newTT" ><font face="Helvetica"><br><center><img src="img/load.gif"   height="21" ></center></div><br>';
}

function info(){
document.getElementById("head").innerHTML = '<div align="center" class="block4" ><div style="padding:10px 15px 10px 15px"> <center><table style="width:100%;"><tr><td style="width:10%"> <img src="img/arra.png" align="left" alt="Smiley face" height="21" onclick="discp()"></td><td align="center"><b>Информация</b></td><td style="width:10%" ></td></tr></table></div> </div>';



document.getElementById("equest").innerHTML = '<div class="newTT" ><font face="Helvetica"><br><center><b>Об авторах</b></center></div><br>';

document.getElementById("elem").innerHTML = '<br><div align="center";  style="width: 98%;"><font face="arial" size="2">Приложение совместимо с материалами начальной школы  <br>Разработчики приложения являются авторами и владельцами материалов. <br> <br>Авторами метод. материалов являются :<br>Коллектив <br> (http://www.kadet.ru)<br> <br>Разработчики оставляют за собой право на извлечение выгоды за использование возможностей приложения перечисленных в описании.<br><br>Владивосток, 2022</font></div><br><br><br><br><br><br><br><br><br><br>';


}
document.onselectstart=function(){return false}
document.oncontextmenu=function(){return false}
document.onmousedown=function(){return false}
