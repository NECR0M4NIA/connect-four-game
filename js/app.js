const $gridCells = document.querySelectorAll(".grid-cell")

let gameBoard = [
    []
]

$gridCells.forEach(function($gridCell) {
    $gridCell.addEventListener("click", function() {
        console.log("===")
        console.log($gridCell.getAttribute("data-x"))
        console.log($gridCell.getAttribute("data-y"))
    })
})
