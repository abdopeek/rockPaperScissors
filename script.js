let choices = ["Rock", "Paper", "Scissors"]
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length())]
}
computerChoice()