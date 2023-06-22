const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lengthEl= document.getElementById("length");
const lowerEl = document.getElementById("lower");
const upperEl = document.getElementById("upper");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerletters = "abcdefghijklmmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-+=";

function getLowercase(){
    return lowerletters[Math.floor(Math.random() * lowerletters.length)];
}

function getUppercase(){
    return upperletters[Math.floor(Math.random() * upperletters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function generatePassword(){

    const length= lengthEl.value;

    let password = '';

    
        if(lowerEl.checked){
            password += getLowercase();
        }
    
    
        if(upperEl.checked){
            password += getUppercase();
        }
    
    
        if(numberEl.checked){
            password += getNumber();
        }
    
        if(symbolEl.checked){
            password += getSymbol();
        }
       
    

    for(let i= password.length; i < length; i++){
        const x = generateX();
        password += x;

    }
 
    pwEl.innerText = password;
}

function generateX(){
    const xs = [];
    
    
    if(lowerEl.checked){
        xs.push(getLowercase());
    }


    if(upperEl.checked){
        xs.push(getUppercase());
    }


    if(numberEl.checked){
        xs.push(getNumber());
    }

    if(symbolEl.checked){
        xs.push(getSymbol());
    }

    if(xs.length== 0){
        return '';
    }

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click' , generatePassword);
 
/* For copying the password*/

copyEl.addEventListener('click', ()=> {

    const textarea= document.createElement("textarea");
    const password = pwEl.innerText;

    if(!password){
        return;
    }

    textarea.value= password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove;
    alert("Password copied to clipboard ! ");
});