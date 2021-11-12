let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let uname = document.getElementById("uname");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

function validate()
{
    if(fname.value.trim()=="")
    {
        error.innerHTML="The first name cannot be empty";
        error.style.color="red";
        fname.style.border="2px solid red";
        return false;
    }
    else{
       
        fname.style.border="2px solid green";
        return validateLname();

    }
   
}
function validateLname()
{
    if(lname.value.trim()=="")
    {
        error.innerHTML="The last name cannot be empty";
        error.style.color="red";
        lname.style.border="2px solid red";
        return false;
    }
    else{
       
        lname.style.border="2px solid green";
        return validateEmail();

    }   
}
function validateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    email.style.border="2px solid green";
    return validatePhone();
  }
  else{
    error.innerHTML="The email id is in valid recheck the format";
    error.style.color="red";
    email.style.border="2px solid red";
    return false;
}
}
function validatePhone()
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if((phone.value.match(phoneno)))
     {
        phone.style.border="2px solid green";
        return validateUse();
        }
      else
        {
            error.innerHTML="The email id is in valid recheck the format";
            error.style.color="red";
            phone.style.border="2px solid red";
            return false;
        }
       
}
/*function validateUse()
{
  if(uname.value=="")
     {
        error.innerHTML="The email id is in valid recheck the format";
        error.style.color="red";
        phone.style.border="2px solid red";
        return false;
       
        }
      else
        {
            phone.style.border="2px solid green";
            return true;
        }
       
}*/
 
function validateUse()
{
    if (value.uname.trim()=="") 
    {
        uname.style.border="2px solid green";
        return validatePwd();
    }
    else if(value.uname.length<5) {
        error.innerHTML="The username so small";
        error.style.color="orange";
        uname.style.border="2px solid orange";
        return false; 

    }
    else
    {
        error.innerHTML="The username is not valid";
        error.style.color="red";
        uname.style.border="2px solid red";
        return false; 
    }
}

function validatePwd()
{
     if(pwd.value=="")
     {
        error.innerHTML="The password cannot be empty";
        error.style.color="red";
        phone.style.border="2px solid red";
        return false;
     }
     else if(pwd.value.length<=5)
     {
        error.innerHTML="The password is short";
        error.style.color="orange";
        phone.style.border="2px solid orange";
        return false;

     }
     else{
        pwd.style.border="2px solid green";
        return true;

     }
}

