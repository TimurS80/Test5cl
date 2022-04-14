 function cookie(){
	 LoadC = localStorage.getItem('LoadC');
	if(LoadC != null) {
	   window.location = "theme.html"
	//  alert('HW!');
	}else{
				insert();}
	}

function insert(){
var db = openDatabase('DB8', '2.0', 'Test DB', 5 * 1024 * 1024);
db.transaction(function (tx) {
     tx.executeSql('CREATE TABLE IF NOT EXISTS quests (id unique, p_id, t_id, type, quest, answers)');
// математика 4 варианта по 25 вопросов
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11101,1,10,1,"Чтобы найти неизвестный множитель, надо … ","? из значения произведения вычесть множитель |@ значение произведения разделить на известный множитель |? значение произведения умножить на известный множитель |? значение частного умножить на делитель |? из значения суммы вычесть первое слагаемое |")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11102,1,10,1,"Чему равен квадрат числа 10?","@ 100|? 1000|? 10000|? 10|? 20|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11103,1,10,1,"Чтобы найти скорость, нужно … ","? расстояние умножить на время |@ расстояние разделить на время |? расстояние прибавить к времени|? скорость разделить на время |? скорость умножить на время |")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11104,1,10,1,"Найди, какое расстояние пройдёт поезд за 7 ч, если его скорость всё время будет 80 км/ч ","? 630 км|? 87 км|@ 560 км|? 540 км|? 73 км|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11105,1,10,1,"В театральном кружке занимаются 15 мальчиков, это на 8 человек меньше, чем девочек. Сколько девочек в театральном кружке?","? 120 девочек |? 8 девочек|? 22 девочки |? 7 девочек|@ 23 девочки |")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11106,1,10,1,"Цена тетради 24 рублей. Сколько стоят 4 такие тетради?","? 28 руб |? 100 руб|@ 96 руб|? 69 руб|? 72 руб|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11107,1,10,1,"Чему равна площадь квадрата со стороной 2 дм?","? 4 дм|? 8 дм² |? 8 дм |@ 4 дм² |? 4 см |")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11108,1,10,1,"Укажи, как вычислить периметр прямоугольника со сторонами 3 см и 8 см.","? 3 + 8|? 3*8|? 3+3+8|? 3 + 8 + 8|@ (3 + 8) ∙ 2|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11109,1,10,1,"Значение разности чисел 81423 и 29873 равно ","? 68450|? 62290|? 50560|@ 51550|? 111296|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11110,1,10,1,"Выполни вычисления и выбери правильный ответ: 7961 х 84 ","? 31844|? 95532|? 636880|? 95232|@ 668724|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11111,1,10,1,"Укажи запись числа триста семь","? 370|@ 307|? 703|? 317|? 37|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11112,1,10,1,"Какое число записано как сумма разрядных слагаемых: 500 000 + 7000 + 80 + 3 ?","? 57083|@ 507083|? 5783|? 570083|? 507803|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11113,1,10,1,"В каком числе содержится 600 единиц второго класса?","? 600|@ 60000|? 600000|? 60|? 6000|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11114,1,10,1,"Найди значение выражения (30 + 70) ∙ 6 ","? 106|@ 600|? 160|? 100|? 60|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11115,1,10,1,"Укажи, в каком  выражении порядок действий указан правильно","? 20 х (50 + 60):10 (1-3-2)|@ (80 – 50) : (40 - 30) (1-3-2) |? 80 х3 : 10 + 40  (1-3-2)|?  400 – (280 х 7 + 30) (3-2-1)|? 49 : 7 + 5 х 6 – 31  (1-2-3-4)|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11116,1,10,1,"Вырази в минутах 1 ч 20 мин ","? 60 мин |@ 80 мин |? 90 мин |? 130 мин|? 31 мин |")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11117,1,10,1,"Укажи, сколько в 1 тонне центнеров ","? 100 ц|@ 10 ц|? 15 ц|? 1 ц|? 1000 ц|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11118,1,10,1,"Чему равен куб числа 6?","? 36|? 18|? 236|@ 216|? 72|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11119,1,10,1,"Найди значение выражения  х : 9, где х = 72 ","? 7|? 4|? 6|? 9|@ 8|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11120,1,10,1,"В каком уравнении неизвестное находится сложением?","? 489 – х= 100|@ х – 100 = 480|?  х : 100 = 480|? 4 800 : х = 100|? 214+х = 584|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11121,1,10,1,"Сколько всего десятков содержится в числе 276450?","? 5 десятков|? 7 десятков|@ 27645 десятков|? 27 десятков|? 276 десятков|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11122,1,10,1,"К какому числу надо прибавить 1, чтобы получить 170 000?","? 169 000|@ 169 999|? 16 999|? 170 001|?  160999|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11123,1,10,1,"В числе 46 382 цифрой 6 обозначено количество:","? сотен|? десятков тысяч|? десятков|@ единиц тысяч|? тысяч|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11124,1,10,1,"Найди значение выражения 96 – 56 : 8","@ 89|? 7|? 5|? 103|? 88|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11125,1,10,1,"Укажи выражение, в котором порядок действий определен правильно.","? 14 + 4 : 2 х 6  (3 1 2)|? 14 + 4 : 2 х 6  (3 2 1)|? 4 : 2 + 14 х 6  (1 2 3)|@ 28 : (2 + 12) х 6 (2 1 3)|? 64 – 24 : 8 + 8  (1 2 3)|")');

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11126,1,11,1,"1км², 1м², 1см², 1мм², 1дм² – это единицы измерения...","? времени|? массы|@ расстояния|? площади|? объема|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11127,1,11,1,"Сколько минут в одном часе?","? 100 мин|? 10 мин|@ 60 мин|? 24 мин|? 30 мин|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11128,1,11,1,"Реши уравнение: х∙(40:4) = 12600","? 12590|? 1250|? 1270|? 126|@ 1260|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11129,1,11,1,"Найди значение выражения а : 6, если а = 480","? 70|? 8|@ 80|? 474|? 420|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11130,1,11,1,"Чтобы найти делитель, надо ...","? начение частного разделить на делимое|@ делимое разделить на значение частного|? значение частного умножить на делитель|? значение произведения разделить на второй множитель|? значение частного прибавить к делимому|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11131,1,12,1,"Чему равен квадрат числа 6?","? 216|@ 36|? 12|? 18|? 54|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11132,1,12,1,"Чтобы найти время, нужно ...","? расстояние разделить на время|? расстояние умножить на скорость|? скорость умножить на время|@ расстояние разделить на скорость|? расстояние прибавить к скорости|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11133,1,12,1,"Мотоциклист за 3 часа проехал 210 км. С какой скоростью ехал мотоциклист?","? 70 км|@ 70 км/ч|? 80 км/ч|? 7 км/ч|? 207 км/ч|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11134,1,12,1,"В ларёк привезли 24 ящика яблок, это на 8 ящиков больше, чем апельсинов. Сколько ящиков с апельсинами привезли в ларёк?","? 32 ящика|? 3 ящика|@ 16 ящиков|? 192 ящика|? 56 ящиков|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11135,1,12,1,"Марина купила 4 ручки по 50 рублей. Сколько рублей уплатила Марина за покупку?","? 45 рублей|@ 200 рублей|? 54 рубля|? 250 рублей|? 145 рублей|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11136,1,12,1,"Чтобы найти периметр квадрата, нужно...","? длину стороны квадрата умножить на 2|@ длину стороны квадрата умножить на 4|? длину стороны квадрата умножить на 3|? длины сторон квадрата перемножить|?  две длины сложить|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11137,1,12,1,"Площадь какой фигуры можно вычислить так: 7 ∙ 4?","? квадрата со стороной 7 см|? квадрата со стороной 4 см|@ прямоугольника со сторонами 4 см и 7 см|? прямоугольника со сторонами 4 см и 6 см|? прямоугольника со сторонами 7 см и 3 см|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11138,1,12,1,"Периметр прямоугольника со сторонами 5 см и 3 см можно вычислить так:","@ (5 + 3) ∙ 2|? 5 + 3|? 5 х 3|? 5+ 5 + 3|? 3+3+5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11139,1,12,1,"Значение суммы чисел 52976 и 48679 равно","? 4297|@ 101655|? 96303|? 100555|? 4307|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11140,1,12,1,"Выполни вычисления и выбери правильный ответ 2688 : 32","? 408|? 804|@ 84|? 74|? 94|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11141,1,13,1,"В числе 704 содержится...","? 4 сотни и 7 единиц|? 74 сотни|@ 7 сотен и 4 единицы|? 704 сотни|? 7 сотен 40 единиц|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11142,1,13,1,"Наибольшее четырехзначное число, записанное только двумя цифрами 3и 0, - это число...","? 3 003|? 3 030|@ 3330|? 3333|? 3300|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11143,1,13,1,"Найди значение выражения (3 824 - 1 367) : 3","? 2 457|? 7 371|? 2 460|@ 819|? 273|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11144,1,13,1,"В каком выражении действия надо выполнить в таком порядке: умножение, вычитание, деление?","? 1 * 2 - 1 : 2|? 1 * (2 - 1 : 2)|@ (1 * 2 - 1) : 2|? 2 - 1 : 1 * 2|? 3 : 2 - 1 * 2|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11145,1,13,1,"Укажи число, которое нужно вставить вместо пропуска: 3 т 35 кг = ... кг","@ 3035|? 3 350|? 305|? 3305|? 335|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11146,1,13,1,"Вырази в минутах 6 ч 40 мин","? 360 мин|@ 400 мин|? 340 мин|? 640 мин|? 100 мин|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11147,1,13,1,"Укажи выражение, в котором надо из числа 92 вычесть частное чисел 14 и 2","? 92 – 14 * 2|@ 92 – 14 : 2|? (92 – 14) : 2|? (92 – 14) * 2|? 92 – ( 14 * 2)|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11148,1,13,1,"Укажи значение выражения 900 : b ∙ 10 при b = 90","? 10|? 1000|@ 100|? 1|? 0|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11149,1,13,1,"Укажи значение неизвестного в уравнении 5 ∙ х = 17 + 18","? 5|@ 7|? 4|? 6|? 9|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11150,1,13,1,"Чему равен квадрат числа 8?","? 16|? 32|@ 24|? 64|? 42|")');

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11151,1,14,1,"Сколько времени затратил велосипедист, если он проехал 65 км с одной и той же скоростью 13 км/ч?","@ 5 ч|? 6 ч|? 52 ч|? 4 ч|? 78 ч|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11152,1,14,1,"Из двух городов навстречу друг другу выехали две машины. Скорость первой – 70 км/ч,скорость второй – 80 км/ч. Через сколько часов машины встретятся, если расстояние между городами 150 км?","@ через 1 час|? через 2 часа|? через 3 часа|? через 4 часа|? через 15 часов|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11153,1,14,1,"Домашние куры в год несут 300 яиц, это на 270 яиц больше, чем несут дикие куры. Сколько яиц в год несут дикие куры?","? 570 яиц|@ 30 яиц|? 100 яиц|? 150 яиц|? 330 яиц|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11154,1,14,1,"8 ручек стоят 160 рублей. Сколько стоит одна ручка?","? 200 рублей|@ 20 рублей|? 168 рублей|? 30 рублей|? 152 рубля|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11155,1,14,1,"Площадь комнаты прямоугольной формы 40 квадратных метров, а её длина 8 метров. Площадь комнаты прямоугольной формы 40 квадратных метров, а её длина 8 метров.","? 12 метров|? 6 метров|@ 5 метров|? 4 метра|? 32 метра|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11156,1,14,1,"Как изменится площадь прямоугольника, если длину одной из его сторон уменьшить в 3 раза? ","? останется без изменения|@ уменьшится в 3 раза|?  увеличится в 3 раза|? уменьшится в 9 раз|? увеличится на 3|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11157,1,14,1,"Школьники собрали 648 кг моркови. 1/3 часть всей моркови они разложили в мешки по 8 кг в каждый. Сколько потребовалось мешков?","@ 27 мешков|? 81 мешок|? 432 мешка|? 108 мешков|? 216 мешков|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11158,1,14,1,"Определи верный ход решения задачи: Одна из обувных фабрик делает за 3 минуты 45 пар обуви. Сколько пар обуви она сделает за 5 минут?","? 3 х (45 : 5)|@ 45 : 3 х 5|?  45 – 5 х 3|?  45 : 5 : 3|? 45 : 3: 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11159,1,14,1,"Выбери правильный ответ. (90 : 10 + 1) х 10 – 98 + 4 х 2 ","? 100|? 16|? 0|@ 10|? 8|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11160,1,14,1,"Выполни вычисления и выбери правильный ответ: 4524 х 56 ","@ 253344|? 27144|? 22620|? 226200|? 49764|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11161,1,15,1,"Число 380271 замени суммой разрядных слагаемых.","? 380271 = 300000 + 80000 + 200 + 71|? 380271 = 30000 + 8000 + 200 + 70 + 1|? 380271 = 380000 + 200 +70 +1|@ 380271 = 300000 + 80000 + 200 + 70 + 1|? 380271= 38000 + 270 + 1|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11162,1,15,1,"Найди число, в котором 7 единиц 6 разряда и 2 единицы 2 разряда.","@ 700020|? 702000|? 70020|? 700200|? 700222|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11163,1,15,1,"Значение какого выражения равно значению выражения (90 + 80) ∙ 4?","? 90 ∙ 4 + 80|@ 90 ∙ 4 + 80 ∙ 4|? 4 + 80 ∙ 4|? 60 + 80 ∙ 4|? 90 + 80 ∙ 4|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11164,1,15,1,"Найди значение выражения 360 : 9 + 738 ∙ 0","@ 40|? 778|? 0|? 4|? 798|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11165,1,15,1,"В схеме выражения _ ∙ _ + _ : _ - _ надо выполнять действия в таком порядке: ","? умножение, деление, вычитание, сложение|? деление, умножение, сложение, вычитание|? сложение, вычитание, умножение, деление|@ умножение, деление, сложение, вычитание|? деление, сложение, умножение, вычитание|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11166,1,15,1,"Выбери строку, где значения величин записаны в порядке их увеличения.","? 1 т, 1 ц 5 кг, 1 т 515 кг|@ 60 с, 1 мин 10 с, 90 с|? 1 км, 53 дм, 1010 м|? 2 ч, 1ч 20 мин, 70 мин|? 1м, 20 дм, 1мм, 5км|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11167,1,15,1,"На сколько сантиметров 30 дм больше, чем 3 см?","? на 33 см |? на 27 см |@ на 297 см |? на 303 см|? на 10 см|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11168,1,15,1,"Найди выражение, которое соответствует записи: разность чисел 10987 и 2987 увеличить в 2 раза.","? (10 987 + 2 987) ∙ 2|@ (10 987 - 2 987) ∙ 2|? 10 987 - 2 987 ∙ 2|? (10 987 - 2 987) : 2|? 10 987 - 2 987 :  2|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11169,1,15,1,"Укажи значение выражения 80 : а + 5, если а = 20.","? 35|? 45|? 405|@ 9|? 25|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11170,1,15,1,"Найди значение x в уравнении 9 · x = 415 + 35.","@ 50|? 60|? 40|? 4050|? 600|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11171,1,16,1,"Какое уравнение может быть следующим для такого ряда уравнений-    х ∙ 4 = 20, х ∙ 5 = 25, х ∙ 8 = 40? ","@  х ∙ 9 = 45 |? х ∙ 5 = 50|? х ∙ 10 = 20|? х ∙ 20 = 80|? х∙5 =30|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11172,1,16,1,"Какое произведение можно заменить квадратом числа?","? 3·6|? 3·2|? 2·2·2|@ 20·20|? 6·2|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11173,1,16,1,"Если товарный поезд за 4 часа прошёл 200 км, а пассажирский поезд за то же самое время прошёл 280 км, то какова была скорость пассажирского поезда?","? 40 км/ч |? 60 км/ч |@ 70 км/ч |? 50 км/ч |? 20 км/ч |")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11174,1,16,1,"4 книги стоят 800 рублей. Сколько таких же книг можно купить на 1200 рублей?","? 60 книг|? 7 книг|? 5 книг|@ 6 книг|? 10 книг|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11175,1,16,1,"Площадь прямоугольника 15 квадратных сантиметров, а его ширина 3 см, Чему равен периметр этого прямоугольника?","? 15 см|@ 16 см|? 8 см|? 5 см|? 6 см|")');

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11176,1,16,1,"Ширина бумажной полоски прямоугольной формы 3см, а длина на 5см больше. Как вычислить площадь этой полоски?","? 3 ∙ 5 = 15 см²|@ 3 ∙ (3 + 5) = 24 см²|? (3 + 3 + 5) ∙ 2 = 22 см²|? 3+ 3 + 5 = 11 см²|? 3 ∙ 5 +5 =20 см²|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11177,1,16,1,"Выбери правильный ответ. (1000 : 100 + 1) х 10 + 60 + 2 х 100","? 8300|? 360|? 17200|@ 370|? 6310|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11178,1,16,1,"Выполни вычисления и выбери правильный ответ:17 км 420 м – 8 км 650 м","? 87 км 70 м|? 11 км 230 м|@ 8 км 770 м|? 9 км 230 м|? 26 км 70 м|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11179,1,16,1,"Какое из этих равенств неверное?","? 0 : а = 0 |? х · 1 = х |? с : с = 1 |@ в : 0 = 0 |? а + 0 = а |")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11180,1,16,1,"Выбери верное утверждение: ","@ 1/4 часа = 15 мин |? 1/2 суток = 14 ч|? 1/3 мин = 30 с|? 1/12 года = 3 месяца|? 1/2 км = 600 м|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11181,1,17,1,"В каком числе три класса и в каждом классе по 2 единицы первого разряда?","? 200200200|? 20020020|@ 2002002|? 222|? 200202|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11182,1,17,1,"Укажи число, которое получится, если разность чисел 800 и 500 увеличить на 400.","? 340|? 1700|@ 700|? 30|? 120000|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11183,1,17,1,"Какое число надо вставить вместо х, чтобы равенство 16 : 4 + 24 : 4 = х : 4 стало верным?","? 30|? 16|? 24|@ 40|? 12|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11184,1,17,1,"Выбери вариант верной расстановки действий.  70 – (91 – 48) : 6 – 8 ∙ 4 ","? (1 2 3 4 5)|? (2 1 3 4 5)|@ (4 1 2 5 3)|? (4 3 1 5 2)|? (3 4 1 5 2)|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11185,1,17,1,"Какая пара наименований единиц величин сделает равенство 8__ = 800 __ верным, если наименования брать в том порядке, как они записаны?","? кг и г|@ м и см|? ч и мин|? дм и см|? см и мм|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11186,1,17,1,"На сколько надо уменьшить 4 км, чтобы получить 8 м?","? на 3 км|? на 392 м|@ на 3 992 м|? на 3 002 м|? на 302 м|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11187,1,17,1,"Найди значение числового выражения 9 000 - 72 : 8 ∙ 1000","@ 0|? 1116000|? 18000|? 100|? 9000|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11188,1,17,1,"Укажи значение выражения 84 : 42 ∙ (37 + 63) : 10","@ 20|? 100|? 10|? 200|? 40|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11189,1,17,1,"Из всех пар уравнений, приведенных в ответах, выбери ту пару, в которой значения неизвестных равны между собой.","? 8 ∙ х = 40  и х ∙ 9 = 54 |@ а : 6 = 7  и  а : 2 = 21|? х + 30 = 70  и х + 40 = 80|? b – 20 = 30 и b - 40 = 30|? 50 -с = 10  и 80 - с = 30|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11190,1,17,1,"Укажи значение неизвестного в уравнении 870 – х = 240 + 30","? 270|? 1140|@ 600|? 670|? 1040|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11191,1,18,1,"На дорогу от города до посёлка, расстояние между которыми 160 км, мотоциклист затратил 5 ч, а на обратный путь  - на 1 час меньше. Какова была скорость мотоциклиста на обратном пути?","? 41 км/ч |? 32 км/ч |@ 40 км/ч|? 35 км/ч|? 50 км/ч|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11192,1,18,1,"От двух пристаней одновременно навстречу друг другу отошли два катера, которые встретились через 3 часа. Скорость первого катера была 16 км/ч, а скорость второго – 18 км/ч. Каково расстояние между пристанями?","? 103 км|@ 102 км|? 34 км |? 70 км |? 100 км|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11193,1,18,1,"Коля купил два альбома для рисования по 60 рублей каждый и общую тетрадь за 45 рублей. Сколько денег Коля заплатил за покупку?","? 120 рублей|@ 165 рублей |? 105 рублей|? 140 рублей|? 130 рублей |")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11194,1,18,1,"Найди площадь квадрата, периметр которого равен периметру прямоугольника со сторонами 15 см и 5 см.","@ 100 см²|? 10 см²|? 400 см²|? 400 см²|? 100 см²|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11195,1,18,1,"Длина прямоугольника 5см, а периметр 16 см. Чему равна ширина прямоугольника?","? 11 см|? 21 см|@ 3 см|? 4 см|? 5 см 5мм|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11196,1,18,1,"Чему равен куб числа 8?","? 312|? 18|? 36|@ 512|? 64|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11197,1,18,1,"Определи верный ход решения задачи: За 6 часов один рабочий изготовил 72 детали, а другой  за 5 часов изготовил 70 деталей. На сколько деталей больше изготовил за час второй рабочий, чем первый?","? 72 ∙ 6 + 70 ∙ 5 |? 2 : 6 + 70 : 5|? 72 : 6 – 70 : 5|@ 70 : 5 – 72 : 6|? 72 ∙ 6 – 70 ∙ 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11198,1,18,1,"В одном куске 5 м ткани, во втором 4м такой же ткани. За оба куска заплатили 3600 рублей. Найди цену ткани.","? 900 рублей|? 750 рублей |@ 400 рублей|? 300 рублей|? 720 рублей|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11199,1,18,1,"Выполни вычитание 285960-63729 (не используй калькулятор)","@ 222231|? 222232|? 222241|? 222242|? 22231|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11200,1,18,1,"Реши уравнение: х∙(60:4) = 12600","? 12590|? 1250|? 1270|? 126|@ 840|")');



       /* tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11001,1,13,4,"В выражении 200 + 100 : (20 - 2 ∙ 5) последним выполняется ?","сложение|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11002,1,13,4,"Сумма длин сторон квадрата равна 20 см. Его сторона равна ... см?","@5|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11003,1,13,4,"Площадь прямоугольника со сторонами 3 см и 8 см равна ...с м²?","@24|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11004,1,13,4,"Велосипедист ехал со скоростью 12 км/ч. За сколько часов он проехал 72 км ?","@6|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11005,1,13,4,"Со склада отправили 280 кг овощей. Из них 140 кг - в больницу, а остальные поровну в две школы. Сколько кг овощей отправили в каждую школу?","@периметр|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11006,1,13,4,"Найди значение х. Х ∙ 40 = 320 ","@80|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11007,1,13,4,"Найди значение выражения.  (210 - 20) : 9 ∙ (999+1)=","@20000|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11008,1,13,4,"Найди значение выражения.  70 + 350 : 7 ∙ ( 10 + 990) =","@50070|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11009,1,13,4,"Найди значение х. Х : 10 = 480","@4800|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11010,1,13,4,"Найди значение х. Х ∙ 30 = 210","@70|")');*/

