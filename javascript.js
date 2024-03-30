const timeDisplay = document.getElementById("time-remaining");
const resultDisplay = document.getElementById("result");
const buttonStart = document.getElementById("start");
const logsLeft=document.querySelectorAll(".log-left");
const logsRight=document.querySelectorAll(".log-right");
const carsLeft=document.querySelectorAll(".car-left");
const carsRight=document.querySelectorAll(".car-right");
// get all blocks 
const allBlocks = document.querySelectorAll("#canvas div");
//current position of frog
let currentPosition=0;
let startingPosition=0;
let noOfBlock=9;
let interval;


// move frog on press keyboard arrow keys
function moveFrog(event){
    
    if (event.key == "ArrowLeft"){
      if(currentPosition % noOfBlock!==0){
        allBlocks[currentPosition].classList.remove("frog");
        currentPosition-=1;
        allBlocks[currentPosition].classList.add("frog");
      }
    
    } else if (event.key == "ArrowUp"){
  
       if(currentPosition-noOfBlock >= 0){

        allBlocks[currentPosition].classList.remove("frog");
        currentPosition-=9;
        console.log("Position",currentPosition);
        allBlocks[currentPosition].classList.add("frog");
       }
    
    } else if (event.key == "ArrowRight"){
       
       
        if(currentPosition % noOfBlock<noOfBlock-1){
            allBlocks[currentPosition].classList.remove("frog");
        currentPosition+=1;
        console.log("current position",currentPosition);
        allBlocks[currentPosition].classList.add("frog");
        }
     
    } else if (event.key == "ArrowDown"){
      if(currentPosition+noOfBlock <noOfBlock*noOfBlock){
        allBlocks[currentPosition].classList.remove("frog");
        currentPosition+=9;
        allBlocks[currentPosition].classList.add("frog");
      }
    }

}
document.addEventListener("keydown", moveFrog);

function autoMoveElements(){
  logsLeft.forEach(logleft => moveLeftLogs(logleft));
  logsRight.forEach(logright => moveRightLogs(logright));
  carsLeft.forEach(carleft => moveLeftCars(carleft));
  carsRight.forEach(carright => moveRightCars(carright));
  collision();

}

      // Move logs towards left
function moveLeftLogs(logleft){
switch(true){
case logleft.classList.contains("l1"):
logleft.classList.remove("l1");
logleft.classList.add("l2");
break;

case logleft.classList.contains("l2"):
logleft.classList.remove("l2");
logleft.classList.add("l3");
break;

case logleft.classList.contains("l3"):
logleft.classList.remove("l3");
logleft.classList.add("l4");
break;
case logleft.classList.contains("l4"):
logleft.classList.remove("l4");
logleft.classList.add("l5");
break;
case logleft.classList.contains("l5"):
logleft.classList.remove("l5");
logleft.classList.add("l1");
break;
}
}

    //  move logs towards right
      function moveRightLogs(logright){
      switch(true){
      case logright.classList.contains("l1"):
      logright.classList.remove("l1");
      logright.classList.add("l5");
      break;
      
      case logright.classList.contains("l2"):
      logright.classList.remove("l2");
      logright.classList.add("l1");
      break;
      
      case logright.classList.contains("l3"):
      logright.classList.remove("l3");
      logright.classList.add("l2");
      break;
      case logright.classList.contains("l4"):
      logright.classList.remove("l4");
      logright.classList.add("l3");
      break;
      case logright.classList.contains("l5"):
      logright.classList.remove("l5");
      logright.classList.add("l4");
      break;
      }
      }
      
// Move cars towards left
  function moveLeftCars(carleft){
  switch(true){
  case carleft.classList.contains("c1"):
  carleft.classList.remove("c1");
  carleft.classList.add("c2");
  break;
  
  case carleft.classList.contains("c2"):
  carleft.classList.remove("c2");
  carleft.classList.add("c3");
  break;
  
  case carleft.classList.contains("c3"):
  carleft.classList.remove("c3");
  carleft.classList.add("c1");
  break;
  }
  }
 
// Move cars towards right
  function moveRightCars(carright){
  switch(true){
  case carright.classList.contains("c2"):
  carright.classList.remove("c2");
  carright.classList.add("c1");
  break;
  
  case carright.classList.contains("c1"):
  carright.classList.remove("c1");
  carright.classList.add("c3");
  break;
  
  case carright.classList.contains("c3"):
  carright.classList.remove("c3");
  carright.classList.add("c2");
  break;
  }
  }
  interval=setInterval(autoMoveElements,1000);

//check for collision

function collision(){

if(allBlocks[currentPosition].classList.contains("c1") || allBlocks[currentPosition].classList.contains("c2") ||
 allBlocks[currentPosition].classList.contains("c3") || allBlocks[currentPosition].classList.contains("l4") || 
  allBlocks[currentPosition].classList.contains("l5")){
  clearInterval(interval);
  allBlocks[currentPosition].classList.remove("frog");
  document.removeEventListener("keydown", moveFrog);

}

      
      }
      








