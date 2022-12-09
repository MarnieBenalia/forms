

//----------------------------------------------------------------------------------------------EX01

const firstN = document.querySelector('#firstname');
const displayF = document.querySelector('#display-firstname');

firstN.addEventListener('keyup', e =>{

    e.preventDefault();
})

localStorage.setItem("firstname", document.querySelector("#firstname").value);

document.querySelector('#display-firstname').innerHTML = localStorage.getItem('firstname');

//----------------------------------------------------------------------------------------------EX02

const age = document.querySelector('#age');
const hardTruth = document.querySelector('#a-hard-truth');

age.addEventListener('keyup', e =>{

        if (age.value>18){

        hardTruth.style.visibility ='visible'
    }
        else {
        hardTruth.style.visibility ='hidden'       
    }
})

//----------------------------------------------------------------------------------------------EX03

const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwd-confirm');

pwd.addEventListener('keyup', e =>{

    if (pwd.value.length < 6){

    pwd.style.backgroundColor = "red";
}
    else {

    pwd.style.backgroundColor = "green";
}
})

pwdConfirm.addEventListener('keyup', e =>{

    if (pwdConfirm.value === pwd.value){

    pwdConfirm.style.backgroundColor = "green";
}
    else {

    pwdConfirm.style.backgroundColor = "red";

}
})

//----------------------------------------------------------------------------------------------EX04