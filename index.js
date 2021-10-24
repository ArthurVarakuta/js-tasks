// first task
var firstRow = prompt('Введите первую строку')
var secondRow = prompt('Введите вторую строку')
var symbol = prompt('Введите букву');
var firstRowCount = 0, symbolCount = 0;


// first task
function getRow(firstElement,secondElement){
    for (let i=0; i < firstElement.length; i++){
        if (firstElement.charAt(i) == symbol ){
            firstRowCount++;
        }
    }
    for (let i=0; i < secondElement.length; i++){
        if (secondElement.charAt(i) == symbol){
            symbolCount++;
        }
    }
    alert(" В первой строке '"+ symbol+"' встречается " + firstRowCount + " раз." + " Во второй строке '"+ symbol+"' встречается " + symbolCount + " раз.");
    if (firstRowCount > symbolCount){
        alert(firstRow)
    }
    else{
        alert(secondRow)
    }
}
getRow(firstRow,secondRow);

// second task
var Phone = prompt('Введите номер телефона');
var formPhone ='';
var newPhone ='';

// second task
function formattedPhone(thirdElement){
    formPhone = thirdElement;
    if (formPhone.length == 11){
        if (formPhone.charAt(0) == '7' || formPhone.charAt(0) == '8' || formPhone.charAt(0) == '9'){
            formPhone = formPhone.substr(1);
            formPhone = '+7'+formPhone;
        }
        else{
            alert('Неверный номер!');
            return;
        }
    }
    else if (formPhone.length != 12 || formPhone.charAt(0) != '+' || formPhone.charAt(1) != '7'){
        alert('Неверный номер!');
        return;
    }
    thirdElement = formPhone;
    for (let i=0; i < thirdElement.length; i++){
        newPhone+=thirdElement.charAt(i);
        if (thirdElement.charAt(i) == '7'){
            if (thirdElement.charAt(i-1) == '+'){
                newPhone+=' (';
            }
        }
        if (i == '4'){
            newPhone+=') ';
        }
        if (i =='7'){
            newPhone+='-';
        } 
        if (i =='9'){
            newPhone+='-';
        }  
    }

    alert('Номер телефона ' + newPhone);    
}
formattedPhone(Phone);



