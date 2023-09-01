function hide(element){
    element.remove();
}

var btnClickPepper = 3
function countClicksPepper(){
    btnClickPepper++;
    countValuesPepper.innerText = btnClickPepper + " petting(s)"
}

var btnClickBruce = 5
function countClicksBruce(){
    btnClickBruce++;
    countValuesBruce.innerText = btnClickBruce + " petting(s)"
}

var btnClickOscar = 8
function countClicksOscar(){
    btnClickOscar++;
    countValuesOscar.innerText = btnClickOscar + " petting(s)"
}

function selectOption(element){
    alert("Your are looking for a:" + element.value)
}