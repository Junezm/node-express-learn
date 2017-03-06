var fortunes = [
		"hello 1",
		"world 2",
		"html 3",
		"javascript 4"
]

exports.getFortune = function () {
	return  fortunes[Math.floor(Math.random()*fortunes.length)];
}