// русский язык 4 варианта по 25 вопросов
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11201,2,1,1,"Выберите слова с безударными гласными, непроверяемыми ударением","@ яблоко|? небеса|@ берёза|? перина|@ экскурсия|? певец|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11202,2,1,1,"Выберите слова, где нужно поставить букву Ж","? ши…ка|@ бума…ка|@ коври…ка|@ пейза…|? отды…ка|@ у…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11203,2,1,1,"Выберите слова с суффиксом – ИК.","@ корабл…|@ глаз…|? ботиноч…|? блиноч…|? глоточ…|@ луч…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11204,2,1,1,"Выберите слова, в которых допущены ошибки","@ милион|@ оссина|@ компррес|? аллея|? группа|@ весна|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11205,2,1,1,"Определите, в каких словах звуков больше, чем букв.","@ ящерицы|@ юмор|? итог|? изюм|? абажур|@ умеет|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11206,2,1,1,"Определите, в каких словах все согласные звонкие.","? желудок|@ минерал|? ноготок|@ магазин|@ рыболов|@ оленевод|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11207,2,1,1,"Определите, какие слова перенесены неправильно.","@ апп- ликация|? ли- вень|@ бо- рьба|@ а- рахис|? ана- лиз|@ за- йка|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11208,2,1,1,"В окончаниях каких слов пишется буква И?","? к Даш…|@ в Сибир…|? о мышк…|? на топол…|@ в тетрад…|@ о мыш…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11209,2,1,1,"В окончаниях каких слов пишется буква Е?","@ к ранн…му утру|? перед горяч…м обедом|@ в ранн…й осени|? со свеж…м морозцем|@ о цветущ…й аллее|? про свеж…й аромат")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11210,2,1,1,"Укажите номера слов, после которых надо поставить запятую. Пичужки кормят и учат птенчиков ищут и находят червячков жучков и паучков.","? 1|? 2|? 3|? 4|@ 5|? 6|? 7|? 8|@ 9|? 10|? 11|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11211,2,2,1,"Выберите букву, которую нужно поставить в слова: объ…зжать, обд…лять, обм…рять, обр…зать","? я|@ е|? и|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11212,2,2,1,"Выберите слова, в которых допущены ошибки.","@ друк|? узкая|?@ клюф|? редкий|@ грятки|? круг|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11213,2,2,1,"Выберите слова, состав которых соответствует схеме (корень - суффикс - окончание)","@ дорожный|@ цветной|? капуста|? прогулка|@ девятка|? дружок|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11214,2,2,1,"В каких случаях надо писать слитно?","? (на)речке|@ (на)рисовал|@ (под)берёзовик|? (под)берёзой|? (с)друзьями|@ (с)лепить|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11215,2,2,1,"Определите, в каких словах букв больше, чем звуков. ","@ антенна|@ альбатрос|@ зеркальце|? ярмарка|@ рожь|? язвенный|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11216,2,2,1,"Определите, в каких словах все гласные 2 – го ряда.","@ линейки|@ пинетки|? селёдка|? посуда|@ резинки|? чечётка|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11217,2,2,1,"Определите, в каких словах ударение падает на 1 – й слог.","@ палуба|@ волосы|? говядина|? посуда|? бирюза|@ луковица|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11218,2,2,1,"Какие из данных слов являются именами существительными?","@ зелень|? летает|@ стройка|? зеленеет|@ лётчик|? строить|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11219,2,2,1,"В окончаниях каких слов пишется буква И?","? от средн…го уха|@ дурманящ…й аромат|? без хорош…го друга|? в соседн…м подъезде|? около рыж…го кота|@ с хорош…м зрением|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11220,2,2,1,"Найдите определения. Яркие звёзды светят на небесном своде. (1 2 3 4 5 6)","@ 1|? 2|? 3|? 4|@ 5|? 6|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11221,2,3,1,"Выберите слова, где нужно поставить букву Ф.","? була…ка|@ жира…|@ телегра…|? морко…ка|? пуго…ки|@ шка…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11222,2,3,1,"Выберите слова, где нужно вставить букву.","@ праз…ник|@ ван…а|? опас…ный|@ сер…це|? ужас…ный|? чудес…ный|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11223,2,3,1,"Выберите слова, состав которых соответствует схеме (приставка-корень-окончание)","? уроки|? дорожка|? заносы|@ садик|@ подруги|@ переходы|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11224,2,3,1,"Выберите слова, в которых допущены ошибки.","@ чемоданьчик|? фонарщик|? мощность|@ птеньчик|@ кафтаньчик|? овощной|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11225,2,3,1,"Определите, в каких словах буквы Е, Ё, Ю, Я обозначают два звука.","? буря|@ линия|? арена|@ яблоко|? учёба|@ суета|")');


tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11226,2,3,1,"Определите, в каких словах все согласные глухие.","@ пачка|@ фишка|@ кассета|@ пихта|? тесьма|? шестеро|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11227,2,3,1,"Определите, какие слова нельзя переносить.","@ ишак|@ ирис|? шагом|? рояль|? веер|? зефир|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11228,2,3,1,"У каких слов в П. п. окончании е – И.","@ ночь|? олень|@ ткань|? конь|@ сирень|@ сталь|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11229,2,3,1,"В окончаниях каких слов пишется буква И.","? залива…м|@ снос…т|? посе…шь|@ уход…т|@ обгон…те|? обгора….т|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11230,2,3,1,"Найдите определения. Резкий осенний ветер дует над лесом. (1 2 3 4 5 6)","@ 1|@ 2|? 3|? 4|? 5|? 6|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11231,2,3,1,"Выберите слова, в которых допущены ошибки.","? карась|? описка|@ эташ|@ желеска|@ гарможка|? пташка|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11232,2,3,1,"Выберите слова, где нужно вставить букву.","@ груп…а|? опас…ность|? чудес…ный|@ мес…ный|@ капус…ный|? ужас…ный|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11233,2,3,1,"Выберите слова, где есть приставка НА -.","@ насос|@ наклейка|@ наездник|? налим|? народ|@ напиток|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11234,2,3,1,"В каких случаях нужно писать слитно?","? (от)скорости|@ (от)болел|? (без)остановки|@ (без)опасный|@ (по)плывём|? (по)платью|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11235,2,3,1,"Определите, в каких словах буквы Е, Ё, Ю, Я обозначают один звук.","? поэзия|@ говядина|? ялик|@ работяга|? фамилия|@ утюг|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11236,2,3,1,"Определите, в каких словах все согласные глухие.","@ афиша|? осина|@ эпоха|@ осока|? удача|? овощи|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11237,2,3,1,"Определите, в каких словах ударение падает на 1 – й слог.","? магнитофон|@ первенец|? пассажир|@ техникум|@ изморозь|? перцовый|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11238,2,3,1,"Выберите слова, где нужно поставить букву Е.","? на кроват…|? к лошад…|@ к кроватк…|@ на цепочк…|? на сирен…|@ в бутылк…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11239,2,3,1,"Выберите словосочетания, в которых допущены ошибки.","? с уничтожающей критикой|@ над широкем лугом|? в бескрайнем море|@ о кошачий ласке|@ со скрипучеми сапогами|? о вечерней красоте|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11240,2,3,1,"Найдите дополнения. Лёгкий ветерок морщит поверхность моря.(1 2 3 4 5)","? 1|? 2|? 3|@ 4|@ 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11241,2,3,1,"Выберите слова с безударными гласными, непроверяемыми ударением.","@ картофель|@ солдат|? корень|? левша|? лебедь|@ товарищ|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11242,2,3,1,"Выберите слова, где нужно вставить букву.","@ капус…ный|? ужас…ный|?опас…ный|? чудес…ный|@ суб…ота|@ лес…ница|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11243,2,3,1,"Выберите слова, где есть приставка СО-.","? собака|? сокол|@ собрат|@ соавтор|@ советовать|? соловей|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11244,2,3,1,"Выберите слова, в которых допущены ошибки.","@ чюгунный|? рыжий|? начальник|@ пушыстый|@ чясовой|? стрижи|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11245,2,3,1,"Определите, в каких словах звуков больше, чем букв.","? иней|? осёл|? пьёт|? ирис|@ ёлка|@ маяк|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11246,2,3,1,"Определите,  в каких словах все гласные 1 – го ряда.","? затормозил|@ полоскать|@ фотограф|@ кудахтать|? камуфляж|? пушистый|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11247,2,3,1,"Определите. В каких словах ударение падает на 3-й слог.","? раковина|@ рукавица|? околица|@ пылесос|? карикатура|@ курага|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11248,2,3,1,"Укажите сущесвительные 2–го склонения.","? в колыбели|? в кровати|? в кроватке|@ в сарае|? в лужице|@ в городе|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11249,2,3,1,"В окончаниях каких слов пишется буква Е?","@ в раннн…м детстве|@ о вчерашн…й прогулке|? в цветущ…й сад|? за хорош…м здоровьем|? под зимн…м пальто|@ с нынешн…й молодёжью|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11250,2,3,1,"Укажите номера неправильно выписанных словосочетаний. Клёсты чистят шишки от шелухи и находят в них съедобные семена.","? чистят шишки|@ клёсты чистят|? находят в них|@ шишки от шелухи|? чистят от шелухи|? находят семена|")');


tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11251,2,3,1,"Выберите слова, в которых пропущена буква О.","@ ск…льзит|? д…леко|? пос…дил|? нав….рил|@ заб…лел|@ х…лодный|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11252,2,3,1,"Выберите слова, где нужно поставить Ь.","@ реч…|@ дич…|? кирпич…|? мякиш…|@ мелоч…|? москвич…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11253,2,3,1,"Выберите слова, где нужно поставить в суффиксе букву Е.","@ беж…вый|? картофел…на|@ нежн…нький|@ танц…вать|? абрикос…к|@ морож…ный|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11254,2,3,1,"Выберите словосочетания, в которых допущены ошибки.","@ у скамеечьки Ванечька|@ башмачьки Людочьки|@ Жучка в вагоньчике|@ удачьные грибочьки|? сидеть на пеньке|? сверкать огоньками|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11255,2,3,1,"Определите, в каких словах буквы Е, Ё, Ю, Я обозначают два звука.","? обед|? этюд|? умять|?  овёс|@ боец|@ наказание|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11256,2,3,1,"Определите, в каких словах согласные буквы обозначают мягкие согласные звуки.","? петелька|@ винтик|@ неделя|@ тюбетейки|? вельвет|@ сирень|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11257,2,3,1,"Определите, в каких словах ударение падает на 2 – й слог.","@ брусника|? кукуруза|? лиственница|? земляника|? чечевица|? олеандр|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11258,2,3,1,"Выберите слова, где нужно поставить букву И.","? на митинг…|@ к печ…|@ от бол…|? об автомобил…|? на дерев…|@ о мыш…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11259,2,3,1,"В окончаниях каких слов пишется буква Е?","? подкорм…шь|@ наблюда…шь|@ отта…те|@ помеша…шь|@ откро…те|? надо…ть|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11260,2,3,1,"Найдите обстоятельства. Поздняя осень властно вступает в свои права.(1 2 3 4 5 6 7)","? 1|? 2|@ 3|? 4|? 5|? 6|@ 7|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11261,2,3,1,"Выберите слова, где нужно поставить букву Б.","@ улы…ка|@ голу…ь|@ сугро...|@ гу…ка|? то…кое|? скри…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11262,2,3,1,"Выберите слова, где нужно поставить Ь.","? сторож…|@ брош…|@ лож…|? скрипач…|@ полноч…|? усач…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11263,2,3,1,"Выберите слова, где нужно поставить в суффиксе букву Е.","? барабанщ…к|@ дожд…вой|@ рыж…ватый|? приветл…вый|? альбомч…к|@ жит…ль|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11264,2,3,1,"Выберите словосочетания, в которых допущены ошибки.","?@ красный Мак|@ белый Гриб|? Ольга Васильевна|? Женя Сомов|? сосед Ваня|@ Жук Короед|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11265,2,3,1,"Определите, в каких словах буквы Е,Ё,Ю,Я обозначают два звука.","?@ ёж|@ еда|@ лилия|? имя|@ гигиена|? баня|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11266,2,3,1,"Определите, в каких словах согласные буквы обозначают мягкие согласные звуки.","? червяки|@ весельчаки|@ печень|? апельсин|? сердечки|? пианино|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11267,2,3,1,"Определите, в каких словах ударение падает на 2 – й слог.","@ лечение|? математика|@ юпитер|? досыта|@ девица|? обижать|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11268,2,3,1,"Укажите существительные 3 – го склонения.","? пень|@ тень|? царь|? фонарь|? слесарь|@ моль|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11269,2,3,1,"Выберите словосочетания, в которых допущены ошибки.","? от тлеющего уголька|? к безудержному лаю|? от всеобщей радости|@ по отчиму краю|@ по горячий ладони|@ без бодрова марша|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11270,2,3,1,"Укажите номера слов, после которых нужно поставить запятую.Мы рубим валим сухие деревья пилим их и колем.(1 2 3 4 5 6 7 8 9)","? 1|@ 2|? 3|? 4|@ 5|? 6|? 7|? 8|? 9|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11271,2,3,1,"Выберите слова, в которых допущены ошибки.","? плечистый|? ходил|@ расшоталась|? тащил|@ лисных|@ начили|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11272,2,3,1,"Выберите слова, где нужно поставить букву С.","? ука…ка|@ абрико…|? арбу…|@ пля…ка|@ матро…|@ ири…ка|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11273,2,3,1,"Выберите слова, где нужно поставить в суффиксе букву Е.","@ бахч…вой|? болот…стый|@ весёл…нький|? баран…на|@ врач…вать|? арбуз…ще|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11274,2,3,1,"Выберите слова, в которых допущены ошибки.","@ душыстый|@ пищять|@ трещять|? держи|? галчата|@ чюткий|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11275,2,3,1,"Определите, в каких словах буквы Е, Ё, Ю, Я обозначают один звук.","? задание|? язык|@ гонец|@ мяч|@ мякиш|? юный|")');


tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11276,2,3,1,"Определите, в каких словах все согласные звонкие.","? лопата|? акула|? опора|@ арена|@ обида|@ линия|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11277,2,3,1,"Определите, какие слова нельзя переносить.","? ямка|? айва|@ улей|@ овод|? очки|? ямка|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11278,2,3,1,"В окончаниях каких слов пишется И?","@ плоды вишн…|@ в тетрад…|? в деревн…|? на лошадк…|@ до деревн…|? на площадк…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11279,2,3,1,"В окончаниях каких слов пишется буква Е?","? с однолетн…м растением|? перед син…м морем|@ о цветущ…й молодости|@ от вещ…го сна|@ в ближн…м посёлке|? бушующ…й океан|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11280,2,3,1,"Выберите номера слов, которыми обозначены главные члены предложения. Мороз заморозит  воду и построит хрупкие и опасные мостки через речки.(1 2 3 4 5 6 7 8 9 10 11)","@ 1|@ 2|? 3|? 4|@ 5|? 6|? 7|? 8|? 9|? 10|? 11|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11281,2,3,1,"Выберите слова, где нужно поставить букву А.","? м…шкара|@ нак…пают|@ к…зался|? р…са|@ мур...вьи|? покр…шить|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11282,2,3,1,"Выберите слова, где нужно поставить букву Т.","? виногра…|@ пас…бище|@ орнамен…|? яго…ка|@ пала…ка|@ копы…це|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11283,2,3,1,"Выберите букву, которую нужно поставить в слова. вял…л, стро…л, молв…л, занавес…л","? я|? е|@ и|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11284,2,3,1,"Выберите словосочетания, в которых допущены ошибки.","@ ручьной хищник|@ сшить кафтаньчик|@ хищьная щучька|? сестричка Танечка|? нельзя гулять|@ няньчить птенчика|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11285,2,3,1,"Определите, в каких словах буквы Е, Ё, Ю, Я обозначают один звук.","? юноша|@ берёза|? единица|@ опера|@ гусыня|@ черёмуха|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11286,2,3,1,"Определите, в каких словах все согласные твёрдые.","@ соловушка|? ноготки|@ заготовка|? тапочки|? молотьба|@ посудомойка|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11287,2,3,1,"Определите, в каких словах ударение падает на 4 – й слог.","@ заночевать|? санаторий|@ ветеринар|@ одеколон|? малиновый|@ секундомер|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11288,2,3,1,"Выберите слова с окончанием И.","@ из деревн…|? на (этом) дереве|? на (этой) карт…|@ у матер…|@ у лошадк…|? к лошадк…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11289,2,3,1,"В окончаниях каких слов пишется буква Е?","? нос…т|@ прогре…т|? верт…м|@ бре…м|@ руга…шь|? растащ…т|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11290,2,3,1,"Укажите номера тех слов, которыми обозначены главные члены предложения. Редкие породы деревьев высятся по краям аллеи.(1 2 3 4 5 6 7)","? 1|@ 2|? 3|@ 4| 5|? 6|? 7|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11291,2,3,1,"В каких словах безударная гласная в корне может быть проверена словом горка?","? горевать|? горчица|@ горняк|@ гористый|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11292,2,3,1,"Выберите слова, где нужно поставить букву Т.","@ хобо…|@ конфе…ка|? лоша…ка|? незабу…ка|@ запла…ка|@ концер…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11293,2,3,1,"Выберите слова, состав которых соответствует схеме (корень ---> окончание)","? уколы|? выдумка|? уроки|@ дружок|@ дороги|? свалка|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11294,2,3,1,"Выберите словосочетания, в которых допущены ошибки.","? берег Невы|? Мария Петровна|@ хмурый Октябрь|@ Дядя Вася|? Иван Петрович|? Васильева Ира|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11295,2,3,1,"Определите, в каких словах букв больше, чем звуков.","@ взъерошенный|@ шницель|? ельник|@ авоська|? маленькая|@ шампунь|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11296,2,3,1,"Определите, в каких словах все согласные твёрдые.","? учёба|? пастила|? чудо|@ суббота|@ шахматы|? борец|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11297,2,3,1,"Определите, в каких словах ударение падает на 3 – й слог.","@ абонент|? рассольник|@ понедельник|? пергамент|@ серпантин|? водораздел|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11298,2,3,1,"Выберите слова, где нужно поставить букву Е.","@ о плётк…|? у матер…|? к осен…|@ на спектакл…|? по горст…|@ в сетк…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11299,2,3,1,"В окончаниях каких слов пишется буква И?","@ держ…м|? стел…м|@ суш…шь|? кол…м|@ подерж…шь|@ облеп…т|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11300,2,3,1,"Укажите неправильно выписанные словосочетания для данного предложения.В конце аллеи на скамейке под тенистыми ясенями сидит старый профессор.","? в конце аллеи|@ профессор сидит|@ на скамейке под ясенями|? сидит на скамейке|? в конце на скамейке|@ старый профессор|")');


// английский язык
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11301,3,4,1,"Найди слово с общим значением для данной строчки:  _________:   rainy,  sunny,  cold,  windy,  cloudy ","@ weather|? seasons|? months|? sports|? family|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11302,3,4,1,"Вставь пропущенное слово is  или  are. There  .... a  pupil in the  classroom.","@ is|? are|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11303,3,4,4,"Составь предложения из слов и запиши: Nick,   his,   father,  Did,  help,  ?","@Did Nick help his father?|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11304,3,4,4,"Раскрой скобки.Поставь прилагательные в сравнительную или превосходную степень.The book is _______ than the film. (interesting)","@more interesting|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11305,3,4,1,"Выбери правильное слово. Сhildren … tennis every day.","@ play|? played|? will play|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11306,3,4,4,"Прочитай текст(информация к варианту). Ответь на вопрос. Where  does  he  live? ","@He lives in Australia, on the farm.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11307,3,4,1,"Прочитай текст(информация к варианту). Выбери один вариант из трёх предложенных. What does Tom do  in the  evening?","? plays computer games|? plays football|@ watches TV|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11308,3,4,4,"Прочитай текст(информация к варианту). Ответь на вопрос. How old is Tom?","@Tom is ten years old.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11309,3,4,4,"Прочитай текст(информация к варианту). Where  does Tom’s parents  work? ","@They work on the farm.")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11310,3,4,4,"Прочитай текст(информация к варианту).Ответь на вопрос (полный ответ). Where  does Tom study? ","@He studies at home.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11311,3,4,1,"Найди слово с общим значением для данной строчки:  _________:   dad,   mum,  sister,  grandma,  grandpa ","? weather|? seasons|? months|? sports|@ family|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11312,3,4,1,"Вставь пропущенное слово is  или  are. There  ....   a nice  garden  behind  the  house.","@ is|? are|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11313,3,4,4,"Составь предложения из слов и запиши: I,   ride,  bike,  my,  will,  tomorrow","@I will ride my bike tomorrow.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11314,3,4,4,"Раскрой скобки.Поставь прилагательные в сравнительную или превосходную степень.The farm is _______ than the city. (clean)","@cleaner|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11315,3,4,1,"Выбери правильное слово. Tiny … a new fairy tale next week.","? wrote|@ will write |? write|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11316,3,4,1,"Найди слово с общим значением для данной строчки:  _________:   winter,   spring,  summer,  autumn ","? weather|@ seasons|? months|? sports|? family|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11317,3,4,1,"Вставь пропущенное слово is  или  are. There  ...   a lot  of  computers  on the  table.","? is|@ are|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11318,3,4,4,"Составь предложения из слов и запиши: children,   The, play,  computer,  will,   games, next,  week","@The children will play computer games next week.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11319,3,4,4,"Раскрой скобки.Поставь прилагательные в сравнительную или превосходную степень.Kate is the ________ pupil in our class. (good)","@best|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11320,3,4,1,"Выбери правильное слово. I like to … TV in the evening.","@ watch|? watched|? will watch|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11321,3,4,4,"Впиши пропущенную фразу, действия происходят сейчас. We go to the park - … now.","@are going")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11322,3,4,4,"Впиши пропущенную фразу, действия происходят сейчас. It snows - … now. ","@is snowing")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11323,3,4,4,"Поставь вопрос к предложению: Last Tuesday I went to the cinema. When …","@When did I go to the cinema?")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11324,3,4,4,"Поставь вопрос к предложению: They played computer games yesterday. Did …","@Did they play computer games yesterday?")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11325,3,4,4,"Поставь вопрос к предложению: My sister wrote a letter. What …","@What did my sister write?")');


tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11326,3,5,1,"Вставь пропущенное слово is  или  are. There  ...   pupils   in  the  classroom.","? is|@ are|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11327,3,5,3,"Прочитай текст(информация к варианту).Расставь предложенные слова в соответствии с номером предложения. <div class=\'type3b\'><br>5<br>6<br>8<br>9<br>11<br></div> <div class=\'type3\'><br>a) favourite<br>b) by heart<br>c) Maths<br>d) have<br>e) lessons<br></div>","@5-e 6-c 8-b 9-a 11-d|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11328,3,5,1,"Прочитай текст(информация к варианту). Закончи предложения, выбрав один вариант из трёх предложенных.Every day Jason goes … .","? shopping|? to the country|@ to school|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11329,3,5,4,"Прочитай текст(информация к варианту). Ответь на вопрос. How old is Jason?","@Jason is six years old.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11330,3,5,1,"Прочитай текст(информация к варианту). The first lesson is … .","? Art|@ Maths|? English|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11331,3,5,4,"Прочитай текст(информация к варианту).Ответь на вопрос (полный ответ). How many lessons does he have every day?","@He has three lessons every day.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11332,3,5,4,"Составь предложения из слов и запиши: play,  puzzles,  did not,  Nika,  yesterday","@Nika did not play puzzles yesterday.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11333,3,5,4,"Раскрой скобки.Поставь прилагательные в сравнительную или превосходную степень.Tom is ______than Mike. (old)","@older|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11334,3,5,1,"Выбери правильное слово. Did you … the flowers yesterday.","? will water|? water|@ watered|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11335,3,5,4,"Раскрой скобки, поставив глаголы в Past Simple. In the evening she (take) her pet for a walk and (watch) TV.","@took,watched|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11336,3,5,4,"Раскрой скобки, поставив глаголы в Past Simple. I (make) a cake with my mum yesterday.","@made|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11337,3,5,4,"Раскрой скобки, поставив глаголы в Past Simple. She (play) and (swim) in the river last summer.","@played,swam|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11338,3,5,1,"Определи в каком времени построены предложения.My dad drew a nice picture last week.","? present simple|@ past simple|? future simple|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11339,3,5,1,"Определи в каком времени построены предложения.She always gets good marks.","@ present simple|? past simple|? future simple|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11340,3,5,1,"Выбери нужное слово и заполни пропуск: We must _____ our homework every day.","? drink|? play|? count|? write|@ do|? have|? answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11341,3,5,1,"Выбери нужное слово и заполни пропуск: Children _____ a good time at school.","? drink|? play|? count|? write|? do|@ have|? answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11342,3,5,1,"Выбери нужное слово и заполни пропуск:They ______ new words in the English lesson.","? drink|? play|? count|@ write|? do|? have|? answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11343,3,5,1,"Выбери нужное слово и заполни пропуск:I ______ teacher’s questions every day.","? drink|? play|? count|? write|? do|? have|@ answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11344,3,5,1,"Выбери нужное слово и заполни пропуск:We______ many poems by heart.","? drink|? play|? count|? write|? do|? have|? answer|@ learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11345,3,5,1,"Выбери нужное слово и заполни пропуск:My little sister can _______ from 1 to 20.","? drink|? play|@ count|? write|? do|? have|? answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11346,3,5,1,"Выбери нужное слово и заполни пропуск:During the break we _______ orange juice.","@ drink|? play|? count|? write|? do|? have|? answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11347,3,5,1,"Найди слово с общим значением для данной строчки:  _________:   hockey,  tennis, basketball,  volleyball","? weather|? seasons|? months|@ sports|? family|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11348,3,5,1,"Выбери нужное слово и заполни пропуск:Mary and Ben don’t ______ computer games at school.","? drink|@ play|? count|? write|? do|? have|? answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11349,3,5,1,"Какое слово лишнее?","? dress|? sweater|@ boots|? shirt|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11350,3,5,1,"Какое слово лишнее?","? board|? desk|@ boy|? bookshelf|")');

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11351,3,6,1,"Какое слово лишнее?","? Maths|? PE|@ daughter|? Reading|? Russian|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11352,3,6,4,"Прочитай текст(информация к варианту).Ответь на вопрос (полный ответ). Who is Helen’s pet?","@It is a cat.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11353,3,6,1,"Прочитай текст(информация к варианту).Ответь на вопрос (полный ответ). What is the color of Alice’s eyes?","? blue|? grey|@ green|? black|? braun|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11354,3,6,1,"Прочитай текст(информация к варианту).Ответь на вопрос (полный ответ). What is the Alice’s favourite toy?","? doll|? mouse|? bike|@ ball|? fish|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11355,3,6,4,"Прочитай текст(информация к варианту).Ответь на вопрос (полный ответ). What is Alice’s favourite food?","@It’s  favourite food is fish and meat|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11356,3,6,4,"Прочитай текст(информация к варианту).Ответь на вопрос (полный ответ). How often does Alice play with a ball?","@It plays with ball all time.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11357,3,6,1,"Какое слово лишнее?","? ruler|? dictionary|@ horse|? pencil|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11358,3,6,1,"Какое слово лишнее?","? white|? yellow|@ long|? red|? black|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11359,3,6,1,"Выбери нужный вспомогательный глагол do, does. ____ Ann play volleyball at school?","? do|@ does|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11360,3,6,1,"Выбери нужный вспомогательный глагол do, does. When ____ you usually write letters?","@ do|? does|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11361,3,6,1,"Выбери нужный вспомогательный глагол do, does. ____ they usually go to the park on Sundays?","@ do|? does|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11362,3,6,1,"Выбери нужный вспомогательный глагол do, does. ____ his sister speak English?","? do|@ does|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11363,3,6,1,"Выбери нужный вспомогательный глагол do, does. What ____ you usually do in the evening?","@ do|? does|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11364,3,6,4,"Раскрой скобки, поставив глаголы в Past Simple. Kate (get) up at 6 o’ clock.","@got|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11365,3,6,4,"Раскрой скобки, поставив глаголы в Past Simple. She (wash) her face and hands.","@washed|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11366,3,6,4,"Раскрой скобки, поставив глаголы в Past Simple. Then she (have) breakfast with her mum, dad and sister Ann.","@had|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11367,3,6,4,"Раскрой скобки, поставив глаголы в Past Simple. After breakfast she (go) to school.","@went|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11368,3,6,4,"Раскрой скобки, поставив глаголы в Past Simple. After school Kate (do) her homework and (walk) with her friends in the street.","@did,walked|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11369,3,6,1,"Определи в каком времени построены предложения.They will visit the USA next year.","? present simple|? past simple|@ future simple|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11370,3,6,1,"Определи в каком времени построены предложения.Her brother usually watches TV in the evening.","@ present simple|? past simple|? future simple|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11371,3,6,1,"Определи в каком времени построены предложения.We played and swam in the river last summer.","? present simple|@ past simple|? future simple|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11372,3,6,4,"Употреби слова в скобках в правильной форме.The wind was … (strong) than it was yesterday.","@stronger|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11373,3,6,4,"Употреби слова в скобках в правильной форме.His T-shirt is … (new) than mine.","@newer|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11374,3,6,4,"Употреби слова в скобках в правильной форме.Japanese is … (difficult) than English.","@more difficult|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11375,3,6,4,"Употреби слова в скобках в правильной форме.This blue dress is … (good) than that pink.","@better|")');

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11376,3,7,4,"Употреби слова в скобках в правильной форме.Text 1 is… (important) than text 3.","@more important|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11377,3,7,1,"Правильно или нет (true or false)? It is very cold in Africa.","? true|@ false|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11378,3,7,1,"Правильно или нет (true or false)? Spring comes after winter.","@ true|? false|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11379,3,7,1,"Правильно или нет (true or false)? London is the capital of Great Britain.","@ true|? false|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11380,3,7,1,"Правильно или нет (true or false)? Mice catch cats.","? true|@ false|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11381,3,7,1,"Правильно или нет (true or false)? Russia is very big country.","@ true|? false|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11382,3,7,1,"Выбери правильное слово: many or much? There are … students in the class.","@ many|? much|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11383,3,7,3,"Прочитай текст(информация к варианту).Расставь предложенные слова в соответствии с номером предложения. <div class=\'type3b\'><br>5<br>6<br>8<br>9<br>11<br></div> <div class=\'type3\'><br>a) favourite<br>b) by heart<br>c) Maths<br>d) have<br>e) lessons<br></div>","@5-e 6-c 8-b 9-a 11-d|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11384,3,7,1,"Прочитай текст(информация к варианту). Ответь на вопрос. What  are  Rob’s  favourite  subjects? ","? Art|@ Maths|@ English|? Geography|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11385,3,7,4,"Прочитай текст(информация к варианту). Ответь на вопрос. How old is Rob?","@Rob is twelve years old.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11386,3,7,1,"Прочитай текст(информация к варианту). What Does  Rob hate?","? Art|? Maths|? English|@ Geography|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11387,3,7,4,"Прочитай текст(информация к варианту).Ответь на вопрос (полный ответ). What does Rob want  to  do  after  he  finishes school?","@He want  to  be  a doctor.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11388,3,7,1,"Выбери правильное слово: many or much? I don’t put … sugar in my tea.","? many|@ much|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11389,3,7,1,"Выбери правильное слово: many or much? We saw  … snow in the yard.","? many|@ much|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11390,3,7,1,"Выбери правильное слово: many or much? My little brother drinks ... milk.","? many|@ much|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11391,3,7,1,"Выбери правильное слово: many or much? I have ... friends.","@ many|? much|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11392,3,7,4,"Впиши пропущенную фразу, действия происходят сейчас.My teacher (speaks) Russian - …… now.","@is speaking")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11393,3,7,4,"Впиши пропущенную фразу, действия происходят сейчас.I (watch) TV -…… now.","@am watching")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11394,3,7,4,"Впиши пропущенную фразу, действия происходят сейчас.Students read the text - … now. ","@are reading")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11395,3,7,4,"Поставь вопрос к предложению: The weather was very bad 2 days ago. Was …","@Was the weather very bad?")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11396,3,7,4,"Поставь вопрос к предложению: I met my friend at the airport. Where…","@Where did I meet my friend?")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11397,3,7,4,"Поставь глагол в нужной форме.I (meet) my friend yesterday.","@met")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11398,3,7,4,"Поставь глагол в нужной форме.There (are) many animals there 2 days ago.","@were")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11399,3,7,4,"Поставь глагол в нужной форме.We (come back) home at 5 o’clock yesterday.","@came back")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11400,3,7,1,"Определи в каком времени построены предложения.Her brother usually watches TV in the evening.","@ present simple|? past simple|? future simple|")');


//5 класс

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15101,4,21,1,"Вырази в минутах 1 ч 20 мин ","? 60 мин |@ 80 мин |? 90 мин |? 130 мин|? 31 мин |")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15102,4,21,1,"Укажи, сколько в 1 тонне центнеров ","? 100 ц|@ 10 ц|? 15 ц|? 1 ц|? 1000 ц|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15103,4,21,1,"Чему равен куб числа 6?","? 36|? 18|? 236|@ 216|? 72|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15104,4,21,1,"Найди значение выражения  х : 9, где х = 72 ","? 7|? 4|? 6|? 9|@ 8|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15105,4,21,1,"В каком уравнении неизвестное находится сложением?","? 489 – х= 100|@ х – 100 = 480|?  х : 100 = 480|? 4 800 : х = 100|? 214+х = 584|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15106,4,21,1,"Сколько всего десятков содержится в числе 276450?","? 5 десятков|? 7 десятков|@ 27645 десятков|? 27 десятков|? 276 десятков|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15107,4,21,1,"К какому числу надо прибавить 1, чтобы получить 170 000?","? 169 000|@ 169 999|? 16 999|? 170 001|?  160999|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15108,4,21,1,"В числе 46 382 цифрой 6 обозначено количество:","? сотен|? десятков тысяч|? десятков|@ единиц тысяч|? тысяч|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15109,4,21,1,"Найди значение выражения 96 – 56 : 8","@ 89|? 7|? 5|? 103|? 88|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15110,4,21,1,"Укажи выражение, в котором порядок действий определен правильно.","? 14 + 4 : 2 х 6  (3 1 2)|? 14 + 4 : 2 х 6  (3 2 1)|? 4 : 2 + 14 х 6  (1 2 3)|@ 28 : (2 + 12) х 6 (2 1 3)|? 64 – 24 : 8 + 8  (1 2 3)|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15111,4,21,1,"Определите, в каких словах все гласные 2 – го ряда.","@ линейки|@ пинетки|? селёдка|? посуда|@ резинки|? чечётка|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15112,4,21,1,"Определите, в каких словах ударение падает на 1 – й слог.","@ палуба|@ волосы|? говядина|? посуда|? бирюза|@ луковица|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15113,4,21,1,"Какие из данных слов являются именами существительными?","@ зелень|? летает|@ стройка|? зеленеет|@ лётчик|? строить|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15114,4,21,1,"В окончаниях каких слов пишется буква И?","? от средн…го уха|@ дурманящ…й аромат|? без хорош…го друга|? в соседн…м подъезде|? около рыж…го кота|@ с хорош…м зрением|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15115,4,21,1,"Найдите определения. Яркие звёзды светят на небесном своде. (1 2 3 4 5 6)","@ 1|? 2|? 3|? 4|@ 5|? 6|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15116,4,21,1,"Выберите слова, где нужно поставить букву Ф.","? була…ка|@ жира…|@ телегра…|? морко…ка|? пуго…ки|@ шка…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15117,4,21,1,"Выберите слова, где нужно вставить букву.","@ праз…ник|@ ван…а|? опас…ный|@ сер…це|? ужас…ный|? чудес…ный|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15118,4,21,1,"Выберите слова, состав которых соответствует схеме (приставка-корень-окончание)","? уроки|? дорожка|? заносы|@ садик|@ подруги|@ переходы|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15119,4,21,1,"Выберите слова, в которых допущены ошибки.","@ чемоданьчик|? фонарщик|? мощность|@ птеньчик|@ кафтаньчик|? овощной|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15120,4,21,1,"Определите, в каких словах буквы Е, Ё, Ю, Я обозначают два звука.","? буря|@ линия|? арена|@ яблоко|? учёба|@ суета|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15121,4,21,1,"Найди слово с общим значением для данной строчки:  _________:   winter,   spring,  summer,  autumn ","? weather|@ seasons|? months|? sports|? family|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15122,4,21,1,"Вставь пропущенное слово is  или  are. There  ...   a lot  of  computers  on the  table.","? is|@ are|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15123,4,21,4,"Составь предложения из слов и запиши: children,   The, play,  computer,  will,   games, next,  week","@The children will play computer games next week.|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15124,4,21,4,"Раскрой скобки.Поставь прилагательные в сравнительную или превосходную степень.Kate is the ________ pupil in our class. ( good)","@best|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15125,4,21,1,"Выбери правильное слово. I like to … TV in the evening.","@ watch|? watched|? will watch|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15126,4,21,4,"Впиши пропущенную фразу, действия происходят сейчас. We go to the park - … now.","@are going")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15127,4,21,4,"Впиши пропущенную фразу, действия происходят сейчас. It snows - … now. ","@is snowing")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15128,4,21,4,"Поставь вопрос к предложению: Last Tuesday I went to the cinema. When …","@When did I go to the cinema?")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15129,4,21,4,"Поставь вопрос к предложению: They played computer games yesterday. Did …","@Did they play computer games yesterday?")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15130,4,21,4,"Поставь вопрос к предложению: My sister wrote a letter. What …","@What did my sister write? ")');


tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15151,4,22,1,"Чтобы найти периметр квадрата, нужно...","? длину стороны квадрата умножить на 2|@ длину стороны квадрата умножить на 4|? длину стороны квадрата умножить на 3|? длины сторон квадрата перемножить|?  две длины сложить|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15152,4,22,1,"Площадь какой фигуры можно вычислить так: 7 ∙ 4?","? квадрата со стороной 7 см|? квадрата со стороной 4 см|@ прямоугольника со сторонами 4 см и 7 см|? прямоугольника со сторонами 4 см и 6 см|? прямоугольника со сторонами 7 см и 3 см|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15153,4,22,1,"Периметр прямоугольника со сторонами 5 см и 3 см можно вычислить так:","@ (5 + 3) ∙ 2|? 5 + 3|? 5 х 3|? 5+ 5 + 3|? 3+3+5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15154,4,22,1,"Значение суммы чисел 52976 и 48679 равно","? 4297|@ 101655|? 96303|? 100555|? 4307|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15155,4,22,1,"Выполни вычисления и выбери правильный ответ 2688 : 32","? 408|? 804|@ 84|? 74|? 94|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15156,4,22,1,"В числе 704 содержится...","? 4 сотни и 7 единиц|? 74 сотни|@ 7 сотен и 4 единицы|? 704 сотни|? 7 сотен 40 единиц|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15157,4,22,1,"Наибольшее четырехзначное число, записанное только двумя цифрами 3и 0, - это число...","? 3 003|? 3 030|@ 3330|? 3333|? 3300|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15158,4,22,1,"Найди значение выражения (3 824 - 1 367) : 3","? 2 457|? 7 371|? 2 460|@ 819|? 273|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15159,4,22,1,"В каком выражении действия надо выполнить в таком порядке: умножение, вычитание, деление?","? 1 * 2 - 1 : 2|? 1 * (2 - 1 : 2)|@ (1 * 2 - 1) : 2|? 2 - 1 : 1 * 2|? 3 : 2 - 1 * 2|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15160,4,22,1,"Укажи число, которое нужно вставить вместо пропуска: 3 т 35 кг = ... кг","@ 3035|? 3 350|? 305|? 3305|? 335|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15161,4,22,1,"Вырази в минутах 6 ч 40 мин","? 360 мин|@ 400 мин|? 340 мин|? 640 мин|? 100 мин|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15162,4,22,1,"Укажи выражение, в котором надо из числа 92 вычесть частное чисел 14 и 2","? 92 – 14 * 2|@ 92 – 14 : 2|? (92 – 14) : 2|? (92 – 14) * 2|? 92 – ( 14 * 2)|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15163,4,22,1,"Укажи значение выражения 900 : b ∙ 10 при b = 90","? 10|? 1000|@ 100|? 1|? 0|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15164,4,22,1,"Укажи значение неизвестного в уравнении 5 ∙ х = 17 + 18","? 5|@ 7|? 4|? 6|? 9|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15165,4,22,1,"Чему равен квадрат числа 8?","? 16|? 32|@ 24|? 64|? 42|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15166,4,22,1,"Определите, в каких словах все согласные глухие.","@ афиша|? осина|@ эпоха|@ осока|? удача|? овощи|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15167,4,22,1,"Определите, в каких словах ударение падает на 1 – й слог.","? магнитофон|@ первенец|? пассажир|@ техникум|@ изморозь|? перцовый|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15168,4,22,1,"Выберите слова, где нужно поставить букву Е.","? на кроват…|? к лошад…|@ к кроватк…|@ на цепочк…|? на сирен…|@ в бутылк…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15169,4,22,1,"Выберите словосочетания, в которых допущены ошибки.","? с уничтожающей критикой|@ над широкем лугом|? в бескрайнем море|@ о кошачий ласке|@ со скрипучеми сапогами|? о вечерней красоте|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15170,4,22,1,"Найдите дополнения. Лёгкий ветерок морщит поверхность моря.(1 2 3 4 5)","? 1|? 2|? 3|@ 4|@ 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15171,4,22,1,"Выберите слова с безударными гласными, непроверяемыми ударением.","@ картофель|@ солдат|? корень|? левша|? лебедь|@ товарищ|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15172,4,22,1,"Выберите слова, где нужно вставить букву.","@ капус…ный|? ужас…ный|?опас…ный|? чудес…ный|@ суб…ота|@ лес…ница|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15173,4,22,1,"Выберите слова, где есть приставка СО-.","? собака|? сокол|@ собрат|@ соавтор|@ советовать|? соловей|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15174,4,22,1,"Выберите слова, в которых допущены ошибки.","@ чюгунный|? рыжий|? начальник|@ пушыстый|@ чясовой|? стрижи|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15175,4,22,1,"Определите, в каких словах звуков больше, чем букв.","? иней|? осёл|? пьёт|? ирис|@ ёлка|@ маяк|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15176,4,22,1,"Определите,  в каких словах все гласные 1 – го ряда.","? затормозил|@ полоскать|@ фотограф|@ кудахтать|? камуфляж|? пушистый|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15177,4,22,1,"Определите. В каких словах ударение падает на 3-й слог.","? раковина|@ рукавица|? околица|@ пылесос|? карикатура|@ курага|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15178,4,22,1,"Укажите сущесвительные 2–го склонения.","? в колыбели|? в кровати|? в кроватке|@ в сарае|? в лужице|@ в городе|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15179,4,22,1,"В окончаниях каких слов пишется буква Е?","@ в раннн…м детстве|@ о вчерашн…й прогулке|? в цветущ…й сад|? за хорош…м здоровьем|? под зимн…м пальто|@ с нынешн…й молодёжью|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15180,4,22,1,"Укажите номера неправильно выписанных словосочетаний. Клёсты чистят шишки от шелухи и находят в них съедобные семена.","? чистят шишки|@ клёсты чистят|? находят в них|@ шишки от шелухи|? чистят от шелухи|? находят семена|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15181,4,22,4,"Раскрой скобки, поставив глаголы в Past Simple. I (make) a cake with my mum yesterday.","@made|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15182,4,22,4,"Раскрой скобки, поставив глаголы в Past Simple. She (play) and (swim) in the river last summer.","@played,swam|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15183,4,22,1,"Определи в каком времени построены предложения.My dad drew a nice picture last week.","? present simple|@ past simple|? future simple|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15184,4,22,1,"Определи в каком времени построены предложения.She always gets good marks.","@ present simple|? past simple|? future simple|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15185,4,22,1,"Выбери нужное слово и заполни пропуск: We must _____ our homework every day.","? drink|? play|? count|? write|@ do|? have|? answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15186,4,22,1,"Выбери нужное слово и заполни пропуск: Children _____ a good time at school.","? drink|? play|? count|? write|? do|@ have|? answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15187,4,22,1,"Выбери нужное слово и заполни пропуск:They ______ new words in the English lesson.","? drink|? play|? count|@ write|? do|? have|? answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15188,4,22,1,"Выбери нужное слово и заполни пропуск:I ______ teacher’s questions every day.","? drink|? play|? count|? write|? do|? have|@ answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15189,4,22,1,"Выбери нужное слово и заполни пропуск:We______ many poems by heart.","? drink|? play|? count|? write|? do|? have|? answer|@ learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15190,4,22,1,"Выбери нужное слово и заполни пропуск:My little sister can _______ from 1 to 20.","? drink|? play|@ count|? write|? do|? have|? answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15191,4,22,1,"Выбери нужное слово и заполни пропуск:During the break we _______ orange juice.","@ drink|? play|? count|? write|? do|? have|? answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15192,4,22,1,"Найди слово с общим значением для данной строчки:  _________:   hockey,  tennis, basketball,  volleyball","? weather|? seasons|? months|@ sports|? family|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15193,4,22,1,"Выбери нужное слово и заполни пропуск:Mary and Ben don’t ______ computer games at school.","? drink|@ play|? count|? write|? do|? have|? answer|? learn|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15194,4,22,1,"Какое слово лишнее?","? dress|? sweater|@ boots|? shirt|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15195,4,22,1,"Какое слово лишнее?","? board|? desk|@ boy|? bookshelf|")');


tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15201,4,23,1,"Выберите слова, где нужно поставить букву Б.","@ улы…ка|@ голу…ь|@ сугро...|@ гу…ка|? то…кое|? скри…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15202,4,23,1,"Выберите слова, где нужно поставить Ь.","? сторож…|@ брош…|@ лож…|? скрипач…|@ полноч…|? усач…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15203,4,23,1,"Выберите слова, где нужно поставить в суффиксе букву Е.","? барабанщ…к|@ дожд…вой|@ рыж…ватый|? приветл…вый|? альбомч…к|@ жит…ль|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15204,4,23,1,"Выберите словосочетания, в которых допущены ошибки.","?@ красный Мак|@ белый Гриб|? Ольга Васильевна|? Женя Сомов|? сосед Ваня|@ Жук Короед|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15205,4,23,1,"Определите, в каких словах буквы Е,Ё,Ю,Я обозначают два звука.","?@ ёж|@ еда|@ лилия|? имя|@ гигиена|? баня|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15206,4,23,1,"Определите, в каких словах согласные буквы обозначают мягкие согласные звуки.","? червяки|@ весельчаки|@ печень|? апельсин|? сердечки|? пианино|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15207,4,23,1,"Определите, в каких словах ударение падает на 2 – й слог.","@ лечение|? математика|@ юпитер|? досыта|@ девица|? обижать|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15208,4,23,1,"Укажите существительные 3 – го склонения.","? пень|@ тень|? царь|? фонарь|? слесарь|@ моль|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15209,4,23,1,"Выберите словосочетания, в которых допущены ошибки.","? от тлеющего уголька|? к безудержному лаю|? от всеобщей радости|@ по отчиму краю|@ по горячий ладони|@ без бодрова марша|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15210,4,23,1,"Укажите номера слов, после которых нужно поставить запятую.Мы рубим валим сухие деревья пилим их и колем.(1 2 3 4 5 6 7 8 9)","? 1|@ 2|? 3|? 4|@ 5|? 6|? 7|? 8|? 9|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15211,4,23,1,"Выберите слова, в которых допущены ошибки.","? плечистый|? ходил|@ расшоталась|? тащил|@ лисных|@ начили|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15212,4,23,1,"Выберите слова, где нужно поставить букву С.","? ука…ка|@ абрико…|? арбу…|@ пля…ка|@ матро…|@ ири…ка|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15213,4,23,1,"Выберите слова, где нужно поставить в суффиксе букву Е.","@ бахч…вой|? болот…стый|@ весёл…нький|? баран…на|@ врач…вать|? арбуз…ще|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15214,4,23,1,"Выберите слова, в которых допущены ошибки.","@ душыстый|@ пищять|@ трещять|? держи|? галчата|@ чюткий|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15215,4,23,1,"Определите, в каких словах буквы Е, Ё, Ю, Я обозначают один звук.","? задание|? язык|@ гонец|@ мяч|@ мякиш|? юный|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15216,4,23,1,"Выбери нужный вспомогательный глагол do, does. ____ they usually go to the park on Sundays?","@ do|? does|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15217,4,23,1,"Выбери нужный вспомогательный глагол do, does. ____ his sister speak English?","? do|@ does|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15218,4,23,1,"Выбери нужный вспомогательный глагол do, does. What ____ you usually do in the evening?","@ do|? does|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15219,4,23,4,"Раскрой скобки, поставив глаголы в Past Simple. Kate (get) up at 6 o’ clock.","@got|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15220,4,23,4,"Раскрой скобки, поставив глаголы в Past Simple. She (wash) her face and hands.","@washed|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15221,4,23,4,"Раскрой скобки, поставив глаголы в Past Simple. Then she (have) breakfast with her mum, dad and sister Ann.","@had|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15222,4,23,4,"Раскрой скобки, поставив глаголы в Past Simple. After breakfast she (go) to school.","@went|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15223,4,23,4,"Раскрой скобки, поставив глаголы в Past Simple. After school Kate (do) her homework and (walk) with her friends in the street.","@did,walked|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15224,4,23,1,"Определи в каком времени построены предложения.They will visit the USA next year.","? present simple|? past simple|@ future simple|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15225,4,23,1,"Определи в каком времени построены предложения.Her brother usually watches TV in the evening.","@ present simple|? past simple|? future simple|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15226,4,23,1,"Определи в каком времени построены предложения.We played and swam in the river last summer.","? present simple|@ past simple|? future simple|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15227,4,23,4,"Употреби слова в скобках в правильной форме.The wind was … (strong) than it was yesterday.","@stronger|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15228,4,23,4,"Употреби слова в скобках в правильной форме.His T-shirt is … (new) than mine.","@newer|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15229,4,23,4,"Употреби слова в скобках в правильной форме.Japanese is … (difficult) than English.","@more difficult|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15230,4,23,4,"Употреби слова в скобках в правильной форме.This blue dress is … (good) than that pink.","@better|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15231,4,23,1,"Число 380271 замени суммой разрядных слагаемых.","? 380271 = 300000 + 80000 + 200 + 71|? 380271 = 30000 + 8000 + 200 + 70 + 1|? 380271 = 380000 + 200 +70 +1|@ 380271 = 300000 + 80000 + 200 + 70 + 1|? 380271= 38000 + 270 + 1|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15232,4,23,1,"Найди число, в котором 7 единиц 6 разряда и 2 единицы 2 разряда.","@ 700020|? 702000|? 70020|? 700200|? 700222|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15233,4,23,1,"Значение какого выражения равно значению выражения (90 + 80) ∙ 4?","? 90 ∙ 4 + 80|@ 90 ∙ 4 + 80 ∙ 4|? 4 + 80 ∙ 4|? 60 + 80 ∙ 4|? 90 + 80 ∙ 4|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15234,4,23,1,"Найди значение выражения 360 : 9 + 738 ∙ 0","@ 40|? 778|? 0|? 4|? 798|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15235,4,23,1,"В схеме выражения _ ∙ _ + _ : _ - _ надо выполнять действия в таком порядке: ","? умножение, деление, вычитание, сложение|? деление, умножение, сложение, вычитание|? сложение, вычитание, умножение, деление|@ умножение, деление, сложение, вычитание|? деление, сложение, умножение, вычитание|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15236,4,23,1,"Выбери строку, где значения величин записаны в порядке их увеличения.","? 1 т, 1 ц 5 кг, 1 т 515 кг|@ 60 с, 1 мин 10 с, 90 с|? 1 км, 53 дм, 1010 м|? 2 ч, 1ч 20 мин, 70 мин|? 1м, 20 дм, 1мм, 5км|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15237,4,23,1,"На сколько сантиметров 30 дм больше, чем 3 см?","? на 33 см |? на 27 см |@ на 297 см |? на 303 см|? на 10 см|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15238,4,23,1,"Найди выражение, которое соответствует записи: разность чисел 10987 и 2987 увеличить в 2 раза.","? (10 987 + 2 987) ∙ 2|@ (10 987 - 2 987) ∙ 2|? 10 987 - 2 987 ∙ 2|? (10 987 - 2 987) : 2|? 10 987 - 2 987 :  2|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15239,4,23,1,"Укажи значение выражения 80 : а + 5, если а = 20.","? 35|? 45|? 405|@ 9|? 25|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15240,4,23,1,"Найди значение x в уравнении 9 · x = 415 + 35.","@ 50|? 60|? 40|? 4050|? 600|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15241,4,23,1,"Какое уравнение может быть следующим для такого ряда уравнений-    х ∙ 4 = 20, х ∙ 5 = 25, х ∙ 8 = 40? ","@  х ∙ 9 = 45 |? х ∙ 5 = 50|? х ∙ 10 = 20|? х ∙ 20 = 80|? х∙5 =30|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15242,4,23,1,"Какое произведение можно заменить квадратом числа?","? 3·6|? 3·2|? 2·2·2|@ 20·20|? 6·2|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15243,4,23,1,"Если товарный поезд за 4 часа прошёл 200 км, а пассажирский поезд за то же самое время прошёл 280 км, то какова была скорость пассажирского поезда?","? 40 км/ч |? 60 км/ч |@ 70 км/ч |? 50 км/ч |? 20 км/ч |")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15244,4,23,1,"4 книги стоят 800 рублей. Сколько таких же книг можно купить на 1200 рублей?","? 60 книг|? 7 книг|? 5 книг|@ 6 книг|? 10 книг|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15245,4,23,1,"Площадь прямоугольника 15 квадратных сантиметров, а его ширина 3 см, Чему равен периметр этого прямоугольника?","? 15 см|@ 16 см|? 8 см|? 5 см|? 6 см|")');


tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15251,4,24,1,"Найди значение числового выражения 9 000 - 72 : 8 ∙ 1000","@ 0|? 1116000|? 18000|? 100|? 9000|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15252,4,24,1,"Укажи значение выражения 84 : 42 ∙ (37 + 63) : 10","@ 20|? 100|? 10|? 200|? 40|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15253,4,24,1,"Из всех пар уравнений, приведенных в ответах, выбери ту пару, в которой значения неизвестных равны между собой.","? 8 ∙ х = 40  и х ∙ 9 = 54 |@ а : 6 = 7  и  а : 2 = 21|? х + 30 = 70  и х + 40 = 80|? b – 20 = 30 и b - 40 = 30|? 50 -с = 10  и 80 - с = 30|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15254,4,24,1,"Укажи значение неизвестного в уравнении 870 – х = 240 + 30","? 270|? 1140|@ 600|? 670|? 1040|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15255,4,24,1,"На дорогу от города до посёлка, расстояние между которыми 160 км, мотоциклист затратил 5 ч, а на обратный путь  - на 1 час меньше. Какова была скорость мотоциклиста на обратном пути?","? 41 км/ч |? 32 км/ч |@ 40 км/ч|? 35 км/ч|? 50 км/ч|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15256,4,24,1,"От двух пристаней одновременно навстречу друг другу отошли два катера, которые встретились через 3 часа. Скорость первого катера была 16 км/ч, а скорость второго – 18 км/ч. Каково расстояние между пристанями?","? 103 км|@ 102 км|? 34 км |? 70 км |? 100 км|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15257,4,24,1,"Коля купил два альбома для рисования по 60 рублей каждый и общую тетрадь за 45 рублей. Сколько денег Коля заплатил за покупку?","? 120 рублей|@ 165 рублей |? 105 рублей|? 140 рублей|? 130 рублей |")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15258,4,24,1,"Найди площадь квадрата, периметр которого равен периметру прямоугольника со сторонами 15 см и 5 см.","@ 100 см²|? 10 см²|? 400 см²|? 400 см²|? 100 см²|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15259,4,24,1,"Длина прямоугольника 5см, а периметр 16 см. Чему равна ширина прямоугольника?","? 11 см|? 21 см|@ 3 см|? 4 см|? 5 см 5мм|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15260,4,24,1,"Чему равен куб числа 8?","? 312|? 18|? 36|@ 512|? 64|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15261,4,24,1,"Определи верный ход решения задачи: За 6 часов один рабочий изготовил 72 детали, а другой  за 5 часов изготовил 70 деталей. На сколько деталей больше изготовил за час второй рабочий, чем первый?","? 72 ∙ 6 + 70 ∙ 5 |? 2 : 6 + 70 : 5|? 72 : 6 – 70 : 5|@ 70 : 5 – 72 : 6|? 72 ∙ 6 – 70 ∙ 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15262,4,24,1,"В одном куске 5 м ткани, во втором 4м такой же ткани. За оба куска заплатили 3600 рублей. Найди цену ткани.","? 900 рублей|? 750 рублей |@ 400 рублей|? 300 рублей|? 720 рублей|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15263,4,24,1,"Реши уравнение: х∙(60:4) = 12600","? 12590|? 1250|? 1270|? 126|@ 840|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15264,4,24,1,"Определите, в каких словах все согласные твёрдые.","@ соловушка|? ноготки|@ заготовка|? тапочки|? молотьба|@ посудомойка|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15265,4,24,1,"Определите, в каких словах ударение падает на 4 – й слог.","@ заночевать|? санаторий|@ ветеринар|@ одеколон|? малиновый|@ секундомер|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15266,4,24,1,"Выберите слова с окончанием И.","@ из деревн…|? на (этом) дереве|? на (этой) карт…|@ у матер…|@ у лошадк…|? к лошадк…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15267,4,24,1,"В окончаниях каких слов пишется буква Е?","? нос…т|@ прогре…т|? верт…м|@ бре…м|@ руга…шь|? растащ…т|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15268,4,24,1,"Укажите номера тех слов, которыми обозначены главные члены предложения. Редкие породы деревьев высятся по краям аллеи.(1 2 3 4 5 6 7)","? 1|@ 2|? 3|@ 4| 5|? 6|? 7|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15269,4,24,1,"В каких словах безударная гласная в корне может быть проверена словом горка?","? горевать|? горчица|@ горняк|@ гористый|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15270,4,24,1,"Выберите слова, где нужно поставить букву Т.","@ хобо…|@ конфе…ка|? лоша…ка|? незабу…ка|@ запла…ка|@ концер…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15271,4,24,1,"Выберите слова, состав которых соответствует схеме (корень ---> окончание)","? уколы|? выдумка|? уроки|@ дружок|@ дороги|? свалка|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15272,4,24,1,"Выберите словосочетания, в которых допущены ошибки.","? берег Невы|? Мария Петровна|@ хмурый Октябрь|@ Дядя Вася|? Иван Петрович|? Васильева Ира|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15273,4,24,1,"Определите, в каких словах букв больше, чем звуков.","@ взъерошенный|@ шницель|? ельник|@ авоська|? маленькая|@ шампунь|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15274,4,24,1,"Определите, в каких словах все согласные твёрдые.","? учёба|? пастила|? чудо|@ суббота|@ шахматы|? борец|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15275,4,24,1,"Определите, в каких словах ударение падает на 3 – й слог.","@ абонент|? рассольник|@ понедельник|? пергамент|@ серпантин|? водораздел|")');


tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15276,4,24,1,"Выберите слова, где нужно поставить букву Е.","@ о плётк…|? у матер…|? к осен…|@ на спектакл…|? по горст…|@ в сетк…|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15277,4,24,1,"В окончаниях каких слов пишется буква И?","@ держ…м|? стел…м|@ суш…шь|? кол…м|@ подерж…шь|@ облеп…т|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15278,4,24,1,"Укажите неправильно выписанные словосочетания для данного предложения.В конце аллеи на скамейке под тенистыми ясенями сидит старый профессор.","? в конце аллеи|@ профессор сидит|@ на скамейке под ясенями|? сидит на скамейке|? в конце на скамейке|@ старый профессор|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15279,4,24,4,"Употреби слова в скобках в правильной форме.Text 1 is… (important) than text 3.","@more important|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15280,4,24,1,"Правильно или нет (true or false)? It is very cold in Africa.","? true|@ false|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15281,4,24,1,"Правильно или нет (true or false)? Spring comes after winter.","@ true|? false|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15282,4,24,1,"Правильно или нет (true or false)? London is the capital of Great Britain.","@ true|? false|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15283,4,24,1,"Правильно или нет (true or false)? Mice catch cats.","? true|@ false|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15284,4,24,1,"Правильно или нет (true or false)? Russia is very big country.","@ true|? false|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15285,4,24,1,"Выбери правильное слово: many or much? There are … students in the class.","@ many|? much|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15286,4,24,1,"Выбери правильное слово: many or much? I don’t put … sugar in my tea.","? many|@ much|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15287,4,24,1,"Выбери правильное слово: many or much? We saw  … snow in the yard.","? many|@ much|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15288,4,24,1,"Выбери правильное слово: many or much? My little brother drinks ... milk.","? many|@ much|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15289,4,24,1,"Выбери правильное слово: many or much? I have ... friends.","@ many|? much|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15290,4,24,4,"Впиши пропущенную фразу, действия происходят сейчас.My teacher (speaks) Russian - …… now.","@is speaking")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15291,4,24,4,"Впиши пропущенную фразу, действия происходят сейчас.I (watch) TV -…… now.","@am watching")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15292,4,24,4,"Впиши пропущенную фразу, действия происходят сейчас.Students read the text - … now. ","@are reading")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15293,4,24,4,"Поставь вопрос к предложению: The weather was very bad 2 days ago. Was …","@Was the weather very bad?")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15294,4,24,4,"Поставь вопрос к предложению: I met my friend at the airport. Where…","@Where did I meet my friend?")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15295,4,24,4,"Поставь глагол в нужной форме.I (meet) my friend yesterday.","@met")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15296,4,24,4,"Поставь глагол в нужной форме.There (are) many animals there 2 days ago.","@were")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15297,4,24,4,"Поставь глагол в нужной форме.We (come back) home at 5 o’clock yesterday.","@came back")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15298,4,24,1,"Определи в каком времени построены предложения.Her brother usually watches TV in the evening.","@ present simple|? past simple|? future simple|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15299,4,24,1,"На сколько надо уменьшить 4 км, чтобы получить 8 м?","? на 3 км|? на 392 м|@ на 3 992 м|? на 3 002 м|? на 302 м|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (15300,4,24,1,"Выберите слова, где нужно поставить Ь.","@ реч…|@ дич…|? кирпич…|? мякиш…|@ мелоч…|? москвич…|")');


 /* //6 класс
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11501,5,20,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11502,5,20,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11503,5,20,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11504,5,20,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11505,5,20,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11506,5,20,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11507,5,20,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11508,5,20,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11509,5,20,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11510,5,20,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11511,5,21,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11512,5,21,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11513,5,21,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11514,5,21,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11515,5,21,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11516,5,21,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11517,5,21,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11518,5,21,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11519,5,21,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11520,5,21,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11521,5,22,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11522,5,22,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11523,5,22,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11524,5,22,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11525,5,22,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11526,5,22,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11527,5,22,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11528,5,22,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11529,5,22,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11530,5,22,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');*/

