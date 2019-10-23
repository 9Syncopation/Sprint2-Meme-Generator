'use strict'


function initMem() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d')
    let currId = getFromStorage('image')
    drawImgInCanvas(currId)
    console.log(currId, 'currId');

}




function drawText() {
    let txt = document.getElementById('name').value

    gCtx.fillStyle = "black";
    gCtx.textBaseline = 'middle';
    gCtx.font = "50px 'Montserrat'";
    gCtx.fillText(txt, 100, 100);
}