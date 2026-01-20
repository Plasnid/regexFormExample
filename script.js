let fieldsCheck;

function secretCheck(strVal){
    let secPat = /^[A-Z]{1}[A]{1}[a-z]+[L]{1}[a-z]+[I]{1}[a-z]+[E]{1}[a-z]+[N]{1}$/
    if(secPat.test(strVal)){
        return true;
    }
    return false;
}
function hasCharsCheck(dataToCheck){
    let pat2 = /^[a-zA-Z]+$/;
    if(pat2.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}
function hasNumsCheck(dataToCheck){
    let pat2 = /^[0-9]+$/;
    if(pat2.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}

function errorsReset(){
    fieldsCheck.forEach(inputField => {
        inputField.error.innerText = "";
    });
}

function formChecker(e){
    let errorsDetected = 0;
    errorsReset();
    e.preventDefault();
    fieldsCheck.forEach(inputField => {
        if(inputField.checker(inputField)==false){
            inputField.error.innerText = inputField.msg;
            errorsDetected +=1;
        }
    });
    if(errorsDetected>0){
        console.log("correct errors before submitting");
    }else{
    document.querySelector("#firstName").value;
        let showSecret = secretCheck(document.querySelector("#firstName").value);
        if(showSecret){
            console.log("show secret alien message!");
        }else{
            console.log("You are not from zerkblatt!");
        }
    }
}

function initForm(){
    let firstName = document.querySelector("#firstName");
    let firstNameError = document.querySelector("#firstNameError");
    let lastName = document.querySelector("#lastName");
    let lastNameError = document.querySelector("#lastNameError");
    let age = document.querySelector("#age");
    let ageError = document.querySelector("#ageError");
    fieldsCheck = [
        {field: firstName, checker:hasCharsCheck, error:firstNameError,msg:"Please enter a valid first name"},
        {field: lastName, checker:hasCharsCheck, error:lastNameError, msg:"please enter a valid last name"},
        {field: age, checker:hasNumsCheck, error:ageError, msg:"please enter a valid age"}
    ]
    let formSubmit = document.querySelector("#formSubmit");
    formSubmit.addEventListener("click", formChecker);    
}

initForm();