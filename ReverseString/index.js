


function Reverse(str){
    return str.split("").reverse().join("")
}

// console.log(Reverse("hello"))

var data= Reverse("hello");
console.log(data)


// This code defines a function reverseString() that reverses a given string. Let’s break down each part of the function:

// str.split(''):

// The split('') method is used to convert the string str into an array of individual characters. For example, if str = "hello", the result will be ['h', 'e', 'l', 'l', 'o'].
// .reverse():

// The reverse() method is applied to the array to reverse its order. For the example above, it will reverse the array to ['o', 'l', 'l', 'e', 'h'].
// .join(''):

// The join('') method is used to join the reversed array back into a single string, with no separator between the characters. This results in the string "olleh".
// So, for the input "hello", the function returns the reversed string "olleh".


// यह कोड एक reverseString() नामक फंक्शन को परिभाषित करता है जो एक दिए गए स्ट्रिंग को पलटता है। चलिए इसे विस्तार से समझते हैं:

// str.split(''):

// split('') मेथड का उपयोग स्ट्रिंग str को व्यक्तिगत अक्षरों के एक एरे में बदलने के लिए किया जाता है। उदाहरण के लिए, यदि str = "hello" है, तो परिणाम ['h', 'e', 'l', 'l', 'o'] होगा।
// .reverse():

// reverse() मेथड को एरे पर लागू किया जाता है ताकि उसके तत्वों का क्रम उलट जाए। ऊपर दिए गए उदाहरण में यह एरे को ['o', 'l', 'l', 'e', 'h'] में बदल देगा।
// .join(''):

// join('') मेथड का उपयोग उलटे हुए एरे को फिर से एक स्ट्रिंग में जोड़ने के लिए किया जाता है, जिसमें कोई भी separator नहीं होता। इसका परिणाम "olleh" स्ट्रिंग होगा।
// इसलिए, इनपुट "hello" के लिए यह फंक्शन पलटी हुई स्ट्रिंग "olleh" लौटाएगा।