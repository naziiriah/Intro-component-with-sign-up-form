const form = document.getElementById('form-control')
form.addEventListener('submit',(e)=>{
    e.preventDefault(),validateInputs()
})

function validateInputs(){
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
     
    if(firstName !== "" ){
    }else{
        setErrorMessage('first-error', "FirstName cannot be empty")
    }
    if(lastName !== ""){

    }else{
        setErrorMessage('last-error',"Lastname cannot be empty")
    }
    
    if(password !== ""){
    }else{
        setErrorMessage('password-error', "password cannot be empty")
    }
    ValidateEmail(email) 
}


function setErrorMessage(id, message){
    const errorContainer = document.getElementById(`${id}`)
    errorContainer.innerHTML = message
}

function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
        return(true)
    }else if(input == ""){
        setErrorMessage ("email-error", 'looks like this is not an email');
        console.log('it is empty')
    } 
    else {
     setErrorMessage("email-error", 'looks like this is not an email');
    console.log('wrong inputs')
    }
  }