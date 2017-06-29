var a = 1;
function createDelBtn(){
	var deleteEl = document.createElement("button");
	deleteEl.setAttribute("onclick", "deleteElement(this.parentNode.id)");
	var textBtnDell = document.createTextNode("Delete");
	deleteEl.appendChild(textBtnDell);
	return deleteEl
}

function createUpdBtn(){
	var updateEl = document.createElement("button");
	updateEl.setAttribute("onclick", "update(this.parentNode.id)");
	var textBtnUpdate = document.createTextNode("Update");
	updateEl.appendChild(textBtnUpdate);
	return updateEl
}

function createNameSpan(text){
	var nameSpan = document.createElement("span");
	nameSpan.innerHTML = text;
	return nameSpan
}

function createDiv(id,fname,lname){
	var element = document.createElement("div");
	element.id = id;
	element.appendChild(createNameSpan(fname));
	element.appendChild(createNameSpan(lname));
	element.appendChild(createDelBtn());
	element.appendChild(createUpdBtn());
	return element
}

function addElement() {
	var container = document.getElementById("container");
	var clickBtn = document.getElementById("clickBtn");
	var idDiv = clickBtn.dataset.id;
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");

	if(!idDiv){
		var tempId = "reload"+a;
		var element = createDiv(tempId,fname.value,lname.value);
		container.appendChild(element);
		a++;
	} else {
		container.replaceChild(createDiv(idDiv,fname.value,lname.value), document.getElementById(idDiv));
	}
		clearForm();
	
}

function clearForm(){
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("clickBtn").value = "Add";
	clickBtn.dataset.id = "";
}

function update(updateElId){
	var clickBtn = document.getElementById("clickBtn");
	clickBtn.value = "Ok";
	clickBtn.dataset.id = updateElId;
	document.getElementById(updateElId).style.backgroundColor = "red";
	document.getElementById("fname").value = document.getElementById(updateElId).childNodes[0].textContent;
	document.getElementById("lname").value = document.getElementById(updateElId).childNodes[1].textContent;
}
function deleteElement(deleteElId){
	var element = document.getElementById(deleteElId);
	element.remove();
}

