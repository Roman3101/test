function addElement() {
	var text = document.getElementById("text");
	var container = document.getElementById("container");
	var element = document.createElement("div");
	element.innerHTML = text.value;
	container.appendChild(element);

	text.value = "";
}