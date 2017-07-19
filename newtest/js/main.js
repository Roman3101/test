// localStorage.clear();
var arr = [];

if (localStorage.getItem("array") && localStorage.getItem("array") != "[]") {
	arr = JSON.parse(localStorage.getItem("array"));
	var counter = +arr[arr.length-1].id + 1;
} else {
	var counter = 1;
}

reRenderForm();
reRenderContainer(0);

function addElement() {
	var id = document.getElementById("id").value;
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;

	if(!id){
		var tempId = counter;
		arr.push({id: tempId,
				fname: fname,
				lname: lname});
		var index = indexID(counter , arr);
		counter++;
		
	} else {
		var index = indexID(id,arr);
		arr[index] = {id: id,
			fname: fname,
			lname: lname}
	console.log(arr[index]);

	}
	localStorage.setItem("array", JSON.stringify(arr));
	reRenderForm();
	reRenderContainer(arr[index]);
}

function update(updateElId){
	var index = indexID(updateElId,arr);
	arr[index].bgColor = true;
	console.log(arr[index]);
	reRenderForm(arr[index]);
	reRenderContainer(activPg(index));
	arr[index].bgColor = "";

	// document.getElementById(updateElId).style.backgroundColor = "red";
}

function deleteElement(deleteElId){
	var index = indexID(deleteElId , arr);
	var numberPg = document.getElementById("id").dataset.number;
	arr.splice(index , 1);
	localStorage.setItem("array", JSON.stringify(arr));
	reRenderForm();

	if(activPg(index) == totalNumber() && activPg(index) != 0){
		reRenderContainer(activPg(index)-1);
	} else {
		reRenderContainer(activPg(index));
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

function activPg(index){
	var temp = index/5;
	return ~~temp
}

function indexID(id,arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i].id == id){
			return i
		}
	}
}

function totalNumber(){
	var pgArray = [];
	var quantityPages = Math.ceil(arr.length/5);
	for (var i = 1; i <= quantityPages; i++) {
		pgArray.push(i);
	}
	var template = templateSource("pagingTemplate");
	var html = template({pgArray:pgArray});
	document.getElementById("pagingСontainer").innerHTML = html;
	return quantityPages
}

function reRenderContainer(updateElId){
	
	updateElId ;
	var template = templateSource("containerTemplate");
	var showArr=[];

	for (var i = 0+5*updateElId; i < 5+5*updateElId; i++) {
		if(arr[i]){
			showArr.push(arr[i]);
		}
	}
	var html = template({arr:showArr});
	document.getElementById("container").innerHTML = html;
	
	totalNumber();
	// document.getElementById(updateElId+1+"pg").style.backgroundColor = "gray";
}