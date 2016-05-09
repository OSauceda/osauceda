//Toggles the class "selected"
$(".btn-work-type").on("click",function(){
	var btnWorkType = $(".btn-work-type")
	btnWorkType.removeClass("selected");
	$(this).addClass("selected");

	if ($(this).index()==btnWorkType[0]){
		$(".gallery-element").fadeIn(1000);
	} else {
		$(".gallery-element").fadeOut(1000);	
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
		alert("Please provide a Name");
		userName.focus();
		return false;
	}
	//validation for empty email
	if (userEmail.val().length==0){
		alert("Please provide an Email");
		userEmail.focus();
		return false;
	}	
	//validation for valid email
	if (!emailRegEx.test(userEmail.val())) {
		alert("Please provide a valid Email");
		userEmail.focus();
		return false;
	}
	//validation for empty message
	if (userMessage.val().length==0){
		alert("Please provide a Message");
		userMessage.focus();
		return false;
	}
}); //contact form validation

//header scroll button
$(".btn-scroll").on("click",function(){
	$(this).toggleClass("scrolled");
	$("header").toggleClass("scrolled");
});
