let uname = document.getElementById("uname");
let pwd = document.getElementById("pwd");

function validateUser()
{
  if(uname.value=="")
     {
        error.innerHTML="The Username is not valid";
        error.style.color="red";
        phone.style.border="2px solid red";
        return false;
       
        }
      else
        {
            phone.style.border="2px solid green";
            return validateUse();
        }
    
        
}

function validateUse()
{
    if (value.pwd.trim()=="") 
    {
        pwd.style.border="2px solid green";
        return validatePwd();
    }
    else if(value.pwd.length<5) {
        error.innerHTML="The password is short";
        error.style.color="orange";
        pwd.style.border="2px solid orange";
        return false; 

    }
    else
    {
        error.innerHTML="Some thing is not right with password";
        error.style.color="red";
        pwd.style.border="2px solid red";
        return false; 
    }
}
