var a = 1;
function addElement() {
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var container = document.getElementById("container");
	var element = document.createElement("div");
	element.id = "reload"+a;

	var deleteEl = document.createElement("button");
	deleteEl.id = "reload"+a;
	deleteEl.setAttribute('onclick', 'dell(this.id);')
	var textBtn = document.createTextNode("Delete");
	element.innerHTML = lname.value + " " + fname.value + " ";
	deleteEl.appendChild(textBtn);
	element.appendChild(deleteEl);
	container.appendChild(element);

	fname.value = "";
	lname.value = "";
	a++;
}
function dell(deleteElId){
	var element = document.getElementById(deleteElId);
	element.remove();
}
