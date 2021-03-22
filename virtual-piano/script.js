const COLLECTION = document.querySelectorAll(".piano-key");
const PIANO = document.getElementById("piano");


const startCorrespondOver = (event) =>{
    if (event.target.classList.contains("piano-key")){
        console.log(event.target.classList.contains("piano-key"));
   /* event.target.classList.toggle("piano-key");*/
    event.target.classList.add('activated');
    console.log(event.target);
    }
    COLLECTION.forEach((elem) => {
        elem.addEventListener("mouseover", startSound)
        elem.addEventListener("mouseout", stopSound)

    })
}

const stopCorrespondOver = () =>{
    COLLECTION.forEach((elem) => {
        console.log(elem);
        elem.classList.remove("activated");
        elem.removeEventListener("mouseover", startSound)
        elem.removeEventListener("mouseout", stopSound)

    })
}

const startSound = (event) => {
    event.target.classList.add("activated");
    switch (event.target.getAttribute('data-letter')) {
        case "D":
           playSound("do");
          break;
          case "R":
           playSound("do#");
          break;
          case "F":
            playSound("re");
          break;
          case "T":
           playSound("mi");
          break;
          case "G":
           playSound("mi#");
          break;
          case "H":
            playSound("fa");
          break;
          case "U":
            playSound("fa#");
          break;
          case "J":
            playSound("sol");
          break;
          case "I":
            playSound("lya");
          break;
          case "K":
            playSound("lya#");
          break;
          case "O":
            playSound("si");
          break;
          case "L":
           playSound("si#");
          break;
        }
}

const stopSound = (event) => {
    event.target.classList.remove("activated");
}


/*
COLLECTION.forEach((elem) =>{
    elem.addEventListener("mousedown",(event)=>{
        event.target.classList.add("active");
    })
    elem.addEventListener("mouseup",(event)=>{
        event.target.classList.remove("active");
    })
})
*/

/*
PIANO.addEventListener("mouseover",(event)=>{
    event.target.classList.add("active");
})

PIANO.addEventListener("mouseout",(event)=>{
    event.target.classList.remove("active");
})
*/

PIANO.addEventListener("mousedown",startCorrespondOver, false);
PIANO.addEventListener("mouseup", stopCorrespondOver);

