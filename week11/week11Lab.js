/* Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  JQuery and AJAX Lab
   Front End Technologies Lab 11 - JQuery and AJAX (Questions)
*/
/* ----------------------------------------------------- */
/* 
/* Key Terms:
 * JQuery
 * DOM
 * AJAX (Asynchronous JavaScript and XML)
 * API (Application Programming Interface) 
 * JSON (JavaScript Object Notation)
 * GET
 * POST      
 * Endpoint 
 * Anonymous function 
 *
 *                                        
 * Objectives: 
 * Accessing element values by DOM manipulation 
 * Creating an instance of a class 
 * Calling methods of an instantiated class 
*/

/* ----------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------- */

/*-------------------------------------------------*/
// Question 1: Replace Text with JQuery

/* Looking at the HTML file, you can observe that Question 1 has a DIV, an INPUT, and a BUTTON. The BUTTON is programmed to call a function called "replaceTextInDiv" on the event of a click. 
	* Step 1: Create a function named "replaceTextInDiv". 
	* Step 2: The "replaceTextInDiv" function should get the value typed into the INPUT, with an id name of "input-value", then replaces the text in the DIV, with a class name of "put-here", with the value from the input.
	* Step 3: In the "replaceTextInDiv" function, after replacing the text in the DIV make sure to clear out the input value.
	* 
	* ↓ YOUR CODE HERE ↓ */










/*------------------------------------------------*/
// Question 2: Before and After 
 
/* In the HTML file, there is an image of a dog in the DIV with a class name of "dog".  You will programmatically add 2 more images, one before the dog DIV and another image after the dog DIV.
	* Step 1: Insert a DIV element with an IMAGE nested inside BEFORE the dog DIV. The image should be: <img src='images/fish.png' width='200'>.(See documentation: https://api.jquery.com/before/)
	* Step 2: Insert a DIV element with an IMAGE nested inside BEFORE the dog DIV. The image should be:<img src='images/cat.png' width='200'>. (See documentation: https://api.jquery.com/after/)
	* Step 3: When done, there should be three images on the screen: fish, dog, cat. 
	* 
	* ↓ YOUR CODE HERE ↓ */


	






/*-------------------------------------------------*/
// Question 3: Remove 
 
/* In the HTML file, there is are 3 PARAGRAPHS with some random text (Lorem Ipsum). Each paragraph has its own id: "lorem1", "lorem2", or "lorem3".
	* Step 1: Write some code that will remove the second PARAGRAPH from the page.(See documentation: https://api.jquery.com/remove/)
	* Step 2: Save after your changes, the second PARAGRAPH should be gone.
	* 
	*
	* ↓ YOUR CODE HERE ↓ */




	



/*-------------------------------------------------*/
// Question 4: AJAX with JQuery 

// EXAMPLE:
// Here is a link to an actual public API for random cat facts.
// As an option, the url can be saved in a variable as a STRING as shown.
let CATS_API_URL = 'https://catfact.ninja/fact'; 

//This is how to make a GET call using AJAX:
$.get(CATS_API_URL, (data)=> {
    console.log(data);
    $('.cat-facts').append(`<p> ${data.fact} </p>`);
});

//Notice there are 3 parts...
// GET is what we want to do ( 'URL GOES HERE as a STRING' , METHOD/FUNCTION that will do something with the data that is returned goes here);
//The cat fact from the returned data is printed to the console AND appended as a PARAGRAPH to the DIV that has a class name of "cats". (See documentation: https://api.jquery.com/category/ajax/shorthand-methods/)


/* Instructions:
 	* Step 1: Make an AJAX call to GET a random joke using this jokes API https://official-joke-api.appspot.com/random_joke.
 	* Step 2: Using the URL, make an AJAX call to 'GET' a random joke. Print to data returned to the console.  
 	* Step 3: Print the joke setup to the DOM by prepending it as a PARAGRAPH to the DIV with a class name of "jokes". (See documentation:https://api.jquery.com/prepend/)
 	* Step 4: Print the joke punchline to the DOM by appending it as a PARAGRAPH to the DIV with a class name of "jokes". Save your changes. (See documentation: https://api.jquery.com/append/)
 	* 
 	* 
 	* ↓ YOUR CODE HERE ↓ */








