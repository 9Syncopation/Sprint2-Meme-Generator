'use strict'

let gCanvas
let gCtx

function init() {

    renderImgs();
    createKeyWords();
    renderKeyWords()


}


function renderImgs() {
    var imgs = getImgsForDisplay();
    // debugger;
    let elImgGallery = document.querySelector('.gallery')
    let strHtml = ''
    imgs.map(function (currImg) {
        strHtml += `<img src="${currImg.url}" id="${currImg.id}"  onclick="getImage('${currImg.id}')"></img>`
    })

    elImgGallery.innerHTML = strHtml

}

function drawImgInCanvas() {


    const currImg = getCurrImg();
    let img = new Image()
    img.src = currImg.url;
    img.onload = () => {

        gCanvas.width = img.width;
        gCanvas.height = img.height;
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }


}

function renderKeyWords() {
    let currKeyWords = getKeyWords();
    let strHtml = ''
    for (let currKey in currKeyWords) {
        let currValue = currKeyWords[currKey];
        let wordSize = currValue * 15 + 'px';
        strHtml += `<li  onclick="onFilterByKeyWord('${currKey}')" style="font-size:${wordSize}">${currKey}</li>`
    }
    document.querySelector('.key-words').innerHTML = strHtml
}

function onFilterByKeyWord(txt) {
    setFilter(txt);
    renderImgs();
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}