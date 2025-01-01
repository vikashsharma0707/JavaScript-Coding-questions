
var n= parseInt(prompt("Enter any number"))
var rem,i,sum;

i=n;
sum=0;

while(n>0){
    rem=n%10;
    sum=sum*10+rem;
    n=Math.floor(n/10);
}

if(i==sum){
    console.log("number is pelindrom")
}

else{
    console.log("number is not pelindrom")
}