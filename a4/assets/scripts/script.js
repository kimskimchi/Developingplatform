window.onload = function(){
    var c = document.getElementById("main");
    window.ctx = c.getContext("2d"); // Dealing with a global context is easier
}

var active = 7;

document.getElementById("option1").onclick = function() {
    reset();
    active = 0;
     $("#Main").removeClass("Hidden");
}

document.getElementById("option2").onclick = function() {
    reset();
    active = 1;
    $("#Explore_Apps").removeClass("Hidden");
}

document.getElementById("option3").onclick = function() {
    reset();
    active = 2;
    $("#My_Apps").removeClass("Hidden");
}

document.getElementById("option4").onclick = function() {
    reset();
    active = 3;
    $("#Profile").removeClass("Hidden");
}

document.getElementById("option5").onclick = function() {
    reset();
    active = 4;
    $("#About").removeClass("Hidden");
}

document.getElementById("option6").onclick = function() {
    reset();
    active = 5;
    $("#Login").removeClass("Hidden");
}

document.getElementById("option7").onclick = function() {
    reset();
    active = 6;
    $("#Search").removeClass("Hidden");
}

document.getElementById("signoption").onclick = function() {
    reset();
    active = 8;
    $("#Signup").removeClass("Hidden");
}

document.getElementById("sign").onclick = function() {
    reset();
    active = 0;
    $("#Main").removeClass("Hidden");
}

function reset(){
    if(active === 0){
        $("#Main").addClass("Hidden");
    }
    else if(active === 1){
        $("#Explore_Apps").addClass("Hidden");
    }
    else if(active === 2){
        $("#My_Apps").addClass("Hidden");
    }
    else if(active === 3){
        $("#Profile").addClass("Hidden");
    }
    else if(active === 4){
        $("#About").addClass("Hidden");
    }
    else if(active === 5){
        $("#Login").addClass("Hidden");
    }
    else if(active === 6){
        $("#Search").addClass("Hidden");
    }
    else if(active === 7){
        $("#Home").addClass("Hidden");
    }
    else if(active === 8){
        $("#Signup").addClass("Hidden");
    }
}