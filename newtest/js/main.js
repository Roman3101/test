var a = 1;
function addElement() {

	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var container = document.getElementById("container");
	var element = document.createElement("div");
	var fnameSpan = document.createElement("span");
	fnameSpan.id = "reload"+a+"fname";
	fnameSpan.innerHTML = fname.value + " ";
	
	var lnameSpan = document.createElement("span");
	lnameSpan.id = "reload"+a+"lname";
	lnameSpan.innerHTML = lname.value + " ";

	var deleteEl = document.createElement("button");
	deleteEl.id = "reload"+a;
	deleteEl.setAttribute('onclick', 'deleteElement(this.id);');
	var textBtnDell = document.createTextNode("Delete");

	var updateEl = document.createElement("button");
	updateEl.name = "reload"+a;
	updateEl.setAttribute('onclick', 'update(this.name);');
	var textBtnUpdate = document.createTextNode("Update");
	
	deleteEl.appendChild(textBtnDell);
	updateEl.appendChild(textBtnUpdate);
	
	element.appendChild(lnameSpan);
	element.appendChild(fnameSpan);

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
	document.getElementById("fname").value = document.getElementById(updateElId + "fname").textContent;
	document.getElementById("lname").value = document.getElementById(updateElId + "lname").textContent;
}
function completionUpdate(){
	document.getElementById("clickBtn").style.display = "";
	document.getElementById("clickBtnOk").style.display = "none";
	var idDiv = document.getElementById("clickBtnOk").name;
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var divText = document.getElementById(idDiv).innerHTML;

	document.getElementById(idDiv+"fname").innerHTML = fname.value + " ";
	document.getElementById(idDiv+"lname").innerHTML = lname.value + " ";
	fname.value = "";
	lname.value = "";
}