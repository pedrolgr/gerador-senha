const upperCase = 'abcdefghijklmnopqrstuvwxyz'
const lowerCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const specialCaracter = '!@#$%&*()-=_+[]?/;:'

document.getElementById('generate').addEventListener('click', function(){
    let length = (document.getElementById('length').value) * 1;
    let lengthSpecial = (document.getElementById('lengthSpecial').value) * 1;
    const errorLength = document.getElementById('error-length');
    const errorSpecialCase = document.getElementById('error-special-case');
    
    let firstValidation = false;
    let secondValidation = false;

    if(length < 10 || length > 25){
        errorLength.classList.remove("hidden"); // NÃO BATEU COM OS DADOS ESPERADOS
        firstValidation = false;
    } else {
        errorLength.classList.add("hidden");
        firstValidation = true;
    }

    if(lengthSpecial < 0 || lengthSpecial > 7){
        errorSpecialCase.classList.remove("hidden"); // NÃO BATEU COM OS DADOS ESPERADOS
        secondValidation = false;
    } else {
        errorSpecialCase.classList.add("hidden");
        secondValidation = true;
    }

    if (firstValidation && secondValidation) {
        console.log("PASSOU EM TUDO")
    }



    // VALIDAR SE OS DADOS BATEM COM OS ESPERADOS
    // SE BATER AI VAI GERAR A SENHA

});