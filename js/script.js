const form = document.getElementById("signIn");
const userNameEmail = document.getElementById("userNameEmail");
const password = document.getElementById("password");
anime({
	targets: '#signUp',
	translateX: 150,
	rotate: '5turn',
	duration: 800
  });

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    submitCheck()

})
function submitCheck() {
	const userNameEmail_Validation = userNameEmail.value.trim();
	const passwordValue_Validation = password.value.trim();

	
	if(userNameEmail_Validation === '') {
		invalid(userNameEmail, 'This field cannot be empty');
	} else {
		valid(userNameEmail, "Good!");
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
	












