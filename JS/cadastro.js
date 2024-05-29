const campos = document.querySelectorAll('.input-required');
const labelValidate = document.querySelectorAll('.label-message');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
;
const form = document.getElementById('form')

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    labelValidate[index].style.display = 'block';
    
}

function removeError(index){
    campos[index].style.border = '';
    labelValidate[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    }

    else{
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }
    else{
        removeError(1);
    }
}

function senhaValidate(){
    if(campos[3].value != campos[4].value){
        setError(4);
        labelValidate[4].innerText = 'As senhas devem ser iguais!';
        setError(3);
    }

    else if(campos[3].value === ''){
        setError(3);
    }

    else if(campos[3].value.length < 6){
        setError(3);
        labelValidate[3].innerText = 'A senha deve conter pelo menos 6 caracteres';
        removeError(4);
    }

    else{
        removeError(3);
        removeError(4);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    nameValidate();
    emailValidate();
    senhaValidate()
})