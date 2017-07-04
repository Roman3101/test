
if(JSON.parse(localStorage.getItem("keyArr")) != null){
	var arr = JSON.parse(localStorage.getItem("keyArr"));
	if(localStorage.getItem("keyArr").length > 2 ){
		var a = localStorage.getItem("a");
	} else var a = 1;
	
} else {
	var arr = [];
	var a = 1;
}

renderForm();
reRenderContainer();

function addElement() {
	var idHidenInp = document.getElementById("idHidenInp");
	var idDiv = idHidenInp.dataset.id;
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
	localStorage.setItem("keyArr", JSON.stringify(arr));
	localStorage.setItem("a", a);
	renderForm();
	reRenderContainer();

}

function update(updateElId){
	var index = indexID(updateElId,arr);
	var clickBtn = document.getElementById("clickBtn");
	var idHidenInp = document.getElementById("idHidenInp");
	clickBtn.value = "Ok";
	idHidenInp.dataset.id = updateElId;
	document.getElementById("fname").value = arr[index].fname;
	document.getElementById("lname").value = arr[index].lname;
	
	reRenderContainer();
	document.getElementById(updateElId).style.backgroundColor = "red";
}

function deleteElement(deleteElId){
	var index = indexID(deleteElId , arr);
	arr.splice(index , 1);
	localStorage.setItem("keyArr", JSON.stringify(arr));
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

function reRenderContainer(){
	var source = document.getElementById("containerTemplate").innerHTML;
	var template = Handlebars.compile(source);
	var storedgeNamesArr = JSON.parse(localStorage.getItem("keyArr"));
	var html = template({arr:storedgeNamesArr});
	document.getElementById("container").innerHTML = html;
}

function renderForm(){
	var source = document.getElementById("formTemplate").innerHTML;
	var template = Handlebars.compile(source);
	var html = template();
	document.body.innerHTML = html;
}
