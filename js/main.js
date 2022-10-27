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

    let cssClass = "item";
    if(i === 0){
        cssClass += "active";
    }


    const item = `
    <div class="item">
        <img src="${srcImg}" alt="">
    </div>
    `;

    items.innerHTML = items.innerHTML + item;
    items.innerHTML += item;

    document.querySelector(".next-btn").addEventListener("click", function(){

        const itemActive = document.querySelector(".item.active");
        const nextItem = itemActive.nextElementSibling;
        itemActive.classList.remove("active");
        if(nextItem !== null){
            nextItem.classList.add("active");
        }
        else{
            document.querySelector(".item").classList.add("active");
        }
    });
}
