(function(){
	var box =document.querySelector(".box");

	box.addEventListener("mousemove", function() {

		this.style.background="green";
	},false);
	box.addEventListener("mouseout", function() {

		this.style.background="red";
	},false);
}());