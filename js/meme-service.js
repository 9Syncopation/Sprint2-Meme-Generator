'use strict'

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
console.log('gmeme curent:', gMeme['txts'][0].line);

function initMem() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d')
    let currId = getFromStorage('image')
    drawImgInCanvas(currId)
    console.log(currId, 'currId');

}


console.log('line meme',gMeme['txts'].line);



function drawText() {

     let txt = document.getElementById('name').value
    // let txt = gMeme['txts'][0].line
    gCtx.fillStyle = "black";
    gCtx.textBaseline = 'middle';
    gCtx.font = "50px 'Montserrat'";
    gCtx.fillText(txt, 100, 100);
}

function onAddLine(){
    if(gMeme.selectedTxtIdx > 0){
        
    }



}