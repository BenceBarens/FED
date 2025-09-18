const chairs = [];
//zet chairs in array
for (let i = 1; i <= 30; i++) {
    chairs.push(document.getElementById(`chair-${i}`));
}

const chairData = [
    //Random eigenschappen voor alle 30 stoelen
    {id: 0, sittingTime: 3, sharing: false, height: 6, breathable: 2, padding: 2, armrests: 1, position1: false, position2: true, position3: false, position4: false, score: 0},
    {id: 1, sittingTime: 2, sharing: true, height: 4, breathable: 2, padding: 3, armrests: 3, position1: true, position2: false, position3: true, position4: true, score: 0},
    {id: 2, sittingTime: 1, sharing: true, height: 5, breathable: 1, padding: 1, armrests: 2, position1: false, position2: true, position3: true, position4: true, score: 0},
    {id: 3, sittingTime: 3, sharing: true, height: 2, breathable: 2, padding: 2, armrests: 3, position1: false, position2: false, position3: false, position4: true, score: 0},
    {id: 4, sittingTime: 1, sharing: false, height: 4, breathable: 1, padding: 4, armrests: 2, position1: false, position2: false, position3: true, position4: false, score: 0},
    {id: 5, sittingTime: 2, sharing: false, height: 3, breathable: 3, padding: 4, armrests: 1, position1: true, position2: false, position3: true, position4: true, score: 0},
    {id: 6, sittingTime: 3, sharing: true, height: 1, breathable: 2, padding: 2, armrests: 2, position1: false, position2: true, position3: false, position4: false, score: 0},
    {id: 7, sittingTime: 1, sharing: true, height: 5, breathable: 1, padding: 3, armrests: 1, position1: true, position2: true, position3: false, position4: true, score: 0},
    {id: 8, sittingTime: 3, sharing: false, height: 6, breathable: 3, padding: 1, armrests: 3, position1: false, position2: false, position3: true, position4: false, score: 0},
    {id: 9, sittingTime: 2, sharing: true, height: 4, breathable: 2, padding: 4, armrests: 2, position1: true, position2: false, position3: true, position4: false, score: 0},
    {id: 10, sittingTime: 1, sharing: false, height: 6, breathable: 1, padding: 2, armrests: 2, position1: false, position2: true, position3: false, position4: true, score: 0},
    {id: 11, sittingTime: 2, sharing: true, height: 3, breathable: 3, padding: 4, armrests: 1, position1: true, position2: false, position3: false, position4: false, score: 0},
    {id: 12, sittingTime: 3, sharing: false, height: 5, breathable: 2, padding: 3, armrests: 1, position1: true, position2: true, position3: false, position4: true, score: 0},
    {id: 13, sittingTime: 1, sharing: true, height: 2, breathable: 3, padding: 4, armrests: 3, position1: false, position2: true, position3: true, position4: false, score: 0},
    {id: 14, sittingTime: 2, sharing: false, height: 1, breathable: 1, padding: 3, armrests: 2, position1: true, position2: false, position3: true, position4: true, score: 0},
    {id: 15, sittingTime: 3, sharing: true, height: 6, breathable: 2, padding: 4, armrests: 1, position1: false, position2: true, position3: false, position4: true, score: 0},
    {id: 16, sittingTime: 1, sharing: false, height: 4, breathable: 1, padding: 2, armrests: 2, position1: true, position2: false, position3: false, position4: false, score: 0},
    {id: 17, sittingTime: 2, sharing: true, height: 3, breathable: 3, padding: 1, armrests: 3, position1: false, position2: true, position3: true, position4: true, score: 0},
    {id: 18, sittingTime: 3, sharing: false, height: 2, breathable: 2, padding: 4, armrests: 1, position1: true, position2: false, position3: false, position4: true, score: 0},
    {id: 19, sittingTime: 1, sharing: true, height: 5, breathable: 1, padding: 3, armrests: 2, position1: false, position2: false, position3: true, position4: false, score: 0},
    {id: 20, sittingTime: 2, sharing: false, height: 6, breathable: 3, padding: 2, armrests: 1, position1: true, position2: true, position3: false, position4: true, score: 0},
    {id: 21, sittingTime: 3, sharing: true, height: 1, breathable: 2, padding: 4, armrests: 3, position1: false, position2: false, position3: true, position4: false, score: 0},
    {id: 22, sittingTime: 1, sharing: false, height: 4, breathable: 1, padding: 1, armrests: 2, position1: true, position2: false, position3: true, position4: true, score: 0},
    {id: 23, sittingTime: 2, sharing: true, height: 3, breathable: 2, padding: 2, armrests: 3, position1: false, position2: true, position3: false, position4: true, score: 0},
    {id: 24, sittingTime: 3, sharing: false, height: 5, breathable: 3, padding: 4, armrests: 1, position1: true, position2: false, position3: true, position4: false, score: 0},
    {id: 25, sittingTime: 1, sharing: true, height: 2, breathable: 1, padding: 2, armrests: 2, position1: false, position2: true, position3: false, position4: true, score: 0},
    {id: 26, sittingTime: 2, sharing: false, height: 6, breathable: 3, padding: 3, armrests: 3, position1: true, position2: false, position3: true, position4: false, score: 0},
    {id: 27, sittingTime: 3, sharing: true, height: 1, breathable: 2, padding: 1, armrests: 2, position1: false, position2: true, position3: false, position4: false, score: 0},
    {id: 28, sittingTime: 1, sharing: false, height: 4, breathable: 3, padding: 4, armrests: 1, position1: true, position2: false, position3: true, position4: true, score: 0},
    {id: 29, sittingTime: 2, sharing: true, height: 5, breathable: 2, padding: 2, armrests: 3, position1: false, position2: true, position3: false, position4: true, score: 0}
];

//Voorkeuren variabelen aanmaken
const userPrefrences = {
    sittingTime: null,
    sharing: null,
    height: null,
    position1: false,
    position2: false,
    position3: false,
    position4: false,
    breathable: null,
    padding: null,
    armrests: null
}

function loadFromLocalStorage() {
    const savedPrefs = localStorage.getItem("userPrefrences");
    const savedChairs = localStorage.getItem("chairData");

    if (savedPrefs) {
        Object.assign(userPrefrences, JSON.parse(savedPrefs));
    }
    if (savedChairs) {
        const parsedChairs = JSON.parse(savedChairs);
        // bestaande chairData updaten i.p.v. nieuwe array maken
        for (let i = 0; i < chairData.length; i++) {
            Object.assign(chairData[i], parsedChairs[i]);
        }
    }
    console.log("Data geladen uit localStorage");
}

function sortChairs(){
    chairData.sort((a, b) => b.score - a.score);
    console.log('Chairs sorted within data array'); 
}

function orderResultsList(){
    for (let i = 0; i < chairData.length; i++) {
        chairs[chairData[i].id].className = "result"+(i);
    }
    console.log('Chairs sorted'); 
}

function addMatchPercentage(){
    for (let i = 0; i < chairData.length; i++) {
        // matchPercentage = (chairData[i].score / )
    }
}

window.addEventListener("load", () => {
  loadFromLocalStorage();
  orderResultsList();
});