if(JSON.parse(localStorage.getItem("names")).length > 0){
	var arr = JSON.parse(localStorage.getItem("names"));
	var a = JSON.parse(localStorage.getItem("a"));
} else {
	var arr = [];
	a = 1;
	}

	var source = document.getElementById("formTemplate").innerHTML;
	var template = Handlebars.compile(source);
	var html = template();
	console.log(html);
	document.body.innerHTML += html;
	console.log(a);


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
	localStorage.setItem("names", JSON.stringify(arr));
	localStorage.setItem("a", JSON.stringify(a));
	reRenderContainer();
	clearForm();

}

function clearForm(){
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("clickBtn").value = "Add";
	document.getElementById("idHidenInp").dataset.id = "";
}

function update(updateElId){
	var index = indexID(updateElId,arr);
	var clickBtn = document.getElementById("clickBtn");
	var idHidenInp = document.getElementById("idHidenInp");
	clickBtn.value = "Ok";
	idHidenInp.dataset.id = updateElId;
	document.getElementById("fname").value = arr[index].fname;
	document.getElementById("lname").value = arr[index].lname;

	checkColorUpd(updateElId);
}


function deleteElement(deleteElId){
	var index = indexID(deleteElId , arr);
	arr.splice(index , 1);
	localStorage.setItem("names", JSON.stringify(arr));
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
	var storedgeNamesArr = JSON.parse(localStorage.getItem("names"));
	var html = template({arr:storedgeNamesArr});
	document.getElementById("container").innerHTML = html;
}


