document.addEventListener('DOMContentLoaded', function() {


  const btnSelector = document.getElementById('btn-selector');
  const resultadoSelector = document.getElementById('resultado-selector');
  
  btnSelector.addEventListener('click', () => {
    resultadoSelector.textContent = "Este título cambiaría de color usando selectores en JS.";
    resultadoSelector.style.color = 'darkblue';
  });

  const btnEvento = document.getElementById('btn-evento');
  const resultadoEvento = document.getElementById('resultado-evento');
  
  btnEvento.addEventListener('click', () => {
    resultadoEvento.textContent = "¡Has hecho clic! Este es un ejemplo de evento en acción.";
    resultadoEvento.style.color = 'darkgreen';
  });


  const btnFuncion = document.getElementById('btn-funcion');
  const resultadoFuncion = document.getElementById('resultado-funcion');
  
  btnFuncion.addEventListener('click', () => {
    function saludar(nombre) {
      return `Hola ${nombre}, este mensaje viene de una función en JS.`;
    }
    resultadoFuncion.textContent = saludar('UTC');
    resultadoFuncion.style.color = '#d2691e';
  });

});

