document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault()

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

if(user==="raisa" && pass==="1234"){
document.getElementById("message").innerText="Login Successful"
document.getElementById("message").style.color="green"
}
else{
document.getElementById("message").innerText="Invalid Credentials"
document.getElementById("message").style.color="red"
}

})