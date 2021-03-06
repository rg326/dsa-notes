//Method 1: Using a Object/Hash/Map

//Related Questions:
// - What is the most common character in a string?
// - Does string A have the same characters a string B (is it an anagram)?
// - Does the given string have any repeated characters in it?
// - Anything around counting the number or occurences of characters or comparing the number of characters between two strings

// - We will essentially convert the string to an object/hash/map where the properties/keys are the characters in the string
// - The values are the amount of times that particular character occurs

//Ex:

//"Hello"

//{
//    H: 1,
//    e: 1,
//    l: 2,
//    o: 1,
//}

//Steps for Method 1 Data Structure:
// - Create a string (const = 'Hello') (only for example). 
// - A function that takes in a string parameter will take its place in the actual problem
// - Declare a new object variable
// - Iterate through that string, and for every character, add it to a new object (const chars = {};)
// - Either add the character as a new property and assign it a value of 1, or if we've seen it already, add 1 to it/increment it by 1
// - For every char we find, we add a property to "chars"

//for (let char of string) {
//    if(!chars[char]) {
//        chars[char] = 1;
//    } else {
//        chars[char]++;
//    }
//}

//chars;

//ALT
//for (let char of string) {
//   chars[char] = chars[char] + 1 || 1;
//}
// chars;


//       
// - Doing this, we end up with our object

//Method 1 -Steps

//Direct Approach:
//- Create a function that takes in a string parameter
// - Declare an empty object variable
// - Create an int/count variable and initialize it to 0.



//function maxChar(str) {
//const charMap = {};
//let max = 0;
//let maxChar = '';
//
////object starts with 'o' so don't use for of to iterate over object, use 'for in'
//    for (let char of string) {
//        if(!chars[char]) {
//            chars[char] = 1;
//        } else {
//            chars[char]++;
//        }
//    }
//    
//    for (let char in charMap) {
//        if (charMap[char] > max) {
//            max = charMap[char];
//            maxChar = char;
//        }
//    }
//    return maxChar;
//}
