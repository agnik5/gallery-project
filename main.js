var $images = document.querySelectorAll("div#photos img");
var $zoom = document.querySelector("div#zoom");

// function printImages() {
// 	console.log($images);
// 	// console.log("mood");
// 	// console.log(999 + 9.99);
// }
// printImages();

// function printImage(index) {
// 	console.log($images[index]);
// }
// printImage();

// [$images].forEach(printImage)

// function hello() {
// 	console.log("hello");
// }

// var names=["dom", "morze", "ogród"]
// console.log(names);
// names.forEach(function printName(name) {
// 	console.log(name);
// });

$images.forEach(function printImage(image) {
	console.log(image);
	image.addEventListener("click", function clickHandler(e) {
		var $image = document.createElement("img");
		$image.src = image.parentNode.href;
		// console.log("success", $image);
		$zoom.innerHTML = "";
		$zoom.appendChild($image);
		// console.log($zoom.innerHTML);
		e.preventDefault();
	});
});


// notes:
// document.querySelector("div img")
// funkcja querySelector zwroci nam tylko jeden element - pierwszy
// var a = 2;
// var b = "smile";
// a = "WarsawJS"
// setTimeout(function() {
// 	alert("Beware of cats!");	
// },2000);
// definiowanie funkcji: function nazwaFunkcji () {tu zestaw reguł co funkcja bedzie robila}
// nawiasy zwykłe są do parametrów
// nazwy funkcji: camelcase lub underscore
// printImages() - uruchomienie funkcji

// function printImage(index) {
// 	console.log(index)
// }
// printImage(22);