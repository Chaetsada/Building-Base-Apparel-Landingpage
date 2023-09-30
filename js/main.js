const email = document.getElementById('email');
const form = document.getElementById('form');

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function showError(input , message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector(".error-msg");
    small.innerText = message;
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input , "Plaase provide a valid email");
    }
}

form.addEventListener( 'submit',(e)=>{
    e.preventDefault();
    checkEmail(email);
})

