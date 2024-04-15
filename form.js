//form

let formBtn = document.querySelector('.submit-btn');
let loader = document.querySelector('.loader');

formBtn.addEventListener('click', () => {
    let fullname = document.querySelector('#name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let phonenumber = document.querySelector('#number');
    let tac = document.querySelector('#tc');

    //form validation
    if(fullname.value.length < 3){
        showFormError('name must be 3 letters long');
    }else if(!email.value.length){
        showFormError('enter your email');
    }else if(password.value.length < 8){
            showFormError('password must be 8 letters long');  
    }else if(Number(number) || phonenumber.value.length <10){
        showFormError('invalid number');  
    }else{    
    
    //submit form
    }
})