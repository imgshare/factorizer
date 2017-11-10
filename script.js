document.addEventListener("click", factor);

function factor(elem) {
	if (elem.target.id!="button") {
		return;
	}
	var text = document.getElementById('text').value;
	var num = Number(text);
	var arr = [];
	console.log(text,num,arr);
	if (!isNaN(num)) {
		var i = 1;
		var cont = true;
		while(cont) {
			if (i>Math.sqrt(num)) {
				cont = false;
			}
			if (num%i===0) {
				if (arr.includes(num/i)||arr.includes(i)) {
					console.log("duped!");
				} else {
					arr.push(num/i,i);
				}
			}
			console.log("Attempt "+i+": factors "+num/i+", "+i);
			i++;
			//console.log(arr);
		}
		document.getElementById("output").value = arr;
	} else {
		document.getElementById("output").value = "NaN";
		return;
	}
}