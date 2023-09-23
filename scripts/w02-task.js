/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jerald Vásquez Jiménez';
let currentYear = 2023;
let profilePicture = 'images/profile-pic.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of Jerald Vásquez Jiménez');


/* Step 5 - Array */
let favFoods = ["Rice","Tikka Masala","Prioshki","Steak","Banana Cream Pie"];
foodElement.innerHTML = `${favFoods}`;
let singleFood = "Potato Salad";
favFoods.push(singleFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;



