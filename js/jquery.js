//Toggles the class "selected"
$(".btn-work-type").on("click",function(){
	var btnWorkType = $(".btn-work-type")
	btnWorkType.removeClass("selected");
	$(this).addClass("selected");

	if ($(this).index()==btnWorkType[0]){
		$(".gallery-element").fadeIn(500);
	} else {
		$(".gallery-element").fadeOut(500);	
	}
});

//contact form validations
$("#contact-us-form").on("submit",function(){
	var userName =$("#input-name"),
		userEmail=$("#input-email"),
		userMessage=$("#input-message"),
		emailRegEx=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	//validation for empty name
	if (userName.val().length==0){
		sweetAlert("Please provide a Name");
		return false;
	}
	//validation for empty email
	if (userEmail.val().length==0){
		sweetAlert("Please provide an Email");
		return false;
	}	
	//validation for valid email
	if (!emailRegEx.test(userEmail.val())) {
		sweetAlert("Please provide a valid Email");
		return false;
	}
	//validation for empty message
	if (userMessage.val().length==0){
		sweetAlert("Please provide a Message");
		return false;
	}
}); //contact form validation

//header scroll button
$(".btn-scroll").on("click",function(){
	$(this).toggleClass("scrolled");
	$("header").toggleClass("scrolled");
});
