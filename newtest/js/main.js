 // localStorage.clear();
var tempId;
var index;
var arr = JSON.parse(localStorage.getItem("array"));
var counter = localStorage.getItem("counter");

var sourceForm = document.getElementById("formTemplate").innerHTML;
var templateForm = Handlebars.compile(sourceForm);

var sourceContainer = document.getElementById("containerTemplate").innerHTML;
var templateContainer = Handlebars.compile(sourceContainer);

if(arr == null){
	arr = [];
}
if(arr.length == 0 ){
	counter = 1;
}
renderForm();

function addElement() {
	var id = document.getElementById("id").value;
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");

	if(!id){
		tempId = counter;
		arr.push(
			{
				id: tempId,
				fname: fname.value,
				lname: lname.value
			}
		);
		counter++;
	} else {
		index = indexID(id,arr);
		arr[index] = {
			id: id,
			fname: fname.value,
			lname: lname.value
		}
	}
	localStorage.setItem("array", JSON.stringify(arr));
	localStorage.setItem("counter", counter);
	renderForm();
}

function update(updateElId){
	index = indexID(updateElId,arr);
	renderForm(arr[index]);
	document.getElementById(updateElId).style.backgroundColor = "red";
}

function deleteElement(deleteElId){
	index = indexID(deleteElId , arr);
	arr.splice(index , 1);
	localStorage.setItem("array", JSON.stringify(arr));
	renderForm();
}

function indexID(id,arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i].id == id){
			return i
		}
	}
}

function renderForm(obj){
	var html = templateForm(obj);
	document.getElementById("form").innerHTML = html;
	reRenderContainer();
}

function reRenderContainer(){
	var html = templateContainer({arr:arr});
	document.getElementById("container").innerHTML = html;
}

