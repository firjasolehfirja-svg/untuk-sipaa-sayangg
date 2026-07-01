const knife = document.getElementById("knife");
const cake = document.getElementById("cake");
const nextPage = document.getElementById("nextPage");

let startX = 0;
let cutting = false;

// ==========================
// DRAG KNIFE
// ==========================

knife.addEventListener("touchstart", e => {
    cutting = true;
    startX = e.touches[0].clientX;
});

knife.addEventListener("touchmove", e => {

    if(!cutting) return;

    const x = e.touches[0].clientX;

    knife.style.left = (x-120)+"px";

    if(x-startX>220){
        finishCut();
    }

});

knife.addEventListener("touchend",()=>{

    cutting=false;

    knife.style.left="-150px";

});

// ==========================
// HEARTS
// ==========================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    document.querySelector(".bg-hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,250);

// ==========================
// CONFETTI
// ==========================

function confetti(){

    for(let i=0;i<180;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-20px";

        c.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        c.style.animationDuration=
        (2+Math.random()*2)+"s";

        document.body.appendChild(c);

        setTimeout(()=>{
            c.remove();
        },4000);

    }

}

// ==========================
// CUT CAKE
// ==========================

function finishCut(){

    cutting=false;

    cake.style.transition=".7s";

    cake.style.transform="scale(.95) rotate(-2deg)";

    cake.style.filter="drop-shadow(0 0 60px hotpink)";

    confetti();

    setTimeout(()=>{

        document.querySelector(".container").style.display="none";

        nextPage.style.display="block";

    },2500);

}

// ==========================
// AUTO MUSIC
// ==========================

window.addEventListener("click",()=>{

    document.getElementById("music").play();

},{once:true});
