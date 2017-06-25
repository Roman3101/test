var a = 1;
function addElement() {

	var container = document.getElementById("container");
	var tempId = "reload"+a;

	var element = document.createElement("div");
	element.id = tempId;
	
	var fnameSpan = document.createElement("span");
	var lnameSpan = document.createElement("span");

	var deleteEl = document.createElement("button");
	deleteEl.setAttribute("onclick", "deleteElement(this.parentNode.id)");
	var textBtnDell = document.createTextNode("Delete");

	var updateEl = document.createElement("button");
	updateEl.setAttribute("onclick", "update(this.parentNode.id)");
	var textBtnUpdate = document.createTextNode("Update");

	deleteEl.appendChild(textBtnDell);
	updateEl.appendChild(textBtnUpdate);
	
	element.appendChild(lnameSpan);
	element.appendChild(fnameSpan);

	element.appendChild(deleteEl);
	element.appendChild(updateEl);

	container.appendChild(element);
	
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	fnameSpan.innerHTML = fname.value + " ";
	lnameSpan.innerHTML = lname.value + " ";
	fname.value = "";
	lname.value = "";	
	a++;
	return tempId;
}
function deleteElement(deleteElId){
	var element = document.getElementById(deleteElId);
	element.remove();
}
function update(updateElId){
	document.getElementById("clickBtn").value = "Ok";
	document.getElementById("clickBtn").onclick = completionUpdate;
	document.getElementById("clickBtn").dataset.id = updateElId;
	document.getElementById("fname").value = document.getElementById(updateElId).childNodes[1].textContent;
	document.getElementById("lname").value = document.getElementById(updateElId).childNodes[0].textContent;
}
function completionUpdate(){
	document.getElementById("clickBtn").value = "Add";
	document.getElementById("clickBtn").onclick = renderItem;
	var idDiv = document.getElementById("clickBtn").dataset.id;
	renderItem(idDiv);
}
function renderItem(idDiv){
	var temp = addElement();
	container.replaceChild(document.getElementById(temp), document.getElementById(idDiv));

}
