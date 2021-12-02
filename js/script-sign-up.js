const form = document.getElementById("signIn");
const userNameEmail = document.getElementById("userNameEmail");
const password = document.getElementById("password");
const userName = document.getElementById("userName");
const phone = document.getElementById("phone");


form.addEventListener('submit',(e) =>{
    e.preventDefault()
    submitCheck()

})
function submitCheck() {
	const userNameEmail_Validation = userNameEmail.value.trim();
	const passwordValue_Validation = password.value.trim();
	const userName_Validation = userName.value.trim();
	const phone_Validation = phone.value.trim();

	
	if(userNameEmail_Validation === '') {
		invalid(userNameEmail, 'This field cannot be empty');
	} else {
		valid(userNameEmail, "Good!");
	}
    if(userName_Validation === '') {
		invalid(userName, 'This field cannot be empty');
	} else {
		valid(userName, "Good!");
	}
    if(phone_Validation === '') {
		invalid(phone, 'This field cannot be empty');
	} else {
		valid(phone, "Good!");
	}
	

	
	if(passwordValue_Validation === '') {
		invalid(password, 'This field cannot be empty');
	} else {
		valid(password, "Good!");
	}
	
	
}

function invalid(input, message) {
	var valid = input;
    var result = valid.nextElementSibling;
    valid.classList.remove("is-valid")
	valid.className += " is-invalid";
	result.innerText = message;
    console.log($("#phone").val())
}

function valid(input, message) {
	var valid = input;
	var result = valid.nextElementSibling;
    valid.classList.remove("is-invalid")
	result.innerText = message;
	valid.className += " is-valid";
    console.log($("#phone").val())
}
	


$(function(){
    $("#phone").mask("+7 (999) 999-9999");
  });
  









