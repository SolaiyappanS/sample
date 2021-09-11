var count = 0;
var element = document.body;
function themeChange() {
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
    var result = "";
    for(var i=0; i<strArray.length; i++){
        for(var j=0; j<strArray.length; j++){
            if(i==j){
                result += joker;
            }
            else{
                result += strArray[j];
            }
            result += " ";
        }
        result += "<br>";
    }
    document.getElementById("result").innerHTML = "Possible Names are: <br>"+result;
}