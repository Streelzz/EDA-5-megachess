function seleccionarOponenente(){
    var combo = document.getElementById("oponentes");
    var selected = combo.options[combo.selectedIndex].text;
    challenge(selected);        
}

function mostrarUsuarios(domElement, array) {
    var sel = document.getElementById(domElement);
    for (i = sel.length - 1; i > -1; i--) {
        sel.remove(i);
    }
    var select = document.getElementsByName(domElement)[0];
    console.log(array);
           for (value in array) {
                           var option = document.createElement("option");
                           option.text = array[value];
                           select.add(option);
           }
}