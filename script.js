const form = document.querySelector('#form')
const resultado = document.querySelector('#Resultado')

function atualizar(e){
    e.preventDefault();
    const peso = Number(document.querySelector('#peso').value)
    const altura = Number(document.querySelector('#altura').value)
    const imc = peso / (altura ** 2)
    let obsidade = nivel(imc)

    
    resultado.innerHTML = `<P>Meu IMC é ${imc.toFixed(2)} e seu nivel é ${obsidade}</P>`
}


// ( peso * altura ) / altura

function nivel (imc){
    const nivel = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
        ];
    
        // Verifica os intervalos de IMC e retorna o nível correspondente
        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }

form.addEventListener('submit', atualizar )




