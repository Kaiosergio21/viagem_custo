const distancia = document.querySelector('#distancia');
const rendimento = document.querySelector('#rendimento');
const gasolina = document.querySelector('#gasolina');
const calcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

calcular.addEventListener('click',function(){

    const distanciavalue = parseFloat(distancia.value);
    const rendimentovalue = parseFloat(rendimento.value);
    const gasolinavalue = parseFloat(gasolina.value);

const custo = (distanciavalue / rendimentovalue) * gasolinavalue;


  
    resultado.innerText = `Resultado: R$ ${custo.toFixed(2)}`;



    


});
