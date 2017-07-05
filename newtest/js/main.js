 // localStorage.clear();
var tempId;
var arr = JSON.parse(localStorage.getItem("array"));
var counter = localStorage.getItem("counter");

var sourceForm = document.getElementById("formTemplate").innerHTML;
var templateForm = Handlebars.compile(sourceForm);

var sourceContainer = document.getElementById("containerTemplate").innerHTML;
var templateContainer = Handlebars.compile(sourceContainer);

if(arr == null){
	var arr = [];
}
if(arr.length == 0 ){
		var counter = 1;
}
renderForm();
reRenderContainer();

function addElement() {
	var idHidenInp = document.getElementById("id");
	var id = idHidenInp.value;
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");

	if(!id){
		tempId = "reload"+counter;
		arr.push(
			{
				id: tempId,
				fname: fname.value,
				lname: lname.value
			}
		);
		counter++;
	} else {
		var index = indexID(id,arr);
		arr[index] = {
			id: id,
			fname: fname.value,
			lname: lname.value
		}
	}
	localStorage.setItem("array", JSON.stringify(arr));
	localStorage.setItem("counter", counter);
	renderForm();
	reRenderContainer();

}

function update(updateElId){
	var index = indexID(updateElId,arr);
	renderForm(arr[index]);

	var clickBtn = document.getElementById("clickBtn");
	var idHidenInp = document.getElementById("id");
	clickBtn.value = "Ok";
	idHidenInp.value = updateElId;

	reRenderContainer();
	document.getElementById(updateElId).style.backgroundColor = "red";
}

function deleteElement(deleteElId){
	var index = indexID(deleteElId , arr);
	arr.splice(index , 1);
	localStorage.setItem("array", JSON.stringify(arr));
	renderForm();
	reRenderContainer();
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
}

function reRenderContainer(){
	var html = templateContainer({arr:arr});
	document.getElementById("container").innerHTML = html;
}

