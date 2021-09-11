var count = 0;

function swapmode() {
    count++;
    switch (count) {
        case 1:
            element.classList = "red";
            break;
        case 2:
            element.classList = "green";
            break;
        case 3:
            element.classList = "blue";
            break;
        default:
            element.classList = "regular";
            count = 0;
    }
}

function clearSpace(){
    document.getElementById("name").value = "";
    document.getElementById("joker").value = "";
}

function convert(){
    var name = document.getElementById("name").value;
    var joker = document.getElementById("joker").value;
    var strArray = name.split(" ");
    var result;
    for(var i=0; i<strArray.Length; i++){
        for(var j=0; j<strArray.Length; j++){
            if(i==j){
                result += joker;
            }
            else{
                result += strArray[j];
            }
        }
        result += "<br>";
    }
    document.getElementById("result").innerHTML = "Possible Names are: <br>"+result;
}