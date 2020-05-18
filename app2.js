const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const small = document.querySelector(".feedback");
const small1 = document.querySelector(".feedback1");
const username = document.querySelector("#username");
const password = document.querySelector("#password")

// Validation 
// const username = form.username.value;
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const password = form.password.value;
const passwordPattern = /^[a-z A-Z 0-9]{6,12}$/;


form.addEventListener("submit", function(e){
    e.preventDefault();

// Validation

// // const username = form.username.value;
// const usernamePattern = /^[a-zA-Z]{6,12}$/gm;

// // const password = form.password.value;
// const passwordPattern = /^[a-zA-Z]{6,12}$/gm;
console.log(username.value);

if(usernamePattern.test(username.value) ){
    // feedback good info
    small.innerText = "That username is valid";

} else {
    // feedback help info
    small.innerText = "Username must contain 6-12 letters only!";

}

console.log(password.value)
if ( passwordPattern.test(password.value) ){
    small1.innerText = "That Password is valid";
} else {
    small1.innerText = "Password must contain 6-12 letters only!";
}

});

// live feedback
form.username.addEventListener("keyup", e => {
    // Ways to check the value inserted
    // console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        // Border changes to green when true
        // setAttribute: Completely overtites what's already there
        form.username.setAttribute('class', 'success');
        // form.password.setAttribute("class", "success");
    } else {
        form.username.setAttribute('class', 'error');
        // form.password.setAttribute('class', 'error');
    }
});

form.password.addEventListener("keyup", function(e){
    if(passwordPattern.test(e.target.value)){
        form.password.setAttribute("class", "success");
    } else {
        form.password.setAttribute('class', 'error');
    }
})