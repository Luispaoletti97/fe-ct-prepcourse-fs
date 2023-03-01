var equipo = "San Martin de Tucuman"
//console.log (equipo.length);

function longitud (x) {
    if (x.length > 7) {
        //console.log ("El string parece ser mayor de 7 caracteres mi ray");
    }
    else if (x.length < 7) {
        //console.log ("El string tiene menos de 7 caracteres");
    }
}

longitud ("Porteños hijos de remil puta");

// ***********************************************************************************//

// Concatenando valores:

var DNI = 40696535;
var date = "13/08/1997";
var nombre = "Luis";
var apellido = "Paoletti";

//console.log ("Hola! Un gusto, parece que te llamas "+(nombre+ " "+apellido)+ ". Tu numero de documento es "+DNI+" y fecha de nacimiento "+date);

// -----------------------------------------------------------------------------------------//





function destino (pais) {
    if (pais == "España" || pais == "Brasil" || pais == "Estados Unidos") {
       // console.log ("Taria lindo para ir para ahi pa");
    }
    else if (pais == "mexico") {
       // console.log ("Naa mi ray! Es territorio de mafiosos ahi mi pa")
    }
    //else console.log ("Donde quiera menos a Mexico mi ray jajaja")
}

destino ("Conboya");

// ----------------------------------------------------------------------- //
function negacion (x) {
    if (!(x == 5)) {
      //  console.log ("No es igual a 5");
    }
    else if (x == 5) {
       // console.log ("Si es igual a 5");
    }
}

negacion (7);

// ----------------------------------------------------------------------------------------------------------- //

// Bucles While y For 


for (var i = 0; i < 11; i++) {
   // console.log ("Messi es el " + i);

} // Esto es FOR



/*suma = 1;
while (suma < 20) {
  console.log (suma = suma * 2)
} // Esto es WHILE.
*/

//-----------------------------------------------------------------//
var color = "azul"

switch (color) {
    case "red": console.log ("Es rojo");
    break;
    case "green": console.log ("Es verde");
    break;
    default: console.log ("No esta este color")
}
