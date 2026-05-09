let boxes=document.querySelectorAll(".box");
let turnX=true;
let resetbtn=document.querySelector(".reset");
let newGame=document.querySelector(".new-game");
let modebtn=document.querySelector(".mode");


winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnX){
      box.innerText="X";
      turnX=false;
    } else {
      box.innerText="O"
      turnX=true;
    }
    box.disabled=true;
    checkWinner();
  })
})


let checkWinner=()=>{
  for (let pattern of winPatterns){
    let val1= boxes[pattern[0]].innerText;//boxes is an array of buttons, here boxes[1] means the second button.
    let val2= boxes[pattern[1]].innerText;
    let val3= boxes[pattern[2]].innerText;

    if (val1!="" && val2!="" && val3!=1){
      if(val1===val2 && val2===val3){
        document.querySelector(".winner").classList.remove("hide");
        document.querySelector(".winner").innerText=`Player${val1} Wins!`;
        for (box of boxes){
          box.disabled=true;
        }
      }
    }


  }
}

const resetGame =()=>{
  for (box of boxes){
    box.disabled=false;
    box.innerText="";
    turnX=true;
    document.querySelector(".winner").classList.add("hide");
  }
}

resetbtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);
