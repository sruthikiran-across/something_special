let bouquet=document.getElementById("bouquet");
let rose=document.getElementById("rose");

let roseState=0;


/* BOUQUET → ROSE */

bouquet.onclick=()=>{

document.getElementById("scene1").classList.add("hidden");
document.getElementById("scene2").classList.remove("hidden");

};


/* ROSE INTERACTION */

rose.onclick=()=>{

if(roseState==0){

rose.src="photos/chocolate.png";
document.getElementById("roseText").innerText="Tap again 🍫";

roseState=1;

}else{

window.location.href="trailer.html";

}

};