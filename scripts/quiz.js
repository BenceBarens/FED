const chairs = [];
//zet chairs in array
for (let i = 1; i <= 30; i++) {
    chairs.push(document.getElementById(`chair-${i}`));
}

const chairData = [
    //Random eigenschappen voor alle 30 stoelen
    {id: 0, sittingTime: 3, sharing: false, height: 1.45, breathable: 2, padding: 2, armrests: 1, position1: false, position2: true, position3: false, position4: false, score: 0},
    {id: 1, sittingTime: 2, sharing: true, height: 1.55, breathable: 2, padding: 3, armrests: 1, position1: true, position2: false, position3: true, position4: true, score: 0},
    {id: 2, sittingTime: 1, sharing: true, height: 1.55, breathable: 1, padding: 1, armrests: 2, position1: false, position2: true, position3: true, position4: true, score: 0},
    {id: 3, sittingTime: 3, sharing: true, height: 1.75, breathable: 2, padding: 2, armrests: 1, position1: false, position2: false, position3: false, position4: true, score: 0},
    {id: 4, sittingTime: 1, sharing: false, height: 1.95, breathable: 1, padding: 4, armrests: 3, position1: false, position2: false, position3: true, position4: false, score: 0},
    {id: 5, sittingTime: 2, sharing: false, height: 1.65, breathable: 3, padding: 4, armrests: 1, position1: true, position2: false, position3: true, position4: true, score: 0},
    {id: 6, sittingTime: 3, sharing: true, height: 1.45, breathable: 2, padding: 2, armrests: 2, position1: false, position2: true, position3: false, position4: false, score: 0},
    {id: 7, sittingTime: 1, sharing: true, height: 1.95, breathable: 1, padding: 3, armrests: 1, position1: true, position2: true, position3: false, position4: true, score: 0},
    {id: 8, sittingTime: 3, sharing: false, height: 1.45, breathable: 3, padding: 1, armrests: 1, position1: false, position2: false, position3: true, position4: false, score: 0},
    {id: 9, sittingTime: 2, sharing: true, height: 1.65, breathable: 2, padding: 4, armrests: 2, position1: true, position2: false, position3: true, position4: false, score: 0},
    {id: 10, sittingTime: 1, sharing: false, height: 1.95, breathable: 1, padding: 2, armrests: 2, position1: false, position2: true, position3: false, position4: true, score: 0},
    {id: 11, sittingTime: 2, sharing: true, height: 1.65, breathable: 3, padding: 4, armrests: 1, position1: true, position2: false, position3: false, position4: false, score: 0},
    {id: 12, sittingTime: 3, sharing: false, height: 1.65, breathable: 2, padding: 3, armrests: 1, position1: true, position2: true, position3: false, position4: true, score: 0},
    {id: 13, sittingTime: 1, sharing: true, height: 1.75, breathable: 3, padding: 4, armrests: 2, position1: false, position2: true, position3: true, position4: false, score: 0},
    {id: 14, sittingTime: 2, sharing: false, height: 1.75, breathable: 1, padding: 3, armrests: 2, position1: true, position2: false, position3: true, position4: true, score: 0},
    {id: 15, sittingTime: 3, sharing: true, height: 1.95, breathable: 2, padding: 4, armrests: 1, position1: false, position2: true, position3: false, position4: true, score: 0},
    {id: 16, sittingTime: 1, sharing: false, height: 1.45, breathable: 1, padding: 2, armrests: 2, position1: true, position2: false, position3: false, position4: false, score: 0},
    {id: 17, sittingTime: 2, sharing: true, height: 1.95, breathable: 3, padding: 1, armrests: 1, position1: false, position2: true, position3: true, position4: true, score: 0},
    {id: 18, sittingTime: 3, sharing: false, height: 1.45, breathable: 2, padding: 4, armrests: 1, position1: true, position2: false, position3: false, position4: true, score: 0},
    {id: 19, sittingTime: 1, sharing: true, height: 1.85, breathable: 1, padding: 3, armrests: 2, position1: false, position2: false, position3: true, position4: false, score: 0},
    {id: 20, sittingTime: 2, sharing: false, height: 1.75, breathable: 3, padding: 2, armrests: 3, position1: true, position2: true, position3: false, position4: true, score: 0},
    {id: 21, sittingTime: 3, sharing: true, height: 1.75, breathable: 2, padding: 4, armrests: 1, position1: false, position2: false, position3: true, position4: false, score: 0},
    {id: 22, sittingTime: 1, sharing: false, height: 1.45, breathable: 1, padding: 1, armrests: 2, position1: true, position2: false, position3: true, position4: true, score: 0},
    {id: 23, sittingTime: 2, sharing: true, height: 1.45, breathable: 2, padding: 2, armrests: 1, position1: false, position2: true, position3: false, position4: true, score: 0},
    {id: 24, sittingTime: 3, sharing: false, height: 1.45, breathable: 3, padding: 4, armrests: 1, position1: true, position2: false, position3: true, position4: false, score: 0},
    {id: 25, sittingTime: 1, sharing: true, height: 1.85, breathable: 1, padding: 2, armrests: 2, position1: false, position2: true, position3: false, position4: true, score: 0},
    {id: 26, sittingTime: 2, sharing: false, height: 1.55, breathable: 3, padding: 3, armrests: 3, position1: true, position2: false, position3: true, position4: false, score: 0},
    {id: 27, sittingTime: 3, sharing: true, height: 1.85, breathable: 2, padding: 1, armrests: 2, position1: false, position2: true, position3: false, position4: false, score: 0},
    {id: 28, sittingTime: 1, sharing: false, height: 1.65, breathable: 3, padding: 4, armrests: 1, position1: true, position2: false, position3: true, position4: true, score: 0},
    {id: 29, sittingTime: 2, sharing: true, height: 1.65, breathable: 2, padding: 2, armrests: 2, position1: false, position2: true, position3: false, position4: true, score: 0}
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

        const score = Math.max(0, 15 - (diff / maxDiff) * 15);

        chairData[i].score += score;
        }
    }
    //Sharing (true/false)
    if (userPrefrences.sharing !== null) {
        for (let i = 0; i < chairData.length; i++) {
            if (chairData[i].sharing == true && userPrefrences.sharing == true) {
                chairData[i].score += 21;
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

        const score = Math.max(0, 15 - (diff / maxDiff) * 15);

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

        const score = Math.max(0, 15 - (diff / maxDiff) * 15);

        chairData[i].score += score;
        }
    }
    //Padding (1-4)
    if (userPrefrences.padding !== null) {
        const maxValue = 4; // hoogste mogelijke padding
        const maxDiff = maxValue - 1; // max mogelijke verschil

        for (let i = 0; i < chairData.length; i++) {
        const diff = Math.abs(chairData[i].padding - userPrefrences.padding);

        const score = Math.max(0, 15 - (diff / maxDiff) * 15);

        chairData[i].score += score;
        }
    }
    //Armrests (1, 2 OR 3)
    if (userPrefrences.armrests !== null) {
        for (let i = 0; i < chairData.length; i++) {
            if (userPrefrences.armrests == 1) {
                if(chairData[i].armrests == 1){chairData[i].score += 23;}
                if(chairData[i].armrests == 2){chairData[i].score += 22;}
            }
            if (userPrefrences.armrests == 2) {
                if(chairData[i].armrests == 1){chairData[i].score += 22;}
                if(chairData[i].armrests == 2){chairData[i].score += 23;}
            }
            if (userPrefrences.armrests == 3) {
                if(chairData[i].armrests == 3){chairData[i].score += 22;}
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
const inputBreathability = document.querySelectorAll('input[name="breathability"]');
const inputPadding = document.querySelector('input[name="padding"]');
const inputArmrests = document.querySelectorAll('input[name="armrests"]');

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
    console.log("User preference height:", userPrefrences.height);
    moveChairsToCurrentPosition();
});

inputPosition1.addEventListener('change', () => {
    userPrefrences.position1 = inputPosition1.checked;
    console.log("Position 1 status:", userPrefrences.position1);
    moveChairsToCurrentPosition();
});

inputPosition2.addEventListener('change', () => {
    userPrefrences.position2 = inputPosition2.checked;
    console.log("Position 2 status:", userPrefrences.position2);
    moveChairsToCurrentPosition();
});

inputPosition3.addEventListener('change', () => {
    userPrefrences.position3 = inputPosition3.checked;
    console.log("Position 3 status:", userPrefrences.position3);
    moveChairsToCurrentPosition();
});

inputPosition4.addEventListener('change', () => {
    userPrefrences.position4 = inputPosition4.checked;
    console.log("Position 4 status:", userPrefrences.position4);
    moveChairsToCurrentPosition();
});

inputBreathability.forEach(radio => {
    radio.addEventListener('change', event => {
        userPrefrences.breathable = event.target.value;
        console.log("User preference breathability:", userPrefrences.breathable);
        moveChairsToCurrentPosition();
    });
});

inputPadding.addEventListener('change', event => {
    userPrefrences.padding = event.target.value;
    console.log("User preference padding:", userPrefrences.padding);
    moveChairsToCurrentPosition();
});

inputArmrests.forEach(radio => {
    radio.addEventListener('change', event => {
        userPrefrences.armrests = event.target.value;
        console.log("User preference armrests:", userPrefrences.armrests);
        moveChairsToCurrentPosition();
    });
});

//Local storage ----------------------------------

function saveToLocalStorage(){
    localStorage.clear();
    localStorage.setItem("userPrefrences", JSON.stringify(userPrefrences));
    localStorage.setItem("chairData", JSON.stringify(chairData));
    console.log("Data saved to localStorage");
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
        moveChairsToCurrentPosition();
    }
    console.log("Data geladen uit localStorage");
}

window.addEventListener('beforeunload', () => {
    saveToLocalStorage();
});

//Vorige voorkeuren inladen
window.addEventListener("load", () => {

    loadFromLocalStorage();
    if (localStorage.getItem("userPrefrences")) {

        if (userPrefrences.sittingTime) {
            const input = document.querySelector(
                `input[name="sittingTime"][value="${userPrefrences.sittingTime}"]`
            );
            if (input) input.checked = true;
        }

        if (userPrefrences.sharing) {
            const input = document.querySelector(
                `input[name="sharing"][value="${userPrefrences.sharing}"]`
            );
            if (input) input.checked = true;
        }

        if (userPrefrences.height) {
            const range = document.querySelector('input[name="height"]');
            range.value = userPrefrences.height;
        }

        if (userPrefrences.position1 !== null) {
            const cb = document.querySelector('input[name="position1"]');
            if (cb) cb.checked = userPrefrences.position1;
        }
        if (userPrefrences.position2 !== null) {
            const cb = document.querySelector('input[name="position2"]');
            if (cb) cb.checked = userPrefrences.position2;
        }
        if (userPrefrences.position3 !== null) {
            const cb = document.querySelector('input[name="position3"]');
            if (cb) cb.checked = userPrefrences.position3;
        }
        if (userPrefrences.position4 !== null) {
            const cb = document.querySelector('input[name="position4"]');
            if (cb) cb.checked = userPrefrences.position4;
        }

        if (userPrefrences.breathable) {
            const input = document.querySelector(
                `input[name="breathability"][value="${userPrefrences.breathable}"]`
            );
            if (input) input.checked = true;
        }

        if (userPrefrences.padding) {
            const range = document.querySelector('input[name="padding"]');
            range.value = userPrefrences.padding;
        }

        if (userPrefrences.armrests) {
            const input = document.querySelector(
                `input[name="armrests"][value="${userPrefrences.armrests}"]`
            );
            if (input) input.checked = true;
        }

        moveChairsToCurrentPosition();
    }

});