/*--------------------------------------------------*/

// Question 5: Fake API 

/* We are going to use a JSON Server as a fake API. APIs in general will be covered throughout the rest of this course. This is a way to practice making calls to an API without worrying about authentication and Keys which are usually required for using an API. In order to complete this lab you will have to do some extra installations. The db.json file for the json-server is already included with this lab.
	* Step 1: In the terminal, change into this files directory and run the following commands:

		METHOD #1
			1. type command: npm install -g json-server
			2. type command: json-server --watch db.json
			3. In the terminal you should see the link that you can use to make the calls, it should look something like this:

				Resources
				http://localhost:3000/gradebook

				Home
				http://localhost:3000

			4. Click on the Resources link to open the json database on the browser, be sure to leave this terminal instance open so it can continue to watch the 'json' file
			5. Open your HTML file on the browser using Live Server or whatever method you customarily use

		(As some computers have issues with permissions, if 
		  METHOD #1 didn't work for you then, alternatively, try METHOD #2.)
		------------------------------------------------------
		METHOD #2 
	      Watches for the json-server db.json file:
			1. type command: npm init -y
			2. type command: npm i json-server
			3. type command: npx json-server --watch db.json
			4. This will output a url to your 'json' resource
			5. Be sure to leave this terminal instance open

		  Serves the 'website' url, (Alternate to Live Server):
			1. Open up a second terminal instance
			2. type command: npx serve
			3. This will output a url to your 'website' with all of your files
			4. Click on the HTML file to open it on the browser (this is the same as using Live Server but may avoid CORS issues)
			5. You can also click on the db.json file to open it, just like the resources link


	* Step 2: Take a look at the db.json file and the data that is provided.The endpoint used to access this data will be 'gradebook' as shown in the Resources link. The Resources link will be your fake API url. 
	* Step 3: Make a 'GET' request to the JSON server using the Resources link like an API url. Print the returned data to the console. Look at the console to compare the data printed and the data in the db.json file.  
	* Step 4: Make another 'GET' request to the JSON server but after the ENDPOINT type in /7 this will GET the information for only the student with an ID of 7. Print the returned data to the console. 
	* Step 5: In the GET calls anonymous function, write a JQuery method that will put the data in the empty DIV with a class name of "result". Access the student data with the object dot notation and concatenate the student data into a string that looks something like this: 
	*      (data.firstname + " " + data.lastname + ", Grade: "  + data.grade + "%")
	* Step 6: Choose a different student Id and make another GET call that will print that  students data to the DOM like in Step 5 and 6, but this time use the DIV with a class name of "new".
	* 
	*
	* ↓ YOUR CODE HERE ↓ */


	






/*--------------------------------------------------*/
// Question 6: POST 

//EXAMPLE:
//The function below is triggered by a click event on the BUTTON element with a class name of "test". It will POST (or add) the the values from the inputs to the db.json file. With the HTML file open in the browser and the db.json file open in your IDE, click on the TEST BUTTON to witness the post being added to the data object. Note: the data id will be assigned automatically.  

$(".test").on("click", function(){
	
	let fname = $('#firstname').val();
	let lname = $('#lastname').val();
	let grade = $('#grade').val();
	
	$.post("http://localhost:3000/gradebook", 
			{ 
					"firstname": fname,
					"lastname": lname,
					"grade": grade    
			}
	);

});
/*
	* Step 1: Recreate the POST method from above but instead use the BUTTON with a class name of "postBtn". 
	* Step 2: Fill in the inputs with your first name, last name, and give yourself a grade.
	* Step 3: Click the POST BUTTON and make sure that your data is added to the db.json file correctly. 
	* 
	*
	* ↓ YOUR CODE HERE ↓ */









/*--------------------------------------------------*/
