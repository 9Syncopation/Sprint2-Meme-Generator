'use strict'

let gCanvas
let gCtx 

function init(){
    // gCanvas = document.querySelector('#canvas');
    // gCtx = gCanvas.getContext('2d')
    renderImgs();
    // console.log(gCanvas);
    // console.log(gCtx);
    
}

function renderImgs(){
// debugger;
    let elImgGallery = document.querySelector('.gallery')
    let strHtml =''
    gImgs.map( function(currImg){
        strHtml +=`<img src="${currImg.url}" id="${currImg.id}"  onclick="getImage('${currImg.id}')"></img>`
    })
    
    elImgGallery.innerHTML=strHtml
    
}

function drawImgInCanvas(currId){
    console.log(currId);
    /// TODo find the right index
    // let imgIndx = gImgs.findIndex(function(element){
    //     return element.id === currId
    // })
    // console.log(imgIndx);
    
    const imgId = gImgs[currId].url
   
    let img = new Image()
    img.src = imgId
   
    // console.log(typeof(img));
    
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

}

 
