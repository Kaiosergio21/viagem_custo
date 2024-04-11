const soma = document.querySelector('#soma');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const resultado = document.querySelector('#resultado');

soma.addEventListener('click',function(){

    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);

const sum = value1 + value2;



if(isNaN(value1) && isNaN(value2)){
    


     alert("números invaliddos");
}else if(isNaN(value1) || isNaN(value2)){

    alert("números invaliddos");
     
}
    
else {
  
    resultado.innerText = `Resultado: ${sum}`;

}

    


});
