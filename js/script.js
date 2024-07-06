const bmi_values = {
    underWeight: {min:18.5},
    normalWeight: {min:18.6, max:24.9},
    overWeight: {min:25, max:29.9},
    obesityGradeI: {min:30, max:34.9},
    obesityGradeII: {min:35, max:39.9},
    obesityGradeIII: {min:40},
}

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
    
    switch(true){
        case imc < bmi_values.underWeight.min:
            description = 'Cuidado! Você está abaixo do peso.'
            break
        case imc >= bmi_values.normalWeight.min && imc <= bmi_values.normalWeight.max:
            description = 'Você está no seu peso ideal.'
            value.classList.remove('attention');
            value.classList.add('normal');
            break
        case imc >= bmi_values.overWeight.min && imc <= bmi_values.overWeight.max:
            description = 'Você está acima do seu peso ideal.'
            break
        case imc >= bmi_values.obesityGradeI.min && imc <= bmi_values.obesityGradeI.max:
            description = 'Obesidade Grau I'
            break
        case imc >= bmi_values.obesityGradeII.min && imc <= bmi_values.obesityGradeII.max:
            description = 'Obesidade Grau II'
            break
        case imc >= bmi_values.obesityGradeIII.min:
            description = 'Obesidade Grau III (Mórbida)'
            break
    }

    value.textContent = imc.replace('.',',');
    document.getElementById('description').textContent = description;
});