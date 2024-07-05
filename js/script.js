const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height*height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');
    
     // change to swtich case
    if(imc < 18.5){
        description = 'Cuidado!! Você está abaixo do peso!';
    } else if(imc >= 18.5 && imc <= 25){
        description = 'Você está no peso ideal';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if(imc >= 25 && imc <= 30){
        description = 'Você está acima do peso';
    } else if(imc >= 30 && imc <= 35){
        'Obesidade Grau I';
    } else if(imc >= 35 && imc <= 40){
        description = 'Obesidade Grau II';
    } else if(imc > 40){
        description = 'Obesidade Grau III';
    } else{
        description = 'Cuidado! Você está com obesidade mórbida.';
    }
    

    value.textContent = imc.replace('.',',');
    document.getElementById('description').textContent = description;
});