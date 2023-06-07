document.getElementById("ham_menu").addEventListener("click", function(){
    document.getElementById("mob_menu").style.display = "flex";
    if (document.getElementById("mob_menu").style.display = "flex"){
        document.getElementById("ham_menu").src = "/icon-close-menu.svg";
    }else{
        document.getElementById("ham_menu").src = "/icon-hamburger.svg";
    };
    if (document.getElementById("mob_menu").style.display = "flex"){
        document.getElementById("close_menu").style.display = "grid";
    }
})

document.getElementById("close_menu").addEventListener("click", function(){
    document.getElementById("mob_menu").style.display = "none";
    if(document.getElementById("mob_menu").style.display = "none"){
        document.getElementById("ham_menu").src = "/icon-hamburger.svg";
    }
    if(document.getElementById("ham_menu").src = "/icon-hamburger.svg"){
        document.getElementById("ham_menu").style.display = "grid";
        document.getElementById("close_menu").style.display = "none";
    }
})

document.getElementById("back_proj").addEventListener("click", function(){
    document.getElementById("sel_modal").style.display = "flex";
    
})
document.getElementById("close_modal").addEventListener("click", function(){
    document.getElementById("sel_modal").style.display = "none";
})

const selectReward = document.querySelectorAll(".slct_reward");

for (let i = 0; i < selectReward.length; i++) {
    selectReward[i].addEventListener("click", function(){
        selectReward[i].style.backgroundColor = "hsl(176, 72%, 28%)";
    })  
}

document.getElementById("bookmark").addEventListener("click", function(){
    document.getElementById("bookmark").style.color = "hsl(176, 72%, 28%)";
    if(document.getElementById("bookmark").style.color = "hsl(176, 72%, 28%)"){
        document.getElementById("bookmark").innerText = "Bookmarked";
    }
})

const selectedPledge = document.querySelectorAll(".pledge");
const pledge = document.querySelectorAll(".sel_pledge");

for (let i = 0; i < selectedPledge.length; i++) {
    selectedPledge[i].addEventListener("click", function(){
        document.getElementById("sel_pledge").style.display = "flex";
    })
}
