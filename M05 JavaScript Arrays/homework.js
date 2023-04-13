/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [0];
}


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var suma = [];
   for (i = 0; i < array.length; i++) {
      suma [i] = array[i] + 1;
   }
   return (suma);
} 


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push (elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift (elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras.join (' ');
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   if (array.includes (elemento) == true) return true;
   else return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   suma = 0;
   for (i =0; i < arrayOfNums.length; i++) {
      suma = suma + arrayOfNums [i];
   }
   return (suma);
}


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   SumaNotas = 0;
   for (i = 0; i < resultadosTest.length; i++) {
      SumaNotas = SumaNotas + resultadosTest [i];
   }
   return (SumaNotas / resultadosTest.length);
}

function numeroMasGrande(arrayOfNums) {

   var max = 0;

   for (i = 0; i < arrayOfNums.length; i++) {
      var max = Math.max (max, arrayOfNums [i]);
   }
   return (max);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
   if (arguments.length === 0) return 0;
   else if (arguments.length === 1) return arguments[0];
   else {
      var producto = 1;
      for (i = 0; i < arguments.length; i++) {
          producto = producto * arguments [i];
      }
      return producto;
   }

}



function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   var MayoresQ18 = [];

   array.map (function (My18) {
      if (My18 > 18) {
         MayoresQ18.push (My18);
      }
    })
    return (MayoresQ18.length);
}
diaDeLaSemana (7);
function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   var diasDeLaSemana = [];
   diasDeLaSemana [7] = 'Sabado'
   diasDeLaSemana [2] = 'Lunes';
   diasDeLaSemana [3] = 'Martes';
   diasDeLaSemana [4] = 'Miercoles';
   diasDeLaSemana [5] = 'Jueves';
   diasDeLaSemana [6] = 'Viernes';
   diasDeLaSemana [1] = 'Domingo';

   if (diasDeLaSemana[numeroDeDia] === 'Sabado' || diasDeLaSemana [numeroDeDia] === 'Domingo') return ('Es fin de semana');
   else return ('Es dia laboral');

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:

   var numString = num.toString ();

   var num_array = numString.split ('');

   if (num_array [0] == 9) return true;
   else return false;

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:

   var sonIguales = array.every (function (nums) {
      return (nums === array[0]);
   })
   return sonIguales;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:


   /*var array = ['Enero', 'Marzo', 'Noviembre', "Diciembre"];
   array [2] = 'Enero';
   array [6] = 'Marzo';
   array [0] = 'Abril';
   array [10] = 'Diciembre';*/

   var MesesSeleccionados = [];
   
   array.map (function (meses) {
      if (meses === 'Enero' || meses === 'Marzo' || meses === 'Noviembre') {
         MesesSeleccionados.push (meses);
      }
   })
   if (MesesSeleccionados.length === 3) return (MesesSeleccionados);
   else return ("No se encontraron los meses pedidos");
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   var TablaDel6 = [];

   for (i = 0; i <= 10; i++) {

      var Multiplicando = (6 * i);
      producto = Multiplicando;

      TablaDel6.push (producto);
   }

   return (TablaDel6);
}


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   var MayoresA100 = [];

   array.map ( function (enteros) {
      if (enteros > 100 && enteros != 100) {
         MayoresA100.push (enteros);
      }
   })
   return (MayoresA100);
}


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   var num2 = [];
   var valores = num
   for (i = 1; i < 11; i++ ) {

      valores = valores + 2;
      if (valores != i) {
         num2.push (valores);
      }
      else break;
   }
   if (num2.length === 10) return (num2);
   else return ('Se interrumpió la ejecución');
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   var valores2 = [];
   var suma = num;

   for (i = 1; i < 11; i++) {

      if (i != 5) {
         suma = suma + 2;
         valores2.push (suma);
      }
      else continue;
   }
  return (valores2);
}
//continueStatement (2);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
