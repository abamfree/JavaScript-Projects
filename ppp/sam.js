//@@ -0,0 +1,155 @@
// Master Function
function rec() {
	unhide();
	size();
	getSauce();
	getCheese();
	getMeat();
	getVeggies();
	getCrust();
};
 // Order Button
function unhide(){
	if (show.style.display === "none") {
		show.style.display = "block";
	} else {
			show.style.display = "block";
		}
		document.getElementById("lock").disabled = true;
}
 // Cancel Button
function cancel(){
	if (show.style.display === "block") {
		show.style.display = "none";
		} 
	text1 = "";
	runningTotal = 0;
	document.getElementById("lock").disabled = false;
}
 // Global Variables
var runningTotal = 0;
var text1 = "";
var show = document.getElementById("cart");
 // Size
function size() {
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
		for (var i = 0; i < sizeArray.length; i++) {
			if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			}
		}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	}
	else if (selectedSize === "Medium Pizza"){
		sizeTotal= 10;
	}
	else if (selectedSize === "Large Pizza"){
		sizeTotal= 14;
	}
	else if (selectedSize === "Extra-Large Pizza"){
		sizeTotal= 16;
	}
	text1 = text1+selectedSize+" "+ "$" +sizeTotal+".00";
	runningTotal = sizeTotal;
	return sizeTotal;
};
 // Sauce
function getSauce(){
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var s = 0; s < sauceArray.length; s++) {
	if (sauceArray[s].checked) {
		var selectedSauce = (sauceArray[s].value);
		}
	}
	text1 = text1+"<br> "+selectedSauce+" "+ "$" +sauceTotal+".00";
};
 // Cheese
function getCheese() {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
		for (var c = 0; c < cheeseArray.length; c++) {
			if (cheeseArray[c].checked) {
			var selectedCheese = (cheeseArray[c].value);
			}
		}
		if (cheeseArray[1].checked){
			cheeseTotal = 3;
		}
		else {
			cheeseTotal = cheeseTotal;
		}
		text1 = text1+"<br> "+selectedCheese+" "+ "$" +cheeseTotal+".00";
		runningTotal += cheeseTotal;
};
 // Meat
function getMeat() {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("Meats");
		for (var m = 0; m < meatArray.length; m++) {
			if (meatArray[m].checked) {
			selectedMeat.push(meatArray[m].value);
			}
		}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1)
	}
	else {
		meatTotal = 0;
	}
	text1 = text1+"<br> "+selectedMeat+" "+ "$" + meatTotal+".00";
	runningTotal += meatTotal;
};
 // Veggies
function getVeggies() {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
		for (var v = 0; v < veggieArray.length; v++) {
			if (veggieArray[v].checked) {
			selectedVeggie.push(veggieArray[v].value);
			}
		}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1)
	}
	else {
		veggieTotal = 0;
	}
	text1 = text1+"<br> "+selectedVeggie+"  "+ "$" + veggieTotal+".00";
	runningTotal += veggieTotal
};
 // Crust
function getCrust() {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
		for (var j = 0; j < crustArray.length; j++){
			if (crustArray[j].checked){
			var selectedCrust = (crustArray[j].value);
			}
		}
	if (crustArray[2].checked){
		crustTotal= 3;
	}
	else {
		crustTotal = crustTotal
	}
	text1 = text1+"<br> "+selectedCrust+" "+ "$" + crustTotal+".00";
	runningTotal += crustTotal
	document.getElementById("result1").innerHTML=text1;
	document.getElementById("result2").innerHTML="$" + runningTotal + ".00";
}; 