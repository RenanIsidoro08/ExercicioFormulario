var contador = 0;

document.getElementById('incrementar').addEventListener('click', function() {
    contador++;
    document.getElementById('contador').textContent = 'Contador ='  + contador

});