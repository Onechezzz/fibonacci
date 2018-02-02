document.write('Формула для обчислення числа Фібоначі');

let N = prompt('Введіть номер числа Фібоначі');

let OldValue = 0;
let Value = 1;
let Hold;
let i;
if( i<1){
    document.write('Коефіцієнт надто мал');
}
else{
for ( i=1;i<N;i++)
{
    Hold=Value;
    Value+=OldValue;
    OldValue=Hold;
}
}
document.write('Ваше число: ' + Value);