COLLECTION.forEach((elem) => {
    console.log("abc");
    console.log(elem);
    let i = elem.getAttribute('data-letter');
    console.log(i);
})


 function playSound(e) {
           
    const audio = document.querySelector(`audio[data-key="${e}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();  
}
/*
//рабочий вариант
    COLLECTION.forEach((elem) => {
        elem.addEventListener("click", ()=>playSound("do"))
        })
*/


COLLECTION.forEach((elem) => {
switch (elem.getAttribute('data-letter')) {
    case "D":
        elem.addEventListener("click", ()=>playSound("do"));
      break;
      case "R":
        elem.addEventListener("click", ()=>playSound("do#"));
      break;
      case "F":
        elem.addEventListener("click", ()=>playSound("re"));
      break;
      case "T":
        elem.addEventListener("click", ()=>playSound("mi"));
      break;
      case "G":
        elem.addEventListener("click", ()=>playSound("mi#"));
      break;
      case "H":
        elem.addEventListener("click", ()=>playSound("fa"));
      break;
      case "U":
        elem.addEventListener("click", ()=>playSound("fa#"));
      break;
      case "J":
        elem.addEventListener("click", ()=>playSound("sol"));
      break;
      case "I":
        elem.addEventListener("click", ()=>playSound("lya"));
      break;
      case "K":
        elem.addEventListener("click", ()=>playSound("lya#"));
      break;
      case "O":
        elem.addEventListener("click", ()=>playSound("si"));
      break;
      case "L":
        elem.addEventListener("click", ()=>playSound("si#"));
      break;
    }
})

/*
 function clav(event) {
    if (event.code == 'KeyD') {
        console.log("abcccc");
        ()=>(playSound("do"));

        COLLECTION.forEach((elem) => {
            if(elem.getAttribute('data-letter')=='D')
            {
                startCorrespondOver;
            }
        })
    }  
    }

PIANO.addEventListener("keydown",clav(event));
PIANO.addEventListener("keyup", stopCorrespondOver);
*/
document.addEventListener('keydown', function(event){
    console.log('Строковый код: ', event.code);
    console.log('ASCII код: ', event.charCode);
  /*  if (event.code == 'KeyD') {
        playSound("do");
       
    }*/
    switch (event.code) {
        case "KeyD":
            playSound("do");
            document.querySelector("[data-letter='D']").classList.add("activated");
            document.addEventListener('keyup', function(event){
                document.querySelector("[data-letter='D']").classList.remove("activated");
            })
          break;
          case "KeyR":
            playSound("do#");
            document.querySelector("[data-letter='R']").classList.add("activated");
            document.addEventListener('keyup', function(event){
                document.querySelector("[data-letter='R']").classList.remove("activated");
            })
          break;
          case "KeyF":
            playSound("re");
            document.querySelector("[data-letter='F']").classList.add("activated");
            document.addEventListener('keyup', function(event){
                document.querySelector("[data-letter='F']").classList.remove("activated");
            })
          break;
          case "KeyT":
            playSound("mi");
            document.querySelector("[data-letter='T']").classList.add("activated");
            document.addEventListener('keyup', function(event){
                document.querySelector("[data-letter='T']").classList.remove("activated");
            })
          break;
          case "KeyG":
            playSound("mi#");
            document.querySelector("[data-letter='G']").classList.add("activated");
            document.addEventListener('keyup', function(event){
                document.querySelector("[data-letter='G']").classList.remove("activated");
            })
          break;
          case "KeyH":
            playSound("fa");
            document.querySelector("[data-letter='H']").classList.add("activated");
            document.addEventListener('keyup', function(event){
                document.querySelector("[data-letter='H']").classList.remove("activated");
            })
          break;
          case "KeyU":
            playSound("fa#");
            document.querySelector("[data-letter='U']").classList.add("activated");
            document.addEventListener('keyup', function(event){
                document.querySelector("[data-letter='U']").classList.remove("activated");
            })
          break;
          case "KeyJ":
            playSound("sol");
            document.querySelector("[data-letter='J']").classList.add("activated");
            document.addEventListener('keyup', function(event){
                document.querySelector("[data-letter='J']").classList.remove("activated");
            })
          break;
          case "KeyI":
            playSound("lya");
            document.querySelector("[data-letter='I']").classList.add("activated");
            document.addEventListener('keyup', function(event){
                document.querySelector("[data-letter='I']").classList.remove("activated");
            })
          break;
          case "KeyK":
            playSound("lya#");
            document.querySelector("[data-letter='K']").classList.add("activated");
            document.addEventListener('keyup', function(event){
                document.querySelector("[data-letter='K']").classList.remove("activated");
            })
          break;
          case "KeyO":
            playSound("si");
            document.querySelector("[data-letter='O']").classList.add("activated");
            document.addEventListener('keyup', function(event){
                document.querySelector("[data-letter='O']").classList.remove("activated");
            })
          break;
          case "KeyL":
            playSound("si#");
            document.querySelector("[data-letter='L']").classList.add("activated");
            document.addEventListener('keyup', function(event){
                document.querySelector("[data-letter='L']").classList.remove("activated");
            })
          break;
    }
});
/*
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  const FULLSCREEEN = document.getElementById("fullscreen");
  FULLSCREEEN.addEventListener("click", toggleFullScreen());
*/

var elem = document.documentElement;

/* Просмотр в полноэкранном режиме */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

const button=document.getElementById('button');
button.addEventListener("click", openFullscreen);
/* Закрыть полный экран */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

button.addEventListener("click", closeFullscreen);
/*
noteButton=document.getElementById("btn-notes");
letterButton=document.getElementById("btn-letters");
noteButton.addEventListener('click', swithcNotesLetters);
letterButton.addEventListener('click', swithcNotesLetters);
const swithcNotesLetters = (event) => {
    noteButton.classList.toggle('btn-active');
    letterButton.classList.toggle("btn-active");
    }
    */

var buttonnn = document.querySelectorAll(".btn");
for(let i=0; i<buttonnn.length; i++){
buttonnn[i].addEventListener('click', addActivate)
}
function addActivate() {

event.target.classList.toggle('btn-active');
}

/*
for(let i=0; i<buttonnn.length; i++){
    
    buttonnn[i].addEventListener('click', addActivate)
    }
    
    function addActivate() {
        buttonnn[i].classList.toggle('activated');
    } 

*/

/*
        COLLECTION.forEach((elem) => {
            elem.addEventListener("click", new Audio("assets/audio/a.mp3").play())
            })
*/
        /*
        COLLECTION.forEach((elem) => {
            elem.addEventListener("click", document.querySelector(`audio[data-key="1"]`).play())
            })

        


*/