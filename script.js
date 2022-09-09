let submitButton = document.getElementById('submitbtn')
let api = document.querySelector('#api');
let api1 = document.querySelector('#api1');
const myImg = document.getElementById('dogimg');


submitButton.addEventListener("click", getAllInfo);

setDogImage();

async function setDogImage() {
    let getDogImage = await fetch('https://dog.ceo/api/breeds/image/random');
    let dogImg = await getDogImage.json();
    console.log(dogImg);
    myImg.src = dogImg.message;
}

async function getAllInfo() {
    const userName = document.querySelector('#username').value;
    let getGender = await fetch(`https://api.genderize.io?name=${userName}`);
    let genderData = await getGender.json();
    console.log(genderData.gender);

    let getNationality = await fetch(`https://api.nationalize.io/?name=${userName}`);
    let nationalityData = await getNationality.json();
    console.log(nationalityData.country[1]);


    let getAge = await fetch(`https://api.agify.io/?name=${userName}`);
    let ageData = await getAge.json();
    console.log(ageData.age);

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


