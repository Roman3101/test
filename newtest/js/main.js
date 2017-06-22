function myFunction() {
	var temp = document.getElementById("text").value;
	var mydiv = document.getElementById("container");
    var btn = document.createElement("div");
    btn.innerHTML = temp;
    mydiv.appendChild(btn);

    document.getElementById("text").value = "";
}