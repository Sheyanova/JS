//let numer=5;

//Простейшее взаимодействие с пользователем
//console.log(numder);

//alert("Вход восприщен");

//let answer=confirm("Есть ли вам 18 лет?");

//let answer=promt("Есть ли вам 18 лет?");

//console.log(answer);

//вносим данные в массив

//let answers=[];

//создаем первую переменную

//answers[0]=prompt("Как вас зовут?");
//answers[1]=prompt("Какая у вас фамилия");
//answers[2]=prompt("Сколько вам лет?");

//выносим данные на экран
//document.write(answers);

//циклы
//i++ увеличение на единицу- инкремент
//for (let i=0; i<10; i++) {
	//	console.log(i)
	//}

//	let answers=[],
//	questions=[ //задаем еще одну переменную
//"Как вас зовут?",
//"Какая у вас фамилия?",
//"Сколько вам лет?"
//	];

//	for (let i = 0; i < questions.length; i++) {
		//		answers[i]=prompt(questions[i])
		//	};

//	document.write(answers);

	//условия

	//	let age=prompt("Ваш возраст?");

//	if (age>18) {
	//		alert("Вы можете войти")
	//	} else {
		//		alert("Рановато еще")
		//	};


//фунуции

function humanSayHello(obj){ // в круглые скобки можно записывать аргументы
	document.write("Hello "+obj+"!")
};
//вызов функции
humanSayHello();
humanSayHello("Ivan");
humanSayHello("Katya");
humanSayHello("Ilya");

function calc(a,b) {
	console.log(a+b)
};

calc(4,5);
calc(5,5);
calc(5,15);