'use strict'

let gImgs = createImgs();
let gCurrMeme 
console.log(gImgs);


var gMeme = {
    selectedImgId: 5,
    selectedTxtIdx: 0,
    txts: [
        {
            line: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}
console.log('gmeme curent:', gMeme);


function createImgs() {
    return [
        { id: 1, url: "img/1.jpg", keywords: ['crazy'] },
        { id: 2, url: "img/2.jpg", keywords: ['dancing', 'nature'] },
        { id: 3, url: "img/3.jpg", keywords: ['trump'] },
        { id: 4, url: "img/4.jpg", keywords: ['dogs'] },
        { id: 5, url: "img/5.jpg", keywords: ['baby'] },
        { id: 6, url: "img/6.jpg", keywords: ['cat'] },
        { id: 7, url: "img/7.jpg", keywords: ['baby', 'dog'] },
        { id: 8, url: "img/8.jpg", keywords: ['actor'] },
        { id: 9, url: "img/9.jpg", keywords: ['baby'] },
        { id: 10, url: "img/10.jpg", keywords: ['actor'] },
    ]
}

function getImage(currId) {

    saveToStorage('image',currId)
    window.open("memepanel.html","_self");

//   gCurrMeme[selectedImgId] = currId

    // console.log('gcurrmeme',gCurrMeme);
   
    // drawImgInCanvas(currId)
}
