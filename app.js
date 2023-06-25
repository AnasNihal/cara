const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
if(bar){
    bar.addEventListener('click', () =>{
           nav.classList.add('active');
    })
}
if(close){
 close.addEventListener('click', () =>{
           nav.classList.remove('active');
    })
}



const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", ()=> {
    wrapper.classList.add('active');
});
loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove('active');
});


window.onload = function () {
    document.getElementById("form").onsubmit = function () {
        var filmName = document.getElementById("username").value;
  
        if (filmName == "anasnihal@gmail.com") window.location.href = "home.html";
        else alert("Wrong Entry");
        return false; //prevent the default behavior of the submit event
    }
} 
