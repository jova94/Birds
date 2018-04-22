var birds;

function preload(){
    birds = loadJSON("bird.json");
}


function setup() {
    noConvas();
    var birds = data.birds;

    for (var i = 0; i < birds.lenght; i++) {
        createElement('h1', birds[i].faamily);
        var members = birds[i].members;
        for (var j = 0; j < members.lenght; j++) {
            createDiv(members[j]);
        }
    }


}

