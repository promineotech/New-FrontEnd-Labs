/*
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  Arrays and Functions Lab
   FE Lab 03
*/

/* ----------------------------------------------------- */

/* Key Terms:
 * Element
 * Array 
 * Built-in methods
 * Parameter 
 * Argument 
 * 
 *                                              
 * Objectives: 
 * Apply various built-in array methods
 * Define a function using proper syntax 
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/
// Question 1: alphabetString
console.log(`--------------------------
Question 1: alphabetString \n`);

let alphabetString = 'abcdefghijklmnopqrstuvwxyz'; 

/*
 * Using the provided code above:
 * Step 1: Convert the alphabetString to an array and print it to the console (See documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */






// Question 2: alphabetArray
console.log(`--------------------------
Question 2: alphabetArray \n`);

let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/*
 * Using the provided code above:
 * Step 1: Reorganize the alphabet array from z to a (See documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
 * Step 2: Convert the elements of the array into a string (with no spaces between the letters) and print it to the console (See documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */






// Question 3: array1
console.log(`--------------------------
Question 3: array1 \n`);

let array1 = [1, 5, 6, 9, 10, 14];

/*
 * Using the provided code above, print the results to the console for each step:
 * Step 1: Print array1 to the console 
 * Step 2: Print the 3rd element in array1 
 * Step 3: Print the last element in array1
 * Step 4: Add 16 and 3 to array1 and Print the updated array.(See documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
 * Step 5: Print the 3rd element again.
 * Step 6: Print the last element again. Did it change from earlier? Are you able to get the last element that was just added?
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */






// Question 4: Todo List
console.log(`--------------------------
Question 4: Todo List \n`);

/*
 * Using the provided code above, you will do multiple tasks. Print results to the console after every change to the array(s).
 * Step 1: Create a variable called myTodoList that holds an empty array 
 * Step 2: Add three todo items (elements) to the array using a built-in array method, then print myTodoList to the console (See documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
 * Step 3: Remove the second element in the array, print the array to the console
 * Step 4: Create another array called yourTodoList, add two todo items, and print the array to the console
 * Step 5: Create another array called ourTodoList, then concatenate (combine) myTodoList and yourTodoList into the array ourTodoList, there's more than one way to do this.(See documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat  OR  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */







// Question 5: isEven 
console.log(`--------------------------
Question 5: isEven  \n`);

/*
 * Step 1:  Create a function called "isEven"(See documentation: )
        * The function takes in one input parameter of x, that will be a number
        * This function will return true if x is even and false if x is odd
        * Numeric value is given as an argument to functions below
        * Hint: use the % operator to determine if a number is even or odd (See documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
 * Step 2: Uncomment the Sample test cases provided below
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */





/* ↑ YOUR CODE HERE ↑ */

//! Sample test cases for the above isEven function (uncomment to test)
//console.log(isEven(2));   //should return true
//console.log(isEven(3));   //should return false
//console.log(isEven(4));   //should return true
//console.log(isEven(5));   //should return false




// Question 6: addingMachine
console.log(`--------------------------
Question 6: addingMachine \n`);

/*
 * Step 1:  Create a function called addingMachine
        * The function takes in one input parameter of x array
        * This function will add up all the numbers from the array and return the sum of all the numbers.
 * Hint: use a for loop to iterate through the array and add each element to a variable that holds the sum of all the numbers 
 *  Step 2: Uncomment the arguments (test cases) given below
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */





/* ↑ YOUR CODE HERE ↑ */

//! Sample test cases for the above isEven function (uncomment to test)
//console.log(addingMachine([1, 2, 3, 4, 5]));                    //should return 15
//console.log(addingMachine([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));    //should return 55
//console.log(addingMachine([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); //should return 120



// Question 7: reverse 
console.log(`--------------------------
Question 7: reverse \n`);

/*
 * Step 1: Create a function called "reverse" (See documentation: )
        * The function takes in one input parameter of x
        * This function will return the opposite of whatever is passed in
        * If it's a boolean, return the opposite
        * If it's a number, return the reverse (i.e. 1234 becomes 4321)
        * If it's a string, return the reversed string (i.e. 'hello' becomes 'olleh')
        * If it's an array, return the reversed array with each element reversed (i.e. ['hello', 'world'] becomes ['dlrow', 'olleh'])
        * If it's not a boolean, number, string, or array, return false
        * Hint - use the typeof operator to determine the type of the parameter
        * (See documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
 * Step 2: Uncomment the arguments (test cases) given below 
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */





/* ↑ YOUR CODE HERE ↑ */

// Sample test cases for the above reverse function (uncomment to test)
//console.log(reverse(1234));         //should return 4321
//console.log(reverse('hello'));      //should return 'olleh'
//console.log(reverse(true));         //should return false
//console.log(reverse([1, 2, 3, 4])); //should return [4, 3, 2, 1]




// Question 8: removeElements 
console.log(`--------------------------
Question 8: removeElements \n`);
    
/*
 * Step 1:  Create a function called removeElements - the purpose of this function is to remove all elements from an array
        * This function will have one parameter (array)
        * In the body of the function, create a while loop
        * While the array is not empty, remove an element
        * Within the body of the loop, use the pop() method
        * This pop method should run until the array is empty
        * Return the empty array
        * (See documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
 * Step 2: Uncomment the arguments (test cases) given below
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */





/* ↑ YOUR CODE HERE ↑ */

// Sample test cases for the above removeElements function (uncomment to test)
//console.log(removeElements([1, 2, 3, 4, 5])); //should return [] (an empty array)



// Question 9: whichArrayIsLonger 
console.log(`--------------------------
Question 9: whichArrayIsLonger  \n`);

/*
 * Step 1:  Create a function called whichArrayIsLonger. The purpose of this function is to determine which array has the most elements
        * This function takes in two parameters (array1, array2)
        * You can use conditional statements to determine which array has the most elements
        * This function will return the array that has the most elements    
        * If the arrays are the same length, return false  
        * (See documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)      
 * Step 2: Uncomment the function with two arguments (test cases) given below 
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */





/* ↑ YOUR CODE HERE ↑ */

// Sample test cases for the above whichArrayIsLonger function (uncomment to test)
//console.log(whichArrayIsLonger([1, 2, 3, 4, 5], [1, 2, 3, 4]));    //should return [1, 2, 3, 4, 5]
//console.log(whichArrayIsLonger([1, 2, 3, 4], [1, 2, 3, 4, 5, 6])); ///should return [1, 2, 3, 4, 5, 6]
//console.log(whichArrayIsLonger([1, 2, 3, 4], [1, 2, 3, 4]));       //should return false (because they are the same length)