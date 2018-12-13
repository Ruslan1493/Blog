function redirect(page) {
    if(page === 'strength'){
        location.href = "../pages/strength.html";
    }else if(page === 'fat loss'){
        location.href = "../pages/fat_loss.html";
    }else if(page === 'condition'){
        location.href = "../pages/condition.html";
    }
};

function enlarge(){
    document.getElementById("strength-img").style.width = 300;
    document.getElementsByName("body").style.backgroundColor = "red";
}
