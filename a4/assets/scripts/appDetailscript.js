window.onload = function(){
    var c = document.getElementById("main");
    window.ctx = c.getContext("2d"); // Dealing with a global context is easier
}

var active = 0;

document.getElementById("detailmenuOwnerNotes").onclick = function() {
    reset();
    active = 0;
     $("#detailowvernotes").removeClass("Hidden");
}

document.getElementById("detailmenuDescription").onclick = function() {
    reset();
    active = 1;
    $("#detaildescription").removeClass("Hidden");
}

document.getElementById("detailmenuLookingfor").onclick = function() {
    reset();
    active = 2;
    $("#detaillookingfor").removeClass("Hidden");
}

document.getElementById("detailmenuReward").onclick = function() {
    reset();
    active = 3;
    $("#detailreward").removeClass("Hidden");
}

function reset(){
    if(active === 0){
        $("#detailowvernotes").addClass("Hidden");
    }
    else if(active === 1){
        $("#detaildescription").addClass("Hidden");
    }
    else if(active === 2){
        $("#detaillookingfor").addClass("Hidden");
    }
    else if(active === 3){
        $("#detailreward").addClass("Hidden");
    }
}