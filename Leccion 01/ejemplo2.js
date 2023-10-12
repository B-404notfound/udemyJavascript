const autos = ['BMW','VOLVO','MERCEDES BENZ'];
console.log(autos[2]);

for(let i = 0;i < autos.length;i++){
    console.log(i+ ':'+ autos[i]);
}

autos[2]="Mercedes Benz";
console.log(autos);
autos[1]="Volvo";
console.log(autos);
autos.push('Toyota');
console.log(autos);
autos.push('Nissan');
console.log(autos);
autos[0]="Bmw";
console.log(autos);

console.log(autos.length);
autos[autos.length]='Audi';
console.log(autos);
console.log(autos.length);