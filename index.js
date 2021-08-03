let screen=document.getElementById('screen');//WHY
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText =  e.target.innerText;
        console.log(e.target,e)
        console.log('Button text is',buttonText);
        if(buttonText == 'X'){
            buttonText='*';
            screenValue += buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue = "";
            screen.value=screenValue;
        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value = screenValue
        }


    })
}
//DIFFERENCE BETWEEN NULL,UNDEFINED
//CALLBACK FUNCTION
//ARRAY FUNCTION