//Toggles the class "selected"
$(".btn-work-type").on("click",function(){
	$(".btn-work-type").removeClass("selected");
	$(this).addClass("selected");
});