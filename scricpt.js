const distancia =document.querySelector('#distancia');
const rendimento =document.querySelector('#rendimento');
const gasolina =document.querySelector('#gasolina');
const calcular =document.querySelector('#calcular');
const resultado =document.querySelector('#resultado');

calcular.addEventListener('click',() =>{

 let distanciavalor =Number(distancia.value);
 let rendimentovalor =Number(rendimento.value);
 let gasolinavalor =Number(gasolina.value);

 let result = (distanciavalor/rendimentovalor)*gasolinavalor;

   resultado.textContent = `R$ ${result.toFixed(2)}`;

});