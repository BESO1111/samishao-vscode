

function submit() {
    let uzer = document.getElementById("username").value;
let maili=document.getElementById("maaili").value;

    let pasword1 = document.getElementById("password1").value;
    let pasword2 = document.getElementById("password2").value;

if(pasword1!==pasword2||pasword1==null||pasword1==null || pasword1.length<6 ||uzer.length<6||uzer==""||uzer==null||uzer==pasword1||uzer===pasword1 || maili==uzer || maili===uzer || maili== pasword1||  maili=== pasword1){

    document.getElementById("beso").innerHTML="ar giweriat veliu"
      document.getElementById("beso").style.display="block"

}

else {
    document.getElementById("beso").innerHTML="parolei emtxveva"
    document.getElementById("beso").style.display="block"
}
}


