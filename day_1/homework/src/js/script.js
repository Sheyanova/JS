function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = ["html", "css", "MySQL", "MC World", "Photoshop"];

		for (let i = 0; i < skills.length; i++) {
			document.body.innerHTML += "Я владею " + skills[i] + "<br>";
			//необходимо вывести - я владею html <br>
		}
	}

showSkills();

function checkAge() {
if (age > 18) {
	alert("У тебя большие шансы!")
} else {
	alert("Посиди дома пока")
	//
};
};
checkAge();

function calcPow (num) {
	console.log(num*num)
	//Напишите функционал
};
calcPow(4);

};

myFirstApp("Екатерина", 29);