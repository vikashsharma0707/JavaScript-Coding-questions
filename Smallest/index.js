
const n1=parseInt(prompt("Enter n1"));
const n2=parseInt(prompt("Enter n2"));
const n3=parseInt(prompt("Enter n3"));


if(n1<n2 && n1<n3){
    alert("n1 is smaillest")
}

 else if(n2<n1 && n2<n3){
    alert("n2 is smallest")
}

else{
    alert("n3 is smallest")
}