/* эрудиция
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11601,6,23,1,"Кто выдвинул теорию о происхождении человека от обезьяны?","? Ньютон|@ Дарвин|? Сеченов|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11602,6,23,1,"Продолжи фразу «Труд сделал человека…»","? обезьяной|@ человеком|? личностью|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11603,6,23,1,"Планета Земля в космическом пространстве появилась …","? около 5 тыс. лет назад|@ около 5 миллионов лет назад|? около 5 миллиардов лет назад|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11604,6,23,1,"Ориентирование – это … ","@ определение направления по отношению к сторонам горизонта |? определение направление по карте|? нахождение нужной дороги|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11605,6,23,1,"Основные формы поверхности земли - это… ","@ горы, равнины|? углубление, холмы|? горы, овраги|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11606,6,23,1,"Самая высокая точка Алтая – это гора… ","? Хан – Тенгри|@ Белуха|? Альпы|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11607,6,23,1,"Разрушение горных пород – это … ","? размельчение|? выветривание|@ распад|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11608,6,23,1,"Полезные ископаемые – это …","@ горные породы и минералы, добываемые из недр земли и используемые человеком|? горные породы, залегающие на дне водоёмов|? горные породы специально обрабатываемые|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11609,6,23,1,"Металл в результате использования, которого, был назван целый период в истории человечества?","? алюминий|@ бронза|? свинец|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11610,6,23,1,"Состояние, в которых вода существует в природе?","@ жидком, твердом, газообразном|? жидком, газообразном|? твердом, жидком|")');

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11611,6,24,1,"Твердые осадки – это …","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11612,6,24,1,"Какую часть земного шара занимает вода?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11613,6,24,1,"Назовите реки России.","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11614,6,24,1,"Смесь газов не имеющая запаха и цвета?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11615,6,24,1,"Воздух состоит из …","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11616,6,24,1,"Многолетний режим погоды, характерный для данной местности?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11617,6,24,1,"Движение  воздуха в горизонтальном положении это?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11618,6,24,1,"К какому виду природных сообществ относятся данные определения: песчаные, солончаковые, глинистые, каменистые?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11619,6,24,1,"Животные лесов – это …","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11620,6,24,1,"Утка, цапля, лебедь – это…","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11621,6,25,1,"Окружающий Землю мир – это …","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11622,6,25,1,"Солнечная система – это …","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11623,6,25,1,"Уменьшенная модель Земли – это …","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11624,6,25,1,"Линия, расположенная на одинаковом расстоянии от полюсов – это …","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11625,6,25,1,"Смена времён года происходит из-за …","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11626,6,25,1,"Большие группы людей, объединенные производственными и другими общественными отношениями?","? семья|@ общество|? бригада|? коллектив|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11627,6,25,1,"Количество денег в семье – это …","? семейный кошелёк|@ семейный бюджет|? семейная сумма|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11628,6,25,1,"О том, насколько процветает общество судят по …","? по благосостоянию семьи|@ по тому, как семья трудится|? по количеству денег в семье|")');//
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11629,6,25,1,"Люди, состоящие в родстве – это …","? общество|? друзья|@ семья|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11630,6,25,1,"Мореплаватель, открывший в 1492 г. Антильские острова и берега средней и южной Америки?","? Магелан|? Крузинштерн|@ Колумб|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11631,6,23,1,"Книги, изготовленные из кожи животного – это …","? папирусные|? бамбуковые|@ пергаментные|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11632,6,23,1,"Первые переплетенные книги появились в … ","? 1 веке нашей эры|@ 2 веке до нашей эры|? 3 веке нашей эры|")'); //

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11633,6,23,1,"Количество планет входящих в солнечную систему?","? 8|? 9|? 10|")');//
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11634,6,23,1,"Спутник Земли?","? Юпитер|? Солнце|@ Земля|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11635,6,23,1,"Синоним слова космос?","@ вселенная|? галактика|? солнечная система|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11636,6,23,1,"Дорога в космос была открыта?","? 4 октября 1957|@ 13 декабря 1957|? 12 апреля 1961|")');//
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11637,6,23,1,"А.А. Леонов … ","? первый российский космонавт|@ первый космонавт вышедший в открытый космос|? первый космонавт|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11638,6,23,1,"Уменьшенная модель Земли?","? карта|@ глобус|? фотография|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11639,6,23,1,"Источник света и тепла на Земле?","? луна|? электричество|@ солнце|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11640,6,23,1,"За какое время Земля вращается вокруг собственной оси?","? год|? 12 часов|@ 24 часа|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11641,6,24,1,"Линия, которая делит земной шар на Южное и Северное полушария?","@ экватор|? меридиан|? параллель|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11642,6,24,1,"Путешествие на Луну состоялось … ","? 12 апреля 1961|? 16 июля 1969|? 4 октября 1957|")');//
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11643,6,24,1,"Солнце возникло в результате …","?  взрыва во Вселенной|? освоение космоса человеком|? скопление различных газов|")');//
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11644,6,24,1,"Самая большая планета – это …","? Сатурн|@ Марс|? Юпитер|")');//
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11645,6,24,1,"Звезда путешественников – это …","? Кассиопея|@ Полярная|? Южная|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11646,6,24,1,"Какова температура на поверхности солнца?","? +6000 С|? +60 С|? +60000 С|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11647,6,24,1,"Какая планета Солнечной системы наиболее удалена от солнца?","? Плутон|? Нептун|? Юпитер|")');//
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11648,6,24,1,"За какое время Юпитер совершает полный оборот вокруг собственной оси?","? менее чем за 10 часов|? менее чем за 24 часа|? менее чем за 5 часов|")');//
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11649,6,24,1,"На какой из трех планет, возможно, существует жизнь?","? Плутон|@ Венера|? Марс|")');//
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11650,6,24,1,"Какую форму имеет Галактика?","? квадратную|@ форму диска с выпуклостью в середине|? овальную|")');

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11651,6,25,1,"Природные водоемы, расположенные в естественных углублениях земной поверхности, называют:","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11652,6,25,1,"Реки России: ","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11653,6,25,1,"Водные растения впитывают питательные вещества: ","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11654,6,25,1,"Жилище этих животных называют «хаткой»: ","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11655,6,25,1,"Леса бывают: ","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11656,6,25,1,"Береза, осины, дуб, клен, липа – это растения … ","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11657,6,25,1,"Какие птицы являются защитниками леса?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11658,6,25,1,"Пустыня – это …","? открытое безлесное пространство, покрытое травами|@ пространство, где из-за недостатка воды, воздуха и почвах сухие, а растительность редкая и скудная|? пространство, где из-за недостатка воды, воздуха и почвах сухие, а растительность редкая и скудная|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11659,6,25,1,"Растения пустыни, которое имеет корень длиною 20-30 метров - это… ","? полынь|@ верблюжья колючка|? тысячелистник|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11660,6,25,1,"Животные пустыни: ","? черепахи, ящерицы, змеи, сайгаки, вараны|@ суслики, хомяки, рыси, бобры|? лисы, медведи, волки|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11661,6,23,1,"Открытые безлесные пространства, покрытые травами – это …","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11662,6,23,1,"Самые многочисленные представители животного мира степей – это ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11663,6,23,1,"У растений степной полосы: ","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11664,6,23,1,"Какие животные обитают в степи?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11665,6,23,1,"Тюльпан, гусиный лук, незабудки, пырей – это растения …","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11666,6,23,1,"Единое существование растительного и животного мира, которое зависит друг от друга – это …","? природная зона|@ природная зона|? природная зона|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11667,6,23,1,"Участки земли с достаточным количеством влаги, на которых растут влаголюбивые травянистые растения, называют:","? степью|@ лугом|? лесом|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11668,6,23,1,"Животные луга: ","? медведи, зайцы, лисы|@ ящерицы, змеи, вараны|? сурки, суслики, полевки|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11669,6,23,1,"Луга используют: ","? для отдыха|@ для пастбищ и сенокоса|? для строительства|")');

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11670,6,23,1,"Что такое воздух?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11671,6,24,1,"Самый распространенный газ в воздухе?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11672,6,24,1,"Какую часть занимает кислород в воздухе?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11673,6,24,1,"Какой газ поддерживает горение?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11674,6,24,1,"Из скольких слоев состоит оболочка Земли?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11675,6,24,1,"Какую функцию выполняет воздушный слой Земли?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11676,6,24,1,"Как называется состояние нижнего слоя воздушной оболочки в определённой местности и в определенное время?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11677,6,24,1,"Что составляет прогноз погоды?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11678,6,24,1,"Естественный способ загрязнения воздуха?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11679,6,24,1,"Самый эффективный путь очистки воздуха?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11680,6,24,1,"Какое время без воды может прожить человек?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11681,6,25,1,"Главное свойство воды?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11682,6,25,1,"Основной источник воды?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11683,6,25,1,"Крупное озеро, которое называют морем?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11684,6,25,1,"Что способствует естественному очищению водоёмов?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11685,6,25,1,"Вода превращается в пар при температуре …","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11686,6,25,1,"Места залегания полезных ископаемых называются?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11687,6,25,1,"Выдели лишнее.","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11688,6,25,1,"Люди какой профессии отыскивают месторождения полезных ископаемых?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11689,6,25,1,"Что из перечисленного относят к полезным ископаемым?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11690,6,25,1,"Какие из полезных ископаемых используют в строительстве?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11691,6,23,1,"Какие полезные ископаемые добывают при помощи буровых установок?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11692,6,23,1,"Какие полезные ископаемые добывают в шахтах?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11693,6,23,1,"Какие полезные ископаемые добывают в карьерах?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11694,6,23,1,"Сель – это…","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11695,6,23,1,"При подъеме в горы температурах воздуха … ","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11696,6,23,1,"Глубокая впадина на равнине, образованная временными водными потоками?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11697,6,23,1,"Почему Россию называют «кладовой полезных ископаемых»?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11698,6,23,1,"На какой стороне дерева растут мхи и лишайники?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11699,6,23,1,"Определение направления по отношению к сторонам горизонта называется?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11700,6,23,1,"Прибор, который состоит из свободно вращающейся магнитной стрелки и циферблата, называется?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');


// дополнительные вопросы
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11883,9,31,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11884,9,31,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11885,9,32,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11886,9,32,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
/*tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11887,9,30,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11888,9,30,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11889,9,30,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11890,9,30,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11891,9,30,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');
tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11892,9,30,1," ?","?1) 1|@2) 2|?3) 3|?4) 4|?5) 5|")');*/

tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11990,10,40,1," ?","?1 а|@ б|? в|? г|? д|")');

       /*tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11145,1,13,2,"Чётными являются ","@ 44|? 23|? 11|@ 18|? 63|? 7|@ 10|@ 84|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11146,1,13,2,"Нечётными являются ","? 44|@ 23|@ 11|? 18|@ 63|@ 7|? 10|? 84|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11147,1,13,3,"<div class=\'type3\'>УСТАНОВИТЕ СООТВЕТСТВИЕ <br> А <br> Б <br> В <br> Г <br> Д <br> Е <br> И <br></div><div class=\'type3b\'>РЕЗУЛЬТАТ<br>1) ГЛАССНЫЕ<br>2) СОГЛАСНЫЕ<br></div>","@А-1 Б-2 В-2 Г-2 Д-2 Е-1 И-1| ")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11148,1,13,1," ?","? 1|? 2|? 3|? 4|@ 5|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11149,1,13,4," Длину сторон прямоугольника обозначают термином «.....».","@периметр|")');
        tx.executeSql('INSERT INTO quests (id, p_id, t_id, type, quest, answers) VALUES (11150,1,13,4," Площадь  квадрата со стороной 8 см  =  ...... см2","@64|")'); */

insert2();
});

}

function insert2(){
var db = openDatabase('TB8', '2.0', 'Test DB', 1 * 1024 * 1024);
var msg;
db.transaction(function (tx) {
tx.executeSql('CREATE TABLE IF NOT EXISTS theme (id unique, p_id, t_name, k_vopr, f_vopr, l_vopr)');

tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (10,1,"Математика вариант №1",25,11101,11125)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (11,1,"Математика вариант №2",25,11126,11150)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (12,1,"Математика вариант №3",25,11151,11175)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (13,1,"Математика вариант №4",25,11176,11200)');
 //tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (14,1,"Математика 5 класс вариант №5",10,11181,11200)');

tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (1,2,"Русский язык вариант №1",25,11201,11225)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (2,2,"Русский язык вариант №2",25,11226,11250)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (3,2,"Русский язык вариант №3",25,11251,11275)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (4,2,"Русский язык вариант №4",25,11276,11300)');

tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (5,3,"Английский язык вариант №1",25,11301,11326)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (6,3,"Английский язык вариант №2",25,11326,11351)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (7,3,"Английский язык вариант №3",25,11351,11376)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (8,3,"Английский язык вариант №4",25,11375,11400)');

tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (21,4,"Весь материал вариант №1",30,15101,15130)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (22,4,"Весь материал вариант №2",45,15151,15195)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (23,4,"Весь материал вариант №3",45,15201,15245)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (24,4,"Весь материал вариант №4",45,15251,15295)');
//tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (25,4,"Весь материал 5 класс вариант №5",45,15251,15295)');


/*tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (26,4,"Весь материал 6 класс вариант №1",30,16101,16130)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (27,4,"Весь материал 6 класс вариант №2",45,16151,16195)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (28,4,"Весь материал 6 класс вариант №3",45,16201,16245)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (29,4,"Весь материал 6 класс вариант №4",50,16251,16300)'); */

tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (26,6,"Тест на эрудицию вариант №1",50,11601,11650)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (27,6,"Тест на эрудицию вариант №2",50,11651,11700)');
//tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (28,6,"Тест на эрудицию вариант №3",25,11651,11675)');
//tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (29,6,"Тест на эрудицию вариант №4",25,11676,11700)');


tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (31,9,"Нормативы по физкультуре",2,11883,11884)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (32,9,"Правила приема",2,11885,11886)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (33,9,"Анкета",2,11883,11884)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (34,9,"Заявление ученика",2,11885,11886)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (35,9,"Заявление родителей",2,11883,11884)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (36,9,"Образец описи документов",2,11885,11886)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (37,9,"Образец автобиографии",2,11883,11884)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (38,9,"Образец педагогической хар-ки",2,11885,11886)');

tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (40,10," Документ 1",1,11990,11990)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (41,10," Документ 2",1,11990,11990)');
tx.executeSql('INSERT INTO theme (id, p_id, t_name, k_vopr, f_vopr, l_vopr) VALUES (42,10," Документ 3",1,11990,11990)');

 localStorage.setItem('LoadC', 1);

});

}

