//Ders bitmeden paylaş aklındakini

//Spring + Java + REST APİ  (Backend)   + SECURİTY + JWT
//Elementleri Seçmek

const leftTextArea = document.querySelector("#leftTextArea");
const rightTextArea = document.querySelector("#rightTextArea");
const encodeButton = document.querySelector("#encodeButton");
const decodeButton = document.querySelector("#decodeButton");
const cleanButton = document.querySelector("#cleanButton");


runEventListeners();

function runEventListeners(){
    encodeButton.addEventListener("click",encode);
    decodeButton.addEventListener("click", decode);
    cleanButton.addEventListener("click", clean);
}


function encode(){
    if(leftTextArea.value==""){
        alert("Lütfen bir şifre giriniz.");
        return;
    }
    rightTextArea.value = btoa(leftTextArea.value);
    leftTextArea.value="";
}

function decode(){
   leftTextArea.value =  atob(rightTextArea.value);
   rightTextArea.value="";
}

function clean(){
    leftTextArea.value="";
    rightTextArea.value="";
}