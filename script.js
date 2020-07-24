var answer, btn, out, random, reset;

random = Math.floor(Math.random() * 10 + 1);
console.log(random);

out = document.getElementById('out');
btn = document.getElementById('btn');
reset = document.getElementById('reset');



function game(){
    answer = document.getElementById('answer').value;
    if(isNaN(answer) || answer == ''){
        out.innerHTML = 'Введите число правильно';
    }
    else if(answer > random){
        out.innerHTML = 'Чуть меньше :)';
    }
    else if(answer < random){
        out.innerHTML = 'Чуть больше :)';
    }
    else{
        out.innerHTML = 'Поздравляем вы отгодали число'
        btn.style.display = 'none';
        reset.style.display = 'inline-block';
        reset.style.color = 'red';
        out.style.color = 'red';
    }
}