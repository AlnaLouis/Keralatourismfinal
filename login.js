let uname = document.getElementById("uname");
let pwd = document.getElementById("pwd");

function validateUser()
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
        error.innerHTML="The username so small";
        error.style.color="orange";
        pwd.style.border="2px solid orange";
        return false; 

    }
    else
    {
        error.innerHTML="The username is not valid";
        error.style.color="red";
        pwd.style.border="2px solid red";
        return false; 
    }
}
