//Cristina Correa

function ejecuta(){
    const letra=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    let nie= document.getElementById("nie").value;
    nie = nie.replace("X", "0");
    nie = nie.replace("Y", "1");
    nie = nie.replace("Z", "2");
    let posicion=parseInt(nie)%23;
    document.getElementById("letra").innerHTML=`${letra[posicion]}`;
}