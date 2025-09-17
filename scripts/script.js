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

function deactiveGrid(){
    console.log('Toggle circle'); 
    document.querySelector('.chairlist').classList.add('circle');

    for (let i = 0; i <= 29; i++) {
        const el = chairs[i];
        if (el) {
        el.className = `position${i}`;
        }
    }
}

function setChairScore() {
    //Clear alle scores
    for (let i = 0; i < chairData.length; i++) {
        chairData[i].score = 0;
    }
    //Sitting time (1-3)
    if (userPrefrences.sittingTime !== null) {
        const maxValue = 3; // hoogste mogelijke sittingTime
        const maxDiff = maxValue - 1; // max mogelijke verschil

        for (let i = 0; i < chairData.length; i++) {
        const diff = Math.abs(chairData[i].sittingTime - userPrefrences.sittingTime);

        const score = Math.max(0, 10 - (diff / maxDiff) * 10);

        chairData[i].score += score;
        }
    }
    //Sharing (true/false)
    if (userPrefrences.sharing !== null) {
        for (let i = 0; i < chairData.length; i++) {
            if (chairData[i].sharing == true && userPrefrences.sharing == true) {
                chairData[i].score += 100;
            } else {
                chairData[i].score += 0;
            }
        }
    }
    //Height (1-6)
    if (userPrefrences.height !== null) {
        const maxValue = 6; // hoogste mogelijke height
        const maxDiff = maxValue - 1; // max mogelijke verschil

        for (let i = 0; i < chairData.length; i++) {
        const diff = Math.abs(chairData[i].height - userPrefrences.height);

        const score = Math.max(0, 10 - (diff / maxDiff) * 10);

        chairData[i].score += score;
        }
    }
    //Position (true/false)
    for (let i = 0; i < chairData.length; i++) {
        if (userPrefrences.position1 == true && chairData[i].position1 == true) {
            chairData[i].score += 5;
        }
        if (userPrefrences.position2 == true && chairData[i].position2 == true) {
            chairData[i].score += 5;
        }
        if (userPrefrences.position3 == true && chairData[i].position3 == true) {
            chairData[i].score += 5;
        }
        if (userPrefrences.position4 == true && chairData[i].position4 == true) {
            chairData[i].score += 5;
        }
    }
    //Breathable (1-3)
    if (userPrefrences.breathable !== null) {
        const maxValue = 3; // hoogste mogelijke breathable
        const maxDiff = maxValue - 1; // max mogelijke verschil

        for (let i = 0; i < chairData.length; i++) {
        const diff = Math.abs(chairData[i].breathable - userPrefrences.breathable);

        const score = Math.max(0, 10 - (diff / maxDiff) * 10);

        chairData[i].score += score;
        }
    }
    //Padding (1-4)
    if (userPrefrences.padding !== null) {
        const maxValue = 4; // hoogste mogelijke padding
        const maxDiff = maxValue - 1; // max mogelijke verschil

        for (let i = 0; i < chairData.length; i++) {
        const diff = Math.abs(chairData[i].padding - userPrefrences.padding);

        const score = Math.max(0, 10 - (diff / maxDiff) * 10);

        chairData[i].score += score;
        }
    }
    //Armrests (1, 2 OR 3)
    if (userPrefrences.armrests !== null) {
        for (let i = 0; i < chairData.length; i++) {
            if (userPrefrences.armrests == chairData[i].armrests) {
                chairData[i].score += 1000;
            }
        }
    }
    console.log('Chair scores updated'); 
}

function sortChairs(){
    chairData.sort((a, b) => b.score - a.score);
    console.log('Chairs sorted within data array'); 
}

function moveChairsToCurrentPosition(){
    setChairScore();
    sortChairs();
    deactiveGrid();
    for (let i = 0; i < chairData.length; i++) {
        chairs[chairData[i].id].className = "position"+(i);
    }
    console.log('Chairs moved'); 
}

const inputSittingTime = document.querySelectorAll('input[name="sittingTime"]');
const inputSharing = document.querySelectorAll('input[name="sharing"]');
const inputHeight = document.querySelector('input[name="height"]');
const inputPosition1 =  document.querySelector('input[name="position1"]');
const inputPosition2 =  document.querySelector('input[name="position2"]');
const inputPosition3 =  document.querySelector('input[name="position3"]');
const inputPosition4 =  document.querySelector('input[name="position4"]');

inputSittingTime.forEach(radio => {
    radio.addEventListener('change', event => {
        userPrefrences.sittingTime = event.target.value;
        console.log("User prefrence sitting time:", event.target.value);
        moveChairsToCurrentPosition();
    });
});

inputSharing.forEach(radio => {
    radio.addEventListener('change', event => {
        userPrefrences.sharing = (event.target.value === "true");
        console.log("User preference sharing:", userPrefrences.sharing);
        moveChairsToCurrentPosition();
    });
});

inputHeight.addEventListener('change', event => {
    userPrefrences.height = event.target.value;
    console.log("User preference height:", userPrefrences.sharing);
    moveChairsToCurrentPosition();
});