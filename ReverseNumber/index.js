
var n= parseInt(prompt("Enter any number"));

var i,rem,sum;
i=n;
sum=0;

while(n>0){
    rem=n%10;
    sum=sum*10+rem;
    n=Math.floor(n/10)
}

console.log("Rever of number is :",sum)