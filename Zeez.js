//color all buttons
let all_buttons = document.getElementsByTagName('button');

let copyAllButtons = [];
for(i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonClicky){
    if(buttonClicky.value === 'red'){
        buttonRed();
    }else if(buttonClicky.value === 'green'){
        buttonGreen();
    }else if(buttonClicky.value === 'reset'){
        buttonReset();
    }else if(buttonClicky.value === 'random'){
        buttonRandom();
    }
}

function buttonRed(){
    for(i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success')
    }
}

function buttonReset(){
    for(i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom(){
    let choice = ['btn-primary','btn-success','btn-danger','btn-warning'];
    for(i = 0; i < all_buttons.length; i++){
        let randomColor = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choice[randomColor]);
    }
}