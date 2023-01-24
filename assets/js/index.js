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
    
    let firstValidation = false;
    let secondValidation = false;

    if(length < 10 || length > 25){
        errorLength.classList.remove("hidden");
        firstValidation = false;
    } else {
        errorLength.classList.add("hidden");
        firstValidation = true;
    }

    if(lengthSpecial < 0 || lengthSpecial > 7){
        errorSpecialCase.classList.remove("hidden"); 
        secondValidation = false;
    } else {
        errorSpecialCase.classList.add("hidden");
        secondValidation = true;
    }

    if (firstValidation && secondValidation) {
    }
    

    let passwordLength = length - lengthSpecial;
    let passwordSpecialCharacters = [];
    let specialCharactersPosition = [];

    for(i = 0; i < lengthSpecial; i++){
        let randomNumber = Math.random() * (18 - 0) + 0;
        passwordSpecialCharacters.push(characters.specialCharacter[(randomNumber).toFixed()]);
    }


    do{
        let randomNumber = (Math.random() * (length - 0) + 0).toFixed();

        !specialCharactersPosition.includes(randomNumber) ? specialCharactersPosition.push(randomNumber) : "" ;

    }while(specialCharactersPosition.length != lengthSpecial)


    console.log(specialCharactersPosition)

    for(i = 0; i < passwordLength; i++) {
        let randomNumber = (Math.random() * (3 - 1) + 1).toFixed();;
        
    }

});