const changeOne = () =>{
    let root = document.documentElement;
    root.style.setProperty('--mainDarkBlue', 'hsl(222, 26%, 31%)');
    root.style.setProperty('--keypadDarkBlue', 'hsl(223, 31%, 20%)');
    root.style.setProperty('--screenDarkBlue', ' hsl(224, 36%, 15%)');
    root.style.setProperty('--keyDarkBlue', ' hsl(225, 21%, 49%)');
    root.style.setProperty('--keyDarkBlueShadow', ' hsl(224, 28%, 35%)');
    root.style.setProperty('--keyPressDarkBlue', ' hsl(224, 51%, 76%)');
    root.style.setProperty(' --keyRed', ' hsl(6, 63%, 50%)');
    root.style.setProperty('--keyPressRed', ' hsl(6, 93%, 67%)');
    root.style.setProperty('--keyRedShadow', ' hsl(6, 70%, 34%)');
    root.style.setProperty('--keyOrange', ' hsl(30, 25%, 89%)');
    root.style.setProperty('--keyPressOrange', ' hsl(0, 0%, 100%)');
    root.style.setProperty('--keyOrangeShadow', ' hsl(28, 16%, 65%)');
    root.style.setProperty('--textBlue', ' hsl(221, 14%, 31%)');
    root.style.setProperty('--textWhite', ' hsl(0, 0%, 100%);');
    root.style.setProperty('--headline', ' hsl(0, 0%, 100%)');
    root.style.setProperty('--calc', ' hsl(0, 0%, 100%)');
}
const changeTwo = () =>{
    let root = document.documentElement;
    root.style.setProperty('--mainDarkBlue', 'hsl(0, 0%, 90%)');
    root.style.setProperty('--keypadDarkBlue', 'hsl(0, 5%, 81%)');
    root.style.setProperty('--screenDarkBlue', ' hsl(0, 0%, 93%)');
    root.style.setProperty('--keyDarkBlue', ' hsl(185, 42%, 37%)');
    root.style.setProperty('--keyDarkBlueShadow', ' hsl(224, 28%, 35%)');
    root.style.setProperty('--keyPressDarkBlue', 'hsl(185, 41%, 56%)');
    root.style.setProperty('--keyRed', ' hsl(25, 98%, 40%)');
    root.style.setProperty('--keyPressRed', 'hsl(25, 100%, 61%)');
    root.style.setProperty('--keyRedShadow', ' hsl(25, 99%, 27%)');
    root.style.setProperty('--keyOrange', ' hsl(45, 7%, 89%)');
    root.style.setProperty('--keyPressOrange', ' hsl(0, 0%, 100%)');
    root.style.setProperty('--keyOrangeShadow', ' hsl(35, 11%, 61%)');
    root.style.setProperty('--textBlue', ' hsl(60, 10%, 19%)');
    root.style.setProperty('--textWhite', ' hsl(0, 0%, 100%)');
    root.style.setProperty('--headline', 'black');
    root.style.setProperty('--calc', ' hsl(0, 0%, 100%)');
}

const changeThree = () =>{
    let root = document.documentElement;
    root.style.setProperty('--mainDarkBlue', 'hsl(268, 75%, 9%)');
    root.style.setProperty('--keypadDarkBlue', 'hsl(268, 71%, 12%)');
    root.style.setProperty('--screenDarkBlue', ' hsl(268, 71%, 12%)');
    root.style.setProperty('--keyDarkBlue', ' hsl(281, 89%, 26%)');
    root.style.setProperty('--keyDarkBlueShadow', ' hsl(285, 91%, 52%)');
    root.style.setProperty('--keyPressDarkBlue', 'hsl(280, 56%, 44%)');
    root.style.setProperty('--keyRed', 'hsl(176, 100%, 44%)');
    root.style.setProperty('--keyPressRed', 'hsl(177, 100%, 79%)');
    root.style.setProperty('--keyRedShadow', 'hsl(177, 92%, 70%)');
    root.style.setProperty('--keyOrange', ' hsl(268, 47%, 21%)');
    root.style.setProperty('--keyPressOrange', 'hsl(267, 54%, 44%)');
    root.style.setProperty('--keyOrangeShadow', ' hsl(290, 70%, 36%)');
    root.style.setProperty('--textBlue', 'hsl(52, 100%, 62%)');
    root.style.setProperty('--textWhite', ' hsl(0, 0%, 100%)');
    root.style.setProperty('--headline', 'hsl(52, 100%, 62%)');
    root.style.setProperty('--calc', 'hsl(198, 20%, 13%)');
}

