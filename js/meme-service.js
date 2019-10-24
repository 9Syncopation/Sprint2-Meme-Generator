'use strict'


let gCurrTxt = 0


// console.log('gmeme curent:', gMeme['txts'][0].line);

function initMem() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d')
    // let currId = getFromStorage('image')
    drawImgInCanvas()
    // console.log(currId, 'currId');

}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function getSelectedTxtIdx() {
    return gMeme.selectedTxtIdx;
}


// console.log('line meme',gMeme['txts'].line);

function onChangeText() {
    let txt = document.getElementById('name').value
    changeText(txt)
    renderCanvas()
}

function changeText(txt) {
    // debugger;
    // let selectedTxtIdx = getSelctedTxtIdx();
    let currTxt = gCurrTxt
    //  console.log('drawtxt',txt.color);
    gMeme.txts[currTxt].line = txt;
    // // let txt = gMeme['txts'][0].line
    // gCtx.fillStyle = txt.color;
    // gCtx.textBaseline = 'middle';
    // gCtx.txtStyle = txt.txtStyle
    // gCtx.font = `100px impact`;
    // gCtx.fillText(txt, 100, 100);

}

function onChangeFontSize(size) {
    changeFontSize(size);
    renderCanvas();
}

function changeFontSize(size) {
    let diffSize;
    if (size === 1) diffSize = 1
    else diffSize = -1
    // let selectedTxtIdx = getSelctedTxtIdx();
    let currTxt = gCurrTxt
    gMeme.txts[currTxt].size += diffSize;

}

function onChangePos(pos) {
    changePos(pos);
    renderCanvas();
}

function changePos(pos) {
    let diffY = 3;
    if (pos === 'up') gMeme.txts[gCurrTxt].posY -= diffY;
    else gMeme.txts[gCurrTxt].posY += diffY;

}




function renderCanvas() {

    let txt = gMeme.txts[gMeme.selectedTxtIdx].line;
    document.querySelector('.controls__input').value = txt;
    let memeTxt = getMeme().txts;
    memeTxt.map(txt => {
        gCtx.textAlign = txt.align;
        gCtx.fillStyle = txt.color;
        gCtx.font = txt.size + 'px ' + txt.txtStyle;


        gCtx.fillText(txt.line, txt.posX, txt.posY);
    })

}

function getMeme() {
    return gMeme;
}

function onAddLine(ev) {


    clearInput(ev)
    let txt = document.getElementById('.control_input').value
    addLine(txt)
    renderCanvas();

}

function clearInput() {
    let elTtx = document.querySelector('.controls__input');
    elTtx.value = '';

}

function onEditTxtColor() {
    let elColor = document.querySelector('#font-color')
    // debugger;
    editTxtColor(elColor);
    renderCanvas()
}

function editTxtColor(color) {

    gMeme.txts[gCurrTxt].color = color
    console.log('color', color);

}


function onEditTxtStyle(ev) {
    editTxtStyle(ev);
    renderCanvas()
}

function editTxtStyle(value) {

    gMeme.txts[gCurrTxt].txtStyle = value

}

function addLine(txt) {
    if (getSelctedTxtIdx() === 2) return;
    gMeme.selectedTxtIdx += 1;
    let y;

    if (getSelctedTxtIdx() === 1) {

        y = gCanvas.height - 20;

    }
    if (getSelctedTxtIdx() === 2) {
        y = gCanvas.height / 2;

    }
    addTxt(txt, 20, y);
}

function onSaveMeme() {
    saveMemeToStorage();
    document.querySelector('#download-link').href = gElCanvas.toDataURL();
}