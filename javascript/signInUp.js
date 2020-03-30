//Gathers general information about the Cheeze Wizards Game. 
function getGeneralInfo(){
    document.getElementById("logButton").onclick = function () { logIn() };
    document.getElementById("joinButton").onclick = function () { signUp() };
    document.getElementById("closeButton").onclick = function () { close() };
    document.getElementById("closeButton2").onclick = function () { close2() };
}

function logIn(){
    var email = document.getElementById("emailAddressLog").value;
    var pass = document.getElementById("passwordLog").value;

    if (email == "" || pass == ""){
        document.getElementById("caution").style.display = "block";
    } else{
        window.location.href = "userLandingPage.html"
    }
}

function close(){
    document.getElementById("caution").style.display = "none";
}

function close2(){
    document.getElementById("cautionPass").style.display = "none";
}

function signUp(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("emailAddressSign").value;
    var pass = document.getElementById("passwordSign").value;
    var confirmPass = document.getElementById("confirmPasswordSign").value;

    console.log(pass)
    console.log(confirmPass)
    console.log(pass == confirmPass)

    if(name == "" || email == "" || pass == "" || confirmPass == ""){
        document.getElementById("caution").style.display = "block";
    } else if(pass != confirmPass){
        document.getElementById("cautionPass").style.display = "block";
    } else {
        window.location.href = "userLandingPage.html"
    }
}

