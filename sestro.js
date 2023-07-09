let translate = document.querySelector(".press-on-the-text-to-translate")
console.dir(translate)
let translated = false
translate.onclick = function () {
    if(translated){
      revertText1();
      revertText2();
      revertText3();
      revertText4();
    }else{
      replays1();
      replays2();
      replays3();
      replays4();
    }
    translated = !translated;

}

function replays1() {
    let text1 = document.querySelector("._30")
    text1.innerHTML = "Care information for alt-leather products: <br /> ♡ hand wash only (temperature 30°) <br /> ♡ laying flat to dry <br /> ♡ no ironing"
}
function revertText1() {
    let text1 = document.querySelector("._30")
    text1.innerHTML = "Догляд за виробами зі штучної шкіри: <br /> ♡ тільки ручне прання за необхідності (температура 30°)<br />♡ сушити в розкладеному вигляді <br />♡ не прасувати"
}

function replays2() {
    let text2 = document.querySelector("._30-800-150")
    text2.innerHTML = "Care information for linen products: <br /> ♡ hand wash or machine wash warm (temperature 40°) <br /> ♡ iron medium heat (150°)"
}
function revertText2() {
    let text2 = document.querySelector("._30-800-150")
    text2.innerHTML = "Догляд за виробами з льону: <br /> ♡ прання вручну або в пральній машинці в делікатному режимі (температура 30°, 800 обертів віджим)<br />♡ прасування на середніх температурах (150°)"
}


function replays3() {
    let text3 = document.querySelector("._30-800-110")
    text3.innerHTML = "Care information for satin products: <br /> ♡ hand wash or machine wash <br /> (temperature 30°) <br /> ♡ iron low heat (110°)" 
}


function revertText3() {
    let text3 = document.querySelector("._30-800-110")
    text3.innerHTML = "Догляд за виробами зі штучного шовку: <br /> ♡ прання вручну або в пральній машинці в делікатному режимі (температура 30°, 800 обертів віджим)<br />♡ прасування парою або звичайною праскою на низьких температурах (110°)"
}


function replays4() {
    translate.innerHTML = "Натисни, щоб перекласти"

}
function revertText4(){
  translate.innerHTML = "Press to translate"
}