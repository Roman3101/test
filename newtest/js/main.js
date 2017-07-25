// localStorage.clear();
var arr = [];

if (localStorage.getItem("array") && localStorage.getItem("array") != "[]") {
	arr = JSON.parse(localStorage.getItem("array"));
	var counter = +arr[arr.length-1].id + 1;
} else {
	var counter = 1;
}

reRenderForm();
reRenderContainer(arr[0]);


function addElement() {
	var id = document.getElementById("id").value;
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	
	if (fname.length >= 3 && lname.length >= 2) {
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

		}
		localStorage.setItem("array", JSON.stringify(arr));
		reRenderForm();
		reRenderContainer(arr[index]);
	} else { 
		if (fname.length < 3) {
			reRenderForm({error: "ERROR first name",errorFname: true, fname: fname,	lname: lname});
		} 
		if (lname.length < 2){ 
			reRenderForm({error: "ERROR last name",errorLname: true, fname: fname,	lname: lname});
		}
		if (fname.length < 3 && lname.length < 2) {
			reRenderForm({error: "ERROR first name and last name",errorFname: true, errorLname: true, fname: fname,	lname: lname});
		}
	}

}

function update(updateElId){
	var index = indexID(updateElId,arr);
	arr[index].bgColor = true;
	reRenderForm(arr[index]);
	reRenderContainer(arr[index]);
	arr[index].bgColor = false;
}

function deleteElement(deleteElId){
	var index = indexID(deleteElId , arr);
	var numberPg = activPg(index)
	if(arr[index+1]){
		var temp = arr[index+1];
	} else {
		var temp = arr[index-1];
	}
	arr.splice(index , 1);
	localStorage.setItem("array", JSON.stringify(arr));
	reRenderForm();
	reRenderContainer(temp);
	totalNumber(numberPg);
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

function totalNumber(numberPg){
	var pgArray = [];
	var template = templateSource("pagingTemplate");
	var quantityPages = Math.ceil(arr.length/5);
	if(quantityPages != 0){
		var pgArray = [];
		for (var i = 1; i <= quantityPages; i++) {
			pgArray.push({i});
		}
		pgArray[numberPg].color = true;
		
		var html = template({pgArray:pgArray});
		document.getElementById("pagingСontainer").innerHTML = html;
		pgArray[numberPg].color = false;
	} else {
		var html = template({pgArray:pgArray});
		document.getElementById("pagingСontainer").innerHTML = html;
	}
}

function reRenderContainer(updateElId){
	var template = templateSource("containerTemplate");
	if(updateElId){
		var numberPg = activPg(indexID(updateElId.id , arr))
		var index = indexID(updateElId.id , arr);
		var showArr=[];

		for (var i = 0+5*numberPg; i < 5+5*numberPg; i++) {
			if(arr[i]){
				showArr.push(arr[i]);
			}
		}
		var html = template({arr:showArr});
		totalNumber(numberPg);
	} else {
		var html = template({arr:arr});
	}
	document.getElementById("container").innerHTML = html;
}