let userName = document.getElementById("txtUserName");
let email = document.getElementById("txtEmail");
let pwd = document.getElementById("txtPwd");
let form = document.querySelector("form");
let phone=document.getElementById("phone");
function validateInput(){
    console.log("validate input");
    //check user name is empty
    if(userName.value.trim()===""){
       onError(userName,"User Name cannot be empty");
    }
    else{
       onSuccess(userName)
    }
    if(phone.value.trim()===""){
        onError(phone,"Phone Number cannot be empty");
     }
     else{
        onSuccess(phone)
     }
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
     }
     else{
         if(isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
     }else{
         onSuccess(email);
     }

    }
    if(pwd.value.trim()===""){
        onError(email,"Email cannot be empty");
     }
     else{
         onSuccess(pwd);
     }
    if(conPwd.value.trim()===""){
        onError(conPwd,"Password cannot be empty")
    }
    else{
        if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Password and confirm password doesn't match");
        }
        else{
        onSuccess(conPwd);
        }
    }
}
    

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
validateInput();
});
 function onSuccess(input,input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("Success");
}

 function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("Success");
}
   functionisValidEmail(email)
   {
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1-3\.}[0-9]{1,3}\.[0-9]{1,3}.[0-9]{1,3}\])|((a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.text(email);
   } 
