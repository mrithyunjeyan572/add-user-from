let myFormEl = document.getElementById("myForm");

myFormEl.addEventListener("submit",function(event) {
    event.preventDefault();
})

let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur",function (event) {
    if (event.target.value==="") {
        nameErrMsgEl.textContent="Required*"
    } else {
        nameErrMsgEl.textContent=""
    }
})

emailEl.addEventListener("blur",function (event) {
    if (event.target.value==="") {
        emailErrMsgEl.textContent="Required*"
    } else {
        emailErrMsgEl.textContent=""
    }
})