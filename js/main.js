"use strict";

//Array immagini
let imagesArray = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

//Seleziono container img
const items = document.querySelector(".items");
//Ciclo array img
for(let i = 0; i < imagesArray.length; i++)
{
    const srcImg = imagesArray[i];
    console.log(srcImg);

    const item = `
    <div class="item">
        <img src="${srcImg}" alt="">
    </div>
    `;

    items.innerHTML = items.innerHTML + item;
}
