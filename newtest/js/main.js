function addElement() {
	var temp = document.getElementById("text");
	var mydiv = document.getElementById("container");
	var div = document.createElement("div");
	div.innerHTML = temp.value;
	mydiv.appendChild(div);

	temp.value = "";
}