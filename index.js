//BUCLES

// for(var i = 0; i <= 10; i++)
// {
//     console.log('numero ' + i);
// }

// var daysOfWeek = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
// for(var i  = daysOfWeek.length -1; i >= 0; i--)
// {
//     console.log(daysOfWeek[i]);
// }

// var inputPass = prompt("Ingrese contraseña");
// do
// {
//     alert("Acceso denegado, reintente");
//     inputPass = prompt("¿Contraseña?");
// }
// while(inputPass != "coderhouse")
// alert("Acceso concedido");

// var value;
// do
// {
//   value = prompt('Ingrese un valor mayor a 5');
// }while(value <= 5);
// console.log(value);

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]
// var day = prompt("Ingrese un día.").toLowerCase();
// for(var a = 0; a <= daysOfTheWeek.length; a++)
// {
//   if(day === daysOfTheWeek[a])
//   {
//     if(a === daysOfTheWeek.length - 1)
//     {
//       console.log("No se reconoce la entrada: " + day);
//       break;
//     }
//     else if(a <= 5)
//     {
//       console.log("Día hábil.");
//       break;
//     }
//     else if(a > 5 && a < 9)
//     {
//       console.log("Fin de semana.");
//       break;
//     }
//   }
//   else
//   {
//     console.log("No se reconoce la entrada: " + day);
//     break;
//   }
// }

// var dayType;
// var dayName;
// for(var a = 0; a < daysOfTheWeek.length; a++)
// {
//   dayName = daysOfTheWeek[a];
//   if(a <= 5)
//   {
//     dayType = "día hábil.";
//     console.log(dayName + " es " + dayType);
//   }
//   else if(a > 5 && a < 9)
//   {
//     dayType = "fin de semana.";
//     console.log(dayName + " es " + dayType);
//   }
//   else
//   {
//     dayType = "Error";
//     console.log("ERROR: dato no reconcido.");
//   }
// }


