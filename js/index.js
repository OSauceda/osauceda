function clearSearchBox(a) {
	var elSearchBox = document.getElementById("search-box");
	switch (a){
		case "clearOnFocus":
			if (elSearchBox.value=="Search.."){
				elSearchBox.value="";
			}
			break;
		case "resetOnBlur":
			if (elSearchBox.value.length==0){
				elSearchBox.value="Search...";
			}
			break;
		}
}

function validateEmptyInputFields(element,event) {
	switch (event){
		case "resetOnBlur":
			switch(element){
				case "inputName":
					var element = document.getElementById("input-name");
					if (element.value.length==0){
						element.value="Your Name..";
					}
					break;
				case "inputEmail":
					var element = document.getElementById("input-email");
					if (element.value.length==0){
						element.value="Your Email..";
					}
					break;
				case "inputMessage":
					var element = document.getElementById("input-message");
					if (element.value.length==0){
						element.value="Your Message..";
					}
					break;
			}// switch element
			break;
		case "clearOnFocus":
			switch(element){
				case "inputName":
					var element = document.getElementById("input-name");
					if (element.value=="Your Name.."){
						element.value="";
					}
					break;
				case "inputEmail":
					var element = document.getElementById("input-email");
					if (element.value=="Your Email.."){
						element.value="";
					}
					break;
				case "inputMessage":
					var element = document.getElementById("input-message");
					if (element.value=="Your Message.."){
						element.value="";
					}
					break;
			} //switch element
			break;
	} //switch event

} //validateEmptyInputFields

//contact form validations
function validateContactForm(){
	var contactFormInputName = document.getElementById("input-name"),
		contactFormInputEmail = document.getElementById("input-email"),
		contactFormInputMessage = document.getElementById("input-message");

	//validate if the name field is empty
	if (contactFormInputName.value.length==0 || contactFormInputName.value=="Your Name.."){
		//alert("Please provide your name.");
		sweetAlert("Please provide your name.");
		contactFormInputName.focus();
		return false;
	}
	//validate if the email field is empty
	if (contactFormInputEmail.value.length==0 || contactFormInputEmail.value=="Your Email.."){
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
	if (contactFormInputMessage.value.length==0 || contactFormInputMessage.value=="Your Message.."){
		//alert("Please provide a Message.");
		sweetAlert("Please provide a Message.");
		contactFormInputMessage.focus();
		return false;
	}



} //validate contact form

//Listeners for search box

var searchBox = document.getElementById("search-box");

searchBox.addEventListener('blur',function(){
	clearSearchBox('resetOnBlur');
},false);

searchBox.addEventListener('focus',function(){
	clearSearchBox('clearOnFocus');
},false);

//Listeners for contact form
var inputName = document.getElementById("input-name");
var inputEmail = document.getElementById("input-email");
var inputMessage = document.getElementById("input-message");

inputName.addEventListener('focus',function(){
	validateEmptyInputFields('inputName','clearOnFocus');
},false);

inputName.addEventListener('blur',function(){
	validateEmptyInputFields('inputName','resetOnBlur');
},false);

inputEmail.addEventListener('focus',function(){
	validateEmptyInputFields('inputEmail','clearOnFocus');
},false);

inputEmail.addEventListener('blur',function(){
	validateEmptyInputFields('inputEmail','resetOnBlur');
},false);

inputMessage.addEventListener('focus',function(){
	validateEmptyInputFields('inputMessage','clearOnFocus');
},false);

inputMessage.addEventListener('blur',function(){
	validateEmptyInputFields('inputMessage','resetOnBlur');
},false);

//Listener for submit button
var submitButton = document.getElementById("submit-send");
console.log(submitButton);
submitButton.addEventListener("click",validateContactForm,false);
