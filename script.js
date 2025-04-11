let reset = document.getElementById("reset");
let boxes = document.querySelectorAll(".button");
let result = document.querySelector(".result");
let playerX = 1;
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (playerX === 1) {
            box.innerHTML = "X";
            playerX = 0;
        }
        else {
            box.innerHTML = "O";
            playerX = 1;
        }
        box.disabled = true;
        winner();
    });
});

reset.addEventListener("click", () => {
    location.reload();
});

const winner = () => {
    let isWinner = false;

    for (let pattern of win) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 == val2 && val2 == val3) {
                result.innerHTML = "Congratulations!! Player " + val1 + " Won";
                isWinner = true;
                boxes.forEach(box => box.disabled = true);
                break;
            }
        }
    }

    if (!isWinner) {
        let fill = true;
        boxes.forEach(box => {
            if (box.innerText === "") {
                fill = false;
            }
        });
        if (fill) {
            result.innerHTML = "It's a Draw!";
        }
    }
}