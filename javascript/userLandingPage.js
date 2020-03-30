//Gathers general information about the Cheeze Wizards Game. 
function getGeneralInfo(){
    document.getElementById("points").onclick = function () { swapBoldHeader("points") };
    document.getElementById("goals").onclick = function () { swapBoldHeader("goals") };
    document.getElementById("assists").onclick = function () { swapBoldHeader("assists")};
}

function swapBoldHeader(id){
    document.getElementById(id).style.fontWeight = "bolder";
    if (id == "points"){
        document.getElementById("goals").style.fontWeight = "normal";
        document.getElementById("assists").style.fontWeight = "normal";
    } else if (id == "assists"){
        document.getElementById("goals").style.fontWeight = "normal";
        document.getElementById("points").style.fontWeight = "normal";
    }else{
        document.getElementById("assists").style.fontWeight = "normal";
        document.getElementById("points").style.fontWeight = "normal";
    }
}
