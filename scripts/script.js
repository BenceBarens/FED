// JavaScript Document
console.log("hi");

function toggle(){
    console.log('Toggle circle'); 
    document.querySelector('.chairlist').classList.add('circle');

    for (let i = 1; i <= 30; i++) {
        const el = document.getElementById(`chair-${i}`);
        if (el) {
        el.classList.add(`position${i}`);
        }
    }
}