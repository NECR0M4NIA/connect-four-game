const $gridCells = document.querySelectorAll(".grid-cell")

let gameBoard = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23],
]

$gridCells.forEach(function($gridCell) {
    $gridCell.addEventListener("click", function() {
        console.log("===")
        console.log($gridCell.getAttribute("data-x"))
        console.log($gridCell.getAttribute("data-y"))
    })
})
