var a = 1;
function addElement() {

	var container = document.getElementById("container");
	var element = document.createElement("div");
	var tempId = "reload"+a;

	var fnameSpan = document.createElement("span");
	fnameSpan.id = tempId+"fname";
	
	var lnameSpan = document.createElement("span");
	lnameSpan.id = tempId+"lname";

	var deleteEl = document.createElement("button");
	deleteEl.id = tempId;
	deleteEl.setAttribute('onclick', 'deleteElement(this.id);');
	var textBtnDell = document.createTextNode("Delete");

	var updateEl = document.createElement("button");
	updateEl.name = tempId;
	updateEl.setAttribute('onclick', 'update(this.name);');
	var textBtnUpdate = document.createTextNode("Update");

	deleteEl.appendChild(textBtnDell);
	updateEl.appendChild(textBtnUpdate);
	
	element.appendChild(lnameSpan);
	element.appendChild(fnameSpan);

	element.appendChild(deleteEl);
	element.appendChild(updateEl);
	container.appendChild(element);

	renderItem(tempId);
	a++;

}
function deleteElement(deleteElId){
	var element = document.getElementById(deleteElId);
	element.remove();
}
function update(updateElId){
	document.getElementById("clickBtn").value = "Ok";
	document.getElementById("clickBtn").onclick = completionUpdate;
	document.getElementById("clickBtn").dataset.id = updateElId;
	document.getElementById("fname").value = document.getElementById(updateElId + "fname").textContent;
	document.getElementById("lname").value = document.getElementById(updateElId + "lname").textContent;
}
function completionUpdate(){
	document.getElementById("clickBtn").value = "Add";
	document.getElementById("clickBtn").onclick = addElement;
	var idDiv = document.getElementById("clickBtn").dataset.id;
	renderItem(idDiv);
}
 function renderItem(idDiv){
 	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
 	document.getElementById(idDiv+"fname").innerHTML = fname.value + " ";
	document.getElementById(idDiv+"lname").innerHTML = lname.value + " ";
	fname.value = "";
	lname.value = "";
 }


