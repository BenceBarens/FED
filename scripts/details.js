//Close button
document.querySelector('#backbutton').addEventListener('click', () => {
    history.back();
})

const id = Number(window.location.search.split('=')[1]);    

const chairNames = [
    {id: 0, name:"Soft Pad Chair EA 219"},
    {id: 1, name:".04"},
    {id: 2, name:"Grand Executive"},
    {id: 3, name:"ID Cloud"},
    {id: 4, name:"HAL Ply Studio"},
    {id: 5, name:"Soft Pad"},
    {id: 6, name:"ID Mesh"},
    {id: 7, name:"Lobby Chair ES 104"},
    {id: 8, name:"Mynt upholstery four-star"},
    {id: 9, name:"ACX Mesh"},
    {id: 10, name:"Mikado Armchair five-star"},
    {id: 11, name:"ID Trim"},
    {id: 12, name:"Allstar"},
    {id: 13, name:"HAL Armchair Studio"},
    {id: 14, name:"Eames PSCC"},
    {id: 15, name:"Soft Pad Chair EA 231"},
    {id: 16, name:"Aluminium Chair EA 118"},
    {id: 17, name:"Direction Pivotant"},
    {id: 18, name:"ACX Soft"},
    {id: 19, name:"Mynt Plywood four-star"},
    {id: 20, name:"Rookie"},
    {id: 21, name:"ID Soft"},
    {id: 22, name:"Softshell Chair"},
    {id: 23, name:"ACX Light"},
    {id: 24, name:"Aluminium Chair EA 131_TS"},
    {id: 25, name:"Aluminium Chair EA 119"},
    {id: 26, name:"Mikado Side Chair four-star"},
    {id: 27, name:"Aluminium Chair EA 132_TS"},
    {id: 28, name:"ID Trim L"},
    {id: 29, name:"Physix"}
];


document.querySelector("h1").textContent = chairNames[id].name;

const img = document.querySelector("img");
img.src = `../../images/chairs/${id + 1}.webp`;
img.alt = chairNames[id].name + " front";