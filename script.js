//Define the variable based on their ids
let submitButton = document.getElementById('submitbtn')
let gender = document.querySelector('#gender');
let nationality = document.querySelector('#nationality');
let age = document.querySelector('#age');
const myImg = document.getElementById('dogimg');


submitButton.addEventListener("click", getAllInfo);

//call the function that request the image apiapi
setDogImage();

//Dog's image api
async function setDogImage() {
    let getDogImage = await fetch('https://dog.ceo/api/breeds/image/random');
    let dogImg = await getDogImage.json();
    console.log(dogImg);
    myImg.src = dogImg.message;
}

//function to be called when submit button clicked 
async function getAllInfo() {
    
    const userName = document.querySelector('#username').value; //get the username value

    let getGender = await fetch(`https://api.genderize.io?name=${userName}`); //send the gender api  
    let genderData = await getGender.json(); //receive the response and implement it in  json object
    gender.innerHTML = genderData.gender; // make the inner text of gender as gender json object
    
    //nationality api
    let getNationality = await fetch(`https://api.nationalize.io/?name=${userName}`); //send the nationality api  
    let nationalityData = await getNationality.json();//receive the response and implement it in json object
    nationality.innerHTML = `${ nationalityData.country[0].country_id } or ${ nationalityData.country[1].country_id }`;

    //age api
    let getAge = await fetch(`https://api.agify.io/?name=${userName}`);
    let ageData = await getAge.json();
    age.innerHTML = ageData.age;

    // let getNationality = await fetch(' https://api.nationalize.io/?name=mohamad');

    // let myDogImage = await getDogImage.formData();
    // console.log(getGender.status); // 400
    // console.log(getAge.text());
    // api.innerHTML = getAge.text();
    // console.log(getNationality.statusText); 
    // let dogImage = document.querySelector('#dogimg')
    // dogImage.src = myDogImage;
    

    // api.innerHTML = await getGender.text();
}

// const res = await fetch(genderURL);
//         const data = await res.json();
//         return data.gender;
// async function haha() {
//     let getGender = await fetch('https://api.genderize.io?name=rio');
//     let getAge = await fetch(' https://api.agify.io/?name='+userName);
//     let getNationality = await fetch(' https://api.nationalize.io/?name=mohamad');
//     let getDogImage = await fetch('https://dog.ceo/api/breeds/image/random');
//     // let myDogImage = await getDogImage.formData();
//     console.log(getGender.status); // 400
//     console.log(getAge.text());
//     console.log(getNationality.statusText); 
//     // let dogImage = document.querySelector('#dogimg')
//     // dogImage.src = myDogImage;
    
//     let api = document.querySelector('#api');
//     let api1 = document.querySelector('#api1');
//     api.innerHTML = await getGender.text();
// }


