function myFunction() {
	var temp = document.getElementById("text").value;
	var mydiv = document.getElementById("container");
	var div = document.createElement("div");
	div.innerHTML = temp;
	mydiv.appendChild(div);

	document.getElementById("text").value = "";
}