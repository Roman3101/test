function addElement() {
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var container = document.getElementById("container");
	var element = document.createElement("div");
	element.innerHTML = lname.value + " " + fname.value;
	container.appendChild(element);

	fname.value = "";
	lname.value = "";
}