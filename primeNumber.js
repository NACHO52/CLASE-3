
var numero = parseInt(prompt('Ingrese un número.'));
console.log(isPrimo(numero));
function isPrimo(param)
{
  if(param < 1)
  {
    return 'Por favor ingrese un número mayor a cero.';
  }
  var count = 2;
  var rest = 0;
  if(param === 2) 
  {
    return 'Es primo';
  } 
  else 
  {
    while(count != param)
    {
      rest = param % count;
      if(rest === 0)
      {
        return 'Es compuesto';
      }
      else
      {
        count++;
        if(param === count)
        {
          return 'Es primo';
        }
      }
    }
  }
}