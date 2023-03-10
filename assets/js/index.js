const characters = {
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    specialCharacter: '!@#$%&*()-=_+[]?/;:'
};

document.getElementById('generate').addEventListener('click', function(){
    let length = (document.getElementById('length').value) * 1;
    let lengthSpecial = (document.getElementById('lengthSpecial').value) * 1;
    const errorLength = document.getElementById('error-length');
    const errorSpecialCase = document.getElementById('error-special-case');
    const result = document.getElementById('result');
    
    let firstValidation = false;
    let secondValidation = false;

    if(length < 10 || length > 25){
        errorLength.classList.remove("hidden");
        errorLength.classList.add("alert");
        firstValidation = false;
    } else {
        errorLength.classList.add("hidden");
        errorLength.classList.remove("alert");
        firstValidation = true;
    }

    if(lengthSpecial < 0 || lengthSpecial > 7){
        errorSpecialCase.classList.remove("hidden"); 
        errorSpecialCase.classList.add("alert");
        secondValidation = false;
    } else {
        errorSpecialCase.classList.add("hidden");
        errorSpecialCase.classList.remove("alert"); 
        secondValidation = true;
    }

    let passwordLength = length - lengthSpecial;
    let password = '';
    let passwordSpecialCharacters = [];
    let specialCharactersPosition = [];

    if (firstValidation && secondValidation) {
        
        if(lengthSpecial != 0){
            // Adiciona no array todos os caracteres espciais que serão utilizados
            for(i = 0; i < lengthSpecial; i++){
            let randomNumber = Math.random() * (18 - 0) + 0;
            passwordSpecialCharacters.push(characters.specialCharacter[(randomNumber).toFixed()]);
            }

            // Adiciona no array a posição que os caracteres especiais serão colocados
            do{
                let randomNumber = (Math.random() * ((length-1) - 0) + 0).toFixed();
    
                !specialCharactersPosition.includes(randomNumber) ? specialCharactersPosition.push(randomNumber) : "" ;
    
                
    
            }while(specialCharactersPosition.length != lengthSpecial)
        }
        // Cria a senha
        let positionToNumber = specialCharactersPosition.map(function(str){
            return parseInt(str);
        })

        for(i = 0; i < length; i++) {
            if(lengthSpecial != 0){
                let x = 0;
                if(positionToNumber.includes(i)){
                    password += passwordSpecialCharacters[x];
                    passwordSpecialCharacters.shift();
                    let index = positionToNumber.indexOf(i);
                    positionToNumber.splice(index, 1);
                    x++;
                    continue;
                }
            }
            
            let randomNumber = (Math.random() * (3 - 1) + 1).toFixed();

            if(randomNumber == 1){
                let randomNumber = (Math.random() * (25 - 0) + 0).toFixed();
                password += characters.upperCase[randomNumber]
                continue;

            } else if(randomNumber == 2){
                let randomNumber = (Math.random() * (25 - 0) + 0).toFixed();
                password += characters.lowerCase[randomNumber]
                continue;

            } else if(randomNumber == 3){
                let randomNumber = (Math.random() * (9 - 0) + 0).toFixed();
                password += characters.numbers[randomNumber]
                continue;

            }
            
        }

        result.appendChild(document.getElementById('password').innerHTML = (password));
    }
});

