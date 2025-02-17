const $gameScreen = document.querySelectorAll(".game-board")
const $gridCells = document.querySelectorAll(".grid-cell")
const $gameRulesContainer = document.querySelectorAll(".game-rules-container")
const $gameRulesBtn = document.querySelector("#accept-rules-btn")
const $rulesBtn = document.querySelector("#rules-btn")
const $cpuBtn = document.querySelector("#cpu-btn")
const $playerBtn = document.querySelector("#player-btn")
const $restartBtn = document.querySelector(".restart-btn")
const $gameMenuContainer = document.querySelector(".game-menu-container")
const $menuBlock = document.querySelector(".menu-block")
const $body = document.querySelector("body")

console.log($restartBtn)

const red = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Oval Copy 43" filter="url(#filter0_i_5_6369)">
<circle cx="32" cy="32" r="32" fill="#FF0000"/>
</g>
<defs>
<filter id="filter0_i_5_6369" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_5_6369"/>
</filter>
</defs>
</svg>
`

const yellow = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Oval Copy 35" filter="url(#filter0_i_5_6365)">
<circle cx="32" cy="32" r="32" fill="#FFF000"/>
</g>
<defs>
<filter id="filter0_i_5_6365" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_5_6365"/>
</filter>
</defs>
</svg>
`

let gameBoard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
]

let currentPlayer = "r"

function checkWin() {
    // Check horizontal
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (gameBoard[i][j] === gameBoard[i][j + 1] && gameBoard[i][j] === gameBoard[i][j + 2] && gameBoard[i][j] === gameBoard[i][j + 3] && gameBoard[i][j] !== "") {
                return true
            }
        }
    }
    // Check vertical
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            if (gameBoard[i][j] === gameBoard[i + 1][j] && gameBoard[i][j] === gameBoard[i + 2][j] && gameBoard[i][j] === gameBoard[i + 3][j] && gameBoard[i][j] !== "") {
                return true
            }
        }
    }
    // Check diagonal (top-left to bottom-right)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (gameBoard[i][j] === gameBoard[i + 1][j + 1] && gameBoard[i][j] === gameBoard[i + 2][j + 2] && gameBoard[i][j] === gameBoard[i + 3][j + 3] && gameBoard[i][j] !== "") {
                return true
            }
        }
    }
    // Check diagonal (top-right to bottom-left)
    for (let i = 0; i < 3; i++) {
        for (let j = 3; j < 7; j++) {
            if (gameBoard[i][j] === gameBoard[i + 1][j - 1] && gameBoard[i][j] === gameBoard[i + 2][j - 2] && gameBoard[i][j] === gameBoard[i + 3][j - 3] && gameBoard[i][j] !== "") {
                return true
            }
        }
    }
    return false
}

$gameMenuContainer.classList.remove("hidden")

$cpuBtn.addEventListener("click", function () {
    alert("Not avaible yet")
})

$playerBtn.addEventListener("click", function () {
    $playerBtn.classList.add("hidden")
    $gameScreen.forEach(function (gameScreen) {
        $gameMenuContainer.classList.add("hidden")
        gameScreen.classList.remove("hidden")
        gameScreen.style.animation = "menu 650ms ease-in-out forwards"
    })
})

$rulesBtn.addEventListener("click", function () {
    $gameRulesContainer.forEach(function (rules) {
        rules.classList.remove("hidden")
        rules.style.animation = "menu 650ms ease-in-out forwards"
    })
    $gameMenuContainer.classList.add("hidden")
})

$gameRulesBtn.addEventListener("click", function () {
    $gameRulesContainer.forEach(function ($gameRules) {
        $gameRules.classList.add("hidden")
    })
    $gameMenuContainer.classList.remove("hidden")
})

$restartBtn.addEventListener("click", function () {
    gameBoard = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ]
    $gridCells.forEach(cell => cell.innerHTML = "")
    currentPlayer = "r"
})

$gameScreen.forEach(function (gameScreen) {
    gameScreen.classList.add("hidden")
})

$gameRulesContainer.forEach(function ($gameRules) {
    $gameRules.classList.add("hidden")
})

$gridCells.forEach(function ($gridCell) {
    $gridCell.addEventListener("click", function () {
        if ($gridCell.hasChildNodes()) {

        } else {
            const dataX = $gridCell.getAttribute("data-x")

            for (let i = 5; i >= 0; i--) {
                if (gameBoard[i][dataX] === "") {
                    console.log("C'est vide");

                    gameBoard[i][dataX] = currentPlayer
                    const $selectedCell = document.querySelector(`.grid-cell[data-x="${dataX}"][data-y="${i}"]`)

                    if (currentPlayer === "r") {
                        $selectedCell.innerHTML = red
                        currentPlayer = "y"
                    } else {
                        $selectedCell.innerHTML = yellow
                        currentPlayer = "r"
                    }

                    if (checkWin()) {
                        const winner = currentPlayer === "r" ? "Yellow" : "Red"
                        setTimeout(() => {
                            alert(`${winner}`)
                            $restartBtn.click()
                        }, 100)
                    }

                    return
                } else {
                    console.log("C'est pas vide");
                }
            }
        }
    })
})