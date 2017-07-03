var a = 1;
var arr = [];

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
	var hiddenInp = document.getElementById("hiddenInp");
	var idDiv = hiddenInp.dataset.id;
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");

	if(!idDiv){
		var tempId = "reload"+a;
		arr.push(
			{
				id: tempId,
				fname: fname.value,
				lname: lname.value
			}
		);
		a++;
	} else {
		var index = indexID(idDiv,arr);
		arr[index] = {
			id: idDiv,
			fname: fname.value,
			lname: lname.value
		}
	}
	reRenderContainer();
	clearForm();

}

function clearForm(){
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("clickBtn").value = "Add";
	hiddenInp.dataset.id = "";
}

function update(updateElId){
	var index = indexID(updateElId,arr);
	var clickBtn = document.getElementById("clickBtn");
	var hiddenInp = document.getElementById("hiddenInp");
	clickBtn.value = "Ok";
	hiddenInp.dataset.id = updateElId;
	document.getElementById(updateElId).style.backgroundColor = "red";
	document.getElementById("fname").value = arr[index].fname;
	document.getElementById("lname").value = arr[index].lname;
}
function deleteElement(deleteElId){
	var index = indexID(deleteElId,arr);
	arr.splice(index,1);
	reRenderContainer();
}

function indexID(id,arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i].id == id){
			return i
		}
	}
}

function reRenderContainer(){
	// var container = document.getElementById("container");
	// container.innerHTML = "";
	// for(var i = 0; i < arr.length; i++){
	// 		var obj = arr[i];
	// 		var element = createDiv(obj.id,obj.fname,obj.lname);
	// 		container.appendChild(element);
	// 	}
var source   = document.getElementById("text-template").innerHTML;
	var template = Handlebars.compile(source);

	var data = {
		arr: arr,
	};

	var html = template(data);
	// console.log(arr);
	document.getElementById("container").innerHTML = html;


	// document.getElementById('container1').innerHTML = "";
	// for(var i = 0; i < arr.length; i++){
	// 	console.log(arr[i]);
	// 	var html = template(arr[i]);
	// 	console.log(html);
	// 	document.getElementById('container1').innerHTML += html;
	// }

}


