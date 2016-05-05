//contact form validations
function validateContactForm(){
	var contactFormInputName = document.getElementById("input-name"),
		contactFormInputEmail = document.getElementById("input-email"),
		contactFormInputMessage = document.getElementById("input-message");

	//validate if the name field is empty
	if (contactFormInputName.value.length==0){
		//alert("Please provide your name.");
		sweetAlert("Please provide your name.");
		contactFormInputName.focus();
		return false;
	}
	//validate if the email field is empty
	if (contactFormInputEmail.value.length==0){
		//alert("Please provide your Email.");
		sweetAlert("Please provide your Email.");
		contactFormInputEmail.focus();
		return false;
	}	

	//validate if a valid email was provided
	var emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	if (!emailPattern.test(contactFormInputEmail.value)){
		//alert("Please provide a valid email address");
		sweetAlert("Please provide a valid email address");
		contactFormInputEmail.focus();
		return false;
	}
	//validate if the message field is empty
	if (contactFormInputMessage.value.length==0){
		//alert("Please provide a Message.");
		sweetAlert("Please provide a Message.");
		contactFormInputMessage.focus();
		return false;
	}
} //validate contact form

//change selected item
function changeSelected(e) {
	var galleryButtons = document.getElementsByClassName("btn-work-type"),
		clickedButton = e.target;

	for (var i = 0; i <= galleryButtons.length-1; i++) {
		galleryButtons[i].classList.remove("selected");
	}
	e.target.classList.add("selected");
}

var galleryButtonContainer = document.getElementById("btn-work-type-container");

//galleryButtonContainer.addEventListener('click',changeSelected,false);

//Listener for contact button
var contactForm = document.getElementById("contact-us-form");

//contactForm.addEventListener("submit",validateContactForm,false);