'use strict'

let gImgs = createImgs();
let gCurrMeme
let gKeyWords;
var gFilterBy;

var gMeme = {
    selectedImgId: getFromStorage('image'),
    selectedTxtIdx: 0,
    txts: [
        {
            line: 'I never eat Falafel',
            txtStyle: 'Ariel',
            size: 80,
            align: 'left',
            color: 'red',
            posX: 200,
            posY: 60,
        },
        {
            line: 'text2 ',
            txtStyle: 'Ariel',
            size: 80,
            align: 'left',
            color: 'blue',
            // posX: canvas.width - 150,
            // posY: canvas.height - 150,
        },
        {
            line: 'text3',
            txtStyle: 'Ariel',
            size: 80,
            align: 'left',
            color: 'red',
            // posX: canvas.width - 75,
            // posY: canvas.height - 75,
        }
    ]
}

function createImgs() {
    return [
        { id: 1, url: "img/1.jpg", keywords: ['crazy'] },
        { id: 2, url: "img/2.jpg", keywords: ['dancing', 'nature'] },
        { id: 3, url: "img/3.jpg", keywords: ['trump'] },
        { id: 4, url: "img/4.jpg", keywords: ['dogs'] },
        { id: 5, url: "img/5.jpg", keywords: ['baby'] },
        { id: 6, url: "img/6.jpg", keywords: ['cats'] },
        { id: 7, url: "img/7.jpg", keywords: ['baby', 'dogs'] },
        { id: 8, url: "img/8.jpg", keywords: ['actor'] },
        { id: 9, url: "img/9.jpg", keywords: ['baby'] },
        { id: 10, url: "img/10.jpg", keywords: ['actor'] },
    ]
}

function changeText(text) {
    gMeme.txts[gMeme.selectedTxtIdx].line = text;
}

function getCurrImg() {
    return gImgs[gMeme.selectedImgId - 1];
}

function getImage(currId) {
    saveToStorage('image', currId)
    window.open("editor.html", "_self");


}

function createKeyWords() {
    gKeyWords = {
        'crazy': 1,
        'dancing': 1,
        'nature': 1,
        'trump': 1,
        'dogs': 2,
        'baby': 3,
        'cats': 1,
        'actor': 2,
    }

}

function getKeyWords() {
    return gKeyWords;
}

function setFilter(txt) {
    gFilterBy = txt;
}
function getImgsForDisplay() {
    if (!gFilterBy) return gImgs;
    var myRe = new RegExp('^' + `${gFilterBy}`, 'i');
    var filterImages = gImgs.filter(function (img) {
        return myRe.exec(img.keywords);
    })
    return filterImages;
}



