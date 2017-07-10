 // localStorage.clear();
var arr = [];

if (JSON.parse(localStorage.getItem("array")).length > 0) {
	arr = JSON.parse(localStorage.getItem("array"));
	var counter = +arr[arr.length-1].id + 1;
} else {
	var counter = 1;
}

reRenderForm();
reRenderContainer();

function addElement() {
	var id = document.getElementById("id").value;
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;

	if(!id){
		var tempId = counter;
		arr.push({id: tempId,
				fname: fname,
				lname: lname});
		counter++;
	} else {
		var index = indexID(id,arr);
		arr[index] = {id: id,
			fname: fname,
			lname: lname}
	}
	localStorage.setItem("array", JSON.stringify(arr));
	reRenderForm();
	reRenderContainer();
}

function update(updateElId){
	var index = indexID(updateElId,arr);
	reRenderForm(arr[index]);
	reRenderContainer(updateElId);
	
}

function deleteElement(deleteElId){
	var index = indexID(deleteElId , arr);
	arr.splice(index , 1);
	localStorage.setItem("array", JSON.stringify(arr));
	reRenderForm();
	reRenderContainer();
}

function indexID(id,arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i].id == id){
			return i
		}
	}
}

function templateSource(id){
	var source = document.getElementById(id).innerHTML;
	var template = Handlebars.compile(source);
	return template
}

function reRenderForm(obj){
	var template = templateSource("formTemplate");
	var html = template(obj);
	document.getElementById("form").innerHTML = html;
}

function reRenderContainer(updateElId){
	var template = templateSource("containerTemplate");
	var html = template({arr:arr});
	document.getElementById("container").innerHTML = html;
	if (updateElId) {
		document.getElementById(updateElId).style.backgroundColor = "red";
	}
}

