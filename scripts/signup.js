
function cObj(n,cn,e,p){
    this.name = n;
    this.contact_no = cn;
    this.email = e;
    this.password = p;
}

let userData = JSON.parse(localStorage.getItem("usersDetails"))||[];
function getData(e){
    e.preventDefault();
   let name = formid.name.value;
   let phnNo = formid.contact_no.value;
   let email = formid.email.value;
   let password = formid.password.value;
   let rpassword = formid.repassword.value;
  
   if(password === rpassword){

       if(name !==''|| phnNo !==""||email !==""||password !==""){
           let obj = new cObj(name,phnNo,email,password)
           userData.push(obj);
           console.log("pushed")
           localStorage.setItem("usersDetails",JSON.stringify(userData));
        }else{

            alert("Invalid Credentials")
        }
    }else{
        alert("Password is Incorrect")
    }
    formid.name.value=""
    formid.contact_no.value=""
    formid.email.value =""
    formid.password.value =""
    formid.repassword.value=""

}