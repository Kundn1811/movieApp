let data = JSON.parse(localStorage.getItem("usersDetails"))
console.log(data)

function checkCredential(e){
    e.preventDefault();

   
       let email = formm.email.value;
       let pass = formm.password.value;
         let check = false;
       for(let i=0;i<data.length;i++){

             if(data[i].email===email&&data[i].password===pass){
                 check = true;
             }
       }
      
      if(check){
          alert("Login Successful")
          window.location.href="index.html";
      }else{
          alert("Invalid Credential")
      }


   
}