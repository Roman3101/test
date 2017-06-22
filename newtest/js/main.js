var a = 1;
function addElement() {

	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var container = document.getElementById("container");
	var element = document.createElement("div");
	element.id = "reload"+a;

	var deleteEl = document.createElement("button");
	deleteEl.id = "reload"+a;
	deleteEl.setAttribute('onclick', 'deleteElement(this.id);');
	var textBtnDell = document.createTextNode("Delete");

	var updateEl = document.createElement("button");
	updateEl.id = "reload"+a;
	updateEl.setAttribute('onclick', 'update(this.id);');
	var textBtnUpdate = document.createTextNode("Update");
	element.innerHTML = lname.value + " " + fname.value + " ";
	deleteEl.appendChild(textBtnDell);
	updateEl.appendChild(textBtnUpdate);
	element.appendChild(deleteEl);
	element.appendChild(updateEl);
	container.appendChild(element);

	fname.value = "";
	lname.value = "";
	a++;

}
function deleteElement(deleteElId){
	var element = document.getElementById(deleteElId);
	element.remove();
}
function update(updateElId){
	document.getElementById("clickBtn").style.display = "none";
	document.getElementById("clickBtnOk").style.display = "";
	document.getElementById("clickBtnOk").name = updateElId;
	document.getElementById("fname").value = document.getElementById(updateElId).textContent.split(" ")[1];
	document.getElementById("lname").value = document.getElementById(updateElId).textContent.split(" ")[0];
}
function completionUpdate(){
	document.getElementById("clickBtn").style.display = "";
	document.getElementById("clickBtnOk").style.display = "none";
	var idDiv = document.getElementById("clickBtnOk").name;
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var divText = document.getElementById(idDiv).innerHTML.split(" ");
	divText[0] = lname.value;
	divText[1] = fname.value;
	var newDivText = divText.join(" ");
	document.getElementById(idDiv).innerHTML = newDivText;

	fname.value = "";
	lname.value = "";
}