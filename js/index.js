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
		galleryElements = document.getElementsByClassName("gallery-element"),
		clickedButton = e.target;

	for (var i = 0; i <= galleryButtons.length-1; i++) {
		galleryButtons[i].classList.remove("selected");
	}
	e.target.classList.add("selected");

	//hide gallery elements
	for (var i = 0 ; i <= galleryElements.length-1; i++) {
		if (e.target.id !== "photography-btn") {
			galleryElements[i].classList.add("display-hidden");
		} else {
			galleryElements[i].classList.remove("display-hidden");
		}
	}
	//hide gallery elements gradually
	// for (var i = 0; i <= galleryElements.length-1; i++) {
	// 	if (e.target.id !== "photography-btn") {
	// 		for (var ii = 1; ii <= 10; ii++) {
	// 			var op= 1-parseFloat('0.'+ii);
	// 			if (ii==10){
	// 				op = 0;
	// 			}
	// 			galleryElements[i].style.opacity = op;
	// 		}
	// 	} else {
	// 		//galleryElements[i].classList.remove("display-hidden");
	// 	}
	// }
}

//scroll down header
var scrollDownHeader = function(){
	var scrollHeaderButton = document.getElementById("header-scroll-btn"),
		headerContainer = document.getElementById("prueba");

		headerContainer.classList.toggle("scrolled");
		scrollHeaderButton.classList.toggle("scrolled");
}

//modal window object
function modalWindow (){
	this.popUpContainer = document.createElement("div");
	this.popUpContainer.className="popUpContainer";
	this.popUpWindow = document.createElement("div");
	this.popUpWindow.className="popUpWindow";
	this.closeButton = document.createElement("a");
	this.closeButton.href = "#";
	this.closeButtonImage = document.createElement("i");
	this.closeButtonImage.className="fa fa-times-circle-o";
	this.closeButtonImage.setAttribute("aria-hidden","true");
	this.titleTag = document.createElement("h2");
	this.contentTag = document.createElement("p");

	//Assemble the modal window
	this.popUpWindow.appendChild(this.closeButton).appendChild(this.closeButtonImage);
	this.popUpWindow.appendChild(this.titleTag);
	this.popUpWindow.appendChild(this.contentTag);
	this.popUpContainer.appendChild(this.popUpWindow);
};

modalWindow.prototype.openWindow = function(width,height,title,content) {
	this.width = width;
	this.height = height;
	this.title = title;
	this.content = content;	
	
	if (this.height>0) {
		this.popUpWindow.style.height = this.height + 'px';
	}
	if (this.width>0) {
		this.popUpWindow.style.width = this.width + 'px';		
	}
	if (this.title.length===0) {
		this.title = ""
	} else {
		this.title = title;
	}
	if (this.content.length===0) {
		this.content = ""
	} else {
		this.content = content;
	}
	this.titleTagText = document.createTextNode(this.title);
	this.titleTag.appendChild(this.titleTagText);
	this.contentTagText = document.createTextNode(this.content);
	this.contentTag.appendChild(this.contentTagText);
	//this.popUpWindow.style.backgroundColor = 'white';
	//this.popUpWindow.style.color = 'black';

	//appends the modal window into the body
	document.body.appendChild(this.popUpContainer);
	this.closeWindow();
};

modalWindow.prototype.closeWindow = function() {
	var modalWindow=this.popUpContainer;
	//creates closing event on click
	this.closeButton.addEventListener("click",function(e){
		e.preventDefault();
		modalWindow.remove();
	},false);
};

//Listener for header scroll button
var headerScrollButton = document.getElementById("header-scroll-btn");

headerScrollButton.addEventListener('click',scrollDownHeader,false);

//Listener for lastest work galleries
var galleryButtonContainer = document.getElementById("btn-work-type-container");

galleryButtonContainer.addEventListener('click',changeSelected,false);

//Listener for contact button
var contactForm = document.getElementById("contact-us-form");

contactForm.addEventListener("submit",validateContactForm,false);

//Listener for popUp test button
var popUpbtn = document.getElementById("pruebaPopUp");

popUpbtn.addEventListener("click",function(e){
	e.preventDefault();
	var infoPopUp = new modalWindow();

	infoPopUp.openWindow(400,800,"Hola","Esto es una prueba");
},false);