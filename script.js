function validateForm(){
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById ("subject").value;
    const message=document.getElementById("message").value;

    const fullnameErr = document.getElementById("fullname-error");
    const emailErr = document.getElementById("email-error");
    const subjectErr = document.getElementById("subject-error");

    fullnameErr.textContent = "";
    emailErr.textContent="";
    subjectErr.textContent="";

    let isValid =true;

    if (fullname==="" || /\d/.test(fullname)) {
        fullnameErr.textContent="Please provide your full name.";
        isValid=false;
    }

    if (email==="" || !email.includes("@") || !email.includes(".")) {
        emailErr.textContent = "Please enter a valid email address.";
        isValid=false;
    }

    if(subject==="") {
        subjectErr.textContent="Please enter the subject.";
        isValid=false;
    }

    if (isValid) {
        alert("Form submitted succesfully!");
        return true;
    }
    else{
        return false;
    }

    if (message===""){
        messageErr.textContent="Please enter your message.";
        isValid=false;
    }
}

function resetErrors() {
    document.getElementById("fullname-error").textContent = "";
    document.getElementById("email-error").textContent="";
    document.getElementById("subject-error").textContent="";
    document.getElementById("agree-error").textContent="";
}
