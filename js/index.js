// Iteration 1: Names and Input
//
console.log("I'm ready!");

const hacker1 = 'Aldo Santa María'

console.log(`The driver's name is XXXX ${hacker1}`);

const hacker2 = window.prompt("What's the navigator's name?");
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has XX characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has XX characters.`)

} else {
  console.log(`Wow, you both have equally long names, XX characters!.`)
}


// Iteration 3: Loops

// console.log(hacker1.toUpperCase().split(""));
//3.1 Print all the characters of the driver's name, separated by a space and
newString = ""
for (let i = 0; i < hacker1.length; i++) {
  newString += `${hacker1[i].toUpperCase()} `
}
console.log(newString.substring(0, newString.length - 1));

// 3.2 Print all the characters of the navigator's name, in reverse order. 

//Option1
newString = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newString += hacker2[i];
}
console.log(newString);

//Option2
// const strReversed = hacker1.split("").reverse().join("");
// console.log(strReversed);

let userString = window.prompt("Please, write something:").toLowerCase();

//Regex
userString = userString.replace(/[^a-z]/g, "");
reverseString = ""

for (let i = userString.length - 1; i >= 0; i--) {
  reverseString += userString[i];
}

console.log(reverseString);


// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:


// Generate 3 paragraphs. Store the text in a variable type of string.
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi tortor, accumsan vitae pulvinar in, finibus at nunc. Aliquam consectetur fringilla bibendum. Integer neque dolor, hendrerit ac rhoncus in, sodales ut ante. Curabitur mollis dapibus augue cursus tristique. Praesent nec euismod ligula. Sed feugiat erat non quam varius dignissim. Etiam id accumsan nunc, a faucibus sem. Duis consequat elit pulvinar ipsum hendrerit, sit amet maximus nunc sollicitudin."+

"Etiam suscipit bibendum nisi ac auctor. Morbi efficitur, leo at vehicula mollis, massa metus pulvinar nisi, ut aliquet odio mi a enim. Ut tempus ut nisl ut porta. Donec a ipsum vel sem ullamcorper interdum. Integer ornare lorem sit amet finibus accumsan. Vestibulum tincidunt ipsum magna, sed pretium dui placerat ut. Vivamus quis rhoncus orci. Etiam dictum, diam ac egestas iaculis, urna tortor scelerisque erat, vel mollis erat enim a risus. Donec sit amet neque vel dui venenatis euismod. Vivamus tristique lacinia volutpat. Ut nec suscipit justo, ultricies tempus nulla. Vestibulum risus velit, facilisis in nulla sit amet, euismod hendrerit nisi. Morbi malesuada finibus maximus."+

"Mauris euismod neque eget velit facilisis, congue vulputate lacus consequat. Sed enim metus, euismod et rutrum eget, facilisis sed enim. Maecenas pharetra risus in metus pulvinar, a porttitor augue mollis. Vivamus eu congue nunc, eu accumsan quam. In iaculis est sed lacus lacinia commodo. Nunc fringilla mattis purus a hendrerit. Phasellus rutrum leo a augue tristique sodales. Integer id posuere nulla, quis eleifend nibh. Vestibulum interdum mauris et justo cursus, at luctus ligula posuere. Donec consequat magna hendrerit nulla euismod auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "


//  Make your program count the number of words in the string.
//Option1
console.log(`The text has ${lorem.split(" ").length} words.`)

//Option2 
// function countWords(str) {
//   const arr = str.split(' ');
//   return arr.filter(word => word !== '').length;
// }

// console.log(countWords(str));


// Make your program count the number of times the Latin word et appears.
let etArray = lorem.match(/ et /g);
const etCount = (etArray === null ? 0 : etArray.length);
console.log(`The text has ${etCount} et.`);

// Bonus 2:
// Create a new variable `phraseToCheck` and have it contain some string value. 
// Write a code that will check if the value we assigned to this variable is a [Palindrome].

const isPalindrome = "Your string is a Palindrome! Congratulations!!!!";
const isNotPalindrome = "Your string is not a Palindrome!";
userString === reverseString ? console.log(isPalindrome) : console.log(isNotPalindrome);