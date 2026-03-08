const form = document.getElementById("loginForm")

form.addEventListener("submit", function(e){

e.preventDefault()

let username=document.getElementById("username").value
let password=document.getElementById("password").value
let message=document.getElementById("message")

if(username==="admin" && password==="1234"){
message.innerText="Login Successful"
message.style.color="lightgreen"
}
else{
message.innerText="Invalid Credentials"
message.style.color="red"
}

})

const togglePassword=document.getElementById("togglePassword")
const passwordField=document.getElementById("password")

togglePassword.addEventListener("click",function(){

if(passwordField.type==="password"){
passwordField.type="text"
}
else{
passwordField.type="password"
}

})