let boxes = document.querySelectorAll(" .box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-button");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#first");

let turn = true;  // true = O, false = X

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () =>{
    turn = true;
    enableledbox();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
            checkwiner();
    });
});

const disabledbox = () =>{
    for (let box of boxes){
        box.disabled = true
    }
};

const enableledbox = () =>{
    for (let box of boxes){
        box.disabled = false
        box.innerText = "";
    }
};

const showwinner = (Winner) =>{
    msg.innerText = `Congratulation , Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disabledbox();
};

const checkwiner = () => {
for (let pattern of win) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner", pos1);
                showwinner(pos1);
            }
        }
    }
};
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame)