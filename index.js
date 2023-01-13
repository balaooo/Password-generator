const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let passwordLength = 12;

function getRandomCharacters() {
    let randomNumber = Math.floor(Math.random() * characters.length); //Choose a random number in the length of characters list
    return characters[randomNumber]; //return the vaule of correspond character to the number
};


function generatePassword () {
    let password = " ";
    for (let i = 0; i < passwordLength; i++) {
        password += getRandomCharacters()
    }
    return password
}


generator.addEventListener("click", function(){
    result1.textContent = generatePassword ();
    result2.textContent = generatePassword ();
});



// Click and copy
let copyIcon = document.getElementById("copy-icon");


function clickCopy() {
    const range = document.createRange();
    // 將指定元素內容加到 Range 中
    const texts = document.querySelectorAll('.copy-result');
    range.selectNode(texts);
    // 取得 Selection 物件
    const selection = window.getSelection();
    // 先清空當前選取範圍
    selection.removeAllRanges();
    // 加入 Range 
    selection.addRange(range);
    
    document.execCommand('copy');
    selection.removeAllRanges();
};

copyIcon.addEventListener("click", function copyPassword() {
    // var copyResult = document.getElementById("copy-result");
    // navigator.clipboard.writeText(copyResult);
   clickCopy();
});




