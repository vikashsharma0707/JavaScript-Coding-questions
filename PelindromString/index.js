


function Reverse(str){
    const reverse= str.split("").reverse().join("")
    return str == reverse
}

console.log(Reverse("madam"))
console.log(Reverse("hello"))