const changeTheme = document.querySelector('input[type="range"]');
changeTheme.addEventListener('change', function() {
    switch(parseInt(changeTheme.value)){
        case 0:
        {
            changeOne();
            break;
        }
        case 1:
        {
            changeTwo();
            break;
        }
        case 2:
        {
            changeThree();
            break;
        }
    }
});

const changeFirst = (num) =>{
    const original = document.getElementById('first');
    if (original.innerHTML === '' && num !== '0'){
        original.innerHTML = num;
    }
    else{
        original.innerHTML += num;
    }
}
const changeSecond = (num) =>{
    const second = document.getElementById('second');
    if (second.innerHTML === '' && num !== '0'){
        second.innerHTML = num;
    }
    else{
        second.innerHTML += num;
    }
}
const calcPress = (num) =>{
    if(!operatorPresent()){
        changeFirst(num);
    }
    else changeSecond(num);
}
const addDecimal = () =>{
    if(!operatorPresent()){
        const original = document.getElementById('first');
        if (original.innerHTML.indexOf('.') === -1){
            if (original.innerHTML === ''){
                original.innerHTML = '.';
            }
            else{
                original.innerHTML += '.';
            }
        }
    }
    else{
        const second = document.getElementById('second');
        if(second.innerHTML.indexOf('.') === -1){
            if (second.innerHTML === ''){
                second.innerHTML = '.';
            }
            else{
                second.innerHTML += '.';
            }
        }
        
    }
}
const operatorPresent = () =>{
    const operator = document.getElementById('operator');
    if(operator.innerHTML === ''){
        return false;
    }
    else return true;
}
const addOperator = (operator) => {
    if (!operatorPresent()){
        const op = document.getElementById('operator');
        op.innerHTML = "&nbsp" + operator + "&nbsp";
        op.value = operator;
    }
}
const deleteNum = () =>{
    const operator = document.getElementById('operator');
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    if(second.innerHTML !== ''){
        second.innerHTML = second.innerHTML.substring(0, second.innerHTML.length-1);
    }
    else{
        if (operatorPresent()){
            operator.innerHTML = "";
        }
        else if(first.innerHTML !== ''){
            first.innerHTML = first.innerHTML.substring(0, first.innerHTML.length-1);
        }
    }
}
const reset = () =>{
    document.getElementById('operator').innerHTML = '';
    document.getElementById('first').innerHTML = '';
    document.getElementById('second').innerHTML = '';
}
const calculate = () =>{
    const operator = document.getElementById('operator').value;
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    let output = 0;
    if (second.innerHTML !== ''){
        if(operator === "X"){
            output = parseFloat(first.innerHTML) * parseFloat(second.innerHTML);
        }
        else if(operator === "/"){
            output = parseFloat(first.innerHTML) / parseFloat(second.innerHTML);
        }
        else if(operator === "+"){
            output = parseFloat(first.innerHTML) + parseFloat(second.innerHTML);
        }
        else if(operator === "-"){
            output = parseFloat(first.innerHTML) - parseFloat(second.innerHTML);
        }
        console.log(operator);
        console.log(output);
        reset();
        first.innerHTML = output;
    }
}
const one = document.getElementById('one');
one.addEventListener('click', function(){calcPress('1');});
const two = document.getElementById('two');
two.addEventListener('click', function(){calcPress('2');});
const three = document.getElementById('three');
three.addEventListener('click', function(){calcPress('3');});
const four = document.getElementById('four');
four.addEventListener('click', function(){calcPress('4');});
const five = document.getElementById('five');
five.addEventListener('click', function(){calcPress('5');});
const six = document.getElementById('six');
six.addEventListener('click', function(){calcPress('6');});
const seven = document.getElementById('seven');
seven.addEventListener('click', function(){calcPress('7');});
const eight = document.getElementById('eight');
eight.addEventListener('click', function(){calcPress('8');});
const nine = document.getElementById('nine');
nine.addEventListener('click', function(){calcPress('9');});
const zero = document.getElementById('zero');
zero.addEventListener('click', function(){calcPress('0');});
const decimal = document.getElementById('decimal');
decimal.addEventListener('click', addDecimal);
const plus = document.getElementById('plus');
plus.addEventListener('click', function(){addOperator("+");});
const min = document.getElementById('minus');
min.addEventListener('click', function(){addOperator("-");});
const div = document.getElementById('division');
div.addEventListener('click', function(){addOperator("/");});
const mul = document.getElementById('multiplication');
mul.addEventListener('click', function(){addOperator("X");});
const del = document.getElementById('delete');
del.addEventListener('click', deleteNum);
const res = document.getElementById('reset');
res.addEventListener('click', reset);
const cal = document.getElementById('calculate');
cal.addEventListener('click', calculate);
