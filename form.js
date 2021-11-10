let email = document.getElementById("email");
let password = document.getElementById("pwd");



function validate()
{
    if(email.value=="")
     {
         alert("Email cannot be empty");
         return false;
     }
     else if(pwd.value=="")
      {
          alert("pasword cannot be blank");
          return false;
      }
      else if(pwd.value.lenght<=4)
       {
           alert("password is to short");
           pwd.style.border="2px solid red";
           return false;
       }
       else {
           return true;
       }

}