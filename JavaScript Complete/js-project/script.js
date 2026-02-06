let box = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset");

let turno = true;

let arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

box.forEach((boxes) => {
    boxes.addEventListener("click", () => {

        if (turno) {
            boxes.innerText = "O";
            turno = false;
        } else {
            boxes.innerText = "X";
            turno = true;
        }
reset.addEventListener("click",() =>{
 
})
        boxes.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of arr) {

        let val1 = box[pattern[0]].innerText;
        let val2 = box[pattern[1]].innerText;
        let val3 = box[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                console.log("Winner is", val1);
            }
        }
    }
};

reset.addEventListener("click",() =>{
   box.forEach((boxes)=>{
    boxes.innerText="";
    boxes.disabled=false;
   });
   turno=true;
});
