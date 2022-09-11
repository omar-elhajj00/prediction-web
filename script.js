//Define the variable based on their ids
let submitButton = document.getElementById('submitbtn')
let gender = document.querySelector('#gender');
let nationality = document.querySelector('#nationality');
let age = document.querySelector('#age');
const myImg = document.getElementById('dogimg');


submitButton.addEventListener("click", getAllInfo);

//call the function that request the image api
setDogImage();

//Dog's image api
async function setDogImage() {
    let getDogImage = await fetch('https://dog.ceo/api/breeds/image/random');
    let dogImg = await getDogImage.json();
    console.log(dogImg);
    myImg.src = dogImg.message;
}

//function to be called when submit button clicked 
async function getAllInfo(e) {
    e.preventDefault();
    //get the username value
    const userName = document.querySelector('#username').value;
    
    // gender api request
    let getGender = await fetch(`https://api.genderize.io?name=${userName}`); //send the gender api  
    let genderData = await getGender.json(); //receive the response and implement it in  json object
    gender.innerHTML = genderData.gender; // make the inner text of gender as gender json object
    
    //nationality api request 
    let getNationality = await fetch(`https://api.nationalize.io/?name=${userName}`); //send the nationality api  
    let nationalityData = await getNationality.json();//receive the response and implement it in json object
    nationality.innerHTML = `${ nationalityData.country[0].country_id } or ${ nationalityData.country[1].country_id }`; //make the first 2 element of nationalities array inside the country tag

    //age api request
    let getAge = await fetch(`https://api.agify.io/?name=${userName}`);
    let ageData = await getAge.json();
    age.innerHTML = ageData.age;
}



