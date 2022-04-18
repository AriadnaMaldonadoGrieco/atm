class Billete
{
  constructor(v, c)
  {
  this.valor = v;
  this.cantidad = c;
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for (var bi of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push ( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);

    }

  }

  if (dinero > 0)
  {
  
    resultado.innerHTML = "ERROR! Este cajero no tiene la cantidad requerida o fue requerido un monto no admitido."
    resultado.style.color= "red"
  }
  else
  {
    for (var e of entregado)
    {
      if(e.cantidad > 0)
      {
        resultado.innerHTML =  resultado.innerHTML + "El cajero te ha entregado "  + e.cantidad + " billete(s) de $" + e.valor + " <br/>" ;
        
      }
      
    }
  }

}

var caja = [];
var entregado = [];

caja.push (new Billete(100, 5) );
caja.push (new Billete(50, 10) );
caja.push (new Billete(20, 5) );
caja.push (new Billete(10, 10) );
caja.push (new Billete(5, 5) );

var dinero;
var div = 0;
var papeles = 0;

var resultado = document.getElementById ("resultado");
var b = document.getElementById( "extraer");
b.addEventListener ( "click", entregarDinero);
